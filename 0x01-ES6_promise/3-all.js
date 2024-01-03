import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let str = '';

  const userObjPromise = createUser();
  const photoPromise = uploadPhoto();

  // Using Promise.all to wait for both promises to resolve
  return Promise.all([userObjPromise, photoPromise])
    .then(([userObj, photo]) => {
      str += `${photo.body} `;
      str += `${userObj.firstName} `;
      str += `${userObj.lastName}`;

      console.log(str);
    })
    .catch((error) => {
      console.error('Error:', error.message);
    });
}
