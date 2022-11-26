export const getRegistrationTemplate = (data) => {
  return `<!DOCTYPE html>
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <title>Wellfed Portal Login Details</title>
      <style>
  @media only screen and (max-width: 620px) {
    table.body h1 {
      font-size: 28px !important;
      margin-bottom: 10px !important;
    }
  
    table.body p,
  table.body ul,
  table.body ol,
  table.body td,
  table.body span,
  table.body a {
      font-size: 16px !important;
    }
  
    table.body .wrapper,
  table.body .article {
      padding: 10px !important;
    }
  
    table.body .content {
      padding: 0 !important;
    }
  
    table.body .container {
      padding: 0 !important;
      width: 100% !important;
    }
  
    table.body .main {
      border-left-width: 0 !important;
      border-radius: 0 !important;
      border-right-width: 0 !important;
    }
  
    table.body .btn table {
      width: 100% !important;
    }
  
    table.body .btn a {
      width: 100% !important;
    }
  
    table.body .img-responsive {
      height: auto !important;
      max-width: 100% !important;
      width: auto !important;
    }
  }
  @media all {
    .ExternalClass {
      width: 100%;
    }
  
    .ExternalClass,
  .ExternalClass p,
  .ExternalClass span,
  .ExternalClass font,
  .ExternalClass td,
  .ExternalClass div {
      line-height: 100%;
    }
  
    .apple-link a {
      color: inherit !important;
      font-family: inherit !important;
      font-size: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
      text-decoration: none !important;
    }
  
    .btn-primary a:hover {
      background-color: #006837 !important;
    }
  }
  </style>
    </head>
    <body style="background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
      <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">This is preheader text. Some clients will show this text as a preview.</span>
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f6f6f6; width: 100%;" width="100%" bgcolor="#f6f6f6">
        <tr>
          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>
          <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; max-width: 580px; padding: 10px; width: 580px; margin: 0 auto;" width="580" valign="top">
            <div class="content" style="box-sizing: border-box; display: block; margin: 0 auto; max-width: 580px; padding: 10px;">
  
              <!-- START CENTERED WHITE CONTAINER -->
              <table role="presentation" class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: #ffffff; border-radius: 3px; width: 100%;" width="100%">
  
                <!-- START MAIN CONTENT AREA -->
                <tr>
                  <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;" valign="top">
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                      <tr>
                        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">
                          <h2 style="font-family: sans-serif;  font-weight: normal; margin: 0; margin-bottom: 15px;">Instructions to Access Course</h2>
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Use the details below to log in and begin the course.</p>
                          <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; box-sizing: border-box; width: 100%;" width="100%">
                            <tbody>
                              <tr>
                                <td align="left" style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px;" valign="top">
                                  <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: auto;">
                                    <tbody>
                                        <tr>
                                        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; border-radius: 5px;" valign="top"> <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;"><strong>USERNAME </strong></p></td>
                                      </tr>
                                      <tr>
                                        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; border-radius: 5px;" valign="top"> <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">${data.email}</p></td>
                                      </tr>
                                      <tr>
                                        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; border-radius: 5px;" valign="top"> <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;"><strong>PASSWORD </strong></p></td>
                                      </tr>
                                      <tr>
                                        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; border-radius: 5px;" valign="top"> <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">${data.password}</p></td>
                                      </tr>
                                      <tr>
                                        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; border-radius: 5px; text-align: center;" valign="top" align="center" > <a href="https://wellfed-dashboard.netlify.app/login?emailId=${data.email}&isFirstLogin=true" target="_blank" style="border: solid 1px #3498db; border-radius: 5px; box-sizing: border-box; cursor: pointer; display: inline-block; font-size: 14px; font-weight: bold; margin: 0; padding: 12px 25px; text-decoration: none; text-transform: capitalize; background-color: #0094A3; border-color: #3498db; color: #ffffff;">Reset Password</a> </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: bold; margin: 0; margin-bottom: 15px;">Note: Please reset your password using above link before getting started.</p>
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; ">Thank You,</p>
  <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">
  Team Well Fed Seminars, Inc.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
  
              <!-- END MAIN CONTENT AREA -->
              </table>
              <!-- END CENTERED WHITE CONTAINER -->
  
              <!-- START FOOTER -->
              <div class="footer" style="clear: both; margin-top: 10px; text-align: center; width: 100%;">
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                  <tr>
                    <td class="content-block" style="font-family: sans-serif; vertical-align: top; padding-top: 10px; color: #999999; font-size: 12px; text-align: center;" valign="top" align="center">
                        <div className="text-sm text-blueGray-500 font-semibold py-1 text-center">
                For Support, call
                <a href="tel:+1(847)571-8540">+1 (847) 571-8540</a> or Email us at
                <a href="mailto: info@well-fed.com">info@well-fed.com</a>
              </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="content-block powered-by" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 5px; color: #999999; font-size: 12px; text-align: center;" valign="top" align="center">
                      FSSMC # 00004221 | Servsafe # 9049878 | COCIN - 183
                    </td>
                  </tr>
                </table>
              </div>
              <!-- END FOOTER -->
  
            </div>
          </td>
          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>
        </tr>
      </table>
    </body>
  </html>`;
};
