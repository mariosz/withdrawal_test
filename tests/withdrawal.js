
module.exports = {
  
  
    'Login with e-mail and password.': function(browser) {
      var login = browser.page.withdrawal();
  
      login.navigate()
        .validateForm()
        .fillInForm('mariusz.szweda+aff@bitgamelabs.com', 'test1337')
        .submit()
      },
  
  
  
  
      'Enter valid amount and invalid Bitcoin address.': function(browser) {
        var login = browser.page.withdrawal();
  
      browser
        .pause(2000)
        .url('https://stg.cloudbet.com/en/players/wallets/withdrawal_new')
        .pause(2000)
       
      login
        .validateFormWithdraw()
        .fillInFormWithdraw('0.0001', '*&@#*@#&@^#*')
       
        //.submitWithdraw()
        
       // .validateMessageNotPresent("@error", "")
        .validateMessagePresent("@errorAddress", "This is not a valid Bitcoin address.")
      },
  
  
  


      'Enter invalid amount and valid Bitcoin address.': function(browser) {
        var login = browser.page.withdrawal();
  
      browser
        .pause(2000)
        .url('https://stg.cloudbet.com/en/players/wallets/withdrawal_new')
        .pause(2000)
       
      login
        .validateFormWithdraw()
        .fillInFormWithdraw('%$%', 'mmRwMug8tapuusSqpH1Eioh8o4bKPW4bxX')
  
        .validateMessagePresent("@error", "")
        .validateMessageNotPresent("@errorAddress", "This is not a valid Bitcoin address.");
  
    },




    'Enter valid amount and valid Bitcoin address.': function(browser) {
      var login = browser.page.withdrawal();

    browser
      .pause(2000)
      .url('https://stg.cloudbet.com/en/players/wallets/withdrawal_new')
      .pause(2000)
     
    login
      .validateFormWithdraw()
      .fillInFormWithdraw('0.0001', 'mmRwMug8tapuusSqpH1Eioh8o4bKPW4bxX')
      .submitWithdraw()
      .validateMessageNotPresent("@error", "")
      .validateMessageNotPresent("@errorAddress", "This is not a valid Bitcoin address.")
      
    browser
      .pause(2000)
      .end();
  },
  
  
  
  };
  