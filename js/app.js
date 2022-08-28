(function (global) {
    const elements = {
        body: document.body,
        button: document.querySelector('#settings button'),
        startAtInput: document.querySelector(`#settings [name="startAt"]`),
        textInput: document.querySelector(`#settings [name="text"]`),

        logo: document.querySelector(`#countdown-container img#logo`),
        countdown: document.querySelector(`#countdown-container #countdown`),
        text: document.querySelector(`#countdown-container span#start-text`),
    };

    let diff = 0;

    const switcher_class = 'running';
    const updateCountdownText = (timestamp) => {
        const minute = Math.floor(timestamp / 60);
        const second = timestamp - minute * 60;
        elements.countdown.textContent = `${String(minute).padStart(2, '0')}:${String(second).padStart(2, '0')}`;
    };

    elements.button.onclick = () => {
        elements.body.classList.toggle(switcher_class);
        const now = Math.floor(Date.now() / 1000);
        const target = Math.floor(new Date(new Date().toISOString().substring(0, 10) + ' ' + elements.startAtInput.value + ':00').getTime() / 1000);
        if (diff < 0) { return alert('Target is in past'); }
        diff = target - now; s
        elements.text.textContent = elements.textInput.value;
        updateCountdownText(diff + 1);

        const intervalId = window.setInterval(() => {
            updateCountdownText(diff);
            if (diff === 0) { clearInterval(intervalId); }
            diff--;
        }, 1000)
    };
})(window);