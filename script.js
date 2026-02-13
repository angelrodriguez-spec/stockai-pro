function animateValue(element, start, end, duration) {
    let startTime = null;
    function animation(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        element.innerHTML = "$" + (start + progress * (end - start)).toFixed(2);
        if (progress < 1) requestAnimationFrame(animation);
    }
    requestAnimationFrame(animation);
}
