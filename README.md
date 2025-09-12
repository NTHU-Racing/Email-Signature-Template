# NTHU Racing Email Signature Template
The primary focus of this project is the image embedded in the email signature, which requires a publicly accessible URL to display correctly. To achieve this, we utilize GitHub Pages for hosting.

## Steps to Create Your Email Signature
1. Open the GitHub Pages of this project. `https://nthu-racing.github.io/Email-Signature-Template/index.html`

2. Press `F12` to open develop mode.
![Step 2](<img_readme/step 2.png>)

3. Using `element selection tool` to locate the desired text.
![step 3](<img_readme/step 3.png>)
![step 3_zoom](<img_readme/step 3_zoom.png>)

4. Click the name on the webpage. The tool will locate the corresponding code section for you. Then double click to change the name on the develop window.
![step 4](<img_readme/step 4.png>)

5. Change the `English name`, `group`, `phone number` and `email address` using the same method.
![step 5](<img_readme/step 5.png>)

    1. English name format: `Kuan-Yu Chen` or `David Chen`.

    2. Choose your Group from the list:
        |Title|  Group Name |
        |:--:|:--:|
        |Team Captain|Aerodynamic Group|
        |Vice Captain|Administration|
        |Technical Director|Chassis Group|
        |Leader of `Electrical` Group|Driverless Group|
        |Treasurer|Drivetrain Group|
        |Public Relations|Electrical Group|
        ||Suspension Group|
        ||Vehicle Dynamics Group|
        
6. Open Gmail and click `settings`.
![step 6](<img_readme/step 6.png>)

7. Scroll down to the signature setting. And `Create New Signature` (`建立新簽名`).
![step 7](<img_readme/step 7.png>)

8. Enter year and name.
![step 8](<img_readme/step 8.png>)

9. Copy paste the `index.html`.
![step 9](<img_readme/step 9.png>)
![step 9-1](<img_readme/step 9-1.png>)

10. Scroll to the bottom and Save.
![step 10](<img_readme/step 10.png>)

## Change The Logo
1. Clone the project to your computer.
2. Resize the new logo to `133 x 79 pixels` and make sure that the background is transparent.
3. Add the `NewLogo.png` to `./img/` folder.
4. Open `index.html` and search the old logo file name using `ctrl + F`. Replace the old file `src="img\OldLogo.png"` with `src="img\NewLogo.png"`
![code](<img_readme/change logo.png>)
5. Commit and push.

## Color Code
![nthuracing_logo_2025_blue_0474cf_0f3b7d](img/nthuracing_logo_2025_blue_0474cf_0f3b7d.png)

The gradient for the 2025 logo is #0474cf and #0f3b7d.