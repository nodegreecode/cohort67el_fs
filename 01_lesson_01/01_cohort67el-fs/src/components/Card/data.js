
export const homerSimpson = {
    firstName: 'Homer',
    lastName: 'Simpson',
    avatar: '/the-simpson.jpg',
    occupation: 'safety inspector',
    hobbies: ["traveling","reading"],
}

export const getHobbiesAsString = ()=> homerSimpson.hobbies.join(", ");