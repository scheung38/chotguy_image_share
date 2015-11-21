if (Meteor.isClient) {
    var img_data = [
        {
            img_src: "CMS_Creative_164657191_Kingfisher.jpg",
            img_alt: "Some birds flying."
        },
        {
            img_src: "cute-german-shepherd-puppy-new-wide-wallpapers-in-hd-widescreen.jpg",
            img_alt: "Some German Shephards."
        },
        {
            img_src: "pugs.jpeg",
            img_alt: "Some pugs."
        }

    ];

    Template.images_template.helpers({images:img_data});

    Template.images_template.events({
        'click .js-image': function (event) {
            alert('hello!!');
            console.log(event);
            $(event.target).css("width", "50px");
        }
    });

    console.log("I am the client");
}

if (Meteor.isServer) {
    console.log("I am the server");
}
