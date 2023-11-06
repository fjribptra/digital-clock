const hrs = document.getElementById('hrs')
const mnt = document.getElementById('mnt')
const sec = document.getElementById('sec')


setInterval(function() {
    const currentTime = new Date()
    hrs.textContent = (currentTime.getHours()<10?"0":"") + currentTime.getHours()
    mnt.textContent = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes()
    sec.textContent = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds()
}, 1000)