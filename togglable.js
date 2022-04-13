

const toggle = (id) => {
    const togglable = sQS("#"+id);
    if (togglable) {
        const content = togglable.querySelector(".togglablContent")
        if (content.style.display == "none") {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }

    } else {
        console.log("There was a misinput.")
    }
}