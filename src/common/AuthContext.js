// import React, { createContext, useContext, useState, useEffect } from "react";
// import axios from "axios";
// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const BaseUrl = process.env.REACT_APP_BASE_URL;

//   const [token, setToken] = useState(null);
//   const [userId, setUserId] = useState(null);
//   const [userImage, setUserImage] = useState(null);
//   const [userName, setUserName] = useState(null);
//   const [userBio, setUserBio] = useState(null);
//   const [myConferenceId, setMyConferenceId] = useState(null);
//   const [conferenceUserId, setConferenceUserId] = useState(null);
//   const [myConferenceName, setMyConferenceName] = useState(null);
//   const [registrationType, setRegistrationType] = useState(null);
//   const [isAdmin, setIsAdmin] = useState(null);
//   const [speakerData, setSpeakerData] = useState(null);
//   const [attendancesData, setAttendancesData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const savedToken = localStorage.getItem("token");
//     if (savedToken) {
//       setToken(savedToken);
//       fetchUserData(savedToken);
//       fetchCurentConference(savedToken);
//     } else {
//       setLoading(false);
//     }
//   }, []);

//   // const fetchSpeakerData = async (authToken) => {
//   //   try {
//   //     const response = await axios.get(`${BaseUrl}/speakers/info/16`, {
//   //       headers: {
//   //         Authorization: `Bearer ${authToken}`,
//   //       },
//   //     });

//   //     setSpeakerData(response.data);
//   //   } catch (error) {
//   //     console.error("Failed to fetch speaker data:", error);
//   //   }
//   // };

//   // const fetchAttendancesData = async (authToken) => {
//   //   try {
//   //     const response = await axios.get(`${BaseUrl}/attendances`, {
//   //       headers: {
//   //         Authorization: `Bearer ${authToken}`,
//   //       },
//   //     });
//   //     setAttendancesData(response.data);
//   //   } catch (error) {
//   //     console.error("Failed to fetch speaker data:", error);
//   //   }
//   // };

//   const fetchCurentConference = async (authToken) => {
//     try {
//       const response = await axios.get(`${BaseUrl}/conference-user/id/1`, {
//         headers: {
//           Authorization: `Bearer ${authToken}`,
//         },
//       });

//       const userData = response?.data?.data;

//       setMyConferenceId(userData?.[0]?.conference_id || null);
//       setConferenceUserId(userData?.[0]?.conference_user_id || null);
//       setMyConferenceName(userData?.[0]?.conference_name || null);
//     } catch (error) {}
//   };

//   const fetchUserData = async (authToken) => {
//     try {
//       const response = await axios.get(`${BaseUrl}/user`, {
//         headers: {
//           Authorization: `Bearer ${authToken}`,
//         },
//       });

//       const userData = response.data.user;
//       // TODO HEDAYA
//       // if (userData?.registration_type === "speaker") {
//       //   await fetchSpeakerData(authToken);
//       // } else if (userData?.registration_type === "attendance") {
//       //   fetchAttendancesData(authToken);
//       // }
//       console.log({ userData });
//       setUserBio(userData.biography)
//       setUserName(userData.name);
//       setUserId(userData.id);
//       setUserImage(userData.image);
//       setRegistrationType(userData?.registration_type);
//       setIsAdmin(userData?.isAdmin);
//       setLoading(false);
//     } catch (error) {
//       console.error("Failed to fetch user data:", error);
//       setLoading(false);
//     }
//   };

//   const login = (newToken) => {
//     setToken(newToken);
//     localStorage.setItem("token", newToken);
//     fetchUserData(newToken);
//   };

//   const logout = () => {
//     setToken(null);
//     setUserId(null);
//     setUserImage(null);
//     setMyConferenceId(null);
//     setMyConferenceName(null);
//     setRegistrationType(null);
//     setIsAdmin(null);
//     setSpeakerData(null); // Clear speaker data on logout
//     localStorage.removeItem("token");
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <AuthContext.Provider
//       value={{
//         token,
//         userId,
//         userImage,
//         myConferenceId,
//         myConferenceName,
//         registrationType,
//         isAdmin,
//         speakerData,
//         attendancesData,
//         conferenceUserId,
//         userName,
//         userBio,
//         logout,
//         login,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
