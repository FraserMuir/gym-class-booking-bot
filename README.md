# gym-class-booking-bot
A bot for booking classes at the gym

## Authentication
username: gaby.muir@btinternet.com
password: Gabygym33

## Classes
Classes get released exactly one week before classes, so classes for Mon 13th, get released Mon 6th 00:00
Zumba Monday 10:30
Zumba Friday 18:15

## Cron run-times
Every Monday at 00:01
Every Friday at 00:01

## Steps
visit: https://members.liveargyll.co.uk/
click "Log In": data-bs-target="#loginModal"
focus email input: id="member-email"
focus password input: id="member-password"
click submit button: type="submit"
navigate to: https://members.liveargyll.co.uk/members-area/book/
click: button with id: "day-tab-7"
click: "fw-bold" with text "Zumba"
click: "Book Now" data-class-id="11060"
