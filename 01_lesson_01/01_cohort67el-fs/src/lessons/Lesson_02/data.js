function sum() {
    return 2 + 3;
}

const animal = {
    type: "Tiger",
    fullName: "Marti",
    age: 10,
    color: "Orange Striped",
    isPlanteater: false,
    avatarURL:
        "https://files.worldwildlife.org/wwfcmsprod/images/Tiger_resting_Bandhavgarh_National_Park_India/hero_small/6aofsvaglm_Medium_WW226365.jpg",
};

const getFoodStatus = (isPlanteater) => {
    if (isPlanteater) {
        return "Yes";
    } else {
        return "No";
    }
}

export {sum, animal, getFoodStatus};