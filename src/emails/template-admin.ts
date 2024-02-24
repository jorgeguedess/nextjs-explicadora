export const TemplateEmailAdmin = `
<!doctype html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Notificação de Email do Site Explicadora Tia Denise</title>
    <style media="all" type="text/css">
      /* -------------------------------------
    GLOBAL RESETS
------------------------------------- */

      body {
        font-family: Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
        font-size: 16px;
        line-height: 1.3;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }

      table {
        border-collapse: separate;
        width: 100%;
        padding: 20px 0;
      }

      table td {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
        vertical-align: top;
      }
      ul {
        margin: 0;
        padding: 0;
      }
      ul,
      li {
        list-style: none;
      }
      /* -------------------------------------
    BODY & CONTAINER
------------------------------------- */

      body {
        background-color: #f4f5f6;
        margin: 0;
        padding: 0;
      }

      .body {
        background-color: #f4f5f6;
        width: 100%;
      }

      .container {
        margin: 0 auto !important;
        max-width: 600px;
        padding: 0;
        padding-top: 24px;
        width: 600px;
      }

      .content {
        box-sizing: border-box;
        display: block;
        margin: 0 auto;
        max-width: 600px;
        padding: 0;
      }

      .info {
        display: flex;
        flex-direction: column;
        gap: 4px;
        margin-bottom: 32px;
      }

      /* -------------------------------------
    HEADER, FOOTER, MAIN
------------------------------------- */

      .main {
        background: #ffffff;
        border: 1px solid #eaebed;
        border-radius: 16px;
        width: 100%;
      }

      .wrapper {
        box-sizing: border-box;
        padding: 24px;
      }

      .footer {
        clear: both;
        padding-top: 24px;
        text-align: center;
        width: 100%;
      }

      .footer td,
      .footer p,
      .footer span,
      .footer a {
        color: #9a9ea6;
        font-size: 16px;
        text-align: center;
      }
      /* -------------------------------------
    TYPOGRAPHY
------------------------------------- */

      p {
        font-family: Helvetica, sans-serif;
        font-size: 16px;
        font-weight: normal;
        margin: 0;
        margin-bottom: 16px;
      }

      a {
        color: #1b7e40;
        text-decoration: underline;
      }
      /* -------------------------------------
    BUTTONS
------------------------------------- */

      .btn {
        box-sizing: border-box;
        min-width: 100% !important;
        width: 100%;
      }

      .btn > tbody > tr > td {
        padding-bottom: 16px;
      }

      .btn table {
        width: auto;
      }

      .btn table td {
        background-color: #ffffff;
        border-radius: 4px;
        text-align: center;
      }

      .btn a {
        background-color: #ffffff;
        border: solid 2px #1b7e40;
        border-radius: 4px;
        box-sizing: border-box;
        color: #1b7e40;
        cursor: pointer;
        display: inline-block;
        font-size: 16px;
        font-weight: bold;
        margin: 0;
        padding: 12px 24px;
        text-decoration: none;
        text-transform: capitalize;
      }

      .btn-primary table td {
        background-color: #1b7e40;
      }

      .btn-primary a {
        background-color: #1b7e40;
        border-color: #1b7e40;
        color: #ffffff;
      }

      @media all {
        .btn-primary table td:hover {
          background-color: #053617 !important;
        }
        .btn-primary a:hover {
          background-color: #053617 !important;
          border-color: #053617 !important;
        }
      }

      /* -------------------------------------
    OTHER STYLES THAT MIGHT BE USEFUL
------------------------------------- */

      .last {
        margin-bottom: 0;
      }

      .first {
        margin-top: 0;
      }

      .align-center {
        text-align: center;
      }

      .align-right {
        text-align: right;
      }

      .align-left {
        text-align: left;
      }

      .text-link {
        color: #1b7e40 !important;
        text-decoration: underline !important;
      }

      .clear {
        clear: both;
      }

      .mt0 {
        margin-top: 0;
      }

      .mb0 {
        margin-bottom: 0;
      }

      .preheader {
        color: transparent;
        display: none;
        height: 0;
        max-height: 0;
        max-width: 0;
        opacity: 0;
        overflow: hidden;
        visibility: hidden;
        width: 0;
      }

      .powered-by a {
        text-decoration: none;
      }

      /* -------------------------------------
    RESPONSIVE AND MOBILE FRIENDLY STYLES
------------------------------------- */

      @media only screen and (max-width: 640px) {
        .main p,
        .main td,
        .main span {
          font-size: 16px !important;
        }
        .wrapper {
          padding: 8px !important;
        }
        .content {
          padding: 0 !important;
        }
        .container {
          padding: 0 !important;
          padding-top: 8px !important;
          width: 100% !important;
        }
        .main {
          border-left-width: 0 !important;
          border-radius: 0 !important;
          border-right-width: 0 !important;
        }
        .btn table {
          max-width: 100% !important;
          width: 100% !important;
        }
        .btn a {
          font-size: 16px !important;
          max-width: 100% !important;
          width: 100% !important;
        }
      }
      /* -------------------------------------
    PRESERVE THESE STYLES IN THE HEAD
------------------------------------- */

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
        #MessageViewBody a {
          color: inherit;
          text-decoration: none;
          font-size: inherit;
          font-family: inherit;
          font-weight: inherit;
          line-height: inherit;
        }
      }
    </style>
  </head>
  <body>
    <table
      role="presentation"
      border="0"
      cellpadding="0"
      cellspacing="0"
      class="body"
    >
      <tr>
        <td>&nbsp;</td>
        <td class="container">
          <div class="content">
            <!-- START CENTERED WHITE CONTAINER -->
            <span class="preheader"
              >Notificação de contato site Explicadora Tia Denise</span
            >
            <table
              role="presentation"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="main"
            >
              <!-- START MAIN CONTENT AREA -->
              <tr>
                <td class="wrapper">
                  <h1>Notificação de Contato</h1>
                  <p>Olá Denise!</p>
                  <p>
                    Você recebeu uma nova mensagem de contato através do site:
                    <a
                      href="https://explicadoratiadenise.com.br/"
                      target="_blank"
                      style="color: #1b7e40"
                      >https://explicadoratiadenise.com.br/</a
                    >
                  </p>
                  <table
                    role="presentation"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="btn btn-primary"
                  >
                    <tbody>
                      <tr>
                        <td align="left">
                          <table
                            role="presentation"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                          >
                            <tbody>
                              <tr>
                                <td>
                                  <a href="https://wa.me/{{link}}" target="_blank">Entre em contato com o cliente</a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <ul class="info">
                    <li><strong>Nome:</strong> {{name}}</li>
                    <li><strong>E-mail:</strong> {{email}}</li>
                    <li><strong>Telefone:</strong> {{phone}}</li>
                    <li><strong>Mensagem:</strong> {{message}}</li>
                  </ul>
                  <p>Por favor, responda à mensagem o mais breve possível.</p>
                </td>
              </tr>

              <!-- END MAIN CONTENT AREA -->
            </table>

            <!-- START FOOTER -->
            <div class="footer">
              <table
                role="presentation"
                border="0"
                cellpadding="0"
                cellspacing="0"
              >
                <tr>
                  <td class="content-block">
                    <span class="apple-link"
                      >Copyright © 2024 By Jorge Guedes
                    </span>
                  </td>
                </tr>
              </table>
            </div>

            <!-- END FOOTER -->

            <!-- END CENTERED WHITE CONTAINER -->
          </div>
        </td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </body>
</html>
`;
