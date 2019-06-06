export const firebasConfig = {
    apiKey: "AIzaSyCfLjXqE_NUoTBvJdAfYH4DXDr2EPBuTVY",
    authDomain: "pitstop-7ed2e.firebaseapp.com",
    databaseURL: "pitstop-7ed2e.firebaseio.com",
    projectId: "pitstop-7ed2e",
    storageBucket: "pitstop-7ed2e.appspot.com",
    messagingSenderId: "530569454384"
};

// var firebasConfig = {
//     apiKey: "AIzaSyAyB8zH3SaWup0b8DGrXmfqqSVDvNL4_6M",
//     authDomain: "pitstop-7ed2e.firebaseapp.com",
//     databaseURL: "https://pitstop-7ed2e.firebaseio.com",
//     projectId: "pitstop-7ed2e",
//     storageBucket: "pitstop-7ed2e.appspot.com",
//     messagingSenderId: "530569454384",
//     appId: "1:530569454384:web:621d433c9ef96518"
// };

export const datasnapshotToArray = snapshot => {
    let returnArray = [];
    snapshot.forEach(element => {
        let item = element.val();
        item.key = element.key;
        returnArray.push(item)
    });
    return returnArray;
};
