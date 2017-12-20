module.exports = {
    'Login with e-mail and password.': function(browser) {
      var login = browser.page.withdrawal();
  
      login.navigate()
        .validateForm()
        .fillInForm('mariusz.szweda+10@bitgamelabs.com', 'test1337')
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
        .fillInFormWithdraw('0.001', '2sadd83_@+_#@)#@')

        .getAttribute("@amount", "validationMessage", 
          function(result) {
           this.verify.notEqual(result.value, "")
          }
        )

        .validateMessagePresent("@errorAddress1", "This is not a valid Bitcoin address.")
        .validateButtonDisabled("@submitWithdraw")
      },
  



      'Enter invalid amount and valid Bitcoin address.': function(browser) {
        var login = browser.page.withdrawal();
  
      browser
        .pause(2000)
        .url('https://stg.cloudbet.com/en/players/wallets/withdrawal_new')
        .pause(2000)
       
      login
        .validateFormWithdraw()
        .fillInFormWithdraw('asdka#*@', 'mmRwMug8tapuusSqpH1Eioh8o4bKPW4bxX')

        .getAttribute("@amount", "validationMessage", 
        function(result) {
         this.verify.notEqual(result.value, "")
        }
      )

      .validateMessageNotPresent("@errorAddress1", "This is not a valid Bitcoin address.")
      .validateButtonDisabled("@submitWithdraw")
    },




    'Enter valid amount and valid Bitcoin address.': function(browser) {
      var login = browser.page.withdrawal();

    browser
      .pause(2000)
      .url('https://stg.cloudbet.com/en/players/wallets/withdrawal_new')
      .pause(2000)
     
    login
      .validateFormWithdraw()
      .fillInFormWithdraw('0.001', 'mkQDpFe7XSisQSRpz4JMvwnKifSRWFrhEc')

      .getAttribute("@amount", "validationMessage", 
      function(result) {
       this.verify.notEqual(result.value, "")
      }
    )

      .validateMessageNotPresent("@errorAddress2", "This is not a valid Bitcoin address.")
      .validateButtonDisabled("@submitWithdraw")

    browser
      .pause(2000)
      .end();
  },
  
  
  
  };
  