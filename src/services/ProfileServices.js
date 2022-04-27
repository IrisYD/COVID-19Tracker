import axiosHttpCommon from './axios-http-common';

const getCurrentUserProfile = () => fetch('/me').then(res => res.json());

const updateCurrentUserProfile = (newProfile) => {
  let formData = new FormData();
  for (const [key, value] of Object.entries(newProfile)) {
    console.log(`${key}: ${value}`);
    formData.append(`${key}`, value);
  }
  // formData.append('location', newProfile.location);
  // formData.append('age', newProfile.age);
  // formData.append('vaccineStatus', newProfile.vaccineStatus);
  // formData.append('vaccineBrand', newProfile.vaccineBrand);
  // formData.append('file', newProfile.file);
  return axiosHttpCommon.post(
      '/profile_update',
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true
      }
  ).then(res => res.data);
}

    // fetch('/profile_update', {
    //   method: 'PUT',
    //   body: JSON.stringify(newProfile),
    //   headers: {
    //     'content-type': 'application/json'
    //   },
    // }).then(res => res.json());

const profileServices = {
  getCurrentUserProfile,
  updateCurrentUserProfile,
};

export default profileServices;