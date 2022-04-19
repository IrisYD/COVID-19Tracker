const getCurrentUserProfile = () => fetch('/me').then(res => res.json());

const updateCurrentUserProfile = (newProfile) =>
    fetch('/profile_update', {
      method: 'POST',
      body: JSON.stringify(newProfile),
      headers: {
        'content-type': 'application/json'
      },
    }).then(res => res.json());

const profileServices = {
  getCurrentUserProfile,
  updateCurrentUserProfile,
};

export default profileServices;