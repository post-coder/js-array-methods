const businessCards = [
    {
        fullname: "Wayne Barnett",
        position:"Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },
    {
        fullname: "Angela Caroll",
        position:"Chief Editor",
        image: "angela-caroll-chief-editor.jpg"
    },
    {
        fullname: "Walter Gordon",
        position:"Office Manager",
        image: "walter-gordon-office-manager.jpg"
    },
    {
        fullname: "Angela Lopez",
        position:"Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg"
    },
    {
        fullname: "Scott Estrada",
        position:"Developer",
        image: "scott-estrada-developer.jpg"
    },
    {
        fullname: "Barbara Ramos",
        position:"Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"
    },

];


const listElement = document.querySelector("ul");

businessCards.forEach(function (actualMember, index) {
    
    console.log(index, actualMember.fullname)

    const newElement = document.createElement("li");
    newElement.innerText = actualMember.fullname;
    listElement.append(newElement)
    
})