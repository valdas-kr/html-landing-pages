function ShowAlert() {
    const from = document.getElementById('from-input').value;
    const to = document.getElementById('to-input').value;
    const since = document.getElementById('since-input').value;
    const until = document.getElementById('until-input').value;
    alert(`You search for: \nTravel from ${from} to ${to}; \nTravel date ${since} - ${until}`);
}