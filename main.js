const puppeteer=require('puppeteer');

(
    async () => {
        
        const browser=await puppeteer.launch({headless:false,defaultViewport:null});

        const page=await browser.newPage();
        
        await page.goto("https://opensource-demo.orangehrmlive.com/index.php/auth/login");  
        //login
        await page.type('#txtUsername','admin');
        await page.type('#txtPassword','admin123');
        await page.click('#btnLogin');


       await page.waitForSelector('#mainMenuFirstLevelUnorderedList');

        //navigate to add employee form 
        await page.hover('#menu_pim_viewPimModule');
        await page.click('#menu_pim_addEmployee');
        

        await page.waitForSelector('#frmAddEmp');
        //fill the employee form 
        await page.type('#firstName','Maryam');
        await page.type('#middleName','M');
        await page.type('#lastName','Baig');

        //upload image
        const uploadimagehandle=await page.$('#photofile');

        uploadimagehandle.uploadFile('download.png');
        
        //check the button
        await page.click('#chkLogin');


        //fill the fields
        let num=Math.floor((Math.random() * 100) + 1).toString(); //to get unique user name every time
        await page.type('#user_name','Maryam'+num);
        await page.type('#user_password','maryam@1234');
        await page.type('#re_password','maryam@1234');

        //save the form
        await page.evaluate(() => {
            document.querySelector('#btnSave').click();
        });


        //await browser.close();
})();