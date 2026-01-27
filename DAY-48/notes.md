   //[data-key="key jo press kri hogi"]
   data attributes --> data-key



<!-- topic 1 -->
   ⭐ 1) type="range"

👉 Iska matlab:

Ye ek slider hai.
Jaisa mobile me volume slider hota hai.

⭐ 2) min="0"

👉 Minimum value of slider = 0

Volume 0 = Mute

⭐ 3) max="1"

👉 Maximum value = 1

Volume 1 = Full volume

⚠️ Audio volume in JS always goes 0 → 1
Not 0 → 100

⭐ 4) value="0.5"

👉 Slider ki starting position = 0.5

0.5 = 50% volume

Jab page load hota hai, slider middle me dikhega.

⭐ 5) step="any"

👉 User slider ko continuous smooth move kar sakta hai.

Example:

without step → slider jumps

with step="any" → smooth sliding

Smooth = 0.01, 0.001, 0.5321, anything.

⭐ FINAL SIMPLE EXPLANATION (Hinglish)
Attribute	Meaning
type="range"	Slider banao
min="0"	lowest value = mute
max="1"	highest value = full volume
value="0.5"	start me half volume
step="any"	slider smooth chale
⭐ 1 LINE SUMMARY

Yeh slider bana raha hai jisse user 0 (mute) se 1 (full volume) tak smooth way me volume adjust kar sakta hai.
<!-- Topic 2 -->
STEP–1: audio.volume
👉 “audio” kya hai?

Tumne pehle banaya:

let audio = new Audio("tunes/a.wav");


Iska matlab:

audio = ek music player object

Ye object sound ko play/pause, volume, src sab control karta hai.

👉 “volume” kya hai?

audio.volume sound ki loudness hoti hai.

✔ Minimum: 0
✔ Maximum: 1

Examples:

audio.volume = 0 → mute

audio.volume = 1 → full volume

audio.volume = 0.5 → medium



<!-- Topic 3 -->

