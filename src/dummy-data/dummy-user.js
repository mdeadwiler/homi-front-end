export const dummyUser = {
  username: "johndoe",
  first_name: "John",
  last_name: "Doe",
  email: "johndoe@example.com",
  is_active: true,
};

export const dummyProfile = {
  user: dummyUser.username, // Reference to the user (can be a reference object in your DB)
  profile_pic: "https://randomuser.me/api/portraits/men/10.jpg", // Example profile picture URL
  bio: "Hello, I'm John Doe! I love coding and learning new technologies.",
  is_host: true,
  profits: 1234.56, // Example profit amount
};
