const statusCode =
{
    id: "000001075",
    title: "Status Codes",
    lastPublishedDate: "25/09/2024",
    summary: "A detailed list of payment provider transaction status codes, including software, user cancellations, ACH return codes, and system errors.",
    question: "What are the Status code",
    answer: `
       Software (SW):
          description: "These statuses are related to errors found during the validation processes before the transaction is sent to the ODFI. These include risk and validation errors.",
          codes:
            "SW010", "description": "Established",
            "SW013", "description": "Canceled",
            "SW020", "description": "Authorization received",
            "SW021", "description": "Authorization declined due to insufficient funds",
            "SW051", "description": "Merchant error",
            "SW052", "description": "Financial Institution error",
            "SW053", "description": "Internal network error",
            "SW054", "description": "Suspicious transaction activity",
            "SW055", "description": "Negative data",
            "SW056", "description": "Invalid account",
            "SW057", "description": "Expired split token",
            "SW059", "description": "Instant transaction rejected due to risk",
            "SW060", "description": "Bank or network processor is down"

         User Canceled:
          description: "These statuses are related to when the user cancels the transaction process. Each cancellation point defines the status.",
          codes:
            "UC01", "description": "User canceled the transaction at bank selection page" 
            "UC02", "description": "User canceled the transaction at login page" 
            "UC03", "description": "User canceled the transaction at invalid login page" 
            "UC04", "description": "User canceled the transaction at challenge question page" 
            "UC05", "description": "User canceled the transaction at invalid answers for challenge questions page" 
            "UC06", "description": "User canceled the transaction at MFA page" 
            "UC07", "description": "User canceled the transaction at invalid MFA page" 
            "UC08", "description": "User canceled the transaction at account selection page" 
            "UC09", "description": "User canceled the transaction at error page" 
            "UC10", "description": "User canceled the transaction at partial account number page" 
            "UC11", "description": "User canceled the transaction at select account location page" 
            "UC12", "description": "User canceled the transaction because it does not have a bank on the list" 
            "UC13", "description": "User canceled the transaction at login with captcha page" 
            "UC14", "description": "User canceled the transaction at captcha validation page" 
            "UC15", "description": "User canceled the transaction at manual account input page" 
            "UC16", "description": "User canceled the transaction at manual account confirmation page" 
            "UC17", "description": "User canceled the transaction at MCD confirmation page" 
            "UC18", "description": "User canceled the transaction at MCD validation page" 
            "UC19", "description": "User canceled the transaction at account profile input page" 
            "UC20", "description": "User canceled the transaction at no dynamic balance page" 
            "UC21", "description": "User canceled the transaction at partial account not supported page" 
            "UC22", "description": "User canceled the transaction at security script page" 
            "UC23", "description": "User canceled the transaction at account not supported page" 
            "UC24", "description": "User canceled the transaction at authorize page with exception" 
            "UC25", "description": "User canceled the transaction at bad account page" 
            "UC26", "description": "User canceled the transaction at the bank's reset password screen" 
            "UC27", "description": "User canceled the transaction because the bank was unavailable" 
            "UC28", "description": "User canceled the transaction at an external screen" 
            "UC29", "description": "User canceled the transaction due to a timeout" 
            "UC30", "description": "User canceled on the manual entry screen after an invalid routing or account number entry" 
            "UC31", "description": "User canceled on the manual entry screen due to related information (SWIFT code or address) not being found" 
            "UC32", "description": "User canceled the transaction at the maintenance page" 
            "UC33", "description": "User canceled the transaction at non-eligible currency error page" 
            "UC34", "description": "User canceled the transaction at Connect to your bank (OAuth login) page" 
            "UC35", "description": "User canceled the transaction at Waiting for your approval page" 
            "UC36", "description": "User canceled the transaction at VAN info page" 
            "UC37", "description": "User canceled the transaction at widget within Lightbox page" 
            "UC39", "description": "User canceled the transaction indirectly by allowing the FI OAuth login session to expire"

         Acknowledged Communication (AC):
          description: "These are the main statuses for ACH and RTP transactions.",
          codes:
             "AC100", "description": "AC Pending"
             "AC101", "description": "AC Declined"
             "AC102", "description": "AC Approved"
             "AC103", "description": "AC Error"
             "AC104", "description": "AC Voided"
             "AC105", "description": "AC Processed"
             "AC106", "description": "AC Collected"
             "AC107", "description": "AC Awaiting Capture"
             "AC108", "description": "AC Awaiting Approval"
             "AC109", "description": "AC Suspended"
             "AC110", "description": "AC In Collection"
             "AC111", "description": "AC In Research"
             "AC112", "description": "AC Disputed"
             "AC113", "description": "AC Uncollected, Insufficient Funds"
             "AC114", "description": "AC Invalid or Closed Account"
             "AC115", "description": "AC Other Returns"
             "AC116", "description": "AC None"
             "AC117", "description": "AC Expired"
             "AC118", "description": "AC Settled

         System Error (SE):
          description: "System error statuses.",
          codes:
            "SE01", "description": "System in maintenance mode"
            "SE02", "description": "System error connecting to API services" 
            "SE03", "description": "System error connecting to financial services gateway"

         ACH Return Codes (R): 
          description: "These statuses are related to ACH return codes.",
          codes:
            "R01", "description": "ACH return codes 01 to 84"
          
        EFT Decline Codes - Canada:
          description: "These statuses are related to EFT decline codes in Canada.",
          codes:
            "900", "description": "Account information incorrectly entered" 
            "901", "description": "Insufficient Funds" 
            "902", "description": "Account not Found" 
            "903", "description": "Payment Stopped/Recalled" 
            "904", "description": "Post/Stale Dated" 
            "905", "description": "Account Closed" 
            "907", "description": "No Debit Allowed" 
            "908", "description": "Funds Not Cleared"
          ]
        }
        
    `,
    internalNotes: `
      External URL: https://amer.developers.trustly.com/payments/docs/type-definitions
    `,
    related: [
        "External URL: https://amer.developers.trustly.com/payments/docs/type-definitions"
    ]
  }