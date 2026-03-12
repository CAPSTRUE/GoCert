window.__QUESTION_BANK_FILES__ = window.__QUESTION_BANK_FILES__ || {};
window.__QUESTION_BANK_FILES__["MS-700"] = [
  {
    "id": "ms700-q1",
    "prompt": "NO.1 You need to configure Microsoft Teams to meet the collaboration and meeting requirements.\nWhich two actions should you perform from the Microsoft Teams admin center? Each correct answer\npresents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "Modify the Meeting settings.",
      "Create a teams policy.",
      "Create a meeting policy.",
      "Create a live events policy.",
      "Modify the Teams settings."
    ],
    "correctAnswer": [
      "Modify the Meeting settings.",
      "Create a meeting policy."
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q2",
    "prompt": "NO.2 You need to configure the IP phones to meet the device requirements.\nWhat is the minimum number of configuration profiles you should create?",
    "image": "",
    "answers": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "2",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q3",
    "prompt": "NO.3 You need to create a team for the sales department.\nWhat should you do first?",
    "image": "",
    "answers": [
      "Create an Office 365 group and modify the membership rule for the group.",
      "From PowerShell, run the Add-AzureAdGroupMember cmdlet.",
      "From PowerShell, run the New-Team cmdlet.",
      "Create a team and select Build a team from scratch."
    ],
    "correctAnswer": "Create an Office 365 group and modify the membership rule for the group.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q4",
    "prompt": "NO.4 You need to configure Microsoft Teams to meet the department upgrade requirements.\nFor each of the following statements, select Yes if that statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "sales_sfb_collab_meetings",
        "label": "The Microsoft Teams upgrade policy be set to Skype for Business with Teams collaboration and meetings coexistence mode for the sales department users."
      },
      {
        "id": "hr_sfb_only",
        "label": "The Microsoft Teams upgrade policy be set to Skype for Business only coexistence mode for the HR department users."
      },
      {
        "id": "it_teams_only",
        "label": "The Microsoft Teams upgrade policy be set to Teams only coexistence mode for the IT department users."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "inputType": "radio",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "sales_sfb_collab_meetings": "No",
          "hr_sfb_only": "No",
          "it_teams_only": "Yes"
        }
      }
    ],
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q5",
    "prompt": "NO.5 What should you recommend to meet the Microsoft Teams requirements for guest access?",
    "image": "",
    "answers": [
      "From the Azure Active Directory admin center, modify the External collaboration settings to include fabrikam.com only.",
      "From the Microsoft 365 admin center, modify the Office 365 groups settings.",
      "From the External access settings in the Microsoft Teams admin center, add fabrikam.com to the Allowed list of domains.",
      "From the Microsoft Teams admin center, turn off org-wide guest access and manually add guest users from fabrikam.com to teams."
    ],
    "correctAnswer": "From the Azure Active Directory admin center, modify the External collaboration settings to include fabrikam.com only.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q6",
    "prompt": "NO.6 You need to identify the requirements for the voice pilot project.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "Assign an additional license and phone number to each user.",
      "Deploy a Session Border Controller (SBC) for Litware.",
      "Purchase a Calling Plan for each user.",
      "Create a dial plan for Litware.",
      "Purchase a Calling Plan for Litware."
    ],
    "correctAnswer": [
      "Assign an additional license and phone number to each user.",
      "Purchase a Calling Plan for each user."
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q7",
    "prompt": "NO.7 You need to recommend a solution to perform the network validation tasks for the platform\nupgrade.\nWhich tool and role should you recommend for each user? To answer, select the appropriate options\nin the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "admin5",
        "label": "Admin5"
      },
      {
        "id": "admin6",
        "label": "Admin6"
      }
    ],
    "columns": [
      {
        "id": "tool",
        "label": "Tool",
        "options": [
          "Microsoft Call Quality Dashboard",
          "Network Monitor",
          "Network Planner",
          "Network Testing Companion"
        ],
        "correctByRow": {
          "admin5": "Network Planner",
          "admin6": "Microsoft Call Quality Dashboard"
        }
      },
      {
        "id": "role",
        "label": "Role",
        "options": [
          "Teams Communications Administrator",
          "Teams Communications Support Engineer",
          "Teams Communications Support Specialist"
        ],
        "correctByRow": {
          "admin5": "Teams Communications Administrator",
          "admin6": "Teams Communications Support Specialist"
        }
      }
    ],
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q8",
    "prompt": "NO.8 You need to implement a solution to meet the Microsoft Teams requirements for the\ncompliance department.\nWhat should you do first?",
    "image": "",
    "answers": [
      "Add all the compliance department users as members of an org-wide team.",
      "Add all the compliance department users to a universal security group.",
      "Add all the compliance department users to an Office 365 group.",
      "Assign the Teams Communications Support Engineer role to all the compliance department users."
    ],
    "correctAnswer": "Add all the compliance department users to a universal security group.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q9",
    "prompt": "NO.9 You need to configure data retention policies for the teams. The solution must meet the data\nretention requirements.\nWhich content location should you include in the retention policies? To answer, drag the appropriate\ncontent locations to the correct requirements. Each content location may be used once, more than\nonce, or not at all.\nYou may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "allowAnswerShuffle": false,
    "type": "dragMatch",
    "items": [
      {
        "id": "it1",
        "label": "Exchange email"
      },
      {
        "id": "it2",
        "label": "OneDrive accounts"
      },
      {
        "id": "it3",
        "label": "SharePoint sites"
      },
      {
        "id": "it4",
        "label": "Teams channel messages"
      },
      {
        "id": "it5",
        "label": "Teams chat"
      }
    ],
    "targets": [
      {
        "id": "req1",
        "label": "Requirement1"
      },
      {
        "id": "req2",
        "label": "Requirement2"
      },
      {
        "id": "req3",
        "label": "Requirement3"
      }
    ],
    "correctByTarget": {
      "req1": "it1",
      "req2": "it3",
      "req3": "it2"
    }
  },
  {
    "id": "ms700-q10",
    "prompt": "NO.10 You need to configure the environment to meet the device requirements for the Microsoft\nTeams phones.\nWhat should you do from the Microsoft Teams admin center?",
    "image": "",
    "answers": [
      "Create a configuration profile",
      "Modify the Teams settings",
      "Create a meeting policy",
      "Create a calling policy"
    ],
    "correctAnswer": "Create a configuration profile",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q11",
    "prompt": "NO.11 You need to configure the environment to meet the security requirements for team names.\nWhat should you do?",
    "image": "",
    "answers": [
      "From the Security & Compliance admin center, create a sensitivity label and a sensitivity policy.",
      "From the Microsoft Teams admin center, modify the Teams setting policies.",
      "From the Azure Active Directory admin center, upload a blocked word list for the group naming policy."
    ],
    "correctAnswer": "From the Azure Active Directory admin center, upload a blocked word list for the group naming policy.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q12",
    "prompt": "NO.12 You need to configure the user accounts of the sales department users to meet the security\nrequirements.\nWhat should you do for each user?",
    "image": "",
    "answers": [
      "From PowerShell, run the Grant-CsTeamsUpgradePolicy -PolicyName SfBWithTeamsCollabAndMeetings cmdlet.",
      "From the Microsoft Teams admin center, set the Microsoft Teams upgrade policy to Islands coexistence mode.",
      "From PowerShell, run the Grant-CsTeamsUpgradePolicy -PolicyName Islands cmdlet.",
      "From PowerShell, run the Grant-CsTeamsUpgradePolicy -PolicyName SfBOnly cmdlet."
    ],
    "correctAnswer": "From PowerShell, run the Grant-CsTeamsUpgradePolicy -PolicyName SfBWithTeamsCollabAndMeetings cmdlet.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q13",
    "prompt": "NO.13 You need to resolve the membership issues for the two pilot users.\nWhat should you do?",
    "image": "",
    "answers": [
      "Modify the department attribute of both users.",
      "Invite both users to the HR team.",
      "Add both users to the HR group.",
      "Modify the privacy level of the HR team."
    ],
    "correctAnswer": "Modify the department attribute of both users.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q14",
    "prompt": "NO.14 You need to recommend which inbound ports to the network and outbound ports to Office\n365 must be allowed on the company's firewall after the planned upgrade. The solution must meet\nthe security requirements.\nWhich inbound and outbound ports should you recommend? To answer, select the appropriate\noptions in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "out_tcp",
        "label": "Outbound TCP"
      },
      {
        "id": "out_udp",
        "label": "Outbound UDP"
      },
      {
        "id": "in_tcp",
        "label": "Inbound TCP"
      },
      {
        "id": "in_udp",
        "label": "Inbound UDP"
      }
    ],
    "columns": [
      {
        "id": "port",
        "label": "Port range",
        "options": [
          "135",
          "80 and 443",
          "3478 to 3481",
          "50000 to 59999",
          "None"
        ],
        "correctByRow": {
          "out_tcp": "80 and 443",
          "out_udp": "3478 to 3481",
          "in_tcp": "80 and 443",
          "in_udp": "3478 to 3481"
        }
      }
    ],
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q15",
    "prompt": "NO.15 You need to configure the environment to meet the technical requirements for guest users.\nWhat should you modify from the Microsoft Teams admin center?",
    "image": "",
    "answers": [
      "the global app permission policy",
      "Guest access in Users",
      "the global meeting policy",
      "the global messaging policy"
    ],
    "correctAnswer": "Guest access in Users",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q16",
    "prompt": "NO.16 You need to resolve the notification issues identified during the pilot project.\nWhat should you modify?",
    "image": "",
    "answers": [
      "the global meeting policy",
      "the global messaging policy",
      "the org-wide Teams settings",
      "the app permission policy"
    ],
    "correctAnswer": "the global messaging policy",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q17",
    "prompt": "NO.17 You need to configure the environment to meet the security requirements for the R&D\ngroup.\nWhat should you do first?",
    "image": "",
    "answers": [
      "Start the information barrier policy application.",
      "Add an identity provider.",
      "Create two information barrier segments.",
      "Create one information barrier policy."
    ],
    "correctAnswer": "Create two information barrier segments.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q18",
    "prompt": "NO.18 You need to recommend a voice topology for the departments. The topology must meet the\ncalling requirements and the security requirements.\nWhat should you recommend for each department? To answer, select the appropriate options in the\nanswer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "allowAnswerShuffle": false,
    "type": "dragMatch",
    "items": [
      {
        "id": "it1",
        "label": "Calling Plans"
      },
      {
        "id": "it2",
        "label": "Direct Routing"
      },
      {
        "id": "it3",
        "label": "On-premises call handling"
      },
      {
        "id": "it4",
        "label": "Skype for Business Cloud Connector Edition"
      }
    ],
    "targets": [
      {
        "id": "hr",
        "label": "HR"
      },
      {
        "id": "sales",
        "label": "Sales"
      },
      {
        "id": "rnd",
        "label": "R&D"
      }
    ],
    "correctByTarget": {
      "hr": "it2",
      "sales": "it1",
      "rnd": "it4"
    }
  },
  {
    "id": "ms700-q19",
    "prompt": "NO.19 You need to configure the user accounts of the sales department users to meet the security\nrequirements.\nWhat should you do for each user?",
    "image": "",
    "answers": [
      "From the Microsoft Teams admin center, set the Microsoft Teams upgrade policy to Skype for Business with Teams collaboration and meetings coexistence mode.",
      "From PowerShell, run the Grant-CsTeamsUpgradePolicy -PolicyName SfBWithTeamsCollab cmdlet.",
      "From PowerShell, run the Grant-CsTeamsUpgradePolicy -PolicyName Islands cmdlet.",
      "From the Microsoft Teams admin center, set the Microsoft Teams upgrade policy to Skype for Business coexistence mode."
    ],
    "correctAnswer": "From the Microsoft Teams admin center, set the Microsoft Teams upgrade policy to Skype for Business with Teams collaboration and meetings coexistence mode.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q20",
    "prompt": "NO.20 During the pilot project, you review the global policies in the Microsoft Teams admin center.\nContoso has a global meeting policy configured as shown in the following exhibit.\nContoso has a global live events policy configured as shown in the following exhibit.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "ms700q20",
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "req1",
        "label": "The policies meet Requirement1 for meeting and live events."
      },
      {
        "id": "req2",
        "label": "The policies meet Requirement2 for meeting and live events."
      },
      {
        "id": "req3",
        "label": "The policies meet Requirement3 for meeting and live events."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "inputType": "radio",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "req1": "Yes",
          "req2": "No",
          "req3": "Yes"
        }
      }
    ],
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q21",
    "prompt": "NO.21 Task 8\nYou need to prevent guest users from calling your company's Teams users.",
    "image": "",
    "answers": [
      "Questão em formato não suportado por este app (consulte o PDF)."
    ],
    "correctAnswer": "Questão em formato não suportado por este app (consulte o PDF).",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q22",
    "prompt": "NO.22 Task 10\nYou need to ensure that when users join meeting by using a phone, they are prompted to record\ntheir name.",
    "image": "",
    "answers": [
      "Questão em formato não suportado por este app (consulte o PDF)."
    ],
    "correctAnswer": "Questão em formato não suportado por este app (consulte o PDF).",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q23",
    "prompt": "NO.23 Task 3\nAdele Vance Is a member of your company s technology adoption team.\nYou need to provide only Adele with the ability to turn on and off Teams preview features.",
    "image": "",
    "answers": [
      "Questão em formato não suportado por este app (consulte o PDF)."
    ],
    "correctAnswer": "Questão em formato não suportado por este app (consulte o PDF).",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q24",
    "prompt": "NO.24 Task 6\nYou need to ensure that only users that are assigned the Global Administrator, User Administrator, or\nGuest Inviter roles can invite guest users to your company's tenant.",
    "image": "",
    "answers": [
      "Questão em formato não suportado por este app (consulte o PDF)."
    ],
    "correctAnswer": "Questão em formato não suportado por este app (consulte o PDF).",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q25",
    "prompt": "NO.25 Task 11\nYou need to ensure that users can perform the following actions:\n* Record Teams calls and Teams meeting.\n* Transcribe Teams calls and Teams meeting.",
    "image": "",
    "answers": [
      "Questão em formato não suportado por este app (consulte o PDF)."
    ],
    "correctAnswer": "Questão em formato não suportado por este app (consulte o PDF).",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q26",
    "prompt": "NO.26 Task 7\nYou need to acquire a dedicated Microsoft dial-in bridge number from either 431 or 343 area codes\nin Canada.",
    "image": "",
    "answers": [
      "Questão em formato não suportado por este app (consulte o PDF)."
    ],
    "correctAnswer": "Questão em formato não suportado por este app (consulte o PDF).",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q27",
    "prompt": "NO.27 Task 7\nYou need to prevent users from deleting messages posted in private chats and channels.",
    "image": "",
    "answers": [
      "Questão em formato não suportado por este app (consulte o PDF)."
    ],
    "correctAnswer": "Questão em formato não suportado por este app (consulte o PDF).",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q28",
    "prompt": "NO.28 Task 12\nyou need to create a Microsoft 365 group named TeamsAdmin that can manage Teams Phone\nconfigurations without being able to manage teams and channels.",
    "image": "",
    "answers": [
      "Questão em formato não suportado por este app (consulte o PDF)."
    ],
    "correctAnswer": "Questão em formato não suportado por este app (consulte o PDF).",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q29",
    "prompt": "NO.29 Which license should you purchase to meet the technical requirements of the marketing\ndepartment to apply a watermark?",
    "image": "",
    "answers": [
      "Microsoft Priva Subject Rights Requests",
      "Microsoft Priva Privacy Risk Management",
      "Microsoft Teams Premium",
      "Microsoft Defender for Cloud Apps"
    ],
    "correctAnswer": "Microsoft Teams Premium",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q30",
    "prompt": "NO.30 Task 9\nYou need to deploy the Microsoft Viva Connections app to Teams and install the app as the first item\non the app bar of the Teams client for all users.",
    "image": "",
    "answers": [
      "Questão em formato não suportado por este app (consulte o PDF)."
    ],
    "correctAnswer": "Questão em formato não suportado por este app (consulte o PDF).",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q31",
    "prompt": "NO.31 Task 8\nYou need to enable shared channel collaboration with mkrosoft.com. The solution must meet the\nfollowing requirements:\n* Users must be able to participate in shared channels created by microsoft.com.\n* Users must be able to invite Microsoft contacts to snared channels created by users at your\ncompany.",
    "image": "",
    "answers": [
      "Questão em formato não suportado por este app (consulte o PDF)."
    ],
    "correctAnswer": "Questão em formato não suportado por este app (consulte o PDF).",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q32",
    "prompt": "NO.32 Task 9\nYou need to prevent unauthenticated users from joining Teams meetings.",
    "image": "",
    "answers": [
      "Questão em formato não suportado por este app (consulte o PDF)."
    ],
    "correctAnswer": "Questão em formato não suportado por este app (consulte o PDF).",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q33",
    "prompt": "NO.33 You need to implement the planned changes for the marketing department and the project\nmanagement department. The solution must meet the technical requirements.\nWhich type of channel should you use for each department? To answer, select the appropriate\noptions in the answer area.\nNOTE: Each correct selection is worth one point",
    "image": "",
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "marketing",
        "label": "Marketing"
      },
      {
        "id": "pm",
        "label": "Project management"
      }
    ],
    "columns": [
      {
        "id": "channel_type",
        "label": "Channel type",
        "options": [
          "Private",
          "Shared",
          "Standard"
        ],
        "correctByRow": {
          "marketing": "Shared",
          "pm": "Private"
        }
      }
    ],
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q34",
    "prompt": "NO.34 You need to resolve the issue reported by the project management department users.\nWhat should you do?",
    "image": "",
    "answers": [
      "Uninstall the current Teams client and then reinstall the latest version of the client.",
      "From the Microsoft Teams admin center, modify the Meeting settings.",
      "From the Microsoft Teams admin center, create and assign a new meeting policy.",
      "Instruct the users to launch Teams and select Check for updates."
    ],
    "correctAnswer": "From the Microsoft Teams admin center, create and assign a new meeting policy.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q35",
    "prompt": "NO.35 You need to implement the planned changes for the marketing department.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "Set Join external shared channels to On for the Teams policy of the marketing department.",
      "From the Azure Active Directory admin center, configure the B2B direct connect outbound access settings for external users and groups.",
      "Set invite external users to shared channels to On for the Teams policy of the marketing department.",
      "From the Azure Active Directory admin center, configure the B2B direct connect inbound access settings for external users and groups.",
      "Set invite external users to shared channels to On for the Global (Org-wide default) Teams policy."
    ],
    "correctAnswer": [
      "Set invite external users to shared channels to On for the Teams policy of the marketing department.",
      "From the Azure Active Directory admin center, configure the B2B direct connect inbound access settings for external users and groups."
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q36",
    "prompt": "NO.36 Task 5\nYou need to prevent incoming Teams call notifications when users are already on a Teams call or in a\nTeams meeting. The solution must NOT reject the call.",
    "image": "",
    "answers": [
      "Questão em formato não suportado por este app (consulte o PDF)."
    ],
    "correctAnswer": "Questão em formato não suportado por este app (consulte o PDF).",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q37",
    "prompt": "NO.37 You need to implement the planned changes for Viva Connections.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from\nthe list of actions to the answer area and arrange them in the correct order.",
    "image": "",
    "allowAnswerShuffle": false,
    "type": "dragMatch",
    "items": [
      {
        "id": "it1",
        "label": "From the Microsoft Teams admin center, select Customize store."
      },
      {
        "id": "it2",
        "label": "From the Microsoft Teams admin center, select Setup policies."
      },
      {
        "id": "it3",
        "label": "From Org-wide app settings, enable tailored apps."
      },
      {
        "id": "it4",
        "label": "From the Microsoft Teams admin center, select Manage apps."
      },
      {
        "id": "it5",
        "label": "Select the Viva Connections app, and then select Customize."
      },
      {
        "id": "it6",
        "label": "Modify and apply the app details."
      }
    ],
    "targets": [
      {
        "id": "step1",
        "label": "Passo 1"
      },
      {
        "id": "step2",
        "label": "Passo 2"
      },
      {
        "id": "step3",
        "label": "Passo 3"
      }
    ],
    "correctByTarget": {
      "step1": "it4",
      "step2": "it5",
      "step3": "it6"
    }
  },
  {
    "id": "ms700-q38",
    "prompt": "NO.38 Task 2\nYou need to ensure that only users from litwareinc.com can be added to Teams as guest users.",
    "image": "",
    "answers": [
      "Questão em formato não suportado por este app (consulte o PDF)."
    ],
    "correctAnswer": "Questão em formato não suportado por este app (consulte o PDF).",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q39",
    "prompt": "NO.39 Task 12\nA company named Contoso, Ltd, plans to deploy Teams Phone with location-based emergency\ndialing.\nYou need to ensure that when users dial emergency numbers, the call is routed based on the user's\ncurrent location You do NOT need to configure networks and locations at this time.",
    "image": "",
    "answers": [
      "Questão em formato não suportado por este app (consulte o PDF)."
    ],
    "correctAnswer": "Questão em formato não suportado por este app (consulte o PDF).",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q40",
    "prompt": "NO.40 Task 11\nYou need to restrict external Teams communication for both calling and personal chat to only\norganizational users that use the microsoft.com domain.",
    "image": "",
    "answers": [
      "Questão em formato não suportado por este app (consulte o PDF)."
    ],
    "correctAnswer": "Questão em formato não suportado por este app (consulte o PDF).",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q41",
    "prompt": "NO.41 You need to configure a policy for the IT department to meet the technical requirements for\ntraining videos.\nHow should you complete the PowerShell cmdlet? To answer, select the appropriate options in the\nanswer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "slot": "cmdlet"
        },
        {
          "text": " -Identity IT "
        },
        {
          "slot": "parameter"
        }
      ],
      "slots": {
        "cmdlet": {
          "label": "Cmdlet",
          "options": [
            "Set-CsTeamsMeetingBroadcastConfiguration",
            "Set-CsTeamsMeetingBroadcastPolicy",
            "Set-CsTeamsMeetingConfiguration",
            "Set-CsTeamsMeetingPolicy"
          ],
          "correct": "Set-CsTeamsMeetingPolicy"
        },
        "parameter": {
          "label": "Parâmetro",
          "options": [
            "-AllowCloudRecording",
            "-ChannelRecordingDownload",
            "-NewMeetingRecordingExpirationDays",
            "-RecordingStorageMode"
          ],
          "correct": "-NewMeetingRecordingExpirationDays"
        }
      }
    }
  },
  {
    "id": "ms700-q42",
    "prompt": "NO.42 You have a Teams deployment.\nYou start a meeting and enable the following settings:\n* Enable Green room\n* Provide CART Captions\n* Enable end-to-end Encryption\n* Anonymous users can join the meeting\nWhat feature is no longer available during the meeting?",
    "image": "",
    "answers": [
      "Microsoft 365 Copilot in Teams meetings and events",
      "meeting chat",
      "screen sharing",
      "Raise hand"
    ],
    "correctAnswer": "Microsoft 365 Copilot in Teams meetings and events",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q43",
    "prompt": "NO.43 Task 4\nYou need to add the following disclaimer as pan of all Teams meeting invites:\n\"Disc aimer: This meeting may be recorded for quality and training purposes.\"",
    "image": "",
    "answers": [
      "Questão em formato não suportado por este app (consulte o PDF)."
    ],
    "correctAnswer": "Questão em formato não suportado por este app (consulte o PDF).",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q44",
    "prompt": "NO.44 Task 1\nYour company is opening a branch office in Miami. The office uses a network range of 10.10.10.0/24.\nYou need to restrict Teams bandwidth to 1.000 Kpbs for all the users working at the Miami office. The\nsolution must NOT affect other offices.",
    "image": "",
    "answers": [
      "Questão em formato não suportado por este app (consulte o PDF)."
    ],
    "correctAnswer": "Questão em formato não suportado por este app (consulte o PDF).",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q45",
    "prompt": "NO.45 Your company uses Teams Calling Plans.\nWhen a user places a Teams call to an ambulance service, you need to ensure that a notification is\nalso sent to the main receptionist of the company.\nWhat should you configure?",
    "image": "",
    "answers": [
      "a calling policy",
      "a caller ID policy",
      "an emergency calling policy",
      "a voice routing policy"
    ],
    "correctAnswer": "an emergency calling policy",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q46",
    "prompt": "NO.46 Your company has a Microsoft 365 subscription.\nAll users have computers that run Windows 10. The computers are joined to Azure Active Directory\n(Azure AD) and enrolled in Microsoft Intune. All the users are standard users.\nThe company plans to start using Microsoft Teams.\nYou need to deploy the Microsoft Teams client to the computers.\nWhat should you use?",
    "image": "",
    "answers": [
      "an app in Microsoft Intune",
      "an Azure AD app registration",
      "a domain-based Group Policy Object (GPO)",
      "Azure App Service"
    ],
    "correctAnswer": "an app in Microsoft Intune",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q47",
    "prompt": "NO.47 Task 4\nYou need to ensure that the Approvals app is pinned to the top of the app bar of the Teams client for\nall members of the Retail team. The solution must NOT affect other users.",
    "image": "",
    "answers": [
      "Questão em formato não suportado por este app (consulte o PDF)."
    ],
    "correctAnswer": "Questão em formato não suportado por este app (consulte o PDF).",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q48",
    "prompt": "NO.48 Task 3\nYou need to ensure that a team named US Sales automatically contains all the users that have the\ndepartment attribute set to Sales. No other users must be members of the team.",
    "image": "",
    "answers": [
      "Questão em formato não suportado por este app (consulte o PDF)."
    ],
    "correctAnswer": "Questão em formato não suportado por este app (consulte o PDF).",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q49",
    "prompt": "NO.49 Task 6\nYou need to configure a virtual receptionist for your company's main office located at 1 Microsoft\nWay, Redmond. The solution must meet the following requirements:\n* Callers must press 1 for the company directory to lookup by name.\n* Callers must press 0 to hear the company address.\n* Callers must be offered the same menu at all times.",
    "image": "",
    "answers": [
      "Questão em formato não suportado por este app (consulte o PDF)."
    ],
    "correctAnswer": "Questão em formato não suportado por este app (consulte o PDF).",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q50",
    "prompt": "NO.50 You need to ensure that file sharing during Teams chats meets the technical requirements of\nthe marketing department.\nWhat should you do?",
    "image": "",
    "answers": [
      "Create a retention policy for Teams chats.",
      "Create a data loss prevention (DIP) policy for Teams chat and channel messages.",
      "Enable Customer Lockbox.",
      "Create a retention policy for the OneDrive accounts location.",
      "Create a retention policy for the SharePoint sites location."
    ],
    "correctAnswer": "Create a retention policy for the SharePoint sites location.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q51",
    "prompt": "NO.51 Task 5\nYou need to ensure that content on Microsoft SharePoint Online sites can be shared only with new\nand existing guest users.",
    "image": "",
    "answers": [
      "A. Questão em formato não suportado por este app (consulte o PDF)."
    ],
    "correctAnswer": "A. Questão em formato não suportado por este app (consulte o PDF).",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q52",
    "prompt": "NO.52 Task 1\nYou need to ensure that all unused teams expire and are deleted automatically. The solution must\nmeet the following requirements.\n* The teams must expire 365 days from their creation date.\n* Notifications for the expiration of orphaned teams must be sent to\nadminLODSe551723.onmicrosoft.com.",
    "image": "",
    "answers": [
      "A. Questão em formato não suportado por este app (consulte o PDF)."
    ],
    "correctAnswer": "A. Questão em formato não suportado por este app (consulte o PDF).",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q53",
    "prompt": "NO.53 Task 10\nYou need to set Microsoft SharePoint as the only cloud storage option for all teams.",
    "image": "",
    "answers": [
      "A. Questão em formato não suportado por este app (consulte o PDF)."
    ],
    "correctAnswer": "A. Questão em formato não suportado por este app (consulte o PDF).",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q54",
    "prompt": "NO.54 Task 2\nYou need to configure only the Teams meeting invites of Allan DeYoung to first show a dial-in bridge\nnumber in Toronto, and then show then a dial-in bridge number in Pans in the body of his invites.",
    "image": "",
    "answers": [
      "A. Questão em formato não suportado por este app (consulte o PDF)."
    ],
    "correctAnswer": "A. Questão em formato não suportado por este app (consulte o PDF).",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q55",
    "prompt": "NO.55 Your company uses the Microsoft teams.\nYou are planning the governance strategy for Microsoft teams. All task must be performed by a user\nwho will be assigned the Global Administrator role and will not be a team owner.\nArchive a tea\nRestore a delete team\nPermanently delete a team\nWhich tool should you identify for each task? To answer, drag the appropriate tools to the correct\ntasks. Each tool may be used once. More than once, or not at all. You may need to drag the split bar\nbetween panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "allowAnswerShuffle": false,
    "type": "dragMatch",
    "items": [
      {
        "id": "it1",
        "label": "The Microsoft Teams Admin Center"
      },
      {
        "id": "it2",
        "label": "The Microsoft Entra Admin Center"
      },
      {
        "id": "it3",
        "label": "The Microsoft Teams Desktop Client"
      }
    ],
    "targets": [
      {
        "id": "restore_deleted_team",
        "label": "Restore a deleted Team"
      },
      {
        "id": "archive_team",
        "label": "Archive a team"
      },
      {
        "id": "permanently_delete_team",
        "label": "Permanently delete a team"
      }
    ],
    "correctByTarget": {
      "restore_deleted_team": "it1",
      "archive_team": "it2",
      "permanently_delete_team": "it3"
    }
  },
  {
    "id": "ms700-q56",
    "prompt": "NO.56 You have a Microsoft 365 E5 subscription that uses Teams.\nUsers report that they receive a notification in their Teams client to fill in a survey and send the\nresults to Microsoft.\nYou need to use PowerShell to disable the notification.\nWhich PowerShell cmdlet should you run?",
    "image": "",
    "answers": [
      "New-CsTeamsMessagingPolicy",
      "New-CsTeamsFeedbackPolicy",
      "New-CsTeamsEventsPolicy",
      "New-CsTeamsAppPermissionPolicy"
    ],
    "correctAnswer": "New-CsTeamsAppPermissionPolicy",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q57",
    "prompt": "NO.57 Your company has a Microsoft 365 subscription.\nYou need to create an auto attendant from the Microsoft Teams admin center.\nWhich object must be associated to the auto attendant?",
    "image": "",
    "answers": [
      "a conferencing bridge",
      "a shared mailbox",
      "a Calling Plan",
      "a resource account"
    ],
    "correctAnswer": "a resource account",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q58",
    "prompt": "NO.58 Your company has a Microsoft 365 subscription.\nThe company deploys Microsoft Teams for 5,000 users.\nYou need to generate a report that contains the following information:\nThe number of active Microsoft Teams users during the last seven days.\nThe number of active team channels during the last seven days.\nWhich usage reports should you run?",
    "image": "",
    "answers": [
      "Teams device usage",
      "Teams live event usage",
      "Teams user activity",
      "Teams usage"
    ],
    "correctAnswer": "Teams usage",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q59",
    "prompt": "NO.59 You have a Microsoft 365 subscription that uses Teams.\nYour company uses a license that includes 60 minutes of dial-out for Teams meetings.\nYou need to review the total costs of each meeting organizer for dial-out calls during meetings.\nWhich report should you review?",
    "image": "",
    "answers": [
      "the Microsoft Call Quality Dashboard summary report",
      "the Microsoft Call Quality Dashboard detailed report",
      "PSTN minute pools",
      "PSTN and SMS usage",
      "Audio Conferencing dial-out usage"
    ],
    "correctAnswer": "Audio Conferencing dial-out usage",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q60",
    "prompt": "NO.60 You have a Microsoft 365 E5 subscription that uses Teams.\nYou need to integrate Microsoft 365 Defender with Teams to prevent users from uploading malicious\nfiles to a Teams channel.\nWhat should you do first?",
    "image": "",
    "answers": [
      "Turn on the Built-in protection (Microsoft) Safe Links policy.",
      "From Safe Links, edit the Global settings.",
      "From Safe Attachments, edit the Global settings.",
      "Create a Sate Attachments policy."
    ],
    "correctAnswer": "From Safe Attachments, edit the Global settings.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q61",
    "prompt": "NO.61 What should you create to meet the meeting requirements for the R&D department?",
    "image": "",
    "answers": [
      "a meeting policy",
      "a team policy",
      "a data loss prevention (DLP) policy",
      "an app setup policy"
    ],
    "correctAnswer": "a meeting policy",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q62",
    "prompt": "NO.62 Your company has a Microsoft 365 E5 subscription.\nYou plan to create a team that will automatically include all new and existing users at the company.\nYou need to identify which role-based access control (RBAC) role is required to create the team, and\nwhich tool must be used to create the team. The solution must use the principle of least privilege.\nWhat should you identify? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "team_creation",
        "label": "Create the org-wide dynamic team"
      }
    ],
    "columns": [
      {
        "id": "role",
        "label": "Role",
        "options": [
          "Global Administrator",
          "Groups administrator",
          "Teams Administrator",
          "User Administrator"
        ],
        "correctByRow": {
          "team_creation": "Global Administrator"
        }
      },
      {
        "id": "tool",
        "label": "Tool",
        "options": [
          "Azure Active Directory admin center",
          "Microsoft Teams admin center",
          "Microsoft Teams client",
          "Microsoft Teams PowerShell"
        ],
        "correctByRow": {
          "team_creation": "Microsoft Teams client"
        }
      }
    ],
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q63",
    "prompt": "NO.63 You are assigned the Groups Administrator role.\nYou discover that you cannot create an expiration policy in Microsoft 365.\nYou need to create the expiration policy. The solution must use the principle of least privilege.\nWhat should you do first?",
    "image": "",
    "answers": [
      "Modify the global (Org-wide default) app permission policy.",
      "Request the Global Administrator role.",
      "Upgrade the Azure AD license.",
      "Purchase a Microsoft Defender for Identity license."
    ],
    "correctAnswer": "Request the Global Administrator role.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q64",
    "prompt": "NO.64 Your company has a Microsoft 365 subscription that contains several teams.\nThe company's security policy states that an administrator must be notified when a new team is\ncreated by using the Build a team from scratch option.\nYou need to configure the environment to meet the security policy requirement.\nWhat should you do?",
    "image": "",
    "answers": [
      "From the Security & Compliance admin center, create a supervision policy.",
      "From the Security & Compliance admin center, create an alert policy.",
      "From the Azure Active Directory admin center, create a protection notification.",
      "From the Microsoft Teams admin center, modify the global teams policy."
    ],
    "correctAnswer": "From the Security & Compliance admin center, create an alert policy.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q65",
    "prompt": "NO.65 You manage the Microsoft Teams environment for your company.\nSeveral users report poor call quality.\nYou need to ensure that a user named Admin5 can review the call quality metrics of all the users at\nthe company. The solution must use the principle of least privilege.\nWhich role should you assign to Admin5?",
    "image": "",
    "answers": [
      "Teams Service Administrator",
      "Teams Communications Support Engineer",
      "Teams Communications Support Specialist",
      "Teams Communications Administrator"
    ],
    "correctAnswer": "Teams Communications Support Engineer",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q66",
    "prompt": "NO.66 You have a Microsoft 365 subscription that uses Teams.\nYou need to create a custom policy named Policy1 that will disable the ability to send feedback and\nsuggestions about Teams to Microsoft.\nHow should you complete the PowerShell command? To answer, select the appropriate options in\nthe answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "slot": "cmdlet"
        },
        {
          "text": " -Identity \"Policy1\" "
        },
        {
          "slot": "param"
        },
        {
          "text": " disabled"
        }
      ],
      "slots": {
        "cmdlet": {
          "label": "Cmdlet",
          "options": [
            "New-CsTeamsFeedBackPolicy",
            "New-CsTeamsMessagingPolicy",
            "New-CSReportingConfiguration"
          ],
          "correct": "New-CsTeamsFeedBackPolicy"
        },
        "param": {
          "label": "Parameter",
          "options": [
            "-AllowUserChat",
            "-ReceiveSurveysMode",
            "-UserInitiatedMode"
          ],
          "correct": "-AllowUserChat"
        }
      }
    }
  },
  {
    "id": "ms700-q67",
    "prompt": "NO.67 Note: This question is part of a series of questions that present the same scenario. Each\nquestion in the series contains a unique solution that might meet the stated goals. Some question\nsets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYou have a Microsoft 365 subscription that contains several Microsoft SharePoint Online sites.\nYou need to ensure that the content stored in a SharePoint modern team site named Sales is\navailable from Microsoft Teams. The solution must ensure that when a new channel is added to a\nteam, a folder for the channel is created in the Sales site.\nSolution: From the Microsoft Teams client, you create a new team and select Create from an existing\nOffice\n365 group or team.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "Yes",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q68",
    "prompt": "NO.68 You have a Microsoft 365 subscription that uses Microsoft Teams.\nUsers report poor call quality.\nYou need to identify whether Teams calls use TCP or UDP.\nWhat should you review in the Microsoft Call Quality Dashboard?",
    "image": "",
    "answers": [
      "Quality of Experience Reports",
      "Quality Drill Down Reports",
      "Endpoint Reports",
      "Reliability Reports"
    ],
    "correctAnswer": "Endpoint Reports",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q69",
    "prompt": "NO.69 Your company uses Teams.\nYou have the following teams:\n* Accounting\n* Project Management\n* Information Technology\nYou plan to create new channels.",
    "image": "",
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "accounting",
        "label": "Accounting:"
      },
      {
        "id": "project_mgmt",
        "label": "Project Management:"
      }
    ],
    "columns": [
      {
        "id": "channelType",
        "label": "Channel type",
        "options": [
          "Private",
          "Shared",
          "Standard"
        ],
        "correctByRow": {
          "accounting": "Private",
          "project_mgmt": "Shared"
        }
      }
    ],
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q70",
    "prompt": "NO.70 You network contains an on-premises Active Directory domain that syncs to a Microsoft 365\nsubscription.\nFrom the Microsoft Teams client, you create a new team named Sales.\nYou need to ensure that the team includes all users in the company's sales department. The solution\nmust ensure that the new employees hired for the sales department are added automatically to the\nteam.\nWhich tool should you use to configure the membership of the Sales group?",
    "image": "",
    "answers": [
      "Active Directory Users and Computers",
      "the Microsoft 365 admin center",
      "Azure AD Connect",
      "the Azure Active Directory admin center"
    ],
    "correctAnswer": "the Microsoft 365 admin center",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q71",
    "prompt": "NO.71 You have a Teams deployment.\nYou need to customize the message that is displayed when a user requests access to a blocked app.\nWhat should you do in the Microsoft Teams admin center?",
    "image": "",
    "answers": [
      "Create a policy package.",
      "Configure the Customize app store settings.",
      "From Teams settings, configure the Notifications and feeds settings.",
      "From Manage apps, configure the Org-wide app settings.",
      "Create an app setup policy."
    ],
    "correctAnswer": "From Manage apps, configure the Org-wide app settings.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q72",
    "prompt": "NO.72 Your company uses Microsoft Skype for Business Online and Microsoft Teams.\nAll Skype for Business Online users can make and receive PSTN calls. Microsoft Teams is configured\nfor PSTN calls.\nYou plan to upgrade the Skype for Business Online users to Microsoft Teams.\nThe Teams upgrade settings are configured as shown in the Teams upgrade exhibit. (Click the Teams\nupgrade tab.)\nYou apply TeamsUpgradePolicy to the user accounts of the company's R&D and human resources\n(HR) departments by using the coexistence modes shown in the following table.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "s1",
        "label": "Users in the R&D department will not be able to join Skype for Business Online meetings."
      },
      {
        "id": "s2",
        "label": "Existing Skype for Business Online meetings scheduled by users in the HR department will migrate automatically to Microsoft Teams."
      },
      {
        "id": "s3",
        "label": "Users in the HR department will be able to make and receive PSTN calls by using Microsoft Teams."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "inputType": "radio",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "s1": "No",
          "s2": "Yes",
          "s3": "No"
        }
      }
    ],
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q73",
    "prompt": "NO.73 Your company has a Microsoft 365 subscription.\nYou need to configure Microsoft Teams to meet the requirements shown in the following table.\nWhat should you configure for each requirement!? To answer, select the appropriate options in the\nanswer area.\nNOTE: Each correct selection is worth one point.",
    "image": "ms700q73",
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "r1",
        "label": "Requirement 1"
      },
      {
        "id": "r2",
        "label": "Requirement 2"
      },
      {
        "id": "r3",
        "label": "Requirement 3"
      }
    ],
    "columns": [
      {
        "id": "config",
        "label": "Configure",
        "options": [
          "Live event policies",
          "Live events settings",
          "Meeting policies",
          "Meeting settings"
        ],
        "correctByRow": {
          "r1": "Live event policies",
          "r2": "Meeting settings",
          "r3": "Meeting policies"
        }
      }
    ],
    "allowAnswerShuffle": false,
    "metaNote": "Linhas genéricas (Requirement 1..3) porque a tabela da answer area não foi extraída em texto; respostas 1/2/3 extraídas da explicação."
  },
  {
    "id": "ms700-q74",
    "prompt": "NO.74 You have a Microsoft Office 365 subscription that contains a user named User1.\nYou need to ensure that User1 can view Usage reports in the Microsoft Teams admin center; The\nsolution must use the principle of least privilege.\nWhich role should you assign to User'?",
    "image": "",
    "answers": [
      "Teams Communication support specialist",
      "Global administrator",
      "Global reader",
      "Teams Administrator"
    ],
    "correctAnswer": "Global reader",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q75",
    "prompt": "NO.75 You have a Microsoft 365 E5 subscription.\nYou plan to use Teams.\nYou run the Microsoft 365 network connectivity test tool and generate a report.\nYou discover that the Microsoft Teams section of the report has a warning notification for media\nconnectivity.\nYou suspect a firewall issue at the test location.\nWhich destination protocol and port range should you configure on the firewall?",
    "image": "",
    "answers": [
      "UDP ports 3478 through 3481",
      "UDP ports 50000 through 50019",
      "UDP ports 50020 through 50059",
      "TCP ports 3478 through 3481"
    ],
    "correctAnswer": "TCP ports 3478 through 3481",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q76",
    "prompt": "NO.76 You have a Microsoft 365 subscription that uses Microsoft Teams.\nWhen a user creates a new team, the user sees the templates shown in the following exhibit.",
    "image": "ms700q76",
    "answers": [
      "From the Microsoft Teams admin center, modify the team templates.",
      "From PowerShell, modify the team templates.",
      "From the Microsoft Teams admin center, modify the templates policies.",
      "From PowerShell, modify the Teams policies."
    ],
    "correctAnswer": "From the Microsoft Teams admin center, modify the templates policies.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q77",
    "prompt": "NO.77 Your company has a Microsoft Office 365 subscription.\nThe company has offices in France, United States, and Belgium.\nYou plan to implement Phone System to meet the following requirements:\n* The office in Belgium must use SIP trunks from the current telecommunication provider.\n* The office in France must integrate the phone number range and an on-premises IP-PBX.\n* The office in the United States must minimize the infrastructure required to deploy the planned\nPhone System.\nYou need to recommend which PSTN connectivity meets the requirements.\nWhich PSTN connectivity should you recommend for each office? To answer, select the appropriate\noptions in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "fr",
        "label": "France"
      },
      {
        "id": "be",
        "label": "Belgium"
      },
      {
        "id": "us",
        "label": "United States"
      }
    ],
    "columns": [
      {
        "id": "pstn",
        "label": "PSTN connectivity",
        "options": [
          "Calling Plans",
          "Direct Routing"
        ],
        "correctByRow": {
          "fr": "Direct Routing",
          "be": "Direct Routing",
          "us": "Calling Plans"
        }
      }
    ],
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q78",
    "prompt": "NO.78 You have a Microsoft 36S subscription that uses Teams.\nYou have two teams named Department! and Department.\nYou need to implement a security and compliance solution that meets the following requirements:\n* Prevents the members of Department! and Department from communicating with each other in\nTeams\n* Provides an alert if offensive language is used during a Teams chat\nWhich Microsoft Purview feature should you use for each requirement? To answer, select the\nappropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "req1",
        "label": "Prevents the members of Department1 and Department2 from communicating in Teams"
      },
      {
        "id": "req2",
        "label": "Provides an alert if offensive language is used during a Teams chat"
      }
    ],
    "columns": [
      {
        "id": "feature",
        "label": "Microsoft Purview feature",
        "options": [
          "Information Barriers",
          "Information protection",
          "Insider risk management",
          "Privacy risk management",
          "Communication compliance"
        ],
        "correctByRow": {
          "req1": "Information Barriers",
          "req2": "Communication compliance"
        }
      }
    ],
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q79",
    "prompt": "NO.79 Your company has a Microsoft 365 subscription.\nAll users have a computer that runs Windows 10 and has Microsoft Teams installed.\nA user reports the following issues:\n* Users lose their connection during screen sharing.\n* The user selection process takes too long to complete.\n* The Microsoft Teams client crashes and restarts automatically.\nYou need to view the Microsoft Teams debug logs to troubleshoot the issues.\nWhat should you do?",
    "image": "",
    "answers": [
      "From the Microsoft Teams client, select F1. Open the ETL files in the %Appdata%\\Microsoft\\Team s \\folder.",
      "From the Microsoft Teams client, select Ctrl+Alt+Shift+1. Open the log files in the %Userprofile% \\Downloads\\ folder.",
      "From Event Viewer, open the Application log and filter the log for a keyword of MSTeams.",
      "Right-click the Microsoft Teams icon in the application tray, and then select Get logs. Open Logs.txt in the%Appdata%\\Microsoft\\Teams\\ folder."
    ],
    "correctAnswer": "From the Microsoft Teams client, select Ctrl+Alt+Shift+1. Open the log files in the %Userprofile% \\Downloads\\ folder.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q80",
    "prompt": "NO.80 You have a Microsoft 365 E5 subscription that uses Teams.\nYour company requires that all inactive teams be deleted.\nYou need to identify teams that were inactive during the last 90 days.\nWhat should you use?",
    "image": "",
    "answers": [
      "the Teams usage report",
      "access reviews",
      "Microsoft Adoption Score",
      "Teams advisor"
    ],
    "correctAnswer": "the Teams usage report",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q81",
    "prompt": "NO.81 Your company uses Teams.\nYou plan to assign an enhanced encryption policy to enable end-to-end encryption for Teams calls.\nWhich features support end-to-end encryption for one-to-one Teams calls?",
    "image": "",
    "answers": [
      "audio only",
      "video only",
      "chat only",
      "audio and video only",
      "audio, video, and chat"
    ],
    "correctAnswer": "audio, video, and chat",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q82",
    "prompt": "NO.82 Your company uses Teams.\nYou successfully port and assign an audio conferencing toll-free number to Microsoft.\nYou test the toll-free number and ensure that meetings are successful.\nThe next day, you receive reports that the toll-free number is no longer working, but local toll\nnumbers still work.\nYou need to ensure that the toll-free number works.\nWhat should you do?",
    "image": "",
    "answers": [
      "Add the toll-free number to an Audio Conferencing policy.",
      "Set Anonymous users and dial-in callers can start a meeting to On",
      "Add Communication Credits.",
      "Set the toll-free number as the default conference bridge."
    ],
    "correctAnswer": "Add the toll-free number to an Audio Conferencing policy.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q83",
    "prompt": "NO.83 You have a Microsoft 365 subscription that uses Microsoft Teams.\nYou have a team named R&D_Projects.\nYou need to prevent guest users from being invited to R&D_Projects. The guest users must be able to\nbe invited to other teams.\nWhat are two ways to block guest access to the R&D_Projects team? Each correct answer presents a\ncomplete solution.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "From the Microsoft 365 admin center, disable guest access.",
      "Apply a sensitivity label to the R&D_Projects team.",
      "From the Microsoft Teams admin center, disable guest access.",
      "From Azure PowerShell, run the New-AzureADObjectSetting cmdlet.",
      "Configure a Microsoft 365 group expiration policy."
    ],
    "correctAnswer": [
      "Apply a sensitivity label to the R&D_Projects team.",
      "From Azure PowerShell, run the New-AzureADObjectSetting cmdlet."
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q84",
    "prompt": "NO.84 You have a Microsoft 365 E3 subscription that uses Microsoft Teams.\nYou plan to deploy 20 conference phones that win support Direct Routing and one-touch join for\nTeams calendar meetings.\nWhich type of license do you require for each phone?",
    "image": "",
    "answers": [
      "Microsoft 365 Business Standard",
      "Microsoft Teams Rooms Standard",
      "Common Area Phone",
      "Microsoft 365 E3"
    ],
    "correctAnswer": "Microsoft 365 E3",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q85",
    "prompt": "NO.85 You have a Microsoft 365 E5 subscription that has Teams Premium licenses. The subscription\ncontains an Azure Virtual Desktop deployment that has a session host named Host1.\nYou plan to install the Teams for virtual desktop infrastructure (VDl) client on Host1.\nYou need to identify which Teams features will be unavailable to Host1.\nWhich two features should you identify? Each correct answer presents a complete solution.\nNOTE Each correct selection is worth one point",
    "image": "",
    "answers": [
      "end-to-end encryption",
      "background blur",
      "live captions",
      "custom meeting backgrounds",
      "multi-window"
    ],
    "correctAnswer": [
      "end-to-end encryption",
      "custom meeting backgrounds"
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q86",
    "prompt": "NO.86 You have a Microsoft 365 subscription that uses Microsoft Teams. All users are assigned a\nMicrosoft Office\n365 Enterprise E3 license.\nYou need to ensure that the users can join scheduled meetings by dialing a toll-free phone number.\nWhich two add-on licenses should you assign to the users? Each correct answer presents part of the\nsolution.\nEach correct selection is worth one point.",
    "image": "",
    "answers": [
      "Communication Credits",
      "Microsoft 365 Audio Conferencing",
      "Microsoft 365 Domestic Calling Plan",
      "Microsoft Teams Phone Standard - Virtual User",
      "Common Area Phone"
    ],
    "correctAnswer": [
      "Communication Credits",
      "Microsoft 365 Audio Conferencing"
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q87",
    "prompt": "NO.87 You have a Microsoft 365 E5 subscription and use Microsoft Teams.\nYou plan to support meetings that use breakout rooms.\nYou need to recommend a breakout room solution that meets the following requirements:\n* Supports 500 participants\n* Supports content sharing and chat\nWhat should you include in the recommendation?",
    "image": "",
    "answers": [
      "meetings",
      "live events",
      "town halls",
      "webinars"
    ],
    "correctAnswer": "meetings",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q88",
    "prompt": "NO.88 You have a Microsoft 365 E5 subscription that uses Teams.\nYou need to ensure that all the files in Teams channels are stored for at least one year after the files\nare deleted.\nWhat should you do?",
    "image": "",
    "answers": [
      "Create an Audit retention policy.",
      "Enable Customer Lockbox.",
      "Create a data loss prevention (DIP) policy for Teams chat and channel messages.",
      "Create a retention policy for Microsoft SharePoint sites."
    ],
    "correctAnswer": "Create a retention policy for Microsoft SharePoint sites.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q89",
    "prompt": "NO.89 Your company is upgrading from Microsoft Skype for Business Online to Microsoft Teams.\nThe company's Microsoft Teams upgrade policy is set to Islands coexistence mode. The company\nplans to maintain the coexistence mode for several months.\nSeveral users report that they receive email messages about missed chat conversations.\nYou need to recommend a solution to ensure that all the users receive chat messages.\nWhich two actions should you recommend? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "Install the Microsoft Teams clients on all the computers that run the Skype for Business client. Instruct the users to sign in to both client applications.",
      "Instruct the users to modify the permissions in the Microsoft Teams client.",
      "Modify the global app setup policy.",
      "Modify the global app permission policy.",
      "Install the Skype for Business client on all the computers that run the Microsoft Teams client. Instruct the users to sign in to both client applications."
    ],
    "correctAnswer": [
      "Install the Microsoft Teams clients on all the computers that run the Skype for Business client. Instruct the users to sign in to both client applications.",
      "Install the Skype for Business client on all the computers that run the Microsoft Teams client. Instruct the users to sign in to both client applications."
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q90",
    "prompt": "NO.90 You have a Microsoft Office 365 subscription.\nYou create a team named Room1.\nYou need to ensure that Room1 automatically accepts meeting invitations. The solution must prevent\nmeeting invitations from being accepted if the room is unavailable.\nHow should you complete the PowerShell command? To answer, select the appropriate options in\nthe answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "text": "Set-CalendarProcessing -Identity 'Room1' -AutomateProcessing "
        },
        {
          "slot": "automate"
        },
        {
          "text": " -AllowConflicts "
        },
        {
          "slot": "allow"
        }
      ],
      "slots": {
        "automate": {
          "label": "-AutomateProcessing",
          "options": [
            "AutoAccept",
            "AutoProcessing",
            "AutoUpdate"
          ],
          "correct": "AutoAccept"
        },
        "allow": {
          "label": "-AllowConflicts",
          "options": [
            "$False",
            "$Null",
            "$True"
          ],
          "correct": "$False"
        }
      }
    }
  },
  {
    "id": "ms700-q91",
    "prompt": "NO.91 Note: This question is part of a series of questions that present the same scenario. Each\nquestion in the series contains a unique solution that might meet the stated goals. Some question\nsets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYour company has a Microsoft 365 subscription and a Virtual Desktop Infrastructure (VDI) solution.\nThe company's Microsoft Teams upgrade policy is set to Teams only coexistence mode.\nYou deploy the Microsoft Installer (MSI) package for Microsoft Teams to the VDI solution.\nSeveral months later, users of the VDI solution report that their workstation is missing several new\nMicrosoft Teams features.\nYou need to ensure that the VDI solution users can use the new Microsoft Teams features.\nSolution: From the Microsoft Teams admin center, you modify the Microsoft Teams upgrade policy.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "No",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q92",
    "prompt": "NO.92 You have a Microsoft 365 subscription that contains two users named User1 and User2.\nYou have a custom Teams app named App1.\nYou need to ensure that the users can perform the following tasks:\n* User1 must be able to upload App1 to Teams and validate the functionality of App1 by using the\nTeams client.\n* User2 must be able to deploy App1 to the organization.\nWhat should you configure for each user? To answer, select the appropriate options in the answer\narea.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "user1",
        "label": "User1"
      },
      {
        "id": "user2",
        "label": "User2"
      }
    ],
    "columns": [
      {
        "id": "config",
        "label": "Configure",
        "options": [
          "App Setup policies",
          "Customize store",
          "Org-wide app settings",
          "Role Assignments",
          "Teams settings"
        ],
        "correctByRow": {
          "user1": "App Setup policies",
          "user2": "Role Assignments"
        }
      }
    ],
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q93",
    "prompt": "NO.93 Note: This question is part of a series of questions that present the same scenario. Each\nquestion in the series contains a unique solution that might meet the stated goals. Some question\nsets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYour company has a Microsoft 365 subscription.\nYou plan to configure the environment to allow external users to collaborate in Microsoft Teams by\nusing guest access.\nThe company implements a new security policy that has the following requirements:\n* Only guest users from specific domains must be allowed to connect to collaborate by using\nMicrosoft Teams.\n* Guest users must be prevented from inviting other guests.\nYou need to recommend a solution to meet the security policy requirements.\nSolution: From PowerShell, you run the New-AzureADPolicy and Set-AzureADPolicy cmdlets.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "No",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q94",
    "prompt": "NO.94 You have a Microsoft 365 E5 subscription and use Microsoft Teams.\nA user named User1 reports that Microsoft Teams Meeting Add-in for Microsoft Outlook is\nunavailable and cannot be installed.\nYou need to ensure that the add-in can be installed.\nWhat should you do?",
    "image": "",
    "answers": [
      "Validate the Meeting policies settings.",
      "Clear the Teams client cache of User1.",
      "Validate the Teams policies settings.",
      "Instruct User1 to update to the most recent version of the Teams client."
    ],
    "correctAnswer": "Instruct User1 to update to the most recent version of the Teams client.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q95",
    "prompt": "NO.95 You have a Microsoft 365 E5 subscription that uses Microsoft Teams. The subscription\ncontains a group named Group 1.\nYou need to prevent the members of Group1 from recording meetings.\nHow should you complete the PowerShell script? To answer, select the appropriate options in the\nanswer area.\nEach correct selection is worth one point.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "slot": "cmdlet"
        },
        {
          "text": " -Identity Group1 "
        },
        {
          "slot": "setting"
        },
        {
          "text": " False"
        }
      ],
      "slots": {
        "cmdlet": {
          "label": "Cmdlet",
          "options": [
            "Grant-CsTeamsAppPermissionPolicy",
            "Set-CsTeamsMeetingConfiguration",
            "Set-CsTeamsMeetingPolicy",
            "Set-CsTeamsMessagingPolicy"
          ],
          "correct": "Set-CsTeamsMeetingConfiguration"
        },
        "setting": {
          "label": "Setting",
          "options": [
            "AllowCloudRecording",
            "AllowCloudRecordingForCalls",
            "AllowIPVideo",
            "ChannelRecordingDownload"
          ],
          "correct": "AllowCloudRecordingForCalls"
        }
      }
    }
  },
  {
    "id": "ms700-q96",
    "prompt": "NO.96 You have a Microsoft Office 365 subscription that contains a user named User1.\nYou need to ensure that User1 can view Analytics & reports in the Microsoft Teams admin center.\nThe solution must use the principle of least privilege.\nWhich role should you assign to User1?",
    "image": "",
    "answers": [
      "Teams Communication support specialist",
      "Skype for Business administrator",
      "Global reader",
      "Global administrator"
    ],
    "correctAnswer": "Skype for Business administrator",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q97",
    "prompt": "NO.97 You have a Microsoft 365 subscription that contains 300 users. All the users have existing\ndirect inward dial (DID) phone numbers. You plan to implement Phone System in Microsoft Teams.\nVou need to migrate the users' DID phone numbers to Microsoft Teams. What should you do?",
    "image": "",
    "answers": [
      "From the Microsoft 365 admin center, open a service request",
      "From the Microsoft Teams admin center, create a dial plan.",
      "From the Microsoft Teams admin center, run the porting wizard.",
      "From Voice in the Microsoft Teams admin center select Phone numbers, and then select Add"
    ],
    "correctAnswer": "From the Microsoft Teams admin center, run the porting wizard.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q98",
    "prompt": "NO.98 You have a Microsoft 365 E5 subscription that contains a Microsoft Teams team named Sales\nTeam. Sales Team contains the members shown in the following table.\nYou create a channel named Sales Project and configure the Channel moderation settings as shown in\nthe following exhibit.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "ms700q98",
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "s1",
        "label": "User1 can reply to channel messages."
      },
      {
        "id": "s2",
        "label": "User2 can add User4 as a moderator of the Sales Project channel."
      },
      {
        "id": "s3",
        "label": "User3 can start a new post in the Sales Project channel."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "inputType": "radio",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "s1": "Yes",
          "s2": "Yes",
          "s3": "No"
        }
      }
    ],
    "allowAnswerShuffle": false,
    "image2": "ms700q98.2"
  },
  {
    "id": "ms700-q99",
    "prompt": "NO.99 You have a Microsoft Office 365 subscription.\nYou need to meet the following requirements:\n* Pin specific apps to the Microsoft Teams app bar.\n* Prevent users from installing third-party apps published in the Teams app store.\n* Prevent users from pinning apps to the Microsoft Teams app bar.\nWhat should you use to meet each requirement? To answer, select the appropriate options in the\nanswer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "r1",
        "label": "Pin specific apps to the app bar"
      },
      {
        "id": "r2",
        "label": "Prevent users from pinning apps to the app bar"
      },
      {
        "id": "r3",
        "label": "Prevent users from installing third-party apps published to the Teams app store"
      }
    ],
    "columns": [
      {
        "id": "use",
        "label": "Use",
        "options": [
          "App Permission Policies",
          "App setup policies",
          "Microsoft Teams policies",
          "Microsoft Teams settings"
        ],
        "correctByRow": {
          "r1": "App setup policies",
          "r2": "App setup policies",
          "r3": "App Permission Policies"
        }
      }
    ],
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q100",
    "prompt": "NO.100 You have a Microsoft 365 subscription that uses Microsoft Teams.\nYou purchase three new Microsoft Teams display devices.\nYou need to provision the new devices remotely.\nWhat information should you use to identify each device, and which file format should you use for\nthe upload? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "text": "Use: "
        },
        {
          "slot": "use"
        },
        {
          "text": "   File format: "
        },
        {
          "slot": "fmt"
        }
      ],
      "slots": {
        "use": {
          "label": "Use",
          "options": [
            "The IP address",
            "The device name",
            "The MAC Address",
            "The resource account"
          ],
          "correct": "The MAC Address"
        },
        "fmt": {
          "label": "File format",
          "options": [
            "CSV",
            "PS1",
            "XML",
            "JSON"
          ],
          "correct": "CSV"
        }
      }
    }
  },
  {
    "id": "ms700-q101",
    "prompt": "NO.101 You have a Microsoft 365 subscription that uses Teams.\nYou need to implement a compliance solution that meets the following requirements:\n* Applies a watermark to the video feed of every user\n* Enables end-to end encryption for meetings\nWhich add-on license should you assign to the users, and which Teams feature will be disabled when\nusing the solution? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "r1",
        "label": "Seleções"
      }
    ],
    "columns": [
      {
        "id": "addon",
        "label": "Add-on license",
        "inputType": "select",
        "options": [
          "Audio Conferencing",
          "Communications Credits",
          "Microsoft Teams Premium",
          "Priva Privacy Risk Management"
        ],
        "correctByRow": {
          "r1": "Microsoft Teams Premium"
        }
      },
      {
        "id": "feature",
        "label": "Feature",
        "inputType": "select",
        "options": [
          "Chat during meetings",
          "Meeting recording",
          "Screen sharing",
          "Sharing content during meetings"
        ],
        "correctByRow": {
          "r1": "Meeting recording"
        }
      }
    ],
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q102",
    "prompt": "NO.102 Your company has a Microsoft Office 365 subscription.\nAll users can create private channels.\nYou need to prevent specific users from creating private channels.\nWhat should you create from the Microsoft Teams admin center?",
    "image": "",
    "answers": [
      "a Teams policy",
      "a meeting policy",
      "a setup policy",
      "a permission policy"
    ],
    "correctAnswer": "a Teams policy",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q103",
    "prompt": "NO.103 Your company uses Microsoft Teams.\nThe company has the departments and teams shown in the following table.\nYou need to recommend a solution to prevent the users in each department from inviting users from\nother departments to their team.\nWhat should you include in the recommendation?",
    "image": "",
    "answers": [
      "app permission policies",
      "Azure Information Protection",
      "supervision policies",
      "information barrier policies"
    ],
    "correctAnswer": "information barrier policies",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q104",
    "prompt": "NO.104 You have a Microsoft 365 subscription named contoso.com that uses Microsoft Teams and\ncontains the users shown in the following table.\nIn Azure AO. the External collaboration settings are configured as shown in the exhibit (Click the\nExhibit tab).\nAllow guest access in Teams is set to On.\nYou have a team named Project! that contains the users shown in the following table.\nBoth User1 and User3 are owners of a learn named Project1. User2 is a member of Project1.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "s1",
        "label": "User1 can invite a guest user named user3@adatum.com to Project1."
      },
      {
        "id": "s2",
        "label": "User2 can invite a guest user named user4@fabrikam.com to Project1."
      },
      {
        "id": "s3",
        "label": "User3 can invite a guest user named user5@fabrikam.com to Project1."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "inputType": "radio",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "s1": "No",
          "s2": "No",
          "s3": "Yes"
        }
      }
    ],
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q105",
    "prompt": "NO.105 You have a Microsoft 365 subscription that uses Microsoft Teams.\nYou need to configure phone settings to meet the following requirements:\n* Put a call on hold, and then transfer the call.\n* Hide the calling phone number of outgoing calls.\nWhat should you configure for each requirement? To answer, select the appropriate options in the\nanswer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "text": "Put a call on hold, and then transfer the call: "
        },
        {
          "slot": "holdTransfer"
        },
        {
          "text": "\nHide the calling phone number of outgoing calls: "
        },
        {
          "slot": "hideNumber"
        }
      ],
      "slots": {
        "holdTransfer": {
          "label": "Put a call on hold, and then transfer the call",
          "options": [
            "Call queues",
            "Call forwarding",
            "Call park policies",
            "Voice routing policies"
          ],
          "correct": "Call forwarding"
        },
        "hideNumber": {
          "label": "Hide the calling phone number of outgoing calls",
          "options": [
            "Call forwarding",
            "Caller ID policies",
            "Voice routing policies",
            "Microsoft Phone System Direct Routing"
          ],
          "correct": "Caller ID policies"
        }
      }
    }
  },
  {
    "id": "ms700-q106",
    "prompt": "NO.106 You have a Microsoft 365 ES subscription that uses Teams with Operator Connect.\nYou plan to deploy Teams conference phones that support PSTN calls and one-touch join for Teams\ncalendar meetings. Which license should you assign to each conference phone?",
    "image": "",
    "answers": [
      "Microsoft Teams Shared Device",
      "Teams Rooms Pro",
      "Microsoft 365 E5",
      "Microsoft 365 Business Standard",
      "Microsoft 365 E3"
    ],
    "correctAnswer": "Microsoft 365 E5",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q107",
    "prompt": "NO.107 Your company uses Microsoft Teams.\nYou are planning the compliance strategy for Microsoft Teams. All compliance tasks must be\nperformed by a user in the compliance department who will be assigned the Global admin role and\nwill not be a team owner.\nYou need to identify which tools to use for the following tasks:\n*Archive a team.\n*Restore a deleted team.\n*Permanently delete a team.\nWhich tool should you identify for each task? To answer, drag the appropriate tools to the correct\ntasks. Each tool may be used once, more than once, or not at all. You may need to drag the split bar\nbetween panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "allowAnswerShuffle": false,
    "type": "dragMatch",
    "items": [
      {
        "id": "it1",
        "label": "The Microsoft Teams admin center"
      },
      {
        "id": "it2",
        "label": "The Microsoft Teams admin center"
      },
      {
        "id": "it3",
        "label": "The Azure Active Directory admin center"
      },
      {
        "id": "it4",
        "label": "The Microsoft Teams desktop client"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "label": "Restore a deleted team:"
      },
      {
        "id": "t2",
        "label": "Archive a team:"
      },
      {
        "id": "t3",
        "label": "Permanently delete a team:"
      }
    ],
    "correctByTarget": {
      "t1": "it3",
      "t2": "it1",
      "t3": "it2"
    }
  },
  {
    "id": "ms700-q108",
    "prompt": "NO.108 You have a Microsoft 365 E5 subscription.\nYou purchase a new Teams Rooms device.\nYou need to create a Microsoft 365 resource account named Room1 for the device. The solution\nmust ensure that Room1 automatically accepts meeting invitations.\nHow should you complete the PowerShell command? To answer, select the appropriate options in\nthe answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "text": "New-Mailbox -MicrosoftOnlineServicesID \"Room1@contoso.com\" -Name \"Room1\" -DisplayName \"Room 1\" -Room"
        },
        {
          "br": true
        },
        {
          "text": "-EnableRoomMailboxAccount "
        },
        {
          "slot": "enable"
        },
        {
          "text": " -RoomMailboxPassword (ConvertTo-SecureString -String \"Pa55w.rd\" -AsPlainText -Force)"
        },
        {
          "br": true
        },
        {
          "br": true
        },
        {
          "slot": "cmdlet"
        },
        {
          "text": " -Identity \"Room1@contoso.com\" -AutomateProcessing AutoAccept -AddOrganizerToSubject $false -DeleteComments $false -DeleteSubject $false"
        }
      ],
      "slots": {
        "enable": {
          "label": "-EnableRoomMailboxAccount",
          "options": [
            "$true",
            "$false"
          ],
          "correct": "$true"
        },
        "cmdlet": {
          "label": "Cmdlet",
          "options": [
            "Set-Mailbox",
            "Set-CalendarProcessing",
            "Set-MailboxRegionalConfiguration",
            "Set-DistributionGroup"
          ],
          "correct": "Set-Mailbox"
        }
      }
    }
  },
  {
    "id": "ms700-q109",
    "prompt": "NO.109 Your company has a Microsoft Office 365 subscription.\nThe company has a Microsoft Teams group named Group1.\nYou need to remove inactive users from Group1. The members of Group1 must be validated every\nmonth.\nWhat should you use?",
    "image": "",
    "answers": [
      "supervision policies in the Security & Compliance admin center",
      "access reviews in the Azure Active Directory admin center",
      "eDiscovery cases in the Security & Compliance admin center",
      "usage reports in the Microsoft Teams admin center"
    ],
    "correctAnswer": "access reviews in the Azure Active Directory admin center",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q110",
    "prompt": "NO.110 Your company uses Microsoft Teams.\nYou have a meeting policy named Policy1 that is assigned to a group named Sales.\nYou need to ensure that all the meetings recorded by the Sales group are stored indefinitely.\nHow should you complete the PowerShell cmdlet? To answer, select the appropriate options in the\nanswer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "slot": "cmdlet"
        },
        {
          "text": " -Identity IT "
        },
        {
          "slot": "param"
        }
      ],
      "slots": {
        "cmdlet": {
          "label": "Cmdlet",
          "options": [
            "Set-CsTeamsMeetingPolicy",
            "Set-CsTeamsMeetingBroadcastConfiguration",
            "Set-CsTeamsMeetingBroadcastPolicy",
            "Set-CsTeamsMeetingConfiguration"
          ],
          "correct": "Set-CsTeamsMeetingPolicy"
        },
        "param": {
          "label": "Parameter",
          "options": [
            "-AllowCloudRecording",
            "-ChannelRecordingDownload",
            "-NewMeetingRecordingExpirationDays",
            "-RecordingStorageMode"
          ],
          "correct": "-NewMeetingRecordingExpirationDays"
        }
      }
    }
  },
  {
    "id": "ms700-q111",
    "prompt": "NO.111 Note: This question is part of a series of questions that present the same scenario. Each\nquestion in the series contains a unique solution that might meet the stated goals. Some question\nsets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYour company has a Microsoft 365 subscription that uses an Azure Active Directory (Azure AD) tenant\nnamed contoso.com.\nYou need to prevent guest users in the tenant from using cameras during Microsoft Teams meetings.\nSolution: From Microsoft Teams admin center, you modify the External collaboration settings.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "No",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q112",
    "prompt": "NO.112 You have a Microsoft 365 subscription that uses Teams.\nYou have a meeting room that contains a Teams Rooms device and a Surface Hub.\nYou have the following configuration file for the Teams Rooms device.\nFor each of the following statements, select Yes if True. Otherwise select No. NOTE: Each correct\nselection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "s1",
        "label": "Audio and video are enabled automatically on the Teams Rooms device when a meeting starts."
      },
      {
        "id": "s2",
        "label": "Participants can enable or disable audio on the Teams Rooms device."
      },
      {
        "id": "s3",
        "label": "The Surface Hub displays a shared whiteboard."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "inputType": "radio",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "s1": "Yes",
          "s2": "Yes",
          "s3": "No"
        }
      }
    ],
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q113",
    "prompt": "NO.113 Your company has a Microsoft 365 subscription that uses Phone System.\nYou need to configure Microsoft Teams to meet the following requirements:\n* Ensure that calls to the company's sales department are routed to multiple users in the sales\ndepartment.\n* Ensure that calls to the company's marketing department are routed to multiple users in the\nmarketing department.\n* Outside of business hours, ensure that calls from PSTN users receive a custom greeting.\n* During business hours, ensure that calls from PSTN users can be received by the sales and\nmarketing department users.\nWhat is the minimum number of auto attendants and call queues you should configure to meet the\nrequirements? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "aa",
        "label": "Auto attendants:"
      },
      {
        "id": "cq",
        "label": "Call queues:"
      }
    ],
    "columns": [
      {
        "id": "num",
        "label": "Number",
        "inputType": "select",
        "options": [
          "0",
          "1",
          "2",
          "3"
        ],
        "correctByRow": {
          "aa": "1",
          "cq": "2"
        }
      }
    ],
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q114",
    "prompt": "NO.114 You are Microsoft Teams administrator for your company.\nYou have the Org-wide app settings shown in the App Settings exhibit. (Click the App Settings tab.)\nThe company's global app permission policy is configured as shown in the Permission Policy exhibit.\n(Click the Permission Policy tab.)\nThe company's global app setup policy is configured as shown in the Setup Policy exhibit. (Click the\nSetup Policy tab.)\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "s1",
        "label": "Team members can upload apps from the Microsoft Teams client."
      },
      {
        "id": "s2",
        "label": "All team members can add the Microsoft Flow app to a team."
      },
      {
        "id": "s3",
        "label": "All team members can add the Microsoft Planner app to a team."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "inputType": "radio",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "s1": "Yes",
          "s2": "Yes",
          "s3": "Yes"
        }
      }
    ],
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q115",
    "prompt": "NO.115 You have a Microsoft 365 E5 subscription that has Phone System enabled for all Microsoft\nTeams users.\nYou need to configure the Phone System to meet the following requirements:\n* Provide a virtual receptionist that connects callers to either a specific user or the help desk.\n* Route calls to the help desk on a First in, First out (FIFO) order.\nWhich two resources should you create? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "a call park policy",
      "a call queue",
      "a voice routing policy",
      "a group call pickup",
      "an auto attendant",
      "a calling policy"
    ],
    "correctAnswer": [
      "a call queue",
      "an auto attendant"
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q116",
    "prompt": "NO.116 You have a Microsoft 365 E5 subscription that uses Teams.\nYou need to implement a consistent team naming strategy that meets the following requirements:\n* All team names must start with the department name of the user that created the team.\n* All team names must be followed by the word Department.\nHow should you configure the group naming policy? To answer, drag the appropriate configurations\nto the correct requirements. Each configuration may be used once, more than once, or not at all. You\nmay need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "allowAnswerShuffle": false,
    "type": "dragMatch",
    "items": [
      {
        "id": "it1",
        "label": "Add a prefix that has an attribute of Department."
      },
      {
        "id": "it2",
        "label": "Add a prefix that has a string of Department."
      },
      {
        "id": "it3",
        "label": "Add a suffix that has an attribute of Department."
      },
      {
        "id": "it4",
        "label": "Add a suffix that has a string of Department."
      }
    ],
    "targets": [
      {
        "id": "req1",
        "label": "To ensure that all team names start with the department name of the user that created the team:"
      },
      {
        "id": "req2",
        "label": "To ensure that all team names are followed by the word Department:"
      }
    ],
    "correctByTarget": {
      "req1": "it3",
      "req2": "it1"
    }
  },
  {
    "id": "ms700-q117",
    "prompt": "NO.117 Your company has a Microsoft Office 365 subscription.\nA user reports that a conference call on October 2 had poor audio quality.\nYou view the call history as shown in the Call History exhibit. (Click the Call History tab.)\nYou view the call analytics as shown in the Call Analytics exhibit. (Click the Call Analytics tab.)\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "s1",
        "label": "On October 2, all participants experienced good quality audio during the conference call."
      },
      {
        "id": "s2",
        "label": "On October 2, some participants on the conference call were external users."
      },
      {
        "id": "s3",
        "label": "The organizer of the October 2 meeting is a user at the company."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "inputType": "radio",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "s1": "No",
          "s2": "No",
          "s3": "Yes"
        }
      }
    ],
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q118",
    "prompt": "NO.118 You have a Microsoft 365 subscription that uses Microsoft Teams and contains a\ndistribution group named Group1 and a team named Project 1.\nYou add Group1 to Project 1.\n100 new members are added to Group1.\nWhen will the membership of Project1 will be updated to reflect the changes to the group\nmembership?",
    "image": "",
    "answers": [
      "Automatically and immediately",
      "Automatically after 24 hours",
      "Only when the group is re-added manually to Project1"
    ],
    "correctAnswer": "Automatically after 24 hours",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q119",
    "prompt": "NO.119 You have a Microsoft 365 subscription that uses Teams.\nYou plan to deploy Teams to a branch office named Branch1.\nYou need to review Microsoft 365 network telemetry insights and estimate the required network\nbandwidth required for the deployment to Branch1.\nWhat should you do for each requirement? To answer, select the appropriate options in the answer\narea.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "text": "Review Microsoft 365 network telemetry insights: "
        },
        {
          "slot": "telemetry"
        },
        {
          "text": "\nEstimate the required network bandwidth by using: "
        },
        {
          "slot": "bandwidth"
        }
      ],
      "slots": {
        "telemetry": {
          "label": "Review Microsoft 365 network telemetry insights",
          "options": [
            "From the Microsoft 365 admin center, configure the Network connectivity settings.",
            "From the Microsoft Teams admin center, configure the Network topology settings.",
            "From the Microsoft Teams admin center, use Network planner."
          ],
          "correct": "From the Microsoft 365 admin center, configure the Network connectivity settings."
        },
        "bandwidth": {
          "label": "Estimate the required network bandwidth",
          "options": [
            "Network planner",
            "Self-help diagnostics",
            "Teams advisor",
            "The Call Quality Dashboard (CQD)"
          ],
          "correct": "Network planner"
        }
      }
    }
  },
  {
    "id": "ms700-q120",
    "prompt": "NO.120 You have a Microsoft 365 E5 subscription that contains a Microsoft Teams team named\nConfidential. You need to ensure that guest users cannot be added to the Confidential team.\nHow should you complete the PowerShell script? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "text": "$GroupName = \"<GroupName>\"\n\nConnect-AzureAD\n\n$template = "
        },
        {
          "slot": "templateCmdlet"
        },
        {
          "text": " | ? {$_.displayname -eq \"group.unified.guest\"}\n\n$settingsCopy = $template.CreateDirectorySetting()\n\n$settingsCopy[\"AllowToAddGuests\"]=$False\n\n$groupID= ( "
        },
        {
          "slot": "groupIdCmdlet"
        },
        {
          "text": " -SearchString $GroupName).ObjectId\n\nNew-AzureADObjectSetting -TargetType Groups -TargetObjectId $groupID -DirectorySetting $settingsCopy"
        }
      ],
      "slots": {
        "templateCmdlet": {
          "label": "Blank 1",
          "options": [
            "Get-AzureADDirectorySetting",
            "Get-AzureADDirectorySettingTemplate",
            "Get-AzureADGroup",
            "Get-AzureADMSGroup",
            "Set-AzureADGroup",
            "Set-AzureADMSGroup"
          ],
          "correct": "Get-AzureADDirectorySettingTemplate"
        },
        "groupIdCmdlet": {
          "label": "Blank 2",
          "options": [
            "Get-AzureADDirectorySetting",
            "Get-AzureADDirectorySettingTemplate",
            "Get-AzureADGroup",
            "Get-AzureADMSGroup",
            "Set-AzureADGroup",
            "Set-AzureADMSGroup"
          ],
          "correct": "Get-AzureADDirectorySetting"
        }
      }
    }
  },
  {
    "id": "ms700-q121",
    "prompt": "NO.121 Your company uses Microsoft Teams and has an auto attendant named AA1.\nA user named User1 has a phone number of 613-555-1234.\nYou need to assign the phone number to AA1.\nWhich three actions should you perform in sequence in the Microsoft Teams admin center? To\nanswer, move the appropriate actions from the list of actions to the answer area and arrange them in\nthe correct order.",
    "image": "",
    "allowAnswerShuffle": false,
    "type": "dragMatch",
    "items": [
      {
        "id": "it1",
        "label": "Order a new phone number."
      },
      {
        "id": "it2",
        "label": "Release the phone number."
      },
      {
        "id": "it3",
        "label": "Unassign the phone number from User1."
      },
      {
        "id": "it4",
        "label": "Create a new case and set Case type to Inventory type change - change inventory type of my phone number(s)."
      },
      {
        "id": "it5",
        "label": "Assign the phone number to AA1."
      }
    ],
    "targets": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      }
    ],
    "correctByTarget": {
      "s1": "it3",
      "s2": "it4",
      "s3": "it5"
    }
  },
  {
    "id": "ms700-q122",
    "prompt": "NO.122 Your company has a Microsoft 365 subscription.\nYou plan to enable users to book meetings in several of the company's conference rooms by using\nthe Microsoft Teams client.\nYou need to create the required resources in Microsoft 365 for the conference rooms.\nWhat should you create for each conference room?",
    "image": "",
    "answers": [
      "a team",
      "a resource mailbox",
      "an auto attendant",
      "an Office 365 group"
    ],
    "correctAnswer": "a team",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q123",
    "prompt": "NO.123 Note: This question is part of a series of questions that present the same scenario. Each\nquestion in the series contains a unique solution that might meet the stated goals. Some question\nsets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYour company has a Microsoft 365 subscription.\nYou plan to configure the environment to allow external users to collaborate in Microsoft Teams by\nusing guest access.\nThe company implements a new security policy that has the following requirements:\n* Only guest users from specific domains must be allowed to connect to collaborate by using\nMicrosoft Teams.\n* Guest users must be prevented from inviting other guests.\nYou need to recommend a solution to meet the security policy requirements.\nSolution: From the Azure Active Directory, you modify the External collaboration settings.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "Yes",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q124",
    "prompt": "NO.124 You have a Microsoft 365 subscription that uses Microsoft Teams.\nYou plan to deploy collaboration bars for Microsoft Teams.\nYou need to manage built-in software and firmware updates for the collaboration bars. The solution\nmust use the principle of least privilege.\nWhich updates can be applied automatically, and which role is required to perform manual updates\nfor the collaboration bars? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "r1",
        "label": "Seleções"
      }
    ],
    "columns": [
      {
        "id": "upd",
        "label": "Updates that can be applied automatically",
        "inputType": "select",
        "options": [
          "Firmware only",
          "Oem agent app only",
          "Company portal app only",
          "Teams app and Teams admin agent"
        ],
        "correctByRow": {
          "r1": "Firmware only"
        }
      },
      {
        "id": "role",
        "label": "Role required to perform manual updates",
        "inputType": "select",
        "options": [
          "Teams Administrator",
          "Teams communication admin",
          "Teams communication support engineer",
          "Teams communication support specialist"
        ],
        "correctByRow": {
          "r1": "Teams Administrator"
        }
      }
    ],
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q125",
    "prompt": "NO.125 Your company uses Teams and deploys the Yammer Communities app to all users.\nThe communications department at the company needs you to replace the image on the Teams app\nbar for the Communities app.\nWhich three actions should you perform in sequence? To answer, drag the appropriate reports to the\ncorrect requirements. Each report may be used once, more than once, or not at all.",
    "image": "",
    "allowAnswerShuffle": false,
    "type": "dragMatch",
    "items": [
      {
        "id": "it1",
        "label": "From Customize store in the Microsoft Teams admin center, choose an image."
      },
      {
        "id": "it2",
        "label": "Publish the app."
      },
      {
        "id": "it3",
        "label": "From Manage apps in the Microsoft Teams admin center, select Customize."
      },
      {
        "id": "it4",
        "label": "From Org-wide app settings, set Show tailored apps to On."
      },
      {
        "id": "it5",
        "label": "Modify the Color icon and Outline icon settings."
      }
    ],
    "targets": [
      {
        "id": "s1",
        "label": "Step 1"
      },
      {
        "id": "s2",
        "label": "Step 2"
      },
      {
        "id": "s3",
        "label": "Step 3"
      }
    ],
    "correctByTarget": {
      "s1": "it3",
      "s2": "it4",
      "s3": "it2"
    }
  },
  {
    "id": "ms700-q126",
    "prompt": "NO.126 You have a Microsoft 365 subscription that uses Microsoft Teams.\nYou need to prevent users from creating private channels.\nWhat should you do?",
    "image": "",
    "answers": [
      "Create a messaging policy.",
      "Create a Teams policy.",
      "Modify the Teams settings.",
      "Create an app permission policy."
    ],
    "correctAnswer": "Create a Teams policy.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q127",
    "prompt": "NO.127 Your company uses Microsoft Teams.\nThe company has 10 corporate images.\nYou want to provide the images to users as custom backgrounds for Teams meetings.\nYou need to make the backgrounds available to Teams users.\nWhat should you configure?",
    "image": "",
    "answers": [
      "Meeting policies",
      "Team templates",
      "Meeting settings",
      "Teams settings"
    ],
    "correctAnswer": "Meeting policies",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q128",
    "prompt": "NO.128 You have a Microsoft 365 subscription that uses Teams. The subscription contains the users\nshown in the following table.\nYou have the meeting policies shown in the following table.\nThe meeting polices are assigned to teams as shown in the following table.\nFor each of the following statements, select Yes if True. Otherwise select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "allowAnswerShuffle": false,
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "s1",
        "label": "User1 can record meetings."
      },
      {
        "id": "s2",
        "label": "User2 can enable meeting registrations."
      },
      {
        "id": "s3",
        "label": "User3 can blur the video background."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "inputType": "radio",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "s1": "No",
          "s2": "Yes",
          "s3": "Yes"
        }
      }
    ]
  },
  {
    "id": "ms700-q129",
    "prompt": "NO.129 Your company uses Teams.\nA user reports that when they manually decline a Teams call, the call is NOT sent to their Teams\nvoicemail.\nWhich setting should you configure?",
    "image": "",
    "answers": [
      "Manage delegates",
      "Forward my calls",
      "Busy on busy when in a call",
      "Calls ring me"
    ],
    "correctAnswer": "Busy on busy when in a call",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q130",
    "prompt": "NO.130 Your company plans to migrate to Microsoft Teams from Microsoft Skype for Business\nOnline. The org-wide coexistence mode for Microsoft Teams is set to Teams Only.\nThe company has two named User1 and User2.\nYou need to implement a migration solution that meets the following requirements:\n* User1 must be able to chat and create meetings by using Skype for Business only.\n* User1 must be able to read and post messages by using Microsoft Teams channels.\n* User2 must use Microsoft Teams only.\nHow should you complete the PowerShell command? To answer, select the appropriate options in\nthe answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "allowAnswerShuffle": false,
    "type": "inlineDropdown",
    "inline": {
      "parts": [
        {
          "slot": "cmdlet"
        },
        {
          "text": " -PolicyName "
        },
        {
          "slot": "policy"
        },
        {
          "text": " -Identity "
        },
        {
          "slot": "identity"
        }
      ],
      "slots": {
        "cmdlet": {
          "label": "Cmdlet",
          "options": [
            "Grant-CsClientPolicy",
            "Grant-CsTeamsUpgradePolicy",
            "Move-CsLegacyUser"
          ],
          "correct": "Grant-CsTeamsUpgradePolicy"
        },
        "identity": {
          "label": "-Identity",
          "options": [
            "User1",
            "User2"
          ],
          "correct": "User1"
        },
        "policy": {
          "label": "-PolicyName",
          "options": [
            "Islands",
            "SfBOnly",
            "SfBWithTeamsCollab",
            "SfBWithTeamsCollabAndMeetings",
            "UpgradeToTeams"
          ],
          "correct": "SfBWithTeamsCollab"
        }
      }
    }
  },
  {
    "id": "ms700-q131",
    "prompt": "NO.131 Note: This question is part of a series of questions that present the same scenario. Each\nquestion in the series contains a unique solution that might meet the stated goals. Some question\nsets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYour company has 10 offices in North America and Europe.\nThe company has 5,000 users.\nYou plan to deploy Microsoft Teams for all the users.\nYou run a pilot project for the planned deployment.\nYou need to identify the network packet loss from the pilot computers to Microsoft Teams during\ncalls.\nSolution: From the Microsoft Teams admin center, you review the Microsoft Call Quality Dashboard.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "Yes",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q132",
    "prompt": "NO.132 You have an Azure Virtual Desktop deployment.\nYou have a Teams deployment.\nYou deploy the Teams for virtual desktop infrastructure (VDI) client on an Azure Virtual Desktop\nsession host and configure the registry settings as shown in the following exhibit.\nUse the drop-down menus to select the answer choice that completes each statement based on the\ninformation presented in the graphic.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "allowAnswerShuffle": false,
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "r1",
        "label": "To enable screen sharing, you must change the [answer choice] key."
      },
      {
        "id": "r2",
        "label": "To prevent users from sharing their desktop, you must change the [answer choice] key."
      }
    ],
    "columns": [
      {
        "id": "key",
        "label": "Key",
        "options": [
          "DisableRAILAppSharing",
          "DisableRAILScreenSharing",
          "ShareClientDesktop"
        ],
        "correctByRow": {
          "r1": "ShareClientDesktop",
          "r2": "DisableRAILScreenSharing"
        }
      }
    ]
  },
  {
    "id": "ms700-q133",
    "prompt": "NO.133 You have a Microsoft 365 subscription that uses Microsoft Teams and contains the users\nshown in the following table.\nYou have a team named Project1 that contains the members shown in the following table.\nYou need to monitor Project1 for the following administrative actions:\n* The creation and deletion of channels\n* Changing the role assignments of team members\nWhich users can monitor Project1, and which feature should the users use? To answer, select the\nappropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "allowAnswerShuffle": false,
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "line1",
        "label": "Selection"
      }
    ],
    "columns": [
      {
        "id": "feature",
        "label": "Feature",
        "options": [
          "Audit log",
          "Usage reports",
          "Teams advisor",
          "Content search",
          "Message center"
        ],
        "correctByRow": {
          "line1": "Audit log"
        }
      },
      {
        "id": "users",
        "label": "Users",
        "options": [
          "User1 only",
          "Admin1 only",
          "Admin2 only",
          "Admin1 and Admin2 only",
          "User1, Admin1, and Admin2"
        ],
        "correctByRow": {
          "line1": "Admin1 only"
        }
      }
    ]
  },
  {
    "id": "ms700-q134",
    "prompt": "NO.134 Your company has a custom Microsoft Teams app named App1.\nYou need to deploy App1. The solution must ensure that App1 appears as the first item on the app\nbar of the Microsoft Teams client.\nWhich four actions should you perform in sequence? To answer, move the actions from the list of\nactions to the answer area and arrange them in the correct order.",
    "image": "",
    "allowAnswerShuffle": false,
    "type": "dragMatch",
    "items": [
      {
        "id": "it1",
        "label": "From the Microsoft Teams admin center, set Allow interaction with custom apps to On."
      },
      {
        "id": "it2",
        "label": "From the Microsoft Teams client, upload App1."
      },
      {
        "id": "it3",
        "label": "From the app setup policy in the Microsoft Teams admin center, add App1 as a pinned app."
      },
      {
        "id": "it4",
        "label": "From the Microsoft Teams admin center, modify the list of pinned apps."
      },
      {
        "id": "it5",
        "label": "From the app permission policy in the Microsoft Teams admin center, set the Microsoft apps setting to Allow all apps."
      },
      {
        "id": "it6",
        "label": "From the app permission policy in the Microsoft Teams admin center, set the Third-party apps setting to Allow all apps."
      }
    ],
    "targets": [
      {
        "id": "step1",
        "label": "Step 1"
      },
      {
        "id": "step2",
        "label": "Step 2"
      },
      {
        "id": "step3",
        "label": "Step 3"
      },
      {
        "id": "step4",
        "label": "Step 4"
      }
    ],
    "correctByTarget": {
      "step1": "it1",
      "step2": "it2",
      "step3": "it3",
      "step4": "it4"
    }
  },
  {
    "id": "ms700-q135",
    "prompt": "NO.135 You have a Microsoft 365 subscription.\nYou need to configure the following for all users:\n* Prevent the use of third-party apps in Microsoft Teams.\n* Configure the Microsoft Teams app navigation bar.\nThe solution must minimize administrative effort.\nWhat should you do? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "allowAnswerShuffle": false,
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "line1",
        "label": "Selection"
      }
    ],
    "columns": [
      {
        "id": "prevent",
        "label": "Prevent third-party apps",
        "options": [
          "From the Microsoft 365 admin center, modify the Microsoft Teams Org settings.",
          "From the Microsoft 365 admin center, modify the User owned apps and services Org settings.",
          "From the Microsoft Teams admin center, modify the Org-wide app settings.",
          "From the Microsoft Teams admin center, modify the Org-wide settings."
        ],
        "correctByRow": {
          "line1": "From the Microsoft Teams admin center, modify the Org-wide app settings."
        }
      },
      {
        "id": "nav",
        "label": "Configure app bar",
        "options": [
          "Create a new app permission policy",
          "Create a new app setup policy",
          "Modify the global app permission policy.",
          "Modify the global app setup policy."
        ],
        "correctByRow": {
          "line1": "Modify the global app setup policy."
        }
      }
    ]
  },
  {
    "id": "ms700-q136",
    "prompt": "NO.136 You have a Teams deployment. A user cannot sign in to Teams.\nYou need to run self-help diagnostics to troubleshoot the issue.\nSolution: From Connectivity Tests in Microsoft Remote Connectivity Analyzer, you select Microsoft\nTeams.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "No",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q137",
    "prompt": "NO.137 Vou have a Microsoft 365 subscription.\nIn Microsoft Teams, you create a new private team named Team1 and add a user named User1 as a\nmember.\nUsed attempts to add members to Team1 and reports that approval is required. Vou need to ensure\nthat User1 can add members to Team1 without requiring approval. What should you do?",
    "image": "",
    "answers": [
      "Configure guest access.",
      "Configure User1 as an owner of Team1.",
      "Assign the Teams Communications Support Specialist role to User1.",
      "Configure a new Microsoft Teams policy."
    ],
    "correctAnswer": "Configure User1 as an owner of Team1.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q138",
    "prompt": "NO.138 You have a Microsoft 365 subscription that has the licenses shown in the following table.\nWhat is the maximum number of user phone numbers and toll-free service numbers you can\nacquire? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "allowAnswerShuffle": false,
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "line1",
        "label": "Maximum numbers"
      }
    ],
    "columns": [
      {
        "id": "userNums",
        "label": "User phone numbers",
        "options": [
          "100",
          "120",
          "235"
        ],
        "correctByRow": {
          "line1": "120"
        }
      },
      {
        "id": "tollNums",
        "label": "Toll-free service numbers",
        "options": [
          "30",
          "100",
          "135"
        ],
        "correctByRow": {
          "line1": "30"
        }
      }
    ]
  },
  {
    "id": "ms700-q139",
    "prompt": "NO.139 Your company has a Microsoft 365 subscription that contains a team named Sales.\nYou need to recommend a solution to ensure that all guest users who are members of Sales receive\nan email message each year to verify that they want to remain in the team.\nWhat should you include in the recommendation?",
    "image": "",
    "answers": [
      "an identity provider",
      "a Microsoft Outlook add-in",
      "a supervision policy",
      "an access review"
    ],
    "correctAnswer": "an access review",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q140",
    "prompt": "NO.140 Your company has a Microsoft 365 E5 subscription.\nYou enable guest access for Microsoft Teams.\nYou need to prevent all users from downloading and opening files that contain malware by using\nMicrosoft Teams channels.\nWhat should you do first?",
    "image": "",
    "answers": [
      "From the Security & Compliance admin center, create a data loss prevention (DLP) policy.",
      "From the Azure Active Directory admin center, enable the End user protection baseline policy.",
      "From the Security & Compliance admin center, select Turn on ATP for SharePoint, OneDrive, and Microsoft Teams.",
      "From the Azure Active Directory admin center, add an identity provider."
    ],
    "correctAnswer": "From the Security & Compliance admin center, select Turn on ATP for SharePoint, OneDrive, and Microsoft Teams.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q141",
    "prompt": "NO.141 You have a Teams deployment.\nFrom Microsoft Call Quality Dashboard, you discover that internal calls are marked as outside.\nYou need to ensure that inside and outside calls are reported correctly.\nWhat should you configure?",
    "image": "",
    "answers": [
      "Tenant Data Upload",
      "Roaming policies under Network topology",
      "Network sites under Network topology",
      "Trusted IPs under Network topology",
      "Voice routing policies"
    ],
    "correctAnswer": "Network sites under Network topology",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q142",
    "prompt": "NO.142 You have a Microsoft 365 E5 subscription that includes Teams.\nAll users are assigned the Teams Premium add-on license.\nYou need to schedule an event that supports 20,000 streaming participants and uses enterprise\ncontent delivery network (eCDN).\nWhich meeting template should you select?",
    "image": "",
    "answers": [
      "Controlled-content meeting",
      "Webinar",
      "Town hall",
      "Virtual appointment"
    ],
    "correctAnswer": "Town hall",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q143",
    "prompt": "NO.143 Your company has a Microsoft 365 subscription.\nYou need to customize meeting invitation emails to include the company logo.\nWhat should you do in the Microsoft Teams admin center?",
    "image": "",
    "answers": [
      "From Teams settings, modify the Email integration settings.",
      "From Meeting settings, modify the Email invitation settings.",
      "From Meeting policies, create a new meeting policy and assign the policy.",
      "From Meeting policies, modify the Global (Org-wide default) policy."
    ],
    "correctAnswer": "From Meeting settings, modify the Email invitation settings.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q144",
    "prompt": "NO.144 Your company has two branch offices named Branch1 and Branch2. The company uses\nTeams.\nYou plan to deploy Teams to the branch offices. The solution must meet the following requirements:\n* Users in Branch1 must use only audio and video for meetings.\n* Users in Branch2 must be able to enable Together Mode for meetings.\n* Network bandwidth costs must be minimized.\nWhat is the minimum bandwidth required for each branch office? To answer, select the appropriate\noptions in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "allowAnswerShuffle": false,
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "branch1",
        "label": "Branch1"
      },
      {
        "id": "branch2",
        "label": "Branch2"
      }
    ],
    "columns": [
      {
        "id": "bw",
        "label": "Bandwidth",
        "options": [
          "10 kilobit/s up/down",
          "250 kilobit/s up/down",
          "1,000 kilobit/s up/down",
          "2,000 kilobit/s up/down",
          "4,000 kilobit/s up/down"
        ],
        "correctByRow": {
          "branch1": "250 kilobit/s up/down",
          "branch2": "2,000 kilobit/s up/down"
        }
      }
    ]
  },
  {
    "id": "ms700-q145",
    "prompt": "NO.145 You have a Microsoft 365 subscription that uses Microsoft Teams. The subscription contains\n1,000 users in the groups shown in the following table.\nYou need to configure Microsoft Teams to meet the requirements. The solution must minimize\nadministrative effort.\nWhat should you use?",
    "image": "",
    "answers": [
      "policy packages",
      "app setup policies",
      "Microsoft Teams policies",
      "Meetings policies"
    ],
    "correctAnswer": "policy packages",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q146",
    "prompt": "NO.146 Your company has a Microsoft 365 subscription.\nYou need to prevent users from using Microsoft Teams to communicate with users in a partner\ncompany that uses an email domain named litewareinc.com.\nWhat should you do from the Microsoft Teams admin center?",
    "image": "",
    "answers": [
      "Turn off guest access.",
      "Create a new messaging policy.",
      "Modify the External access settings.",
      "Create a new meeting policy."
    ],
    "correctAnswer": "Modify the External access settings.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q147",
    "prompt": "NO.147 You deploy a Teams Rooms device named Device 1.\nYou need to identify how many outbound meeting minutes were consumed during the last month by\nDevice1.\nWhich report should you run?",
    "image": "",
    "answers": [
      "Audio Conferencing dial-out usage",
      "PSTN & SMS usage",
      "Summary Reports",
      "Rate My Call Reports"
    ],
    "correctAnswer": "Summary Reports",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q148",
    "prompt": "NO.148 You have a Teams deployment.\nYou start a meeting and enable the following settings:\n* Enable Green room\n* Provide CART Captions\n* Enable end-to-end Encryption\n* Anonymous users can join the meeting\nWhat feature is no longer available during the meeting?",
    "image": "",
    "answers": [
      "Microsoft 365 Copilot in Teams meetings and events",
      "meeting chat",
      "Raise hand",
      "screen sharing"
    ],
    "correctAnswer": "Microsoft 365 Copilot in Teams meetings and events",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q149",
    "prompt": "NO.149 Your company has a Microsoft Office 365 subscription.\nThe assigned licenses are shown in the Licenses exhibit. (Click the Licenses tab.)\nThe available phone numbers are shown in the Phone numbers exhibit. (Click the Phone Numbers\ntab.)\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "allowAnswerShuffle": false,
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "s1",
        "label": "Phone number +1 952 222 8948 can be assigned to a user."
      },
      {
        "id": "s2",
        "label": "Phone number +1 952 222 8948 can be assigned to a call queue."
      },
      {
        "id": "s3",
        "label": "Phone number +1 952 222 8948 can be assigned to a conference bridge."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "inputType": "radio",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "s1": "No",
          "s2": "Yes",
          "s3": "Yes"
        }
      }
    ]
  },
  {
    "id": "ms700-q150",
    "prompt": "NO.150 You have a Microsoft 365 subscription that uses Microsoft Teams and contains a user\nnamed User1.\nUser1 reports that the Meeting recording button is missing from the Microsoft Teams client. The user\ncannot record meetings.\nYou need to ensure that User1 meets the prerequisites to record Microsoft Teams meetings.\nWhat should you do?",
    "image": "",
    "answers": [
      "From the Microsoft 365 admin center, enter Diag: Meeting Recording in the Need help? search box.",
      "From the Microsoft Teams admin center, use the Call Quality Dashboard (CQD).",
      "From the Microsoft 365 admin center, enter Diag: Missing Recording in the Need help? search box.",
      "From the Microsoft Teams admin center, use Teams advisor."
    ],
    "correctAnswer": "From the Microsoft 365 admin center, enter Diag: Meeting Recording in the Need help? search box.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q151",
    "prompt": "NO.151 You have a Microsoft 365 subscription that uses Microsoft Teams.\nYou need to identify the following information:\n* The number of chat messages sent during the past 30 days\n* The number of messages posted in specific channels during the past 90 days Which reports should\nuse? To answer, drag the appropriate reports to the correct pieces of information. Each report may\nbe used once, more than once, or not at all. You may need to drag the split bar between panes or\nscroll to view content.\nNOTE: Each correct selection is worth one point",
    "image": "",
    "allowAnswerShuffle": false,
    "type": "dragMatch",
    "items": [
      {
        "id": "it1",
        "label": "Apps usage"
      },
      {
        "id": "it2",
        "label": "Teams device usage"
      },
      {
        "id": "it3",
        "label": "Teams live event usage"
      },
      {
        "id": "it4",
        "label": "Teams user activity report"
      },
      {
        "id": "it5",
        "label": "Teams usage report"
      }
    ],
    "targets": [
      {
        "id": "r1",
        "label": "The number of chat messages sent during the past 30 days"
      },
      {
        "id": "r2",
        "label": "The number of messages posted in specific channels during the past 90 days"
      }
    ],
    "correctByTarget": {
      "r1": "it4",
      "r2": "it5"
    }
  },
  {
    "id": "ms700-q152",
    "prompt": "NO.152 You need to install the Microsoft Viva Connections application in Microsoft Teams for a\nspecific group.\nHow should you complete the PowerShell cmdlets? To answer, select the appropriate options in the\nanswer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "allowAnswerShuffle": false,
    "type": "inlineDropdown",
    "inline": {
      "parts": [
        {
          "slot": "cmdlet"
        },
        {
          "text": " -GroupId 2b242920-86ce-4e7c-bcb8-a17c0ba0bb94 -PolicyType "
        },
        {
          "br": true
        },
        {
          "slot": "ptype"
        },
        {
          "text": " -PolicyName \"Viva Connections\" -Rank 1"
        }
      ],
      "slots": {
        "cmdlet": {
          "label": "Cmdlet",
          "options": [
            "New-CsGroupPolicyAssignment",
            "New-CsApplicationAccessPolicy",
            "New-CsTeamsAppPermissionPolicy",
            "New-CsTeamsAppSetupPolicy"
          ],
          "correct": "New-CsGroupPolicyAssignment"
        },
        "ptype": {
          "label": "Policy type",
          "options": [
            "TeamsAppSetupPolicy",
            "TeamsChannelsPolicy",
            "TeamsEducationAssignmentsAppPolicy",
            "TeamsUpdateManagementPolicy"
          ],
          "correct": "TeamsAppSetupPolicy"
        }
      }
    }
  },
  {
    "id": "ms700-q153",
    "prompt": "NO.153 Your company has a Microsoft 365 E5 subscription.\nYou need to configure Microsoft Teams to meet the following requirements:\n* All new teams must include the Wiki app and the Planner app.\n* Users in specific groups must be prevented from creating private channels.\n* Only users in the company's IT department must have early access to the unreleased features of\nMicrosoft Teams.\nWhat should you configure for each requirement? To answer, drag the appropriate settings to the\ncorrect requirements. Each setting may be used once, more than once, or not at all. You may need to\ndrag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "allowAnswerShuffle": false,
    "type": "dragMatch",
    "items": [
      {
        "id": "it1",
        "label": "App setup policies"
      },
      {
        "id": "it2",
        "label": "Teams policies"
      },
      {
        "id": "it3",
        "label": "Team templates"
      },
      {
        "id": "it4",
        "label": "Update policies"
      }
    ],
    "targets": [
      {
        "id": "m1",
        "label": "All new teams must include the wiki and planner apps"
      },
      {
        "id": "m2",
        "label": "Users in specific groups must be prevented from creating private channels"
      },
      {
        "id": "m3",
        "label": "Only users in the company’s IT department must have early access to the unreleased features of Microsoft Teams"
      }
    ],
    "correctByTarget": {
      "m1": "it1",
      "m2": "it2",
      "m3": "it4"
    }
  },
  {
    "id": "ms700-q154",
    "prompt": "NO.154 You have a Microsoft 365 E5 subscription that uses Teams.\nYour company collaborates with a partner company named fabrikam.com.\nYou plan to invite guest users from fabnkam.com to a standard Teams channel.\nYou need to ensure that all the guest users accept your company s terms of use (ToU) before gaining\naccess to Teams.\nWhat should you do?",
    "image": "",
    "answers": [
      "Create a Conditional Access policy.",
      "Configure an access review.",
      "Configure Privileged Identity Management (P1M).",
      "Configure the Microsoft Entra Verified ID service."
    ],
    "correctAnswer": "Configure an access review.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q155",
    "prompt": "NO.155 Your company has a Microsoft 365 subscription.\nAn administrator reports that teams were deleted accidentally today.\nYou need to restore the teams as quickly as possible.\nWhich cmdlets should you run?",
    "image": "",
    "answers": [
      "Get-AzureADMSDeletedGroup and Restore-AzureADMSDeletedDirectoryObject",
      "Get-Team and Restore-ADObject",
      "Get-AzureADMSDeletedGroup and Restore-ADObject",
      "Get-AzureADGroup and Restore-AzureADMSDeletedDirectoryObject",
      "Get-Team and Restore-AzureADMSDeletedDirectoryObject"
    ],
    "correctAnswer": "Get-AzureADMSDeletedGroup and Restore-ADObject",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q156",
    "prompt": "NO.156 You have a Microsoft 365 tenant that uses Microsoft Skype for Business on-premises.\nYou plan to upgrade to Microsoft Teams in stages based on groups. The features required by each\ngroup are shown in the following table.\nHow should you configure the upgrade policy for the groups? To answer, select the appropriate\noptions in the answer area.",
    "image": "",
    "allowAnswerShuffle": false,
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "sales",
        "label": "Sales"
      },
      {
        "id": "hr",
        "label": "Human Resources"
      },
      {
        "id": "research",
        "label": "Research"
      }
    ],
    "columns": [
      {
        "id": "mode",
        "label": "Coexistence mode",
        "options": [
          "Skype for Business only",
          "Skype for Business with Teams Collaboration",
          "Skype for Business with Teams Collaboration and Meetings",
          "Teams only"
        ],
        "correctByRow": {
          "sales": "Teams only",
          "hr": "Skype for Business with Teams Collaboration and Meetings",
          "research": "Skype for Business with Teams Collaboration"
        }
      }
    ]
  },
  {
    "id": "ms700-q157",
    "prompt": "NO.157 You have a Microsoft 365 subscription that uses Microsoft Teams.\nYou need to configure Microsoft Teams to meet the following requirements:\n* Enable live transcription for meetings.\n* Require that users record their name when they connect to a meeting by using a conferencing\nphone number.\nWhat should you configure for each requirement? To answer, select the appropriate options in the\nanswer area. NOTE: Each correct selection is worth one point.",
    "image": "",
    "allowAnswerShuffle": false,
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "t1",
        "label": "Enable live transcription for meetings"
      },
      {
        "id": "t2",
        "label": "Require that users record their name when they connect to a meeting by using a conferencing phone number"
      }
    ],
    "columns": [
      {
        "id": "where",
        "label": "Configure in",
        "options": [
          "Teams policies",
          "Meeting policies",
          "Meeting settings",
          "Conference bridges"
        ],
        "correctByRow": {
          "t1": "Meeting policies",
          "t2": "Conference bridges"
        }
      }
    ]
  },
  {
    "id": "ms700-q158",
    "prompt": "NO.158 You work as a Microsoft 365 Administrator for your company. All users have Microsoft 365\nlicenses.\nUsers frequently collaborate by using private chats in Microsoft Teams.\nYou need to ensure that a single user is unable to permanently delete private chats.\nWhich of the following should you configure?",
    "image": "",
    "answers": [
      "The user's Microsoft 365 license options in the Microsoft 365 Admin Center.",
      "A meeting policy in Microsoft Teams.",
      "A litigation hold on the user's mailbox.",
      "A Sensitivity Label in the Security & Compliance Admin Center."
    ],
    "correctAnswer": "A litigation hold on the user's mailbox.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q159",
    "prompt": "NO.159 You have a Microsoft 365 E5 subscription that uses Microsoft Teams.\nYou need to identify which percentage of meetings include video.\nWhat should you use?",
    "image": "",
    "answers": [
      "the Teams usage report",
      "the Teams device usage report",
      "Productivity Score Meetings insights",
      "the Teams user activity report"
    ],
    "correctAnswer": "the Teams user activity report",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q160",
    "prompt": "NO.160 What is the minimum compliance required for third-party apps to be included in the pilot\nproject?",
    "image": "",
    "answers": [
      "Microsoft 365 certification",
      "publisher attestation",
      "publisher verification",
      "certified for Microsoft Teams"
    ],
    "correctAnswer": "publisher attestation",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q161",
    "prompt": "NO.161 You have a Microsoft 365 subscription that uses Teams.\nYou need to identify the percentage of meetings that follow one or more meeting best practices.\nWhat should you use?",
    "image": "",
    "answers": [
      "usage reports in the Microsoft learns admin center",
      "improvement actions in Compliance Manager",
      "Adoption Score in the Microsoft 365 admin center",
      "audit reports in the Microsoft Purview compliance portal"
    ],
    "correctAnswer": "Adoption Score in the Microsoft 365 admin center",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q162",
    "prompt": "NO.162 Your company has the users shown in the following table.\nThe company uses Teams.\nYou have Teams update policies configured as shown in the following table.\nThe Teams update policies are assigned to departments as shown in the following table.\nFor each of the following statements, select Yes if True. Otherwise select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "allowAnswerShuffle": false,
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "u1",
        "label": "User1 can switch to the public preview features by using the Teams client."
      },
      {
        "id": "u2",
        "label": "User2 can switch to the public preview features by using the Teams client."
      },
      {
        "id": "u3",
        "label": "User3 can switch to the public preview features by using the Teams client."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "inputType": "radio",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "u1": "No",
          "u2": "Yes",
          "u3": "No"
        }
      }
    ]
  },
  {
    "id": "ms700-q163",
    "prompt": "NO.163 You have a Microsoft 365 subscription.\nYou plan to implement Microsoft Teams.\nYou need to perform network quality and connectivity tests from an on-premises network to\nMicrosoft 365 Online services by using the Network Testing Companion You install the Network\nTesting Companion module on a local Windows 10 device.\nWhich additional software should you install to perform the tests?",
    "image": "",
    "answers": [
      "the Microsoft Teams desktop client",
      "Network Assessment Tool",
      "Windows Assessment Toolkit",
      "Windows Performance Analyzer (WPA)"
    ],
    "correctAnswer": "Network Assessment Tool",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q164",
    "prompt": "NO.164 You are a Microsoft Teams administrator for your company.\nAll the teams used by the company's legal department must meet the following compliance\nrequirements:\n* Each team must expire 365 days after it is created.\n* All team content must be deleted when the team expires.\n* An administrator must be able to restore deleted team content for 30 days.\nWhat should you do?",
    "image": "",
    "answers": [
      "From the Microsoft Teams admin center, modify the teams policy.",
      "From PowerShell, run the New-AzureADMSGroupLifecyclePolicy cmdlet.",
      "From the Security & Compliance admin center, create a data loss prevention (DLP) policy.",
      "From the Microsoft 365 admin center, modify the Office 365 group settings."
    ],
    "correctAnswer": "From PowerShell, run the New-AzureADMSGroupLifecyclePolicy cmdlet.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q165",
    "prompt": "NO.165 Your company has a Microsoft 365 subscription.\nThe company's only messaging policy is a global messaging policy configured as shown in the\nfollowing exhibit.\nUse the drop-down menus to select the answer choice that completes each statement based on the\ninformation presented in the graphic.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "allowAnswerShuffle": false,
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "users",
        "label": "Users [answer choice] sent chat messages."
      },
      {
        "id": "owners",
        "label": "Team owners [answer choice] sent chat messages."
      }
    ],
    "columns": [
      {
        "id": "choice",
        "label": "Answer choice",
        "options": [
          "can only delete",
          "can only modify",
          "can delete and modify",
          "cannot delete and modify"
        ],
        "correctByRow": {
          "users": "cannot delete and modify",
          "owners": "can only delete"
        }
      }
    ]
  },
  {
    "id": "ms700-q166",
    "prompt": "NO.166 Your company uses Teams Calling Plans.\nWhen a user places a Teams call to an ambulance service, you need to ensure that a notification is\nalso sent to the main receptionist of the company.\nWhat should you configure?",
    "image": "",
    "answers": [
      "a voice routing policy",
      "an emergency calling policy",
      "a calling policy",
      "a caller ID policy"
    ],
    "correctAnswer": "an emergency calling policy",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q167",
    "prompt": "NO.167 Your company has a Microsoft Office 365 subscription.\nThe company has the administrators and the security requirements shown in the following table.\nYou need to assign a role to each administrator to ensure that the administrators can meet the\nsecurity requirements by using the Microsoft Teams admin center. The solution must use the\nprinciple of least privilege.\nWhich role should you assign to each administrator? To answer, drag the appropriate roles to the\ncorrect users. Each role may be used once, more than once, or not at all. You may need to drag the\nsplit bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "allowAnswerShuffle": false,
    "type": "dragMatch",
    "items": [
      {
        "id": "it1",
        "label": "Teams Communications Administrator"
      },
      {
        "id": "it2",
        "label": "Teams Communications Support Engineer"
      },
      {
        "id": "it3",
        "label": "Teams Communications Support Specialist"
      },
      {
        "id": "it4",
        "label": "Teams Service Administrator"
      }
    ],
    "targets": [
      {
        "id": "a5",
        "label": "Admin5"
      },
      {
        "id": "a6",
        "label": "Admin6"
      },
      {
        "id": "a7",
        "label": "Admin7"
      }
    ],
    "correctByTarget": {
      "a5": "it3",
      "a6": "it1",
      "a7": "it4"
    }
  },
  {
    "id": "ms700-q168",
    "prompt": "NO.168 Note: This question is part of a series of questions that present the same scenario. Each\nquestion in the series contains a unique solution that might meet the stated goals. Some question\nsets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYou company has a Microsoft 365 subscription and a Virtual Desktop Infrastructure (VDI) solution.\nThe company's Microsoft Teams upgrade policy is set to Teams only coexistence mode.\nYou deploy the Microsoft Installer (MSI) package for Microsoft Teams to the VDI solution.\nSeveral months later, users of the VDI solution report that their workstation is missing several new\nMicrosoft Teams features.\nYou need to ensure that the VDI solution users can use the new Microsoft Teams features.\nSolution: You run the Get-WUInstall cmdlet and specify the -AcceptAll parameter.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "No",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q169",
    "prompt": "NO.169 Note: This question is part of a series of questions that present the same scenario. Each\nquestion in the series contains a unique solution that might meet the stated goals. Some question\nsets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it As a result, these\nquestions will not appear in the review screen.\nYou have a Microsoft 365 subscription that contains several Microsoft SharePoint Online sites.\nYou need to ensure that the content stored in a SharePoint modern team site named Sales is\navailable from Microsoft Teams. The solution must ensure that when a new channel is added to a\nteam, a folder for the channel is created in the Sales site.\nSolution: From the Sales site, you use the Add Microsoft Teams link.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "No",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q170",
    "prompt": "NO.170 You have a Microsoft 365 E5 subscription that contains a hybrid deployment of Microsoft\nSkype for Business Server and a user named User1.\nYou need User1 to perform a tenant readiness assessment for Skype for Business upgrade by using\nAdvisor for Teams.\nWhich two additional licenses should you assign to User1? To answer, select the appropriate settings\nin the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "Microsoft Excel Advanced Analytics",
      "Microsoft Forms (Plan E5)",
      "Microsoft Information Governance",
      "Microsoft Kaizala Pro",
      "Microsoft MyAnalytics (Full)",
      "Microsoft Planner",
      "Microsoft Records Management",
      "Microsoft Search",
      "Microsoft StaffHub",
      "Microsoft Stream for O365 E5 SKU",
      "Microsoft Teams"
    ],
    "correctAnswer": [
      "Microsoft Forms (Plan E5)",
      "Microsoft Planner"
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q171",
    "prompt": "NO.171 Your company has a Microsoft 365 subscription.\nAll users have computers that run Windows 10. The computers are joined to Azure Active Directory\n(Azure AD) and enrolled in Microsoft Intune. All the users are standard users.\nThe company plans to start using Microsoft Teams.\nYou need to deploy the Microsoft Teams client to the computers.\nWhat should you use?",
    "image": "",
    "answers": [
      "an Azure AD app registration",
      "a domain-based Group Policy Object (GPO)",
      "Azure App Service",
      "an app in Microsoft Intune"
    ],
    "correctAnswer": "an app in Microsoft Intune",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q172",
    "prompt": "NO.172 Note: This question is part of a series of questions that present the same scenario. Each\nquestion in the series contains a unique solution that might meet the stated goals. Some question\nsets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYou company has a Microsoft 365 subscription and a Virtual Desktop Infrastructure (VDI) solution.\nThe company's Microsoft Teams upgrade policy is set to Teams only coexistence mode.\nYou deploy the Microsoft Installer (MSI) package for Microsoft Teams to the VDI solution.\nSeveral months later, users of the VDI solution report that their workstation is missing several new\nMicrosoft Teams features.\nYou need to ensure that the VDI solution users can use the new Microsoft Teams features.\nSolution: You run the Grant-CsTeamsUpgradePolicy cmdlet and specify the -PolicyName parameter.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "No",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q173",
    "prompt": "NO.173 Your company has a Microsoft 365 subscription. The subscription contains 200 Microsoft\nTeams users and a team named IT Support that has 50 members.\nYou need to ensure that the caller ID for outbound PSTN calls from IT Support is the phone number of\nthe company's IT helpdesk. The solution must minimize administrative effort.\nWhich two tools should you include in the solution? Each correct answer presents part of the\nsolution.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "the Microsoft Teams PowerShell module",
      "the Azure Active Directory (Azure AD) PowerShell for Graph module",
      "the Call Quality Dashboard (CQD)",
      "the Windows PowerShell module for Microsoft Skype for Business Online",
      "the Skype for Business admin center"
    ],
    "correctAnswer": [
      "the Microsoft Teams PowerShell module",
      "the Skype for Business admin center"
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q174",
    "prompt": "NO.174 Your company has three divisions. Each division has a Microsoft 365 E5 subscription and its\nown Microsoft Entra ID instance. All the divisions use Teams for collaboration and communication.\nYou need to recommend a seamless collaboration solution between all the divisions. The solution\nmust support the following:\n* Search for users\n* Free/busy status for Teams meetings\n* Collaboration on files stored in Teams\nWhat should you include in the recommendation?",
    "image": "",
    "answers": [
      "guest access",
      "a multitenant organization",
      "shared channels",
      "external access"
    ],
    "correctAnswer": "guest access",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q175",
    "prompt": "NO.175 You have a team in Microsoft Teams named Team1 that has the channels shown in the\nfollowing table.\nWhich channels support moderation?",
    "image": "",
    "answers": [
      "Channel2only",
      "General and Channel1 only",
      "General only",
      "Channel1 and Channel2 only",
      "Channel1 only"
    ],
    "correctAnswer": "General and Channel1 only",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q176",
    "prompt": "NO.176 Your company has a Microsoft subscription.\nThe Microsoft 365 tenant uses a domain named contoso.com.\nYou need to ensure that team channels can receive email only from users in the company and email\naddresses that use an email domain named @fabrikam.com.\nWhat should you modify?",
    "image": "",
    "answers": [
      "the External collaboration settings in the Azure Active Directory admin center",
      "the list of accepted domains in Microsoft Exchange Online",
      "the org-wide Teams settings",
      "the global teams policy"
    ],
    "correctAnswer": "the org-wide Teams settings",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q177",
    "prompt": "NO.177 Your company has two offices in Canada and Australia.\nYou have a Microsoft 365 subscription that uses Teams.\nA user named User1 moves from the Canada offices to the Australia office.\nYou need to use PowerShell to move data at rest to Australia for User1.\nHow should you complete PowerShell command? To answer, select the appropriate options in the\nanswer area.",
    "image": "",
    "allowAnswerShuffle": false,
    "type": "inlineDropdown",
    "inline": {
      "parts": [
        {
          "slot": "cmdlet"
        },
        {
          "text": " -UserId User1 "
        },
        {
          "slot": "param"
        },
        {
          "text": " AUS"
        }
      ],
      "slots": {
        "cmdlet": {
          "label": "Cmdlet",
          "options": [
            "Update-MgUser",
            "Update-MgUserExtension",
            "Update-MgUserSetting"
          ],
          "correct": "Update-MgUserExtension"
        },
        "param": {
          "label": "Parameter",
          "options": [
            "-AdditionalProperties",
            "-OfficeLocation",
            "-PreferredDataLocation"
          ],
          "correct": "-PreferredDataLocation"
        }
      }
    }
  },
  {
    "id": "ms700-q178",
    "prompt": "NO.178 You have a Microsoft 365 subscription.\nYou plan to implement Teams.\nYou need to confirm the location of the Teams service workload for data at rest.\nWhat should you configure in the Microsoft 365 admin center?",
    "image": "",
    "answers": [
      "the Organization profile tab in Org settings",
      "the Data sources tab in Search & intelligence",
      "the Security & privacy tab in Org settings",
      "the Overview tab in Service health"
    ],
    "correctAnswer": "the Organization profile tab in Org settings",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q179",
    "prompt": "NO.179 You have a Microsoft 365 subscription that uses Microsoft Teams and contains a user\nnamed User.\nYou need to ensure that User1 can investigate call-quality issues and identify the following types of\ninformation:\n* Caller and recipient names\n* Device names and IP addresses\n* The number and names of all meeting participants\nThe solution must use the principle of least privilege.\nWhich role should you assign to User1?",
    "image": "",
    "answers": [
      "Teams Device Administrator",
      "Teams communication support engineer",
      "Teams Administrator",
      "Teams communication admin"
    ],
    "correctAnswer": "Teams communication support engineer",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q180",
    "prompt": "NO.180 You have a Microsoft 365 subscription.\nYou have a virtual desktop infrastructure (VDI) that contains Azure virtual machines as session hosts.\nYou need to upgrade the session hosts to the new Teams client by running teamsbootstrapper.exe.\nThe solution must minimize the amount of bandwidth used during the installation of the client.\nWhich installer should you use?",
    "image": "",
    "answers": [
      "the MSIX package",
      "a standalone executable",
      "a PKG file",
      "Microsoft 365 apps"
    ],
    "correctAnswer": "the MSIX package",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q181",
    "prompt": "NO.181 Your company has 200 users.\nYou plan to upgrade all the users from Microsoft Skype for Business Online to Microsoft Teams.\nEnterprise Voice must be enabled for all users.\nYou need to recommend a coexistence mode for the Microsoft Teams upgrade policy.\nWhich mode should you recommend?",
    "image": "",
    "answers": [
      "Skype for Business with Teams collaboration",
      "Islands",
      "Teams only",
      "Skype for Business with Teams collaboration and meetings"
    ],
    "correctAnswer": "Islands",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q182",
    "prompt": "NO.182 You have a Teams deployment. The deployment contains a Teams Rooms device that has an\naccount named Meetingroom1. You need to configure Meetingroom1 to meet the following\nrequirements:\n* Meeting invites must be approved automatically if there are no conflicts.\n* Forwarded external meetings must be allowed.\nHow should you complete the PowerShell command? To answer, select the appropriate options in\nthe answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "slot": "cmdlet"
        },
        {
          "text": " -Identity \"Meetingroom1\" -AutomateProcessing "
        },
        {
          "slot": "automate"
        },
        {
          "text": " "
        },
        {
          "slot": "parameter"
        }
      ],
      "slots": {
        "cmdlet": {
          "label": "Cmdlet",
          "options": [
            "Set-CalendarNotification",
            "Set-CalendarProcessing",
            "Set-TeamsProtectionPolicy",
            "Set-TeamsProtectionPolicyRule"
          ],
          "correct": "Set-CalendarProcessing"
        },
        "automate": {
          "label": "-AutomateProcessing",
          "options": [
            "AutoAccept",
            "AutoUpdate",
            "None"
          ],
          "correct": "AutoAccept"
        },
        "parameter": {
          "label": "Parâmetro",
          "options": [
            "-ProcessExternalMeetingMessages $true",
            "-AllBookInPolicy $true",
            "-AllRequestInPolicy $true",
            "-RemoveForwardedMeetingNotifications $false"
          ],
          "correct": "-ProcessExternalMeetingMessages $true"
        }
      }
    }
  },
  {
    "id": "ms700-q183",
    "prompt": "NO.183 You have a Microsoft 365 subscription that uses Microsoft Teams.\nYou have a team named Project1 that contains the users shown in the following table.\nYou create a Microsoft 365 groups expiration policy that has the following configurations:\n* Group lifetime (in days): 180\n* Email contact for groups with no owners: Ad mini\n* Enable expiration for these Microsoft 365 groups: Project1\nThe group expiration for Project1 is May 31, 2022.\nWhich users will be notified to renew Project1, and when will the users receive their first renewal\nnotification? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "project1",
        "label": "Project1"
      }
    ],
    "columns": [
      {
        "id": "notified_users",
        "label": "Notified users",
        "options": [
          "User1 only",
          "Admin1 only",
          "User1 and User2 only",
          "User1 and Admin1 only",
          "User1, User2, and Admin1"
        ],
        "correctByRow": {
          "project1": "User1 only"
        }
      },
      {
        "id": "first_renewal",
        "label": "First renewal notification",
        "options": [
          "May 1, 2022",
          "May 16, 2022",
          "March 31, 2022"
        ],
        "correctByRow": {
          "project1": "May 1, 2022"
        }
      }
    ],
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q184",
    "prompt": "NO.184 Your company uses Teams.\nA user named User1 cannot invite guest users to Teams.\nWhat should you recommend using to identify the cause of the issue?",
    "image": "",
    "answers": [
      "Microsoft Teams Network Assessment Tool",
      "Teams advisor",
      "Microsoft 365 network connectivity test tool",
      "self-help diagnostics"
    ],
    "correctAnswer": "self-help diagnostics",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q185",
    "prompt": "NO.185 Your company uses Phone System.\nA group of users make outbound calls on behalf of the company's billing department.\nYou need to ensure that when the users make the outbound calls, their numbers are replaced by a\nphone number that is associated to an existing call queue.\nWhat should you do first?",
    "image": "",
    "answers": [
      "Create a new calling policy and set Make private calls to On.",
      "Create a new calling policy and set Inbound calls can be routed to call groups to On.",
      "Create a new caller ID policy and set Replace caller ID to Anonymous.",
      "Create a new caller ID policy and set Replace caller ID to Service number."
    ],
    "correctAnswer": "Create a new caller ID policy and set Replace caller ID to Service number.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q186",
    "prompt": "NO.186 Your company has a Microsoft 365 subscription. All users are assigned a Microsoft 365 E3\nlicense.\nYou need to implement information barriers between two groups of users.\nWhich two licensing add-ons provide the required functionality? Each correct answer presents a\ncomplete solution.\nEach correct selection is worth one point.",
    "image": "",
    "answers": [
      "Microsoft Defender for Office 365",
      "Insider Risk Management",
      "Compliance",
      "Communications Credits"
    ],
    "correctAnswer": [
      "Insider Risk Management",
      "Compliance"
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q187",
    "prompt": "NO.187 Your on-premises network contains a main site and a branch site.\nYou have a Microsoft 365 subscription that uses Teams.\nYou need to use Network planner to identify the networking requirements between the sites.\nFrom Network planner, you create a new network plan.\nWhat should you do next?",
    "image": "",
    "answers": [
      "Configure the Network settings.",
      "Start a report.",
      "Add a network site.",
      "Add personas"
    ],
    "correctAnswer": "Add a network site.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q188",
    "prompt": "NO.188 You have a Microsoft 365 E5 subscription that uses Teams and contains three teams named\nTeam1, Team2, and Team3.\nYou need to validate the owner of each team and identify the number of guest users that were added\nto each team.\nWhat should you use in the Microsoft Teams admin center?",
    "image": "",
    "answers": [
      "Teams advisor",
      "Manage users",
      "Manage teams",
      "Usage reports"
    ],
    "correctAnswer": "Manage teams",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q189",
    "prompt": "NO.189 You have a Teams deployment.\nA user reports that the Teams client on their Windows device fails to update to the latest release\nautomatically. What is the cause of the issue?",
    "image": "",
    "answers": [
      "The Teams upgrade settings are misconfigured.",
      "A Teams update policy is misconfigured.",
      "The Teams client is installed to a non-default location.",
      "A config.office.com policy is misconfigured."
    ],
    "correctAnswer": "A Teams update policy is misconfigured.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q190",
    "prompt": "NO.190 You have a Microsoft 365 subscription that contains the users shown in the following table.\nThe subscription contains the Microsoft Teams teams shown in the following table\nYou need to identify how many additional org-wide teams you can create in the subscription. and\nwhich users can create the org-wide teams?\nWhat should you identity? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point",
    "image": "",
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "tenant",
        "label": "Microsoft 365 subscription"
      }
    ],
    "columns": [
      {
        "id": "additional_orgwide",
        "label": "Additional org-wide teams",
        "options": [
          "1",
          "3",
          "6"
        ],
        "correctByRow": {
          "tenant": "1"
        }
      },
      {
        "id": "users",
        "label": "Users",
        "options": [
          "Admin1 only",
          "Admin2 only",
          "Admin3 only",
          "Admin1 and Admin2 only",
          "Admin2 and Admin3 only",
          "Admin1, Admin2, and Admin3"
        ],
        "correctByRow": {
          "tenant": "Admin1 and Admin2 only"
        }
      }
    ],
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q191",
    "prompt": "NO.191 You have a Microsoft 365 subscription that includes Teams. The subscription contains a user\nnamed User1.\nYou are deploying 10 new Teams devices.\nYou need to ensure that User1 can restart the Teams devices remotely.\nSolution: You assign the Teams Administrator role to User1.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "No",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q192",
    "prompt": "NO.192 Your company has a Microsoft 365 subscription.\nA user invites an external user to join a Microsoft Teams meeting by using a Microsoft Outlook\nmeeting invitation.\nThe external user cannot join the meeting.\nYou need to ensure that all external users can join Microsoft Team meetings.\nWhat should you do from the Microsoft Teams admin center?",
    "image": "",
    "answers": [
      "From Guest access in the Org-wide settings, set Allow guest access in Microsoft Teams to On.",
      "Edit the Meeting settings and set Anonymous users can join a meeting to On.",
      "Edit the global meeting policy and set Allow scheduling private meetings to On.",
      "Edit the live events policy and set Who can join live events to Everyone."
    ],
    "correctAnswer": "Edit the Meeting settings and set Anonymous users can join a meeting to On.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q193",
    "prompt": "NO.193 Users report poor quality during Microsoft Teams audio conferences.\nYou run a network trace during an audio conference from a user's device as shown in the following\nexhibit.\nWhat causes the poor quality of the audio conferences?",
    "image": "",
    "answers": [
      "The source port range for audio is too narrow.",
      "The source port for audio is above 50,000.",
      "The UDP traffic is being limited.",
      "The TLS traffic is being limited."
    ],
    "correctAnswer": "The UDP traffic is being limited.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q194",
    "prompt": "NO.194 You plan to deploy Microsoft Teams to a remote location.\nYou perform a network readiness assessment for Microsoft Teams by using the Network Testing\nCompanion.\nWhich two tests are included in the assessment? Each correct answer presents part of the solution.\nNOTE:\nEach correct selection is worth one point.",
    "image": "",
    "answers": [
      "video quality tests",
      "trace route information",
      "Quality of Service (QoS) validation",
      "open and blocked ports",
      "audio quality tests"
    ],
    "correctAnswer": [
      "open and blocked ports",
      "audio quality tests"
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q195",
    "prompt": "NO.195 You have a Microsoft 365 subscription that uses Microsoft Teams and contains a user\nnamed User1 and three groups named Group1 , Group2 and Group3. User1 is a member of Group1,\nGroup2, and Group3.\nThe subscription has the meeting policies shown in the following table.",
    "image": "",
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "s1",
        "label": "Meet now in channels is turned off for User1."
      },
      {
        "id": "s2",
        "label": "Transcription is turned off for User1."
      },
      {
        "id": "s3",
        "label": "The Global (Org-wide default) policy applies to User1."
      }
    ],
    "columns": [
      {
        "id": "yesno",
        "label": "Answer",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "s1": "Yes",
          "s2": "Yes",
          "s3": "No"
        }
      }
    ],
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q196",
    "prompt": "NO.196 You have a Microsoft 365 E5 subscription that uses Microsoft Teams.\nYou need to ensure that the users in your organization can communicate with external users who use\nTeams for personal use.\nHow should you complete the PowerShell cmdlets? To answer, drag the appropriate values to the\ncorrect targets. Each value may be used once, more than once, or not at all. You may need to drag\nthe split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dragMatch",
    "allowAnswerShuffle": false,
    "items": [
      {
        "id": "allow_federated",
        "label": "-AllowFederatedUsers"
      },
      {
        "id": "allow_consumer",
        "label": "-AllowTeamsConsumer"
      },
      {
        "id": "allowed_domains",
        "label": "-AllowedDomains"
      },
      {
        "id": "allow_public",
        "label": "-AllowPublicUsers"
      }
    ],
    "targets": [
      {
        "id": "blank1",
        "label": "Blank 1"
      },
      {
        "id": "blank2",
        "label": "Blank 2"
      }
    ],
    "correctByTarget": {
      "blank1": "allow_federated",
      "blank2": "allow_consumer"
    }
  },
  {
    "id": "ms700-q197",
    "prompt": "NO.197 You have a Microsoft 365 subscription that uses Microsoft Teams.\nYou need to identify the following:\nThe number of guest users on a team named Customer Support.\nUsers that use the Teams mobile app for iOS.\nWhich reports should you run? To answer, drag the appropriate reports to the correct requirements.\nEach report may be used once, more than once, or not at all.\ndrag the split bar between panes or scroll to view content.",
    "image": "",
    "type": "dragMatch",
    "allowAnswerShuffle": false,
    "items": [
      {
        "id": "apps_usage",
        "label": "Apps usage"
      },
      {
        "id": "info_protection",
        "label": "Information protection licence"
      },
      {
        "id": "teams_device_usage",
        "label": "Teams device usage"
      },
      {
        "id": "teams_live_event_usage",
        "label": "Teams live event usage"
      }
    ],
    "targets": [
      {
        "id": "ios_users",
        "label": "Users that use the Teams mobile app for iOS"
      },
      {
        "id": "guest_users",
        "label": "Number of guest users on the Customer Support team"
      }
    ],
    "correctByTarget": {
      "ios_users": "apps_usage",
      "guest_users": "teams_device_usage"
    }
  },
  {
    "id": "ms700-q198",
    "prompt": "NO.198 You have a Microsoft 365 subscription that uses Microsoft Teams.\nA user reports an error when he attempts to share his screen during meetings by using the Microsoft\nTeams Windows Desktop client.\nYou need to collect the Microsoft Teams client log files from the user's device.\nWhat should you do?",
    "image": "",
    "answers": [
      "From the Microsoft Teams client settings, select Disable GPU hardware acceleration.",
      "Select Ctrl + Alt + Shift + 1.",
      "Select the Windows logo key + Alt + Shift +1",
      "From the Microsoft Teams client settings, select Enable logging for meeting diagnostics."
    ],
    "correctAnswer": "Select Ctrl + Alt + Shift + 1.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q199",
    "prompt": "NO.199 You have a Microsoft 365 E5 subscription that includes Teams. The subscription contains a\nuser named User1 that is an owner of a team named Team1. Team1 contains members that include\nguest user accounts.\nYou need to ensure that User1 provides a quarterly confirmation for all the guest users that have a\nlegitimate business need for membership to Team1.\nWhat should you do?",
    "image": "",
    "answers": [
      "From the Microsoft Entra admin center, configure the Access reviews settings.",
      "From the Microsoft Entra admin center, configure the External collaboration settings.",
      "From the Microsoft Teams admin center, configure the External access settings.",
      "From the Microsoft Teams admin center, configure the Guest access settings."
    ],
    "correctAnswer": "From the Microsoft Entra admin center, configure the Access reviews settings.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q200",
    "prompt": "NO.200 Your company plans to upgrade to Microsoft Teams from Microsoft Skype for Business\nOnline. The org-wide coexistence mode for Microsoft Teams is set to Teams Only.\nThe company has a user named User1.\nYou need to implement a migration solution that meets the following requirements:\n* User 1 must be able to chat and create meetings by using Skype for Business only.\n* User 1 must be able to read and post messages by using Microsoft Teams channels.\nHow should you complete the PowerShell command? To answer, select the appropriate options in\nthe answer area. NOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "slot": "cmdlet"
        },
        {
          "text": " -PolicyName "
        },
        {
          "slot": "policy"
        },
        {
          "text": " -Identity "
        },
        {
          "slot": "identity"
        }
      ],
      "slots": {
        "cmdlet": {
          "label": "Cmdlet",
          "options": [
            "Grant-CsClientPolicy",
            "Grant-CsTeamsUpgradePolicy",
            "Move-CsLegacyUser"
          ],
          "correct": "Grant-CsTeamsUpgradePolicy"
        },
        "policy": {
          "label": "-PolicyName",
          "options": [
            "Islands",
            "SfBOnly",
            "SfBWithTeamsCollab",
            "SfBWithTeamsCollabAndMeetings",
            "UpgradeToTeams"
          ],
          "correct": "SfBWithTeamsCollab"
        },
        "identity": {
          "label": "-Identity",
          "options": [
            "User1",
            "All"
          ],
          "correct": "User1"
        }
      }
    }
  },
  {
    "id": "ms700-q201",
    "prompt": "NO.201 What should you configure to meet the monitoring requirements?",
    "image": "",
    "answers": [
      "Microsoft Teams Network Assessment Tool",
      "a change notification in Microsoft Graph",
      "an alert in Azure Monitor",
      "a device state rule"
    ],
    "correctAnswer": "an alert in Azure Monitor",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q202",
    "prompt": "NO.202 Your company has a Microsoft 365 subscription that uses Microsoft Office 365 E5 licenses\nand Azure Active Directory Premium Plan 1 licenses.\nYou have a team named Sales that contains all the users in the company's sales department.\nYou hire several new users in the sales department.\nYou discover that the new employees are never added to the team.\nYou need to ensure that when new sales department users are hired, they are added automatically to\nthe team.\nWhat should you do?",
    "image": "",
    "answers": [
      "From the Microsoft Teams client, modify the settings of the Sales team.",
      "From the Azure Active Directory admin center, modify the membership type of the Sales group.",
      "From the Microsoft Teams admin center, modify the properties of the Sales team.",
      "From the Microsoft 365 admin center, modify the settings of the Sales group."
    ],
    "correctAnswer": "From the Azure Active Directory admin center, modify the membership type of the Sales group.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q203",
    "prompt": "NO.203 You have a Teams Phone deployment.\nYou have an auto attendant named Autoattend1.\nYou need to configure Autoattend1 to meet the following requirements:\n* Exclude a group named Group1 from the directory.\n* Configure Dial key 1 to forward calls to a call queue.\nWhat should you do for each requirement? To answer, select the appropriate options in the answer\narea.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "autoattend1",
        "label": "Autoattend1"
      }
    ],
    "columns": [
      {
        "id": "exclude_group",
        "label": "To exclude Group1, configure",
        "options": [
          "A dial scope",
          "Authorized users",
          "Call flows"
        ],
        "correctByRow": {
          "autoattend1": "A dial scope"
        }
      },
      {
        "id": "dial_key_1",
        "label": "To configure Dial key 1 to forward calls to a call queue, redirect to",
        "options": [
          "A voice app",
          "A person in the organization",
          "An external phone number"
        ],
        "correctByRow": {
          "autoattend1": "A voice app"
        }
      }
    ],
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q204",
    "prompt": "NO.204 Your company has a Microsoft 365 subscription that uses Phone System.\nTwo employees have the user account shown in the following table.\nThe employees are leaving the company.\nYou need to ensure that the phone numbers can be reassigned to other employees as quickly as\npossible.\nWhat should you use for each employee? To answer, select the appropriate options in the answer\narea.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "e1",
        "label": "User1"
      },
      {
        "id": "e2",
        "label": "User2"
      }
    ],
    "columns": [
      {
        "id": "tool",
        "label": "Tool",
        "options": [
          "The Azure Active Directory admin center",
          "The Microsoft Teams admin center",
          "The Set-CsUser cmdlet"
        ],
        "correctByRow": {
          "e1": "The Microsoft Teams admin center",
          "e2": "The Set-CsUser cmdlet"
        }
      }
    ],
    "allowAnswerShuffle": false,
    "metaNote": "Linhas genéricas (Employee 1/2) porque a tabela da answer area não foi extraída em texto; respostas 1/2 extraídas da explicação."
  },
  {
    "id": "ms700-q205",
    "prompt": "NO.205 You company has a Microsoft 365 subscription that uses Phone System and Calling Plans.\nYou plan to implement a toll phone number for the helpdesk.\nYou need to implement the following call features for the helpdesk phone number:\n* Must include a greeting and hold music\n* Must bypass menu options when a call is established to the helpdesk\nWhat two resources should you create? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "a call queue",
      "a call park",
      "an auto attendant",
      "a resource account",
      "a calling policy"
    ],
    "correctAnswer": [
      "a call queue",
      "an auto attendant"
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q206",
    "prompt": "NO.206 You have a Microsoft 365 subscription that uses Microsoft Teams and contains the users\nshown in the following table.\nYou have the team shown in the following table.\nA new access review needs to be created for Project1.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "s1",
        "label": "User1 can create and manage the access review."
      },
      {
        "id": "s2",
        "label": "User2 can be assigned as a reviewer of the access review."
      },
      {
        "id": "s3",
        "label": "Guest1 can be assigned as a reviewer of the access review."
      }
    ],
    "columns": [
      {
        "id": "yesno",
        "label": "Answer",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "s1": "Yes",
          "s2": "Yes",
          "s3": "No"
        }
      }
    ],
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q207",
    "prompt": "NO.207 Your company has 10 offices in North America and Europe.\nThe company has 5,000 users.\nYou plan to deploy Microsoft Teams for all the users.\nYou run a pilot project for the planned deployment.\nYou need to identify the network packet loss from the pilot computers to Microsoft Teams during\ncalls.\nSolution: From the Microsoft Teams admin center, you review Usage reports.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "Yes",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q208",
    "prompt": "NO.208 You have a Microsoft 365 E5 subscription that includes Teams.\nYou need to identify app data for a specific date and time range for the following:\n* Teams apps that were installed on or removed from a Teams client\n* Teams apps that were added to or removed from the Microsoft Teams app catalog What should\nyou do?",
    "image": "",
    "answers": [
      "From Microsoft Teams apps in the Microsoft 365 admin center, review the App usage report.",
      "From the Microsoft Teams admin center, review Teams usage reports.",
      "From Compliance Manager, search the audit log.",
      "From the Microsoft Entra admin center, search the audit log."
    ],
    "correctAnswer": "From Compliance Manager, search the audit log.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q209",
    "prompt": "NO.209 Note: This question is part of a series of questions that present the same scenario. Each\nquestion in the series contains a unique solution that might meet the stated goals. Some question\nsets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYour company has a Microsoft 365 subscription that uses an Azure Active Directory (Azure AD) tenant\nnamed contoso.com.\nYou need to prevent guest users in the tenant from using cameras during Microsoft Teams meetings.\nSolution: From the Azure Active Directory admin center, you modify the External collaboration\nsettings.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "Yes",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q210",
    "prompt": "NO.210 Note: This question is part of a series of questions that present the same scenario. Each\nquestion in the series contains a unique solution that might meet the stated goals. Some question\nsets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYou company has a Microsoft 365 subscription and a Virtual Desktop Infrastructure (VDI) solution.\nThe company's Microsoft Teams upgrade policy is set to Teams only coexistence mode.\nYou deploy the Microsoft Installer (MSI) package for Microsoft Teams to the VDI solution.\nSeveral months later, users of the VDI solution report that their workstation is missing several new\nMicrosoft Teams features.\nYou need to ensure that the VDI solution users can use the new Microsoft Teams features.\nSolution: You uninstall the Microsoft Teams MSI package, and then reinstall a new Microsoft Teams\nMSI package.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "Yes",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q211",
    "prompt": "NO.211 Your company has a Microsoft Office 365 subscription.\nThe company has the departments and teams shown in the following table.\nYou need to recommend which policies must be created to meet the following requirements:\n* Users in the HR department must be prevented from sending messages marked as Urgent.\n* Users in the finance department must be able to send messages marked as Urgent.\n* Users in the finance department must be able to delete sent messages.\n* The solution must only affect the HR department users and the finance department users.\nWhat is the minimum number of policies you should recommend?",
    "image": "",
    "answers": [
      "two messaging policies",
      "one messaging policy and one permission policy",
      "one permission policy only",
      "two permission policies",
      "one messaging policy only"
    ],
    "correctAnswer": "two messaging policies",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q212",
    "prompt": "NO.212 You company has a Microsoft 365 subscription that contains the teams shown in the\nfollowing exhibit.\nGuest users report that they cannot create posts in Monthly Reports.\nYou need to ensure that the guest users can post to Monthly Reports.\nWhat should you do?",
    "image": "",
    "answers": [
      "From the Microsoft Teams client, modify the privacy setting.",
      "From the Microsoft Teams admin center, modify the Guest access settings.",
      "From the Microsoft Teams client, modify the channel moderation preferences.",
      "From the Microsoft Teams admin center, modify the messaging policy."
    ],
    "correctAnswer": "From the Microsoft Teams admin center, modify the Guest access settings.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q213",
    "prompt": "NO.213 You have a Teams deployment. A user cannot sign in to Teams.\nYou need to run self-help diagnostics to troubleshoot the issue.\nSolution: From the Microsoft Teams admin center, you select Teams advisor.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "No",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q214",
    "prompt": "NO.214 You have a Microsoft 365 subscription.\nYou create an org-wide team named Team1. Users named User1 and User2 are the owners of Team1.\nYou need to configure Team1 to meet following requirements:\n* Ensure that only User1 and User2 can create new posts in the General channel.\n* Prevent @mentions for the org-wide team members.\nWhich two actions should you perform from the Microsoft Teams client? Each correct answer\npresents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "From the Team1 settings, clear Give members the option to edit their messages",
      "From the General Channel settings of Team1, set the channel moderation preference to Anyone can post; show alert that postings will notify everyone (recommended for large teams)",
      "From the General Channel settings of Team1. set the channel moderation preference to Only owners can post messages.",
      "From the Team1 settings, disable all the Fun stuff settings.",
      "From the Team1 settings, set Show members the option to @team or @[team name] to Off."
    ],
    "correctAnswer": [
      "From the General Channel settings of Team1. set the channel moderation preference to Only owners can post messages.",
      "From the Team1 settings, set Show members the option to @team or @[team name] to Off."
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q215",
    "prompt": "NO.215 You have a Microsoft 365 subscription.\nYou have a virtualized desktop infrastructure (VDI) that contains the virtual machines shown in the\nfollowing table.\nYou need to install the Teams for VDI client on the virtual machines. The solution must support\naudio/video (AV) optimization.\nWhich virtual machines support the Teams for VDI client, and what should you do to enable AV\noptimization? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "vdi",
        "label": "VDI"
      }
    ],
    "columns": [
      {
        "id": "virtual_machines",
        "label": "Virtual machines",
        "options": [
          "Host1 and Host2 only",
          "Host3 and Host4 only",
          "Host1 and Host3 only",
          "Host1, Host2, and Host4 only",
          "Host1, Host2, Host3, and Host4"
        ],
        "correctByRow": {
          "vdi": "Host1, Host2, and Host4 only"
        }
      },
      {
        "id": "av_optimization",
        "label": "To enable AV optimization",
        "options": [
          "Add a registry key to each virtual machine.",
          "Run teamsbootstrapper.exe and specify the -o switch.",
          "Run teamsbootstrapper.exe and specify the -x switch.",
          "Update the display driver on each virtual machine."
        ],
        "correctByRow": {
          "vdi": "Add a registry key to each virtual machine."
        }
      }
    ],
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q216",
    "prompt": "NO.216 You have a Microsoft 365 E5 subscription and use Microsoft Teams. You plan to schedule\nthe events shown in the following table.\nWhich meeting template should you use for each event? To answer, drag the appropriate templates\nto the correct events. Each template may be used once, more than once, or not at all. You may need\nto drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dragMatch",
    "allowAnswerShuffle": false,
    "items": [
      {
        "id": "controlled_content",
        "label": "Controlled-content meeting"
      },
      {
        "id": "live_event",
        "label": "Live event"
      },
      {
        "id": "town_hall",
        "label": "Town hall"
      },
      {
        "id": "virtual_appointment",
        "label": "Virtual appointment"
      },
      {
        "id": "webinar",
        "label": "Webinar"
      }
    ],
    "targets": [
      {
        "id": "event1",
        "label": "Event1 — 800 participants; PowerPoint Live; registration link; video on demand after the event"
      },
      {
        "id": "event2",
        "label": "Event2 — managed by Bookings app; guests join from internet in a custom lobby; SMS confirmation 15 minutes before start"
      }
    ],
    "correctByTarget": {
      "event1": "webinar",
      "event2": "virtual_appointment"
    }
  },
  {
    "id": "ms700-q217",
    "prompt": "NO.217 Your company uses Teams.\nA user named User1 selects Forward my calls and all incoming calls are forwarded to voicemail as\nshown in the following exhibit.\nCall answering rules\nChoose how you want to handle incoming calls.\nO Calls ring me O Forward my calls\nAll incoming calls will be forwarded to your voicemail.\nYou need to ensure that User1 can change the destination of the forwarded calls. What should you\nenable for User1?",
    "image": "",
    "answers": [
      "simultaneous ring",
      "Enterprise Voice",
      "Outbound calling",
      "Busy on busy when in a call"
    ],
    "correctAnswer": "Enterprise Voice",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q218",
    "prompt": "NO.218 You have a Microsoft Office 365 subscription.\nYou plan to upgrade from Microsoft Skype for Business to Microsoft Teams.\nYou use the following workloads in Skype for Business:\n* Audio/video conferencing\n* Dial-in conferencing\n* Enterprise Voice\n* Persistent Chat\n* Chat\nYou need to ensure that users can evaluate Microsoft Teams while maintaining PSTN calling by using\nthe Skype for Business client.\nWhich coexistence mode should you use?",
    "image": "",
    "answers": [
      "Islands",
      "Skype for Business with Teams collaboration",
      "Skype for Business only",
      "Meetings First"
    ],
    "correctAnswer": "Meetings First",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q219",
    "prompt": "NO.219 You have a Microsoft 365 E5 subscription that uses Microsoft Teams and contains the\nresources shown in the following table\nYou need to configure the subscription to meet the following requirements:\n* App1 must be pinned only to the Teams desktop client of the users in Group1.\n* App2 must be pinned only to the learns desktop client of the users in Groups.\nWhat should you do in the Microsoft Teams admin center?",
    "image": "",
    "answers": [
      "Modify the global (Org-wide default] app setup policy.",
      "Modify the global (Org-wide default) app permission policy.",
      "Create app permission policies.",
      "Create app setup policies."
    ],
    "correctAnswer": "Create app setup policies.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q220",
    "prompt": "NO.220 You have a Microsoft 365 subscription that uses Microsoft Teams.\nYou need to ensure that only the following apps are available in the Microsoft Teams app store:\n* Lists\n* Project\n* Bulletins\n* OneNote\n* PowerApps\nThe solution must minimize administrative effort.\nWhat should you do?",
    "image": "",
    "answers": [
      "Configure the Org-wide app settings",
      "From the Manage apps page, block unapproved apps",
      "Configure the global (Org-wide default) app permission policy",
      "Configure the global (Org-wide default) app setup policy"
    ],
    "correctAnswer": "Configure the global (Org-wide default) app permission policy",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q221",
    "prompt": "NO.221 Your company has a Microsoft 365 subscription.\nThe company uses Microsoft Teams.\nYou need to ensure that only Microsoft apps can be used in Microsoft Teams.\nWhat should you do from the Microsoft Teams admin center?",
    "image": "",
    "answers": [
      "From the global app setup policy, disable the Upload custom apps setting.",
      "From the Org-wide app settings, disable the Allow interaction with custom apps setting.",
      "From the Org-wide app settings, disable the Allow third party or custom apps setting.",
      "From the global app permission policy, enable the Allow All Apps setting for Microsoft apps."
    ],
    "correctAnswer": "From the Org-wide app settings, disable the Allow third party or custom apps setting.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q222",
    "prompt": "NO.222 Your company uses Teams.\nYou have a team named Team1.\nYou need to prevent guest users from accessing files in Team1. The solution must NOT affect external\ncollaboration with any other teams.\nWhat should you do?",
    "image": "",
    "answers": [
      "From the SharePoint admin center, edit the External sharing settings for the associated site.",
      "From the Microsoft Entra admin center, configure the External collaboration settings for guest users.",
      "From the Microsoft Entra admin center, create a Conditional Access policy.",
      "From the Microsoft Teams admin center, set external access to Block all external domains.",
      "From the Microsoft Teams admin center, set Allow guest access in Teams to Off."
    ],
    "correctAnswer": "From the Microsoft Teams admin center, set Allow guest access in Teams to Off.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q223",
    "prompt": "NO.223 Your company has a Microsoft 365 subscription.\nFrom the Microsoft Teams client, you review the teams shown in the exhibit. (Click the Exhibit tab.)\nMembers of the Retail team report that they cannot create channels.\nYou need to ensure that the Retail team members can create channels.\nWhich two actions should you perform? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "From the Azure Active Directory admin center, change the membership type of the Office 365 group for the Retail team to Assigned.",
      "From the Microsoft Teams client, promote all the Retail team members to an owner role.",
      "From the Microsoft Teams admin center, unarchive the Retail team.",
      "Instruct the Retail team owner to restore the team by using the Microsoft Teams client.",
      "From PowerShell, modify the information barrier policy."
    ],
    "correctAnswer": [
      "From the Microsoft Teams admin center, unarchive the Retail team.",
      "Instruct the Retail team owner to restore the team by using the Microsoft Teams client."
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q224",
    "prompt": "NO.224 Youi company uses Teams. All users are assigned a Microsoft 365 F1 license.\nYou need to retain chats and files in Teams channels for at least one year after they are deleted.\nWhat should you do first?",
    "image": "",
    "answers": [
      "From the Audit settings of the Microsoft Purview compliance portal, select Start recording user and admin activity.",
      "Assign the users a Microsoft 365 F3 license.",
      "From the Microsoft 365 admin center, enable Customer lockbox.",
      "Assign the users a Microsoft 365 E3 license."
    ],
    "correctAnswer": "Assign the users a Microsoft 365 E3 license.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q225",
    "prompt": "NO.225 You have a Microsoft 365 E5 subscription that uses teams and contains the users shown in\nthe following table.\nYou Create a group naming policy to enforce a consistent naming convention for teams names.\nWhich users are exempt from the naming policy restrictions?",
    "image": "",
    "answers": [
      "User1 only",
      "User2 only",
      "User3 only",
      "User1 only User3 only",
      "User1 User2, and User3"
    ],
    "correctAnswer": "User2 only",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q226",
    "prompt": "NO.226 Which governance requirement is met by using a team template?",
    "image": "",
    "answers": [
      "The team name must contain a GRP prefix.",
      "The team name must be validated against a blocklist of team names.",
      "Team channels must include a pinned tab that displays the Wingtip Toys website.",
      "Team members must be prevented from deleting messages from team channels."
    ],
    "correctAnswer": "The team name must contain a GRP prefix.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q227",
    "prompt": "NO.227 What should you create to meet the governance requirements for animated GIFs?",
    "image": "",
    "answers": [
      "a messaging policy",
      "a meeting policy",
      "a compliance policy",
      "an app setup policy"
    ],
    "correctAnswer": "a messaging policy",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q228",
    "prompt": "NO.228 You have a Microsoft 365 subscription that contains several Microsoft SharePoint Online\nsites.\nYou need to ensure that the content stored m a SharePoint modern team site named Sales is\navailable from Microsoft Teams. The solution must ensure that when a new channel is added to a\nteam, a folder for the channel is created in the Sales site.\nSolution: From the Microsoft Teams client you create a new team and select From a group or team.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "Yes",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q229",
    "prompt": "NO.229 Your company has a Microsoft 365 subscription.\nYou need to review the following information:\n* The Rate My Call data provided by users.\n* The number of Microsoft Teams live event views from the past three months.\nWhat should you use to view the information? To answer, select the appropriate options in the\nanswer area.",
    "image": "",
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "rate_my_call",
        "label": "The Rate My Call data provided by users"
      },
      {
        "id": "live_event_views",
        "label": "The number of Microsoft Teams live event views from the past three months"
      }
    ],
    "columns": [
      {
        "id": "report",
        "label": "Use",
        "options": [
          "Analytics & reports in the Microsoft Teams admin center",
          "Call History in the Microsoft Teams admin center",
          "Microsoft Call Quality Dashboard",
          "Microsoft Office 365 usage reports"
        ],
        "correctByRow": {
          "rate_my_call": "Microsoft Call Quality Dashboard",
          "live_event_views": "Analytics & reports in the Microsoft Teams admin center"
        }
      }
    ],
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q230",
    "prompt": "NO.230 You have a Teams deployment that contains a Teams Rooms Pro subscription.\nA consultant deploys a Teams Rooms on Windows device named Boardroom1.\nYou need to ensure that the consultant can complete the sign-in process for Boardroom 1 without\naccess to a username and password.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from\nthe list of actions to the answer area and arrange them in the correct order.",
    "image": "",
    "type": "dragMatch",
    "allowAnswerShuffle": false,
    "items": [
      {
        "id": "ex_resource",
        "label": "Create and license a Microsoft Exchange Online resource account."
      },
      {
        "id": "add_mac",
        "label": "Add the MAC address of Boardroom1 to the device."
      },
      {
        "id": "verify_code",
        "label": "Generate a verification code and instruct the consultant to provision the device."
      },
      {
        "id": "teams_admin_complete",
        "label": "From the Teams admin center, complete the pending sign-in process."
      },
      {
        "id": "teams_resource",
        "label": "Create and license a Teams resource account."
      },
      {
        "id": "otp",
        "label": "Generate a one-time password and instruct the consultant to provision the device."
      },
      {
        "id": "approve_portal",
        "label": "From the Teams Room Pro Management portal, approve the sign-in request."
      }
    ],
    "targets": [
      {
        "id": "step1",
        "label": "Step 1"
      },
      {
        "id": "step2",
        "label": "Step 2"
      },
      {
        "id": "step3",
        "label": "Step 3"
      }
    ],
    "correctByTarget": {
      "step1": "teams_resource",
      "step2": "otp",
      "step3": "approve_portal"
    }
  },
  {
    "id": "ms700-q231",
    "prompt": "NO.231 Your company has a Microsoft 365 subscription.\nYou need to prevent guest users from creating or updating channels.\nHow should you complete the PowerShell script? To answer, drag the appropriate options to the\ncorrect targets. Each option may be used once, more than once, or not at all. You may need to drag\nthe split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dragMatch",
    "allowAnswerShuffle": false,
    "items": [
      {
        "id": "get_aad_group",
        "label": "Get-AzureADGroup"
      },
      {
        "id": "get_aad_user",
        "label": "Get-AzureADUser"
      },
      {
        "id": "get_team",
        "label": "Get-Team"
      },
      {
        "id": "set_aad_group",
        "label": "Set-AzureADGroup"
      },
      {
        "id": "set_aad_user",
        "label": "Set-AzureADUser"
      },
      {
        "id": "set_team",
        "label": "Set-Team"
      }
    ],
    "targets": [
      {
        "id": "cmdlet1",
        "label": ""
      },
      {
        "id": "cmdlet2",
        "label": ""
      }
    ],
    "correctByTarget": {
      "cmdlet1": "get_team",
      "cmdlet2": "set_team"
    }
  },
  {
    "id": "ms700-q232",
    "prompt": "NO.232 You plan to implement a pilot project on Phone System for 100 users.\nThe pilot project will use a Microsoft Calling Plan.\nYou need to ensure that the users can establish calls to the PSTN.\nWhich cmdlets should you run?",
    "image": "",
    "answers": [
      "Set-AzureADUserLicense, Set-CSUser, and Set-AzureADUser",
      "Grant-CsOnlineVoiceRoutingPolicy, Set-CsOnlineVoiceUser, and Set-CSUser",
      "Set-AzureADUser, Grant-CsOnlineVoiceRoutingPolicy, and Set-CsOnlineVoiceUser",
      "Set-AzureADUserLicense, Set-CsOnlineVoiceUser, and Set-CSUser"
    ],
    "correctAnswer": "Set-AzureADUserLicense, Set-CsOnlineVoiceUser, and Set-CSUser",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q233",
    "prompt": "NO.233 You have a Microsoft Office 365 subscription that contains a user named User1.\nYou need to ensure that User1 can view Usage reports in the Microsoft Teams admin center. The\nsolution must use the principle of least privilege.\nWhich role should you assign to User1?",
    "image": "",
    "answers": [
      "Global Administrator",
      "Usage Summary Reports Reader",
      "Helpdesk Administrator",
      "Skype for Business administrator"
    ],
    "correctAnswer": "Usage Summary Reports Reader",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q234",
    "prompt": "NO.234 Note: This question is part of a series of questions that present the same scenario. Each\nquestion in the series contains a unique solution that might meet the stated goals. Some question\nsets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYour company has a Microsoft 365 subscription.\nYou plan to configure the environment to allow external users to collaborate in Microsoft Teams by\nusing guest access.\nThe company implements a new security policy that has the following requirements:\n* Only guest users from specific domains must be allowed to connect to collaborate by using\nMicrosoft Teams.\n* Guest users must be prevented from inviting other guests.\nYou need to recommend a solution to meet the security policy requirements.\nSolution: From PowerShell, you run the New-CSExternalAccessPolicy and Set-CSExternalAccessPolicy\ncmdlets.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "No",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q235",
    "prompt": "NO.235 You have a Teams deployment.\nYou change the display name and profile photo of a user named User1.\nYou need to ensure that the changes are displayed as soon as possible in the new Teams client for\nUser1.\nWhat should you do?",
    "image": "",
    "answers": [
      "Run the Microsoft Support and Recovery Assistant.",
      "Run the self-help diagnostics took",
      "Clear the Teams client cache.",
      "Clear the web browser cache."
    ],
    "correctAnswer": "Clear the Teams client cache.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q236",
    "prompt": "NO.236 Note: This question is part of a series of questions that present the same scenario. Each\nquestion in the series contains a unique solution that might meet the stated goals. Some question\nsets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYour company has a Microsoft 365 subscription.\nYou need to prevent temporary employees from using the private chat feature in Microsoft Teams.\nSolution: You create a meeting policy and assign the policy to the users.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "No",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q237",
    "prompt": "NO.237 Note: This question is part of a series of questions that present the same scenario. Each\nquestion in the series contains a unique solution that might meet the stated goals. Some question\nsets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYour company has 10 offices in North America and Europe.\nThe company has 5,000 users.\nYou plan to deploy Microsoft Teams for all the users.\nYou run a pilot project for the planned deployment.\nYou need to identify the network packet loss from the pilot computers to Microsoft Teams during\ncalls.\nSolution: From the Microsoft Teams admin center, you run the Network Planner.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "No",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q238",
    "prompt": "NO.238 Your company has a Microsoft Office 365 subscription.\nThe company has three departments. Each department contains a group as shown in the following\ntable.\nYou plan to create a team for each group.\nYou need to ensure that a team can be created for each group. The solution must minimize\nadministrative effort.\nWhat should you do to each group? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "text": "HR: "
        },
        {
          "slot": "hr"
        },
        {
          "text": "\nR&D: "
        },
        {
          "slot": "rd"
        },
        {
          "text": "\nSales: "
        },
        {
          "slot": "sales"
        }
      ],
      "slots": {
        "hr": {
          "label": "HR",
          "options": [
            "Change the group to an Office 365 group.",
            "Recreate the group as an Office 365 group.",
            "Change the group to a security group."
          ],
          "correct": "Change the group to an Office 365 group."
        },
        "rd": {
          "label": "R&D",
          "options": [
            "Change the group to an Office 365 group.",
            "Recreate the group as an Office 365 group.",
            "Change the group to a universal group."
          ],
          "correct": "Recreate the group as an Office 365 group."
        },
        "sales": {
          "label": "Sales",
          "options": [
            "Change the group to an Office 365 group.",
            "Recreate the group as an Office 365 group.",
            "Change the group to a global group."
          ],
          "correct": "Recreate the group as an Office 365 group."
        }
      }
    }
  },
  {
    "id": "ms700-q239",
    "prompt": "NO.239 Your company has a Microsoft Teams deployment that contains a team named HR\nTaskforce. The members of HR Taskforce are shown in the HR Taskforce exhibit.\nThe members of a private channel named Staff Reviews are shown in the Members exhibit.\nThe files in the Staff Reviews channel are shown in the Files exhibit.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point",
    "image": "",
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "s1",
        "label": "A user named Megan Bowen can view the name, description, and\nowner of the Staff Reviews channel."
      },
      {
        "id": "s2",
        "label": "A user named Megan Bowen can open the Staff Reviews Q4.docx file."
      },
      {
        "id": "s3",
        "label": "A user named Megan Bowen can add new members to the Staff\nReviews channel."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "inputType": "radio",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "s1": "Yes",
          "s2": "No",
          "s3": "No"
        }
      }
    ],
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q240",
    "prompt": "NO.240 You have a Microsoft 365 E5 subscription that uses Teams.\nA group named Group1 collaborates with users from a partner company named fabrikam.com.\nYou need to ensure that only the members of Group1 can create shared channels and invite users\nfrom fabrikam.com.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "Configure Teams settings.",
      "From Outbound access settings, configure B2B direct connect for fabrikam.com.",
      "Configure an app setup policy in Teams.",
      "Configure a Teams policy.",
      "From Inbound access settings, configure B2B direct connect for fabrikam.com."
    ],
    "correctAnswer": [
      "Configure a Teams policy.",
      "From Inbound access settings, configure B2B direct connect for fabrikam.com."
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q241",
    "prompt": "NO.241 Note: This question is part of a series of questions that present the same scenario. Each\nquestion in the series contains a unique solution that might meet the stated goals. Some question\nsets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYour company has a Microsoft 365 subscription that uses an Azure Active Directory (Azure AD) tenant\nnamed contoso.com.\nYou need to prevent guest users in the tenant from using cameras during Microsoft Teams meetings.\nSolution: From Microsoft Teams admin center, you modify the External sharing settings.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "Yes",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q242",
    "prompt": "NO.242 Your company has a trading department and a research department.\nThe company purchases a Microsoft 365 E5 subscription.\nYou plan to deploy Microsoft 365 E5 licenses to all users.\nYou need to block communication between the users in the trading department and the users in the\nresearch department.\nWhich four actions should you perform in sequence? To answer, move the appropriate actions from\nthe list of actions to the answer area and arrange them in the correct order.",
    "image": "",
    "allowAnswerShuffle": false,
    "type": "dragMatch",
    "items": [
      {
        "id": "it1",
        "label": "Create administrative units in Azure AD."
      },
      {
        "id": "it2",
        "label": "Create app permissions policies."
      },
      {
        "id": "it3",
        "label": "From the Microsoft Teams admin center, enable scoped directory search."
      },
      {
        "id": "it4",
        "label": "Provide admin consent for the Information Barrier Processor."
      },
      {
        "id": "it5",
        "label": "Make a list of segments to define."
      },
      {
        "id": "it6",
        "label": "Create information barrier policies."
      }
    ],
    "targets": [
      {
        "id": "step1",
        "label": "Step 1"
      },
      {
        "id": "step2",
        "label": "Step 2"
      },
      {
        "id": "step3",
        "label": "Step 3"
      },
      {
        "id": "step4",
        "label": "Step 4"
      }
    ],
    "correctByTarget": {
      "step1": "it3",
      "step2": "it4",
      "step3": "it5",
      "step4": "it6"
    }
  },
  {
    "id": "ms700-q243",
    "prompt": "NO.243 You have a Microsoft 365 subscription that uses Microsoft Teams.\nYou need to meet the following requirements:\n* Users must be able to join meetings by dialing a phone number.\n* Users must be able to apply custom branded meeting lobbies.\n* Auto attendants and call queues must be implemented.\nWhich Microsoft Teams feature should you configure for each requirement? To answer, select the\nappropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "text": "Join meetings by dialing a phone number: "
        },
        {
          "slot": "join"
        },
        {
          "text": "\nImplement auto attendants and call queues: "
        },
        {
          "slot": "auto"
        },
        {
          "text": "\nApply custom branded meeting lobbies: "
        },
        {
          "slot": "lobby"
        }
      ],
      "slots": {
        "join": {
          "label": "Join meetings",
          "options": [
            "Calling Plans",
            "Audio Conferencing",
            "Microsoft Teams Rooms",
            "Advanced Communications"
          ],
          "correct": "Audio Conferencing"
        },
        "auto": {
          "label": "Auto attendants and call queues",
          "options": [
            "Calling Plans",
            "Communication credits",
            "Microsoft Teams Rooms",
            "Advanced Communications"
          ],
          "correct": "Calling Plans"
        },
        "lobby": {
          "label": "Custom branded meeting lobbies",
          "options": [
            "Communication credits",
            "Microsoft Teams Rooms",
            "Advanced Communications",
            "Microsoft 365 Audio Conferencing"
          ],
          "correct": "Advanced Communications"
        }
      }
    }
  },
  {
    "id": "ms700-q244",
    "prompt": "NO.244 You have a Microsoft 365 E5 subscription that uses Microsoft Teams\nUsers report poor call quality.\nYou need to identify the source of the call quality issues and which locations are affected.\nWhat should you do first?",
    "image": "",
    "answers": [
      "Run the Teams device usage report.",
      "Run the Teams user activity report.",
      "Upload building data to the Call quality dashboard.",
      "Upload reporting labels for each location."
    ],
    "correctAnswer": "Upload building data to the Call quality dashboard.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q245",
    "prompt": "NO.245 Which two actions should you perform to meet the collaboration requirements? Each\ncorrect answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "Configure the inbound settings.",
      "Create a meeting policy.",
      "Add Fabrikam as an organization.",
      "Create a messaging policy.",
      "Configure the outbound settings."
    ],
    "correctAnswer": [
      "Add Fabrikam as an organization.",
      "Configure the outbound settings."
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q246",
    "prompt": "NO.246 You have an Active Directory user named User1.\nYou need to ensure that User1 can view the following reports:\n* Microsoft Teams user activity report\n* Microsoft Teams device usage report\n* The solution must limit the ability of User1 to make changes to Microsoft 365 services.\nWhich role should you assign to User1?",
    "image": "",
    "answers": [
      "Teams Service Administrator",
      "Reports reader",
      "Teams Communications Support Specialist",
      "Message Center reader"
    ],
    "correctAnswer": "Reports reader",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q247",
    "prompt": "NO.247 Note: This question is part of a series of questions that present the same scenario. Each\nquestion in the series contains a unique solution that might meet the stated goals. Some question\nsets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYou have a Microsoft 365 subscription that contains several Microsoft SharePoint Online sites.\nYou need to ensure that the content stored in a SharePoint modern team site named Sales is\navailable from Microsoft Teams. The solution must ensure that when a new channel is added to a\nteam, a folder for the channel is created in the Sales site.\nSolution: From a team, you add a tab for the Sales site.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "No",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q248",
    "prompt": "NO.248 You have a Microsoft 365 subscription that contains the users shown in the following table.\nin Microsoft Teams, User3 creates a new team named Team1.\nUser1 configures the Groups Expiration settings as shown in the following exhibit.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "s1",
        "label": "User1 will receive a renewal notification 180 days before Team1 is due to expire."
      },
      {
        "id": "s2",
        "label": "User2 can renew Team1 before the team expires."
      },
      {
        "id": "s3",
        "label": "User3 will receive a renewal notification 30 days before Team1 is due to expire."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "inputType": "radio",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "s1": "No",
          "s2": "No",
          "s3": "Yes"
        }
      }
    ],
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q249",
    "prompt": "NO.249 You have a Microsoft 365 E3 subscription.\nYou have a conference room that contains a Teams Rooms device named Device1. Device1 is\nassigned a Teams Rooms Basic license.\nYou need to ensure that you can restart Device1 from a remote location.\nWhat should you do?",
    "image": "",
    "answers": [
      "Assign Device1 a Teams Rooms Pro license.",
      "Join Device 1 to Microsoft Entra.",
      "Enroll Device1 in Microsoft Intune.",
      "Assign Device1 a Microsoft 365 E5 license."
    ],
    "correctAnswer": "Assign Device1 a Teams Rooms Pro license.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q250",
    "prompt": "NO.250 Your company has a Microsoft 365 subscription that contains 20 teams.\nYou need to ensure that a team named Team1 is identified as Highly Confidential in the Microsoft\nTeams client.\nWhat should you use?",
    "image": "",
    "answers": [
      "a classification label in the Azure Active Directory admin center",
      "a sensitivity label in the Security & Compliance admin center",
      "a supervisor policy in the Security & Compliance admin center",
      "a teams policy in the Microsoft Teams admin center"
    ],
    "correctAnswer": "a sensitivity label in the Security & Compliance admin center",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q251",
    "prompt": "NO.251 You have a Teams deployment.\nYou have a custom app named App1 that is uploaded to Teams. You need to ensure that App1 is\npinned to the app bar for all users. What should you configure in the Microsoft Teams admin center?",
    "image": "",
    "answers": [
      "Teams settings",
      "App setup policies",
      "Org-wide app settings",
      "Templates policies"
    ],
    "correctAnswer": "Org-wide app settings",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q252",
    "prompt": "NO.252 You need to troubleshoot the reported user issues.\nWhat should you use?",
    "image": "",
    "answers": [
      "the WebRTC logs",
      "the Teams support log files",
      "the Application log in Event Viewer",
      "the System log in Event Viewer"
    ],
    "correctAnswer": "the Teams support log files",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q253",
    "prompt": "NO.253 You have a Microsoft Office 365 subscription named contoso.com.\nYou need to create the Microsoft teams shown in the following table.\nWhat should you configure each team? To answer, drag the appropriate team types to the correct\nteams. Each team type may be used once, more than once, or not at all. You may need to drag the\nsplit bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "allowAnswerShuffle": false,
    "type": "dragMatch",
    "items": [
      {
        "id": "it1",
        "label": "Org-wide"
      },
      {
        "id": "it2",
        "label": "Private"
      },
      {
        "id": "it3",
        "label": "Public"
      }
    ],
    "targets": [
      {
        "id": "sales",
        "label": "Sales"
      },
      {
        "id": "general",
        "label": "General"
      },
      {
        "id": "project",
        "label": "Project"
      }
    ],
    "correctByTarget": {
      "sales": "it2",
      "general": "it1",
      "project": "it3"
    }
  },
  {
    "id": "ms700-q254",
    "prompt": "NO.254 You have a Microsoft 365 subscription that uses Teams.\nYou deploy Teams to a branch office that has limited internet bandwidth.\nYou need to configure policy settings to enforce network bandwidth restrictions only when Teams\nusers are in the branch office.\nWhich two policies should you configure? Each correct answer presents part of the solution.\nNOTE Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "a meeting policy",
      "an Audio Conferencing routing policy",
      "a calling policy",
      "a voice routing policy",
      "a network roaming policy"
    ],
    "correctAnswer": [
      "a meeting policy",
      "a network roaming policy"
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q255",
    "prompt": "NO.255 You have a Microsoft 365 subscription.\nYou plan to implement Teams.\nYou need to recommend a solution to assess the current environment and identify configurations\nthat must be updated to support Teams meetings and online conferences.\nWhat should you include in the recommendation?",
    "image": "",
    "answers": [
      "Network planner",
      "the Microsoft 365 Assessment tool",
      "Microsoft Office Deployment Tool (ODT)",
      "Teams advisor"
    ],
    "correctAnswer": "Teams advisor",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q256",
    "prompt": "NO.256 Your company has a Microsoft 365 E5 subscription.\nYou enable guest access for Microsoft Teams.\nYou need to prevent all users from downloading and opening files that contain malware by using\nMicrosoft Teams channels.\nWhat should you do first?",
    "image": "",
    "answers": [
      "From the Microsoft Purview compliance portal, create a data loss prevention (DLP) policy.",
      "From the Microsoft 365 Defender portal, select Turn on Defender for Office 365 for SharePoint, OneDrive, and Microsoft Teams",
      "From the Azure Active Directory admin center, add an identity provider.",
      "From the Azure Active Directory admin center, enable the End user protection baseline policy."
    ],
    "correctAnswer": "From the Microsoft 365 Defender portal, select Turn on Defender for Office 365 for SharePoint, OneDrive, and Microsoft Teams",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q257",
    "prompt": "NO.257 You have a Microsoft 365 E5 subscription that uses Microsoft Teams and a hybrid\ndeployment of Microsoft Skype for Business Server.\nCoexistence mode in Microsoft Teams is set to Islands.\nCoexistence mode is configured for three users named User1, User2, and User3 as shown in the\nfollowing table.\nThe Skype for Business user accounts are homed as shown in the following table.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "s1",
        "label": "User3 must use the Microsoft Teams client to initiate a new chat with User1."
      },
      {
        "id": "s2",
        "label": "User1 must use the Microsoft Teams client to initiate a new chat with User2."
      },
      {
        "id": "s3",
        "label": "User2 must use the Skype for Business client to initiate a new chat with\nUser1 and User3."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "inputType": "radio",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "s1": "Yes",
          "s2": "No",
          "s3": "Yes"
        }
      }
    ],
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q258",
    "prompt": "NO.258 You have a Microsoft 365 subscription that uses Microsoft Teams.\nYou plan to deploy a Microsoft Teams display device.\nYou need to enable automatic provisioning.\nWhich type of resource account should you create, and what should you use to identify the device?\nTo answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "text": "To identify the device, use: "
        },
        {
          "slot": "identify"
        },
        {
          "text": "\nCreate resource account type: "
        },
        {
          "slot": "acct"
        }
      ],
      "slots": {
        "identify": {
          "label": "Identify device",
          "options": [
            "The IP address",
            "The device hash",
            "The hardware ID",
            "The device serial number",
            "The device MAC address"
          ],
          "correct": "The device MAC address"
        },
        "acct": {
          "label": "Resource account type",
          "options": [
            "Microsoft 365 room resource account",
            "Microsoft Teams resource account",
            "Microsoft Exchange Server equipment resource account"
          ],
          "correct": "Microsoft 365 room resource account"
        }
      }
    }
  },
  {
    "id": "ms700-q259",
    "prompt": "NO.259 You have a Microsoft 36S E5 subscription that uses Microsoft Teams.\nYou need to enforce multi-factor authentication (MFA) for all users that access Microsoft Teams\noutside the corporate network.\nWhat should you configure?",
    "image": "",
    "answers": [
      "a compliance policy",
      "a Teams policy",
      "a sign-in risk policy",
      "a Conditional Access policy"
    ],
    "correctAnswer": "a Conditional Access policy",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q260",
    "prompt": "NO.260 Your company uses Teams.\nYou are assigned the Teams Communications Support Specialist role.\nYou need to be assigned a role that will enable you to publish a new app to the Teams apps page. The\nsolution must follow the principle of least privilege.\nWhich role should be assigned to you?",
    "image": "",
    "answers": [
      "Office Apps Administrator",
      "Teams Administrator",
      "Application Administrator",
      "Cloud Application Administrator"
    ],
    "correctAnswer": "Cloud Application Administrator",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q261",
    "prompt": "NO.261 Your company has a marketing department and a sales department.\nYou have a Teams deployment.\nYou need to recommend an infrastructure that meets the following requirements:\n* Users in the sales department must share system audio.\n* Users in the marketing department must upload custom backgrounds.\n* Whenever possible, the virtual desktop infrastructure (VDI) must be prioritized to save costs.\nWhat should you include in the recommendation for each department? To answer, select the\nappropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "text": "Marketing: "
        },
        {
          "slot": "marketing"
        },
        {
          "text": "\nSales: "
        },
        {
          "slot": "sales"
        }
      ],
      "slots": {
        "marketing": {
          "label": "Marketing",
          "options": [
            "A traditional desktop",
            "Azure Virtual Desktop",
            "Citrix DaaS",
            "VMware"
          ],
          "correct": "Azure Virtual Desktop"
        },
        "sales": {
          "label": "Sales",
          "options": [
            "A traditional desktop",
            "Azure Virtual Desktop",
            "Citrix DaaS",
            "VMware"
          ],
          "correct": "Azure Virtual Desktop"
        }
      }
    }
  },
  {
    "id": "ms700-q262",
    "prompt": "NO.262 Your company has a Microsoft 365 subscription that uses Teams.\nA user named User1 reports the following issues:\n* User1 cannot schedule a live event by using the teams client.\n* User1 experiences only one-way audio during a Teams call.\nYou need to troubleshoot the issues.\nWhich client-side log should you review for each issue? To answer, drag the appropriate logs to the\ncorrect issues. Each log may be used once, more than once, or not at all. You may need to drag the\nsplit bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "allowAnswerShuffle": false,
    "type": "dragMatch",
    "items": [
      {
        "id": "it1",
        "label": "Debug log"
      },
      {
        "id": "it2",
        "label": "Desktop log"
      },
      {
        "id": "it3",
        "label": "Media log"
      },
      {
        "id": "it4",
        "label": "Windows event log"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "label": "User1 cannot schedule a live event by using\nthe Teams client."
      },
      {
        "id": "t2",
        "label": "User1 experiences only one-way audio during\na Teams call."
      }
    ],
    "correctByTarget": {
      "t1": "it1",
      "t2": "it3"
    }
  },
  {
    "id": "ms700-q263",
    "prompt": "NO.263 Your company uses Microsoft Teams.\nAll users are assigned a Microsoft 365 E3 license.\nYou need to purchase add-on licenses that provide the following:\nThe ability to add a logo to the meeting lobby\nAutomatic protection against malicious links in chats\nWhich add-on license should you obtain for each requirement? To answer, select the appropriate\noptions in the answer area.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "text": "The ability to add a logo to the meeting lobby: "
        },
        {
          "slot": "logo"
        },
        {
          "text": "\nAutomatic protection against malicious links posted in chats: "
        },
        {
          "slot": "links"
        }
      ],
      "slots": {
        "logo": {
          "label": "Meeting lobby logo",
          "options": [
            "Advanced Communications",
            "Audio Conferencing",
            "Communications Credits",
            "Microsoft Teams Rooms"
          ],
          "correct": "Advanced Communications"
        },
        "links": {
          "label": "Malicious links protection",
          "options": [
            "Advanced Communications",
            "Compliance",
            "Insider Risk Management",
            "Microsoft Defender for Office 365"
          ],
          "correct": "Microsoft Defender for Office 365"
        }
      }
    }
  },
  {
    "id": "ms700-q264",
    "prompt": "NO.264 You have a Teams deployment.\nYou deploy the new Teams client to users.\nSome users report that the Teams Meeting add-in is missing from Microsoft Outlook after the\ndeployment.\nYou need to ensure that Outlook has the Teams Meeting add-in.\nWhat should you do?",
    "image": "",
    "answers": [
      "Clear the Teams client cache.",
      "Runsfc.exe.",
      "Run the Teams client as an administrator.",
      "Uninstall the Teams Meeting add-in and restart Teams and Outlook."
    ],
    "correctAnswer": "Uninstall the Teams Meeting add-in and restart Teams and Outlook.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q265",
    "prompt": "NO.265 Note: This question is part of a series of questions that present the same scenario. Each\nquestion in the series contains a unique solution that might meet the stated goals. Some question\nsets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYour company has a Microsoft 365 subscription.\nYou need to prevent a user named User1 from permanently deleting private chats in Microsoft\nTeams.\nSolution: You place the mailbox of User1 on Litigation Hold.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "Yes",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q266",
    "prompt": "NO.266 Your company has a Microsoft 365 subscription.\nYou need to ensure that only the members of the company's IT group can create private channels.\nWhich three actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "Modify the global teams policy.",
      "Assign the members of the IT group to the policy.",
      "Create a custom teams policy.",
      "Run the Sec-TeamsChannel cmdlet.",
      "Modify the global messaging policy.",
      "Create a custom messaging policy."
    ],
    "correctAnswer": [
      "Modify the global teams policy.",
      "Assign the members of the IT group to the policy.",
      "Create a custom teams policy."
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q267",
    "prompt": "NO.267 You have a Microsoft 365 subscription that uses Microsoft Teams and contains the users\nshown in the following table.\nThe users are assigned role-based access control {RBAQ roles as shown in the following table.\nYou configure a Microsoft 365 group naming policy as shown in the following exhibit.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select N:\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "s1",
        "label": "User1 is exempt from the Microsoft 365 group naming policy."
      },
      {
        "id": "s2",
        "label": "Before User2 can create a team, the StateOrProvince attribute for User2 must be\nconfigured."
      },
      {
        "id": "s3",
        "label": "If User3 attempts to create a team named Projects, the team will be named\nGRPSupportProjectsCA."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "inputType": "radio",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "s1": "Yes",
          "s2": "No",
          "s3": "Yes"
        }
      }
    ],
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q268",
    "prompt": "NO.268 You have a Microsoft 365 subscription that uses Teams.\nYou need to upload network IP subnet information to call analytics.\nWhat should you configure?",
    "image": "",
    "answers": [
      "Reporting labels",
      "Notification & alerts",
      "Network topology",
      "Voice application policies"
    ],
    "correctAnswer": "Notification & alerts",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q269",
    "prompt": "NO.269 You have a Microsoft 365 subscription that uses Teams and contains the users shown in the\nfollowing table.\nYou have a private team named Sales that contains the members shown in the following table.\nThe Sales team contains the channels shown in the following table.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "s1",
        "label": "User1 is added automatically as an owner of the Budgets channel."
      },
      {
        "id": "s2",
        "label": "User2 is the only member who can start a new post in the Planning channel."
      },
      {
        "id": "s3",
        "label": "User4 can be added as a member of the Budgets channel."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "inputType": "radio",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "s1": "No",
          "s2": "Yes",
          "s3": "No"
        }
      }
    ],
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q270",
    "prompt": "NO.270 Your company has a Microsoft 365 subscription.\nThe company's global app permission policy is configured as shown in the following exhibit.\nUsers report that they can view the list of available third-party apps from the Microsoft Teams client.\nYou need to ensure that the Who app is the only visible app from the Microsoft Teams client.\nWhat should you modify?",
    "image": "",
    "answers": [
      "the Org-wide app settings",
      "the global app permission policy",
      "the global app setup policy",
      "the global teams policy"
    ],
    "correctAnswer": "the global app setup policy",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q271",
    "prompt": "NO.271 Your company uses Teams.\nTwo users named User 1 and User2 use the Teams client few Windows. The users report the\nfollowing issues;\n* User1 reports that when attempting to sign in, the Teams client remains on the sign-in page.\n* User2 reports receiving an error when attempting to screen share during a Teams meeting.\nYou need to troubleshoot the issues.\nWhich client-side log should you review for each user? To answer, drag the appropriate logs to the\ncorrect users. Each log may be used once more than once, or not at all. You may need to drag the\nsplit bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "allowAnswerShuffle": false,
    "type": "dragMatch",
    "items": [
      {
        "id": "it1",
        "label": "Debug log"
      },
      {
        "id": "it2",
        "label": "Desktop log"
      },
      {
        "id": "it3",
        "label": "Media log"
      },
      {
        "id": "it4",
        "label": "WebRTC log"
      },
      {
        "id": "it5",
        "label": "Windows event log"
      }
    ],
    "targets": [
      {
        "id": "user1",
        "label": "User1"
      },
      {
        "id": "user2",
        "label": "User2"
      }
    ],
    "correctByTarget": {
      "user1": "it1",
      "user2": "it3"
    }
  },
  {
    "id": "ms700-q272",
    "prompt": "NO.272 You are reviewing the planned implementation of information barriers for your company.\nYou run the following command.\nYou activate the information barrier policies.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "s1",
        "label": "The users in HR can initiate a Microsoft Teams chat with the users in Sales."
      },
      {
        "id": "s2",
        "label": "The users in Sales can invite the users in HR to a Microsoft Teams meeting."
      },
      {
        "id": "s3",
        "label": "The users in Research and HR can collaborate in a Microsoft Teams channel."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "inputType": "radio",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "s1": "Yes",
          "s2": "No",
          "s3": "Yes"
        }
      }
    ],
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q273",
    "prompt": "NO.273 Your company has five offices. Each office has a unique phone number.\nYou plan to deploy Phone System to all the offices.\nYou need to ensure that each office has a unique greeting message for the weekdays and a unique\ngreeting message for the weekends. The solution must minimize administrative effort.\nD18912E1457D5D1DDCBD40AB3BF70D5D\nWhat should you create?",
    "image": "",
    "answers": [
      "one auto attendant that contains all five phone numbers",
      "one call queue that contains all five phone numbers",
      "five auto attendants that each contains one phone number",
      "five call queues that each contains one phone number"
    ],
    "correctAnswer": "five auto attendants that each contains one phone number",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q274",
    "prompt": "NO.274 You have a Microsoft 365 E5 subscription that is linked to an Azure Active Directory (Azure\nAD) tenant. The tenant contains the groups shown in the following table.\nYou need to create a new team by using the Microsoft Teams client.\nWhich group can you use to create the new team?",
    "image": "",
    "answers": [
      "Group4",
      "Group1",
      "Group2",
      "Group3"
    ],
    "correctAnswer": "Group3",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q275",
    "prompt": "NO.275 Your company has offices in New York and Seattle.\nYou have a Microsoft 365 subscription that uses Teams.\nYou plan to assess network connectivity and make recommendations to optimize connectivity from\neach office to Teams.\nYou run the Microsoft 365 network connectivity test tool at both offices and produce the results\nshown in the following table.\nFor each of the following statements, select Yes if True. Otherwise select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "s1",
        "label": "VPN split tunneling must be implemented in the New York office."
      },
      {
        "id": "s2",
        "label": "Deploying a VPN connection to the Seattle office will improve the latency results for Teams."
      },
      {
        "id": "s3",
        "label": "A local internet breakout must be implemented in the New York office to improve\nconnectivity to Teams."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "inputType": "radio",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "s1": "Yes",
          "s2": "No",
          "s3": "Yes"
        }
      }
    ],
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q276",
    "prompt": "NO.276 You have a Microsoft 365 subscription that uses Microsoft Teams and 300 Microsoft Teams-\ncertified IP phones.\nYou need to locate, group, and filter the IP phones based on keywords.\nWhat should you use?",
    "image": "",
    "answers": [
      "device tags",
      "reporting labels",
      "a configuration profile",
      "a label policy"
    ],
    "correctAnswer": "device tags",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q277",
    "prompt": "NO.277 Your company uses Teams.\nYou are assigned the Teams Communications Support Specialist role.\nYou discover that you cannot read activity reports in the Microsoft 36S admin center.\nYou need to be assigned a role that will enable you to read the activity reports. The solution must\nfollow the principle of least privilege.\nWhich role should be assigned to you?",
    "image": "",
    "answers": [
      "Teams Communications Support Engineer",
      "Teams Administrator",
      "Global Administrator",
      "Teams Communications Administrator"
    ],
    "correctAnswer": "Teams Communications Administrator",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q278",
    "prompt": "NO.278 In the Microsoft Teams admin center, you attempt to add an emergency address as shown\nin the following exhibit.\nYou need to validate the address.\nWhat should you do?",
    "image": "",
    "answers": [
      "Specify the latitude and longitude of the location.",
      "Provide The Emergency Location Identification Number (ELIN) associated with the emergency address.",
      "Create an emergency call routing policy.",
      "Create an emergency calling policy."
    ],
    "correctAnswer": "Create an emergency call routing policy.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q279",
    "prompt": "NO.279 You need to meet the governance requirements for new teams.\nHow should you complete the script? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "text": "$NameList = Get-Content \"C:\\\\work\\\\currentblockedwordslist.txt\"\n$NameList = [string]::join(\",\", $NameList)\n$Setting = Get-MgBetaDirectorySetting | where {$_.DisplayName -eq \"Group.Unified\"}\n\nif ($Setting.Count -eq 0) {\n  $Template = Get-MgBetaDirectorySettingTemplate | where {$_.DisplayName -eq \"Group.Unified\"}\n  $Params = @{ templateId = $Template.Id }\n  $Setting = "
        },
        {
          "slot": "newCmdlet"
        },
        {
          "text": " -BodyParameter $Params\n}\n\n$params = @(\n  @{ name = \"PrefixSuffixNamingRequirement\"; value = \"GRP_[GroupName]_[Department]\" },\n  @{ name = \"CustomBlockedWordsList\"; value = \"$NameList\" }\n)\n\n"
        },
        {
          "slot": "updateCmdlet"
        },
        {
          "text": " -DirectorySettingId $Setting.Id -BodyParameter $Params"
        }
      ],
      "slots": {
        "newCmdlet": {
          "label": "New cmdlet",
          "options": [
            "New-MgBetaDirectorySetting",
            "New-MgBetaDataPolicyOperation",
            "New-MgBetaDirectoryObject",
            "New-MgBetaDirectoryRole"
          ],
          "correct": "New-MgBetaDirectorySetting"
        },
        "updateCmdlet": {
          "label": "Update cmdlet",
          "options": [
            "Update-MgBetaDirectory",
            "Update-MgBetaDirectoryObject",
            "Update-MgBetaDirectoryRole",
            "Update-MgBetaDirectorySetting"
          ],
          "correct": "Update-MgBetaDirectorySetting"
        }
      }
    }
  },
  {
    "id": "ms700-q280",
    "prompt": "NO.280 Exhibit:\nYou need to ensure that the user sees only the Manage a Project template.\nWhat should you do?",
    "image": "",
    "answers": [
      "From PowerShell, modify the Teams policies.",
      "From the Microsoft Teams admin center. modify the team templates.",
      "From the Microsoft Teams admin center, modify the templates policies.",
      "From PowerShell, modify the team templates."
    ],
    "correctAnswer": "From the Microsoft Teams admin center, modify the templates policies.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q281",
    "prompt": "NO.281 The Subscription has the Teams policy shown in the following exhibit:\nYou need to ensure that the members of Group1 can create private channels. The solution must use\nthe principle of least privilege.\nWhat should you do first?",
    "image": "",
    "answers": [
      "Create a team template.",
      "Modify the Teams settings for the subscription.",
      "Modify the Global (Org-wide default) policy and set Create private channels to On.",
      "Create a Teams policy that has Create private channels set to On."
    ],
    "correctAnswer": "Create a Teams policy that has Create private channels set to On.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q282",
    "prompt": "NO.282 You have a Microsoft 365 subscription that uses Teams.\nYou have a room in Teams Rooms that contains a panel mounted at the entrance.\nYou need to ensure that the panel displays a maximum room occupancy notification.\nWhat should you configure?",
    "image": "",
    "answers": [
      "a configuration profile",
      "a notification rule",
      "an app setup policy",
      "a meeting policy"
    ],
    "correctAnswer": "a configuration profile",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q283",
    "prompt": "NO.283 Note: This question is part of a series of questions that present the same scenario. Each\nquestion in the series contains a unique solution that might meet the stated goals. Some question\nsets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYour company has a Microsoft 365 subscription.\nYou need to prevent temporary employees from using the private chat feature in Microsoft Teams.\nSolution: You create a teams policy and assign the policy to the users.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "No",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q284",
    "prompt": "NO.284 You have a Microsoft 365 subscription that uses Microsoft Teams and contains three users\nnamed User1, User2, and User3.\nYou need to configure Microsoft Teams to meet the following requirements:\n* Prevent User1 and User2 from creating private channels.\n* Ensure that User3 can control who can create private channels.\n* Minimize administrative effort.\nWhich three actions should you perform in sequence? To answer, move all actions from the list of\nactions to the answer area and arrange them in the correct order.\nNOTE: More than one order of answer choices is correct. You will receive credit for any of the correct\norders you select.",
    "image": "",
    "allowAnswerShuffle": false,
    "type": "dragMatch",
    "items": [
      {
        "id": "it1",
        "label": "Create a distribution list named dist1. To dist1, add User1 and\nUser2 as members and add User3 as the owner"
      },
      {
        "id": "it2",
        "label": "Create an update policy named Policy1 and set Show preview\nfeatures to On"
      },
      {
        "id": "it3",
        "label": "Add a teams policy named Policy1 and set Create private\nchannels to Off"
      },
      {
        "id": "it4",
        "label": "Edit the properties of User1 and User2 and set Teams policy to\nPolicy1"
      },
      {
        "id": "it5",
        "label": "Create a Microsoft Teams group policy assignment and assign\nPolicy1 to dist1"
      }
    ],
    "targets": [
      {
        "id": "step1",
        "label": "Step 1"
      },
      {
        "id": "step2",
        "label": "Step 2"
      },
      {
        "id": "step3",
        "label": "Step 3"
      }
    ],
    "correctByTarget": {
      "step1": "it1",
      "step2": "it3",
      "step3": "it5"
    }
  },
  {
    "id": "ms700-q285",
    "prompt": "NO.285 You have a Microsoft 365 ES subscription.\nYou plan to have Teams administrators use sell-help diagnostics.\nWhich two scenarios are covered by self-help diagnostics? Each correct answer presents a complete\nsolution.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "Validate that a specified user can disable Teams live events.",
      "Validate that a specified user is configured to record meetings.",
      "Review Teams guest access.",
      "Attempt to locate a missing Teams meeting recording.",
      "Validate end-to-end encryption for strictly confidential Teams meetings"
    ],
    "correctAnswer": [
      "Validate that a specified user is configured to record meetings.",
      "Attempt to locate a missing Teams meeting recording."
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q286",
    "prompt": "NO.286 Your company uses Teams.\nUsers often use Teams mobile apps to make and receive calls.\nYou change the display name for a user named User1.\nUser! reports that their previous name still appears when they receive incoming calls in the Teams\nmobile app.\nYou need to ensure that the updated display name for User1 appears.\nWhat should you do?",
    "image": "",
    "answers": [
      "Run the Sync-CsOnlineApplicationlnstance Cmdlet.",
      "Collect and review the Debug logs.",
      "From the Microsoft 365 admin center, run self-help diagnostics.",
      "Clear the Microsoft Teams client cache on the mobile phone."
    ],
    "correctAnswer": "Collect and review the Debug logs.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q287",
    "prompt": "NO.287 You have a Microsoft Office 365 subscription named contoso.com.\nYou need to create the Microsoft Teams teams shown in the following table.\nWhat should you configure each team? To answer, drag the appropriate team types to the correct\nteams. Each team type may be used once, more than once, or not at all. You may need to drag the\nsplit bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "allowAnswerShuffle": false,
    "type": "dragMatch",
    "items": [
      {
        "id": "it1",
        "label": "Org-wide"
      },
      {
        "id": "it2",
        "label": "Private"
      },
      {
        "id": "it3",
        "label": "Public"
      }
    ],
    "targets": [
      {
        "id": "sales",
        "label": "Sales"
      },
      {
        "id": "general",
        "label": "General"
      },
      {
        "id": "project",
        "label": "Project"
      }
    ],
    "correctByTarget": {
      "sales": "it2",
      "general": "it1",
      "project": "it3"
    }
  },
  {
    "id": "ms700-q288",
    "prompt": "NO.288 You have a Microsoft 365 E5 subscription that contains a user named User1.\nYou need to change the default conferencing toll phone number for User1 by using the Microsoft\nTeams admin center.\nWhat should you modify for User1?",
    "image": "",
    "answers": [
      "the Account settings",
      "Calling policy",
      "the Voice settings",
      "Meeting policy"
    ],
    "correctAnswer": "the Account settings",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q289",
    "prompt": "NO.289 Your company has a Microsoft 365 subscription.\nThe company plans to host Microsoft Teams live events for groups of users larger than 5,000.\nYou need to recommend a solution that minimizes the bandwidth required to stream the events.\nWhat should you include in the recommendation?",
    "image": "",
    "answers": [
      "a Session Border Controller (SBC)",
      "a third-party encoder",
      "an eCDN provider",
      "a Cloud Video Interop (CVI)"
    ],
    "correctAnswer": "an eCDN provider",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q290",
    "prompt": "NO.290 You have a Microsoft 365 E5 subscription that uses Teams.\nWhen you attempt to create a new sensitivity label for Teams, you discover that the Groups & sites\noption is unavailable as shown in the following exhibit.\nYou need to be able to select Groups & sites when you create the sensitivity label.\nWhich cmdlet should you run?",
    "image": "",
    "answers": [
      "Set-Uni-fiedQroup",
      "Set-AzureADDirectorySetting",
      "Set - SPOSiteoffice365Group",
      "Set-CsTeansEnhancedEncryptionPolicy"
    ],
    "correctAnswer": "Set-AzureADDirectorySetting",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q291",
    "prompt": "NO.291 Your company has a Microsoft 365 subscription.\nYou need to prevent only users in the company's research department from deleting chat messages.\nWhat should you do first from the Microsoft Teams admin center?",
    "image": "",
    "answers": [
      "Configure the Meeting settings.",
      "Create a new messaging policy.",
      "Modify the global messaging policy.",
      "Create a new meeting policy."
    ],
    "correctAnswer": "Create a new messaging policy.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q292",
    "prompt": "NO.292 You have a Microsoft E5 subscription that uses Teams.\nYour company uses the Microsoft Viva Connections app.\nYou need to configure the app to meet the following requirements:\n* Rename the app as Start\n* Replace Viva Connections with a custom logo.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from\nthe list of actions to the answer area and arrange them in the correct order.",
    "image": "",
    "allowAnswerShuffle": false,
    "type": "dragMatch",
    "items": [
      {
        "id": "it1",
        "label": "Configure a permission policy."
      },
      {
        "id": "it2",
        "label": "Customize the app."
      },
      {
        "id": "it3",
        "label": "Publish the app."
      },
      {
        "id": "it4",
        "label": "Customize the app store."
      },
      {
        "id": "it5",
        "label": "Upload the company logo."
      },
      {
        "id": "it6",
        "label": "Modify the app details and icons."
      },
      {
        "id": "it7",
        "label": "Assign a permission policy."
      }
    ],
    "targets": [
      {
        "id": "step1",
        "label": "Step 1"
      },
      {
        "id": "step2",
        "label": "Step 2"
      },
      {
        "id": "step3",
        "label": "Step 3"
      }
    ],
    "correctByTarget": {
      "step1": "it5",
      "step2": "it6",
      "step3": "it7"
    }
  },
  {
    "id": "ms700-q293",
    "prompt": "NO.293 Your company has the following departments:\n* Marketing\n* Information technology (IT)\nThe company uses Teams.\nYou need to recommend an access solution that meets the following requirements:\n* The marketing department must collaborate with an external consultant by using a Microsoft\nPowerPoint presentation stored in the General channel of a new team.\n* The IT department must be able to communicate with external consultants by using a private\nTeams chat and Teams calls.\nWhich type of access should you recommend for each department? To answer, select the\nappropriate options in the answer area. NOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "text": "Marketing: "
        },
        {
          "slot": "marketing"
        },
        {
          "text": "\nIT: "
        },
        {
          "slot": "it"
        }
      ],
      "slots": {
        "marketing": {
          "label": "Marketing",
          "options": [
            "B2B direct connect",
            "External access",
            "Guest access"
          ],
          "correct": "Guest access"
        },
        "it": {
          "label": "IT",
          "options": [
            "B2B direct connect",
            "External access",
            "Guest access"
          ],
          "correct": "B2B direct connect"
        }
      }
    }
  },
  {
    "id": "ms700-q294",
    "prompt": "NO.294 You have a Microsoft 365 subscription that uses Microsoft Teams and contains a user\nnamed User1.\nYou have the following Microsoft Team templates:\n* Manage an Event\n* Manage a Project\n* Quality and Safety\n* Onboard Employees\nYou have the Microsoft Teams template policies shown in the following table.\nThe Templates policy settings for User1 are configured as shown in the following exhibit.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "s1",
        "label": "User1 can create new teams by using the Onboard Employees\ntemplate."
      },
      {
        "id": "s2",
        "label": "User1 must use the Microsoft Teams admin center to create a new\nteam by using a template."
      },
      {
        "id": "s3",
        "label": "User1 must be assigned the Teams Administrator role to create\nnew teams by using the Manage a Project template."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "inputType": "radio",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "s1": "Yes",
          "s2": "No",
          "s3": "No"
        }
      }
    ],
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q295",
    "prompt": "NO.295 Your company has a Microsoft 365 subscription.\nYou attempt to review call quality by location.\nWhen you sign in to the Microsoft Call Quality Dashboard, you discover that no locations are defined.\nYou need to ensure that all the call quality information in the dashboard is segmented by location.\nWhat should you do first?",
    "image": "",
    "answers": [
      "From the Microsoft Teams admin center, configure reporting labels.",
      "From an administrator's computer, run the Network Testing Companion.",
      "From PowerShell, run the Set-CsQoEConfiguration cmdlet.",
      "From the Microsoft Teams admin center, run the Network Planner."
    ],
    "correctAnswer": "From the Microsoft Teams admin center, configure reporting labels.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q296",
    "prompt": "NO.296 You have a Microsoft 365 subscription named contoso.com.\nContoso.com uses Teams to collaborate with users from a partner company that has a Microsoft 365\nsubscription named fabnkam.com.\nYou need to enable Teams shared channels. The solution must meet the following requirements:\n* The users in contoso.com must be able to invite only the users in fabrikam.com to a shared\nchannel.\n* Contoso.com must trust multi-factor authentication (MFA) from fabrikam.com.\no What should you configure in the Azure portal for each requirement? To answer, select the\nappropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "text": "The contoso.com users must be able to invite the\nfabrikam.com users to a shared channel: "
        },
        {
          "slot": "invite"
        },
        {
          "text": "\nContoso.com must trust MFA from fabrikam.com: "
        },
        {
          "slot": "trust"
        }
      ],
      "slots": {
        "invite": {
          "label": "Invite fabrikam.com users",
          "options": [
            "From Edit inbound defaults, set B2B direct connect to Allow access.",
            "From Edit outbound defaults, set B2B direct connect to Allow access.",
            "From Organizational settings, add fabrikam.com."
          ],
          "correct": "From Edit inbound defaults, set B2B direct connect to Allow access."
        },
        "trust": {
          "label": "Trust MFA",
          "options": [
            "Edit Guest user access restrictions.",
            "Create a Conditional Access policy.",
            "Configure the Trust settings for fabrikam.com."
          ],
          "correct": "Edit Guest user access restrictions."
        }
      }
    }
  },
  {
    "id": "ms700-q297",
    "prompt": "NO.297 What should you create to meet the meeting requirements for the quarterly CEO event?",
    "image": "",
    "answers": [
      "a town hall",
      "a meeting",
      "a virtual appointment",
      "a webinar"
    ],
    "correctAnswer": "a town hall",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q298",
    "prompt": "NO.298 You have a Microsoft 365 subscription that uses Microsoft Teams and contains the users\nshown in the following table.\nYou have a team named Sales that is configured as shown in the following table.\nThe Sales team contains the channels shown in the following table.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "s1",
        "label": "User1 can see the membership list of the Budgets channel."
      },
      {
        "id": "s2",
        "label": "User2 can add User5 as a member of the Budgets channel."
      },
      {
        "id": "s3",
        "label": "Admin1 can convert Planning into a private channel."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "inputType": "radio",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "s1": "No",
          "s2": "Yes",
          "s3": "No"
        }
      }
    ],
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q299",
    "prompt": "NO.299 Note: This question is part of a series of questions that present the same scenario. Each\nquestion in the series contains a unique solution that might meet the stated goals. Some question\nsets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYour company has a Microsoft 365 subscription.\nYou need to prevent a user named User1 from permanently deleting private chats in Microsoft\nTeams.\nSolution: You create an In-Place Hold for the Microsoft OneDrive for Business site of User1.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "No",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q300",
    "prompt": "NO.300 Your company has a Microsoft 365 subscription.\nWhen making voice calls from Microsoft Teams, users report poor call quality at specific times of the\nday.\nYou need to verify whether Quality of Service (QoS) is being applied to the calls.\nWhat should you use?",
    "image": "",
    "answers": [
      "the Microsoft Teams client",
      "Microsoft Call Quality Dashboard",
      "Network Testing Companion",
      "Network Monitor"
    ],
    "correctAnswer": "Network Monitor",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q301",
    "prompt": "NO.301 You have a Microsoft 365 subscription that uses Microsoft Teams.\nYou need to ensure that Microsoft Teams audio, video, and screen sharing data is prioritized over\nother data types across the network.\nWhat should you do from the Microsoft Teams admin center?",
    "image": "",
    "answers": [
      "Modify the global (Org-wide default) meeting policy and configure the Media bit rate (Kbs) setting.",
      "Modify the global (Org-wide default) meeting policy and configure the Mode for IP video setting.",
      "From the Meeting settings, select automatically use any available ports",
      "From the Meeting settings, set Insert Quality of Service (QoS) markers for real-time media traffic to On."
    ],
    "correctAnswer": "Modify the global (Org-wide default) meeting policy and configure the Mode for IP video setting.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q302",
    "prompt": "NO.302 Note: This question is part of a series of questions that present the same scenario. Each\nquestion in the series contains a unique solution that might meet the stated goals. Some question\nsets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYour company has 10 offices in North America and Europe.\nThe company has 5,000 users.\nYou plan to deploy Microsoft Teams for all the users.\nYou run a pilot project for the planned deployment.\nYou need to identify the network packet loss from the pilot computers to Microsoft Teams during\ncalls.\nSolution: You run the Network Testing Companion.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "No",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q303",
    "prompt": "NO.303 You have a Microsoft 365 subscription named contoso.com that uses Microsoft Teams. You\nneed to ensure that Microsoft Teams users can perform the following tasks:\n* Search for customers that use Skype (Consumer).\n* Start a Skype chat with the customers.\nWhich two actions should you perform? Each correct answer presents part of the solution. NOTE:\nEach correct selection is worth one point.",
    "image": "",
    "answers": [
      "From the Microsoft Teams admin center, turn on external access.",
      "From the Azure portal, configure Azure AD B2C.",
      "Add a _sipinternaltls SRV record to the contoso.com DNS domain.",
      "From the Microsoft Teams admin center, turn on guest access.",
      "Add a _sipfederationtls SRV record to the contoso.com DNS domain."
    ],
    "correctAnswer": [
      "From the Microsoft Teams admin center, turn on external access.",
      "Add a _sipfederationtls SRV record to the contoso.com DNS domain."
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q304",
    "prompt": "NO.304 Your company has a Microsoft 365 subscription.\nThe company has a group named Sales.\nYou need to configure Microsoft Teams for the Sales group. The solution must meet the following\nrequirements:\n* Ensure that only the Activity, Shifts, Chat, and Calling apps are always visible in the app bar of the\nMicrosoft Teams client.\n* Prevent only the users in the company's sales department from adding other apps to Microsoft\nTeams.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "Modify the global app setup policy.",
      "Modify the global app permission policy.",
      "Create an app setup policy.",
      "Modify the org-wide Teams settings.",
      "Create an app permission policy."
    ],
    "correctAnswer": [
      "Create an app setup policy.",
      "Create an app permission policy."
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q305",
    "prompt": "NO.305 Your company has a Microsoft Office 365 subscription.\nAll users use an email domain named @adatum.com.\nYou have the guest access settings shown in the Guest Access exhibit. (Click the Guest Access tab.)\nYou have the organizational relationship settings shown in the Organizational Relationship exhibit.\n(Click Organizational Relationship tab.)\nYou have a meeting policy that is configured as shown in the Meeting Policy exhibit. (Click the\nMeeting Policy tab.)\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "st1",
        "label": "Users at your company can share their screen with guest users\nduring meetings."
      },
      {
        "id": "st2",
        "label": "Users at your company can add users from a company that uses\nan email domain of fabrikam.com to teams."
      },
      {
        "id": "st3",
        "label": "Users at your company can add users from a company that uses\nan email domain of contoso.com to teams."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "inputType": "radio",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "st1": "No",
          "st2": "No",
          "st3": "Yes"
        }
      }
    ],
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q306",
    "prompt": "NO.306 Note: This question is part of a series of questions that present the same scenario. Each\nquestion in the series contains a unique solution that might meet the stated goals. Some question\nsets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYour company has a Microsoft 365 subscription that uses an Azure Active Directory (Azure AD) tenant\nnamed contoso.com.\nYou need to prevent guest users in the tenant from using cameras during Microsoft Teams meetings.\nSolution: From the Microsoft 365 admin center, you modify the Sharing settings.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "No",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q307",
    "prompt": "NO.307 Your company has a Microsoft 365 subscription that contains 200 Microsoft Teams users\nand 20 teams.\nYou discover that several teams do NOT have an owner.\nYou need to ensure that you receive a notification when a team is missing an owner.\nWhat should you do?",
    "image": "",
    "answers": [
      "From PowerShell, run the Set-Team cmdlet.",
      "From the Microsoft Teams admin center, modify the Teams settings.",
      "From PowerShell, run the Add-AzureADMSLifecyclePolicyGroup cmdlet.",
      "From the Azure Active Directory admin center, modify the group expiration settings."
    ],
    "correctAnswer": "From the Azure Active Directory admin center, modify the group expiration settings.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q308",
    "prompt": "NO.308 You have a Microsoft 365 subscription that uses Microsoft Teams.\nYou have a team named Project1 that contains the members shown in the following table.\nProject1 contains the channels shown in the following table.\nYou need to identify which users can be added as a channel moderator, and which channels support\nmoderation. What should you identify? To answer, select the appropriate options in the answer area.\nNOTE:\nEach correct selection is worth one point.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "text": "Users that can be added as a channel moderator: "
        },
        {
          "slot": "moderatorUsers"
        },
        {
          "text": "\nChannels that support moderation: "
        },
        {
          "slot": "moderatedChannels"
        }
      ],
      "slots": {
        "moderatorUsers": {
          "label": "Users that can be added as a channel moderator",
          "options": [
            "User1 only",
            "User2 only",
            "User1 and User2 only",
            "User1, User2, and Guest1"
          ],
          "correct": "User1 and User2 only"
        },
        "moderatedChannels": {
          "label": "Channels that support moderation",
          "options": [
            "General only",
            "Budgets only",
            "Planning only",
            "General and Planning only",
            "General, Budgets, and Planning"
          ],
          "correct": "General and Planning only"
        }
      }
    }
  },
  {
    "id": "ms700-q309",
    "prompt": "NO.309 You are a Microsoft Teams administrator for your company.\nYou have the Org-wide app settings shown in the App Settings exhibit. (Click the App Settings tab.)\nThe company's global app permission policy is configured as shown in the Permission Policy exhibit.\n(Click the Permission Policy tab.)\nThe company's global app setup policy is configured as shown in the Setup Policy exhibit. (Click the\nSetup Policy tab.)\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "s1",
        "label": "Team members can upload apps from the Microsoft Teams client."
      },
      {
        "id": "s2",
        "label": "All team members can add the Microsoft Flow app to a team."
      },
      {
        "id": "s3",
        "label": "All team members can add the Microsoft Planner app to a team."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "inputType": "radio",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "s1": "Yes",
          "s2": "Yes",
          "s3": "No"
        }
      }
    ],
    "allowAnswerShuffle": false,
    "metaNote": "Statements conforme exibidos no PDF."
  },
  {
    "id": "ms700-q310",
    "prompt": "NO.310 You have a Microsoft 365 subscription.\nYou need to create the call queues shown in the following table.\nWhich routing method should you configure for each call queue? To answer, select the appropriate\noptions in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "text": "CQ1: "
        },
        {
          "slot": "cq1"
        },
        {
          "text": "\nCQ2: "
        },
        {
          "slot": "cq2"
        }
      ],
      "slots": {
        "cq1": {
          "label": "CQ1",
          "options": [
            "Attendant routing",
            "Round robin",
            "Serial routing"
          ],
          "correct": "Round robin"
        },
        "cq2": {
          "label": "CQ2",
          "options": [
            "Attendant routing",
            "Round robin",
            "Serial routing"
          ],
          "correct": "Attendant routing"
        }
      }
    }
  },
  {
    "id": "ms700-q311",
    "prompt": "NO.311 You have a Microsoft Office 365 subscription.\nYou need to prevent guest users from deleting channels from a Microsoft Teams team.\nWhat should you use?",
    "image": "",
    "answers": [
      "the Microsoft 365 admin center",
      "the Azure portal",
      "the Microsoft Teams client",
      "the Security & Compliance admin center"
    ],
    "correctAnswer": "the Microsoft 365 admin center",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q312",
    "prompt": "NO.312 You Have a Microsoft 365 subscription that includes Teams. The subscription contains a user\nnamed User1 You are deploying 10 new learns devices.\nYou need to ensure that User1 can restart the Teams devices remotely.\nSolution: You assign the Teams Communications Support Engineer role to User1.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "No",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q313",
    "prompt": "NO.313 Your company has a Microsoft 365 subscription.\nYou have a Microsoft Teams team named Sales that is set to Private.\nUsers report that they can view the Sales team from a list of suggested teams.\nYou need to hide the team from the list of suggested teams.\nWhat should you do from the Microsoft Teams client?",
    "image": "",
    "answers": [
      "Modify the Team discovery settings.",
      "Select the Hide team option.",
      "Modify the team privacy settings.",
      "Modify the team member permissions."
    ],
    "correctAnswer": "Modify the Team discovery settings.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q314",
    "prompt": "NO.314 You have a Microsoft 365 E3 subscription that contains 500 users. All the users have\ncomputers that run Windows 10 and are joined to Azure AD.\nVou need to generate a report that identifies which documents the users copied from Microsoft\nTeams to USB devices.\nWhat should you do first?",
    "image": "",
    "answers": [
      "Onboard the Windows 10 computers to Endpoint data loss prevention (Endpoint DLP).",
      "Assign the Microsoft 365 ES compliance add-on to each user.",
      "Create a custom data loss prevention (DLP) policy.",
      "Assign the Enterprise Mobility + Security ES add-on to each user."
    ],
    "correctAnswer": "Assign the Microsoft 365 ES compliance add-on to each user.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q315",
    "prompt": "NO.315 You are reviewing the planning implementation of information barriers for your company.\nYou run the following command.\nYou active the information barrier policies.\nFor each of the following statements, select Yes if the statement is true, Otherwise, Select No.\nNote: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "st1",
        "label": "The users in HR can initiate a Microsoft Teams chat with the users in Sales."
      },
      {
        "id": "st2",
        "label": "The users in Sales can invite the users in HR to a Microsoft Teams meeting."
      },
      {
        "id": "st3",
        "label": "The users in Research and HR can collaborate in a Microsoft Teams channel."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "inputType": "radio",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "st1": "No",
          "st2": "No",
          "st3": "No"
        }
      }
    ],
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q316",
    "prompt": "NO.316 You company has a Microsoft Office 365 subscription.\nUsers in the company's sales department frequently invite guest users to meetings.\nYou need to ensure that when the sales department users invite guest users to meetings, the guest\nusers are admitted by default. The solution must only apply to the sales department users.\nWhich two actions should you perform? Each correct solution presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "In the global meeting policy, set Automatically admit users to Everyone.",
      "Create a new meeting policy and set Automatically admit users to Everyone.",
      "Apply the policy to the sales department users.",
      "In the global meeting policy, set Automatically admit users to Everyone in your organization."
    ],
    "correctAnswer": [
      "Create a new meeting policy and set Automatically admit users to Everyone.",
      "Apply the policy to the sales department users."
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q317",
    "prompt": "NO.317 You have a Microsoft 365 subscription that contains a user named Used.\nUser1 experiences audio issues while sharing his screen during Microsoft Teams meetings.\nYou need to investigate whether the headset of User1 causes the issues.\nWhich report should you use?",
    "image": "",
    "answers": [
      "Quality of Experience",
      "Media reliability metrics",
      "Customer endpoint information support",
      "Failure Drill Down"
    ],
    "correctAnswer": "Quality of Experience",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q318",
    "prompt": "NO.318 You have an org wide team named Team1.\nThe members of Team1 report that they receive an excessive amount of notifications from channel\nmessages.\nYou need to reduce the amount of notifications by implementing the following changes:\n* Allow only global administrators to create new posts in the General channel.\n* Prevent @members for the org-wide team members.\nWhich two actions should you perform from the Microsoft Teams client? Each correct answer\npresents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "From the Team1 settings, clear Give members the option to edit their messages.",
      "From the General Channel settings of Team1, set the channel moderation preference to Anyone can post; show alert that postings will notify everyone (recommended for large teams).",
      "From the General Channel settings of Team1, set the channel moderation preference to Only owners can post messages.",
      "From the Team1 settings, disable all the Fun stuff settings.",
      "From the Team1 settings, set Show members the option to @team or @[team name] to Off."
    ],
    "correctAnswer": [
      "From the General Channel settings of Team1, set the channel moderation preference to Only owners can post messages.",
      "From the Team1 settings, set Show members the option to @team or @[team name] to Off."
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q319",
    "prompt": "NO.319 You have a Microsoft 365 subscription that contains an Azure Virtual Desktop deployment.\nThe Azure Virtual Desktop deployment contains a session host named Host1.\nYou install the Remote Desktop WebRTC Redirector Service and the Teams for virtual desktop\ninfrastructure (VDI) client on Host1.\nYou need to ensure that your webcam delivers the highest quality video for Teams calls.\nHow should you complete the registry key? To answer, select the appropriate options in the answer\narea.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "text": "Name: "
        },
        {
          "slot": "hive"
        },
        {
          "text": "\SOFTWARE\Microsoft\Terminal Server Client\Default\AddIns\WebRTC Redirector\nName: "
        },
        {
          "slot": "regName"
        }
      ],
      "slots": {
        "hive": {
          "label": "Registry hive",
          "options": [
            "HKEY_CURRENT_USER",
            "HKEY_CLASSES_ROOT",
            "HKEY_CURRENT_CONFIG",
            "HKEY_LOCAL_MACHINE"
          ],
          "correct": "HKEY_CURRENT_USER"
        },
        "regName": {
          "label": "Registry value name",
          "options": [
            "UseHardwareEncoding",
            "DisableRAILAppSharing",
            "DisableRAILScreenSharing",
            "ShareClientDesktop"
          ],
          "correct": "UseHardwareEncoding"
        }
      }
    }
  },
  {
    "id": "ms700-q320",
    "prompt": "NO.320 Your company has a Microsoft 365 subscription.\nThe company has a main office in Chicago.\nThe company opens a new office in Toronto that has 500 users.\nYou need to ensure that the correct address is available to emergency responders.\nWhat should you do?",
    "image": "",
    "answers": [
      "Create a configuration profile and assign the profile to the device of each user.",
      "Add an emergency address, and then modify each phone number.",
      "Add an emergency address, and then modify each user.",
      "Create a calling policy and assign the policy to each user."
    ],
    "correctAnswer": "Add an emergency address, and then modify each phone number.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q321",
    "prompt": "NO.321 Your company has a Microsoft 365 subscription.\nYou recently set the company's Microsoft Teams upgrade policy to Teams only coexistence mode.\nA user reports that several online meetings are configured to use Microsoft Skype for Business.\nYou need to convert the online meetings in the user's calendar to use Microsoft Teams.\nWhat are two possible ways to achieve the goal? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "From PowerShell, run the Start-CsExMeetingMigration cmdlet and specify the -identity parameter.",
      "Run the Skype for Business Meeting Update tool.",
      "From the Microsoft Teams admin center, modify the meeting policy.",
      "From PowerShell, run the Set-CsTeamsUpgradeConfiguration cmdlet.",
      "From the Microsoft Teams admin center, modify the Microsoft Teams upgrade policy."
    ],
    "correctAnswer": [
      "From PowerShell, run the Start-CsExMeetingMigration cmdlet and specify the -identity parameter.",
      "Run the Skype for Business Meeting Update tool."
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q322",
    "prompt": "NO.322 Your company has a Microsoft 365 subscription that uses an Azure AD tenant named\ncontoso.com. You need to prevent guest users in the tenant from using cameras during Microsoft\nTeams meetings. Solution: From the Microsoft Teams admin center, you modify the External access\nsettings.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "Yes",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q323",
    "prompt": "NO.323 Your company has a Microsoft 365 subscription.\nA user named User5 cannot establish call from Microsoft Teams.\nYou review the Microsoft Teams client for User5 and discover that the dial pad is unavailable.\nOther users at the company can establish calls successfully.\nYou need to ensure that User5 can establish calls.\nWhich two actions should you perform? Each correct answer represents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "Modify the caller ID properties of User5.",
      "Assign a Phone System license to User5.",
      "Assign a SIP address to User5.",
      "Assign an app setup policy to User5.",
      "Enable User5 for Enterprise Voice."
    ],
    "correctAnswer": [
      "Assign a Phone System license to User5.",
      "Enable User5 for Enterprise Voice."
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q324",
    "prompt": "NO.324 You have a Microsoft 365 E5 subscription.\nYou need to generate a report that provides the following information:\n* How many users post and reply to channel messages\n* The number of ad hoc meetings organized by a user\n* The number of meetings a user has participated in\n* The total video time of a user\nWhich report should you run?",
    "image": "",
    "answers": [
      "Teams user activity",
      "Teams usage",
      "Teams live event usage",
      "Teams app usage"
    ],
    "correctAnswer": "Teams user activity",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q325",
    "prompt": "NO.325 You are a Microsoft Teams administrator for your company.\nThe company creates a new Microsoft Teams app named App1. A developer packages App1 as a ZIP\nfile.\nYou need to ensure that App1 can be uploaded as a ZIP package to Microsoft Teams.\nWhich Apps setting should you turn on?",
    "image": "",
    "answers": [
      "Allow uploading custom apps.",
      "Enable new external apps by default.",
      "Enable default apps.",
      "Allow external apps in Microsoft Teams."
    ],
    "correctAnswer": "Allow uploading custom apps.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q326",
    "prompt": "NO.326 You have a Microsoft 365 subscription that uses Microsoft Teams.\nYou plan to implement Microsoft Teams Rooms. The solution must meet the following requirements:\n* Support Microsoft Teams Rooms, Microsoft Surface Hub, and collaboration bars for Microsoft\nTeams.\n* Ensure that Microsoft manages firmware and application updates for room systems and\nperipherals.\n* Ensure that Microsoft monitors and troubleshoots room system and peripherals\n.\nWhich license should you purchase?",
    "image": "",
    "answers": [
      "Advanced Communications",
      "Microsoft Teams Rooms Premium",
      "Microsoft Teams Rooms Standard",
      "Microsoft 365 Business Voice"
    ],
    "correctAnswer": "Microsoft Teams Rooms Premium",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q327",
    "prompt": "NO.327 Your company has a Microsoft Office 365 subscription.\nThe company has the departments and teams shown in the following table.\nYou need to ensure that only the following apps appear in the app bar of the Microsoft Teams client\nfor only the events department:\n* Activity\n* Shifts\n* Chat\nWhat should you do first?",
    "image": "",
    "answers": [
      "Create a custom app permission policy.",
      "Modify the global app permission policy.",
      "Create a custom app setup policy.",
      "Modify the global app setup policy."
    ],
    "correctAnswer": "Create a custom app setup policy.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q328",
    "prompt": "NO.328 You plan to implement Microsoft Teams for 300 users.\nFor the first stage of the deployment, you will enable the following features:\n* Audio\n* Video\n* Screen sharing\nUsers will be prevented from using the following features:\n* File sharing\n* PSTN calling\n* Conference audio\n* Conference video\n* Conference screen sharing\nYou need to calculate how much network bandwidth is required for the first-stage deployment. What\nshould you use?",
    "image": "",
    "answers": [
      "Network Assessment Tool",
      "Advisor for Teams",
      "Bandwidth Utilization Analyzer",
      "Network Planner"
    ],
    "correctAnswer": "Network Planner",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q329",
    "prompt": "NO.329 Note: This question is part of a series of questions that present the same scenario. Each\nquestion in the series contains a unique solution that might meet the stated goals. Some question\nsets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYour company has a Microsoft 365 subscription.\nYou plan to configure the environment to allow external users to collaborate in Microsoft Teams by\nusing guest access.\nThe company implements a new security policy that has the following requirements:\n* Only guest users from specific domains must be allowed to connect to collaborate by using\nMicrosoft Teams.\n* Guest users must be prevented from inviting other guests.\nYou need to recommend a solution to meet the security policy requirements.\nSolution: From the Microsoft Teams admin center, you modify the global meeting policy.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "No",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q330",
    "prompt": "NO.330 Your company uses Teams.\nYou plan to deploy Teams to a branch office that has limited bandwidth.\nWhich Two features can he used when the Teams client has a bandwidth restriction of 150 kilobit/s\nup and\n150 kilobit/s down? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "one-to-one seen sharing",
      "one-to-one video",
      "video during meetings",
      "screen sharing during meetings",
      "audio during meetings"
    ],
    "correctAnswer": [
      "video during meetings",
      "screen sharing during meetings"
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q331",
    "prompt": "NO.331 You open the Microsoft Call Quality Dashboard as shown in the following exhibit.\nUse the drop-down menus to select the answer choice that completes each statement based on the\ninformation presented in the graphic.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "text": "During the month of July 2019, "
        },
        {
          "slot": "successfulCalls"
        },
        {
          "text": " calls were established successfully.\nDuring the month of July 2019, "
        },
        {
          "slot": "metricCalls"
        },
        {
          "text": " calls included metric data."
        }
      ],
      "slots": {
        "successfulCalls": {
          "label": "Calls established successfully",
          "options": [
            "0",
            "4",
            "66",
            "70"
          ],
          "correct": "70"
        },
        "metricCalls": {
          "label": "Calls included metric data",
          "options": [
            "0",
            "4",
            "66",
            "70"
          ],
          "correct": "66"
        }
      }
    }
  },
  {
    "id": "ms700-q332",
    "prompt": "NO.332 Note: This question is part of a series of questions that present the same scenario. Each\nquestion in the series contains a unique solution that might meet the stated goals. Some question\nsets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYour company has a Microsoft 365 subscription.\nYou need to prevent temporary employees from using the private chat feature in Microsoft Teams.\nSolution: You create a messaging policy and assign the policy to the users.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "Yes",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q333",
    "prompt": "NO.333 Your company uses Teams.\nYou need to configure Teams apps to meet the following requirements:\n* Block members of a team named Sales from installing custom apps.\n* Pin apps in a specific order on the Teams app bar.\nWhich settings should you configure to meet each requirement? To answer, drag the appropriate\nsettings options to the correct requirements. Each settings option may be used once, more than\nonce, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "allowAnswerShuffle": false,
    "type": "dragMatch",
    "items": [
      {
        "id": "it1",
        "label": "App permission policies"
      },
      {
        "id": "it2",
        "label": "App setup policies"
      },
      {
        "id": "it3",
        "label": "Manage apps"
      },
      {
        "id": "it4",
        "label": "Org-wide app settings"
      }
    ],
    "targets": [
      {
        "id": "req1",
        "label": "Block the Sales team members from installing custom apps"
      },
      {
        "id": "req2",
        "label": "Pin apps in a specific order on the Teams app bar"
      }
    ],
    "correctByTarget": {
      "req1": "it1",
      "req2": "it2"
    }
  },
  {
    "id": "ms700-q334",
    "prompt": "NO.334 Your company has a Microsoft 365 subscription that uses Phone System.\nYou need to configure the environment to the meet the following requirements:\n* Only users in the company's sales department must have Call forwarding and simultaneous ringing\nto external phone numbers set to Off.\n* Only users in the marketing department must have Inbound calls can be routed to call groups set to\nOff.\n* All outbound calls to the PSTN must use the auto attendant number as the caller ID.\nWhat is the minimum number of policies that should be created? To answer, select the appropriate\noptions in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "text": "Caller ID policies: "
        },
        {
          "slot": "callerId"
        },
        {
          "text": "\nCall park policies: "
        },
        {
          "slot": "callPark"
        },
        {
          "text": "\nCalling policies: "
        },
        {
          "slot": "calling"
        }
      ],
      "slots": {
        "callerId": {
          "label": "Caller ID policies",
          "options": [
            "0",
            "1",
            "2"
          ],
          "correct": "1"
        },
        "callPark": {
          "label": "Call park policies",
          "options": [
            "0",
            "1",
            "2"
          ],
          "correct": "0"
        },
        "calling": {
          "label": "Calling policies",
          "options": [
            "0",
            "1",
            "2"
          ],
          "correct": "2"
        }
      }
    }
  },
  {
    "id": "ms700-q335",
    "prompt": "NO.335 Note: This question is part of a series of questions that present the same scenario. Each\nquestion in the series contains a unique solution that might meet the stated goals. Some question\nsets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYour company has a Microsoft 365 subscription.\nYou need to prevent a user named User1 from permanently deleting private chats in Microsoft\nTeams.\nSolution: You place the group mailboxes used by Microsoft Teams on Litigation Hold.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "No",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q336",
    "prompt": "NO.336 You have a Microsoft 365 subscription.\nYou need to create a new Microsoft Teams team named Human Resources that meets the following\nrequirements:\n* All join requests must be approved by an owner of the team.\n* The URL for the Microsoft SharePoint Online site of the team must be /teams/HR.\n* Two users named jane@contoso.com and bob@contoso.com must be assigned as team owners.\nHow should you complete the PowerShell command? To answer, select the appropriate options in\nthe answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "text": "Connect-MicrosoftTeams\n$TeamId = New-Team -DisplayName \"Human Resources\" "
        },
        {
          "slot": "newTeamParam"
        },
        {
          "text": " Private\n-Owner jane.doe@contoso.com -MailNickName "
        },
        {
          "slot": "mailNickName"
        },
        {
          "text": "\n"
        },
        {
          "slot": "addOwnerCmdlet"
        },
        {
          "text": " -GroupId $TeamId.GroupId -User bob@contoso.com -Role Owner"
        }
      ],
      "slots": {
        "newTeamParam": {
          "label": "Parameter",
          "options": [
            "-Classification",
            "-ShowinTeamsSearchAndSuggestions",
            "-Template",
            "-Visibility"
          ],
          "correct": "-Visibility"
        },
        "mailNickName": {
          "label": "MailNickName",
          "options": [
            "HR",
            "/sites/HR",
            "/teams/HR"
          ],
          "correct": "HR"
        },
        "addOwnerCmdlet": {
          "label": "Cmdlet",
          "options": [
            "Add-TeamChannelUser",
            "Add-TeamUser",
            "Set-Team",
            "Set-TeamMemberSettings"
          ],
          "correct": "Add-TeamUser"
        }
      }
    }
  },
  {
    "id": "ms700-q337",
    "prompt": "NO.337 Note: This question is part of a series of questions that present the same scenario. Each\nquestion in the series contains a unique solution that might meet the stated goals. Some question\nsets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYour company has a Microsoft 365 subscription.\nYou need to prevent a user named User1 from permanently deleting private chats in Microsoft\nTeams.\nSolution: You create an In-Place Hold for the Microsoft SharePoint site used by Microsoft Team.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "No",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q338",
    "prompt": "NO.338 You have a Microsoft Office 365 subscription.\nYou discover that apps from a third-party publisher have security issues.\nYou need to block all apps from the publisher.\nWhat should you use in the Microsoft Teams admin center?",
    "image": "",
    "answers": [
      "Org-wide app settings",
      "Policy packages",
      "Permission policies",
      "Manage apps"
    ],
    "correctAnswer": "Manage apps",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q339",
    "prompt": "NO.339 You have a Microsoft 365 subscription that uses Microsoft Teams and contains a user\nnamed User1.\nMicrosoft Teams has a default conferencing toll phone number of +1 323 705-3393. The default\nnumber is assigned to User1.\nYou need to change the conferencing toll phone number assigned to User1. The solution must meet\nthe following requirements:\n* Update the existing meeting invites of User1 to use the new conferencing toll phone number.\n* Ensure that other users in your company continue to use the default number.\nWhich two actions should you perform? Each correct answer presents part of the solution, NOTE:\nEach correct selection is worth one point.",
    "image": "",
    "answers": [
      "From PowerShell, run the update-csTenantMeetingUr1 cmdlet.",
      "From the Microsoft Entra admin center, modify the Usage location of User1.",
      "From PowerShell, run the start-csEXMeetingMgration cmdlet.",
      "From the Microsoft Teams admin center, modify the Users settings of User1.",
      "From the Microsoft Teams admin center, modify the default Bridge settings."
    ],
    "correctAnswer": [
      "From PowerShell, run the start-csEXMeetingMgration cmdlet.",
      "From the Microsoft Teams admin center, modify the default Bridge settings."
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q340",
    "prompt": "NO.340 You have the following PowerShell script.\nFor each of the following statements, select Yes if the statement rs true, otherwise select No.\nNOTE Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "st1",
        "label": "The script will configure an after-hours call flow."
      },
      {
        "id": "st2",
        "label": "The script will enable interactive voice response (IVR) for both call flows."
      },
      {
        "id": "st3",
        "label": "$christmasSchedule can be updated to meet the call handling requirements."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "inputType": "radio",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "st1": "Yes",
          "st2": "Yes",
          "st3": "Yes"
        }
      }
    ],
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q341",
    "prompt": "NO.341 Your company uses Microsoft Teams and a Microsoft calling plan.\nThe company has a main office in Chicago.\nThe company opens a new office in Toronto that has 500 users.\nYou need to ensure that the correct address is available to emergency responders.\nWhat should you do?",
    "image": "",
    "answers": [
      "Create a calling policy and assign the policy to each user.",
      "Create a configuration profile and assign the profile to the device of each user.",
      "Add an emergency address, and then modify the outbound calling setting for each user.",
      "Add an emergency address, and then modify the location for each phone number."
    ],
    "correctAnswer": "Add an emergency address, and then modify the location for each phone number.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q342",
    "prompt": "NO.342 You have a Microsoft 365 subscription that uses Microsoft Teams.\nYou have the users shown in the following table.\nYou have a team named Project1 that contains the users shown in the following table.\nWhich user can archive Project 1, and which tool should be used to perform the task? To answer,\nselect the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "text": "Can archive Project1: "
        },
        {
          "slot": "archiver"
        },
        {
          "text": "\nTool: "
        },
        {
          "slot": "tool"
        }
      ],
      "slots": {
        "archiver": {
          "label": "Can archive Project1",
          "options": [
            "User1",
            "User2",
            "User3",
            "User4",
            "User5"
          ],
          "correct": "User4"
        },
        "tool": {
          "label": "Tool",
          "options": [
            "Microsoft Teams client",
            "Microsoft 365 admin center",
            "Microsoft 365 compliance center",
            "Microsoft Teams admin center"
          ],
          "correct": "Microsoft Teams admin center"
        }
      }
    }
  },
  {
    "id": "ms700-q343",
    "prompt": "NO.343 You have a Microsoft 365 E5 subscription.\nYou plan to enable Phone System for Microsoft Teams.\nYou need to configure the following:\n* On-hold music\n* A greeting message\n* Call forwarding and simultaneous ringing to external phone numbers\nWhich two settings should you configure? To answer, select the appropriate settings in the answer\narea.\nNOTE: Each correct selection is worth one point",
    "image": "",
    "answers": [
      "Phone numbers",
      "Emergency policies",
      "Dial plans",
      "Direct Routing",
      "Voice routing policies",
      "Call queues",
      "Auto attendants",
      "Call park policies",
      "Calling policies",
      "Caller ID policies"
    ],
    "correctAnswer": [
      "Auto attendants",
      "Calling policies"
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q344",
    "prompt": "NO.344 Note: This question is part of a series of questions that present the same scenario. Each\nquestion in the series contains a unique solution that might meet the stated goals. Some question\nsets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYour company has a Microsoft 365 subscription.\nYou need to prevent temporary employees from using the private chat feature in Microsoft Teams.\nSolution: You create an app permission policy and assign the policy to the users.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "No",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q345",
    "prompt": "NO.345 You have a Microsoft 365 ES subscription that uses Teams.\nThe sales department at your company requires that a toll-free number appear at the top of a list of\nnumbers on Microsoft Outlook invites to Teams meetings.\nWhich four actions should you perform in sequence? To answer, move the appropriate actions from\nthe list of actions to the answer area and arrange them in the correct order.",
    "image": "",
    "allowAnswerShuffle": false,
    "type": "dragMatch",
    "items": [
      {
        "id": "it1",
        "label": "Assign a number to a resource account."
      },
      {
        "id": "it2",
        "label": "Request a user number."
      },
      {
        "id": "it3",
        "label": "Assign the Microsoft Teams Phone Standard - Virtual User license."
      },
      {
        "id": "it4",
        "label": "Purchase Communication Credits."
      },
      {
        "id": "it5",
        "label": "Request a service number."
      },
      {
        "id": "it6",
        "label": "Assign a number to a conference bridge."
      },
      {
        "id": "it7",
        "label": "Create and assign an Audio Conferencing policy."
      }
    ],
    "targets": [
      {
        "id": "step1",
        "label": "Step 1"
      },
      {
        "id": "step2",
        "label": "Step 2"
      },
      {
        "id": "step3",
        "label": "Step 3"
      },
      {
        "id": "step4",
        "label": "Step 4"
      }
    ],
    "correctByTarget": {
      "step1": "it4",
      "step2": "it5",
      "step3": "it6",
      "step4": "it7"
    }
  },
  {
    "id": "ms700-q346",
    "prompt": "NO.346 Your company uses Teams.\nAll users are assigned a Microsoft 365 E? license.\nYou need to purchase add-on licenses that will enable the following features for the Teams\nenvironment\n* Microsoft Purview Information Barriers\n* Data loss prevention (DIP) for Teams chat and channel messages\n* Safe attachments for Microsoft SharePoint OneDrive and Teams\nTo answer, drag the appropriate reports to the correct requirements. Each report may be used once,\nmore than once, or not at all.",
    "image": "",
    "allowAnswerShuffle": false,
    "type": "dragMatch",
    "items": [
      {
        "id": "it1",
        "label": "Microsoft 365 E5 Compliance"
      },
      {
        "id": "it2",
        "label": "Microsoft 365 E5 eDiscovery and Audit"
      },
      {
        "id": "it3",
        "label": "Microsoft Defender for Cloud Apps"
      },
      {
        "id": "it4",
        "label": "Microsoft Defender for Office 365 Plan 1"
      }
    ],
    "targets": [
      {
        "id": "req1",
        "label": "DLP for Teams chat and channel messages"
      },
      {
        "id": "req2",
        "label": "Safe attachments for SharePoint, OneDrive,\nand Teams"
      },
      {
        "id": "req3",
        "label": "Microsoft Purview Information Barriers"
      }
    ],
    "correctByTarget": {
      "req1": "it4",
      "req2": "it2",
      "req3": "it1"
    }
  },
  {
    "id": "ms700-q347",
    "prompt": "NO.347 Your company has a Microsoft 365 subscription that uses Microsoft Teams.\nThe company has a team named Customer Support.\nGuest users from outside the company regularly access the Customer Support team.\nYou need to configure the Guest access settings to meet the following requirements:\n* Guest users must be able to view only a single application during screen sharing sessions.\n* Guest users must be prevented from creating channels in Customer Support.\n* Guest users must be admitted to meetings manually.\nWhich settings should you configure for each requirement? To answer, drag the appropriate settings\nto the correct requirements. Each setting may be used once, more than once, or not at all. You may\nneed to drag the split bar between panes or scroll to view content.",
    "image": "",
    "allowAnswerShuffle": false,
    "type": "dragMatch",
    "items": [
      {
        "id": "it1",
        "label": "Guest access to Org-wide settings"
      },
      {
        "id": "it2",
        "label": "Meeting policies"
      },
      {
        "id": "it3",
        "label": "Meeting settings"
      },
      {
        "id": "it4",
        "label": "Settings for the\nCustomer Support team"
      }
    ],
    "targets": [
      {
        "id": "req1",
        "label": "Guests must only be able to view a single\napplication in screen sharing sessions"
      },
      {
        "id": "req2",
        "label": "Guests must be prevented from creating\nchannels in Customer Support"
      },
      {
        "id": "req3",
        "label": "Guest users must be admitted to meetings\nmanually"
      }
    ],
    "correctByTarget": {
      "req1": "it1",
      "req2": "it4",
      "req3": "it2"
    }
  },
  {
    "id": "ms700-q348",
    "prompt": "NO.348 Which type of license is required to meet the call handling requirements?",
    "image": "",
    "answers": [
      "Teams Shared Device",
      "Teams Phone Standard",
      "Teams Phone Resource Account",
      "Teams Phone with Calling Plan bundle"
    ],
    "correctAnswer": "Teams Phone Resource Account",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q349",
    "prompt": "NO.349 You have a Microsoft 365 E5 subscription that uses Teams.\nYou have a team named Team1 that contains guest users.\nYou need to ensure that the members of Team1 are prevented from sharing sensitive information\nwith the guest users during Teams private chats or in Teams channels.\nWhich type of policy should you configure?",
    "image": "",
    "answers": [
      "information barrier policy",
      "messaging policy",
      "sensitivity label policy",
      "data loss prevention (DLP) policy"
    ],
    "correctAnswer": "data loss prevention (DLP) policy",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q350",
    "prompt": "NO.350 You have a Microsoft 365 subscription that contains a group named Group1.\nYou need to configure Group1 to meet the following requirements:\n* Users must not be permitted to pin apps to the Microsoft Teams app bar.\n* Only the Chat, Teams, and Calendar apps must appear on the Microsoft Teams app bar.\nWhich policy type should you create and which PowerShell cmdlet should you run to assign the\npolicy? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "text": "Policy type: "
        },
        {
          "slot": "policyType"
        },
        {
          "text": "\nPowerShell cmdlet: "
        },
        {
          "slot": "cmdlet"
        }
      ],
      "slots": {
        "policyType": {
          "label": "Policy type",
          "options": [
            "App permission",
            "App setup",
            "Messaging",
            "Microsoft Teams"
          ],
          "correct": "App setup"
        },
        "cmdlet": {
          "label": "PowerShell cmdlet",
          "options": [
            "Grant-CsTeamsAppPermissionPolicy",
            "Grant-CsTeamsAppSetupPolicy",
            "Grant-CsTeamsMessagingPolicy",
            "Grant-CsTeamsMobilityPolicy"
          ],
          "correct": "Grant-CsTeamsAppSetupPolicy"
        }
      }
    }
  },
  {
    "id": "ms700-q351",
    "prompt": "NO.351 You have a Microsoft 365 E5 subscription and use Microsoft Teams.\nA user named User1 reports that the Redirect to a new number or contact option is unavailable in the\nCalls settings of the Teams client as shown in the following exhibit.\nWhat is the cause of the missing option?",
    "image": "",
    "answers": [
      "Busy on busy during calls is enabled for User1.",
      "A policy that limits calls to domestic only is applied to User1.",
      "Enterprise Voice is disabled for User1.",
      "Simultaneous ring is configured User1."
    ],
    "correctAnswer": "Simultaneous ring is configured User1.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q352",
    "prompt": "NO.352 You have a Microsoft Office 365 subscription.\nAll users are assigned a Calling Plan license.\nYou configure emergency calling.\nThe global emergency calling policy is configured as shown in the Emergency Calling exhibit. (Click the\nEmergency Calling tab.)\nThe global emergency call routing policy is configured as shown in the Emergency Call Routing\nexhibit.\n(Click the Emergency Call Routing tab.)\nThe network topology is configured as shown in the Network Topology exhibit. (Click the Network\nTopology tab.)\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "st1",
        "label": "Calling Plan users will connect to emergency services when they dial an emergency number."
      },
      {
        "id": "st2",
        "label": "The Testing and Validation group will conference in to all emergency calls."
      },
      {
        "id": "st3",
        "label": "The NAPT Office site is assigned the appropriate policies to make emergency calls."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "inputType": "radio",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "st1": "Yes",
          "st2": "No",
          "st3": "Yes"
        }
      }
    ],
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q353",
    "prompt": "NO.353 You have a Microsoft 365 E5 subscription that uses Microsoft Teams.\nUsers report that their presence information is available to external partners.\nYou need to ensure that the presence information is available only to the external partners on the\nusers' contact lists.\nWhat should you do?",
    "image": "",
    "answers": [
      "From PowerShell, run Set-CsPrivacyConfiguration -EnablePrivacyMode Strue.",
      "From External collaboration settings in the Azure Active Directory admin center, configure Guest user access restrictions.",
      "From PowerShell, run Set-CsTenantFederationConfiguration AllowFederatedUsers $false.",
      "From the Microsoft Teams admin center, add the external partners to the Allow only specific external domains list."
    ],
    "correctAnswer": "From PowerShell, run Set-CsPrivacyConfiguration -EnablePrivacyMode Strue.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q354",
    "prompt": "NO.354 Your company has a Microsoft 365 subscription that uses Microsoft Teams.\nYou purchase an app named App1 from the Microsoft Teams Store.\nYou need to add App1 to the Microsoft Teams client for a specific group of users.\nWhich two actions should you perform from the Microsoft Teams admin center? Each correct answer\npresents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "From the Meeting settings, modify the Network settings.",
      "From App setup policies, create a new app setup policy.",
      "From App setup policies, modify the global app setup policy.",
      "From the properties of each user, edit the assigned policies.",
      "From the Org-wide settings, modify the Devices settings."
    ],
    "correctAnswer": [
      "From App setup policies, create a new app setup policy.",
      "From the properties of each user, edit the assigned policies."
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q355",
    "prompt": "NO.355 You have a Microsoft 365 subscription that uses Microsoft Teams.\nYou have the users shown in the following table.\nYou have the team shown in the following table.\nYou create a new group naming policy as shown in the following exhibit.\nGroup naming policy\nThe Microsoft 365 groups naming policy allows you to add a specific prefix and/or suffix to the group\nname and alias of any Microsoft 365 group created by users. For example: <Finance> <group>\n<Seattle> Current policy\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "st1",
        "label": "User1 must rename the Sales_Projects team as Sales_Projects_Sales the next time a user is added to the team."
      },
      {
        "id": "st2",
        "label": "User2 can create a new team named Engineering_Projects."
      },
      {
        "id": "st3",
        "label": "User3 can create a new channel named Proposals in the Sales_Projects team."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "inputType": "radio",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "st1": "No",
          "st2": "No",
          "st3": "Yes"
        }
      }
    ],
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q356",
    "prompt": "NO.356 You have a Teams deployment. You deploy the new Teams client to users. The users report\nthat a third-party Teams store app fails to load. You need to identify the cause of the issue. What\nshould you do?",
    "image": "",
    "answers": [
      "Run sfc.exe as an administrator.",
      "Run the Microsoft 365 network connectivity test tool.",
      "Run the Teams client in a browser and open the developer tools.",
      "Enable Extended diagnostics data for the new Teams client."
    ],
    "correctAnswer": "Enable Extended diagnostics data for the new Teams client.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q357",
    "prompt": "NO.357 You have a Microsoft 365 subscription that uses Microsoft Teams.\nYou plan to deploy Microsoft Teams voice.\nWhich two settings require a resource account? Each correct answer presents part of the solution.\nNOTE: Each correct selection worth one point.",
    "image": "",
    "answers": [
      "Call park policies",
      "Auto attendant",
      "Call queues",
      "Emergency policies",
      "Guest access"
    ],
    "correctAnswer": [
      "Auto attendant",
      "Call queues"
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q358",
    "prompt": "NO.358 Your company has a Microsoft 365 subscription. You add guest users to the organization.\nThe company's global live event policy is configured as shown in the following exhibit.\nUse the drop-down menus to select the answer choice that completes each statement based on the\ninformation presented in the graphic.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "slot": "access"
        },
        {
          "text": " can access live events.\n"
        },
        {
          "slot": "schedule"
        },
        {
          "text": " can schedule live events."
        }
      ],
      "slots": {
        "access": {
          "label": "[Answer choice] can access live events",
          "options": [
            "Users who have an Azure AD account, external access users, and guest users",
            "Only users who have an Azure AD account and external access users",
            "Only users who have an Azure AD account and guest users",
            "Only users who have an Azure AD account only"
          ],
          "correct": "Only users who have an Azure AD account and guest users"
        },
        "schedule": {
          "label": "[Answer choice] can schedule live events",
          "options": [
            "All users who have an Azure AD account",
            "All users who have an Azure AD account and guest users",
            "Only global administrators",
            "Only team owners"
          ],
          "correct": "All users who have an Azure AD account"
        }
      }
    }
  },
  {
    "id": "ms700-q359",
    "prompt": "NO.359 You have a Microsoft 365 E5 subscription that includes Teams.\nWhen a user named User! downloads and installs the new Teams desktop client on a Windows 10\ndevice, the user receives the following error message:\n\"We've run into an issue.\"\nYou need to ensure that User! can install the new Teams desktop client.\nWhat should you do?",
    "image": "",
    "answers": [
      "Download and install the ASP.NET Core Runtime.",
      "Download and install the WebView2 Runtime.",
      "Start the Teams desktop client by using elevated permissions.",
      "Clear the cache of the Teams desktop client."
    ],
    "correctAnswer": "Download and install the WebView2 Runtime.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q360",
    "prompt": "NO.360 You have a Microsoft 365 subscription and an on-premises Active Directory domain that\nsyncs by using Azure AD Connect.\nYou need to change the Membership type of a group from Assigned (static) to Dynamic User.\nWhat should you use?",
    "image": "",
    "answers": [
      "Active Directory Users and Computers",
      "the Microsoft Teams client",
      "the Azure Active Directory admin center",
      "the Microsoft Teams admin center"
    ],
    "correctAnswer": "the Azure Active Directory admin center",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q361",
    "prompt": "NO.361 Your company deploys a Quality of Service (QoS) solution to its network.\nYou recently deployed Microsoft Teams for all users. Each user uses a domain-joined computer that\nruns Windows 10.\nThe users report poor audio quality when they use Microsoft Teams from the network.\nYou discover that the media traffic from Microsoft Teams is NOT processed by the QoS solution.\nYou need to ensure that all the media traffic is processed by the QoS solution.\nWhich two actions should you perform? Each correct solution presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "From the Microsoft Teams admin center, set Insert Quality of Service (QoS) markers for real-time media traffic to On.",
      "From the Microsoft Teams client, select a certified Microsoft Teams audio device.",
      "From PowerShell, run the Set-CsQoEConfiguration cmdlet.",
      "From Group Policy Management, create a Group Policy Object (GPO) that contains the Policy based QoS settings, and then link the GPO to the domain.",
      "From the Microsoft Teams admin center, turn on logging for the device configuration profile."
    ],
    "correctAnswer": [
      "From the Microsoft Teams admin center, set Insert Quality of Service (QoS) markers for real-time media traffic to On.",
      "From Group Policy Management, create a Group Policy Object (GPO) that contains the Policy based QoS settings, and then link the GPO to the domain."
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q362",
    "prompt": "NO.362 Your company has a marketing department and a finance department.\nYou have a Teams deployment.\nThe marketing department plans to host a Teams session that has the following requirements:\n* External attendees must register by using a registration page.\n* Attendees must be able to use Microsoft Whiteboard during the session.\nThe finance department plans to host a Teams session that has the following requirements:\n* 1,500 attendees must be able to interact within a Q&A session.\n* The session must use enterprise content delivery network (eCDN) integration.\nWhich type of meeting should you recommend for each department? To answer, select the\nappropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "text": "Marketing: "
        },
        {
          "slot": "marketing"
        },
        {
          "text": "\nFinance: "
        },
        {
          "slot": "finance"
        }
      ],
      "slots": {
        "marketing": {
          "label": "Marketing",
          "options": [
            "Meeting",
            "Town hall",
            "Webinar"
          ],
          "correct": "Webinar"
        },
        "finance": {
          "label": "Finance",
          "options": [
            "Meeting",
            "Town hall",
            "Webinar"
          ],
          "correct": "Town hall"
        }
      }
    }
  },
  {
    "id": "ms700-q363",
    "prompt": "NO.363 You have a Microsoft 365 subscription that uses Microsoft Teams. You need to create the\nresource accounts shown in the following table.\nWhich resource accounts require licenses, and which type of license is required? To answer, select\nthe appropriate options in the answer area. NOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "text": "Resource accounts: "
        },
        {
          "slot": "resource_accounts"
        },
        {
          "text": "\nLicense type: "
        },
        {
          "slot": "license_type"
        }
      ],
      "slots": {
        "resource_accounts": {
          "label": "Resource accounts",
          "options": [
            "Resource1 only",
            "Resource2 only",
            "Resource3 only",
            "Resource1 and Resource2 only",
            "Resource2 and Resource3 only",
            "Resource1 and Resource3 only",
            "Resource1, Resource2, and Resource3"
          ],
          "correct": "Resource3 only"
        },
        "license_type": {
          "label": "License type",
          "options": [
            "Common Area Phone",
            "Microsoft 365 Audio Conferencing",
            "Microsoft 365 Domestic Calling Plan",
            "Microsoft 365 Phone System - Virtual User"
          ],
          "correct": "Microsoft 365 Audio Conferencing"
        }
      }
    }
  },
  {
    "id": "ms700-q364",
    "prompt": "NO.364 Your company uses Teams.\nAll users are assigned a Microsoft 365 E5 license.\nYou need to purchase an add-on license that will enable the users to apply a sensitivity label to\ncontrol the end-to-end encryption of highly sensitive Teams meetings.\nWhich add-on license should you purchase?",
    "image": "",
    "answers": [
      "Microsoft Teams Premium",
      "Priva Privacy Risk Management",
      "Microsoft 365 E5 Compliance",
      "Microsoft 365 E5 Security",
      "Audio Conferencing"
    ],
    "correctAnswer": "Microsoft 365 E5 Compliance",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q365",
    "prompt": "NO.365 Your company has a Microsoft 365 subscription.\nYou need to ensure that users from a partner company named Contoso, Ltd. can collaborate with\nyour company's users in teams. The solution must ensure that the Contoso users can exchange chat\nmessages in channels.\nWhich three actions should you perform before you add the Contoso users to teams? Each correct\nanswer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "From the Services & add-ins settings in the Microsoft 365 admin center, set Let group members outside the organization access group content to On.",
      "From the Guest access settings in the Microsoft Teams admin center, set Allow guest access in Microsoft Teams to On.",
      "From the External collaboration settings in the Azure Active Directory admin center, add Contoso's domain to the list of target domains.",
      "From the External access settings in the Microsoft Teams admin center, add Contoso's domain to the Allowed list of domains.",
      "From the External collaboration settings in the Azure Active Directory admin center, set Guest users permissions are limited to No.",
      "From the Services & add-ins settings in the Microsoft 365 admin center, set Let group owners add people outside the organization to groups to On."
    ],
    "correctAnswer": [
      "From the Guest access settings in the Microsoft Teams admin center, set Allow guest access in Microsoft Teams to On.",
      "From the External access settings in the Microsoft Teams admin center, add Contoso's domain to the Allowed list of domains.",
      "From the Services & add-ins settings in the Microsoft 365 admin center, set Let group owners add people outside the organization to groups to On."
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q366",
    "prompt": "NO.366 Your company uses Teams.\nYou need to configure Teams to meet the following requirements:\n* The Teams client must display the Avatars app for all users.\n* The Games for Work app must be unavailable in the Teams client\n* Users must be prevented from unpinning and rearranging apps in the Teams client Which type of\npolicy should you configure for each requirement? To answer, drag the appropriate policy types to\nthe correct requirements. Each policy type may be used once, more than once, or not at all. You may\nneed to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "allowAnswerShuffle": false,
    "type": "dragMatch",
    "items": [
      {
        "id": "it1",
        "label": "Customization policy"
      },
      {
        "id": "it2",
        "label": "Permission policy"
      },
      {
        "id": "it3",
        "label": "Setup policy"
      },
      {
        "id": "it4",
        "label": "Teams policy"
      }
    ],
    "targets": [
      {
        "id": "req1",
        "label": "The Teams client must display the Avatars app for all users."
      },
      {
        "id": "req2",
        "label": "Users must be prevented from unpinning and rearranging apps in the Teams client."
      },
      {
        "id": "req3",
        "label": "The Games for Work app must be unavailable in the Teams client."
      }
    ],
    "correctByTarget": {
      "req1": "it3",
      "req2": "it1",
      "req3": "it2"
    }
  },
  {
    "id": "ms700-q367",
    "prompt": "NO.367 Note: This question is part of a series of questions that present the same scenario. Each\nquestion in the series contains a unique solution that might meet the stated goals. Some question\nsets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYour company has 10 offices in North America and Europe.\nThe company has 5,000 users.\nYou plan to deploy Microsoft Teams for all the users.\nYou run a pilot project for the planned deployment.\nYou need to identify the network packet loss from the pilot computers to Microsoft Teams during\ncalls.\nSolution: From the Microsoft Teams admin center, you select Analytics & reports.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "No",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q368",
    "prompt": "NO.368 You are planning a Teams deployment to a branch office.\nYou need to recommend the following information for the deployment:\n* The network ports required for audio, video, and screen sharing.\n* The minimum bandwidth requirements in kilobits/s up and down for screen sharing during Teams\nmeetings.\nWhat should you recommend? To answer, select the appropriate options in the answer area. NOTE;\nEach correct selection is worth one point.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "text": "Network ports: "
        },
        {
          "slot": "ports"
        },
        {
          "text": "\nMinimum bandwidth: "
        },
        {
          "slot": "bandwidth"
        }
      ],
      "slots": {
        "ports": {
          "label": "Network ports",
          "options": [
            "TCP 443",
            "TCP 5223",
            "UDP 3478-3481"
          ],
          "correct": "UDP 3478-3481"
        },
        "bandwidth": {
          "label": "Minimum bandwidth",
          "options": [
            "150/200",
            "200/200",
            "250/250",
            "1000/1500"
          ],
          "correct": "1000/1500"
        }
      }
    }
  },
  {
    "id": "ms700-q369",
    "prompt": "NO.369 You have a Microsoft 365 subscription that uses Microsoft Teams.\nYou feed 10 identify which teams were inactive during the past 90 days.\nWhat should you use?",
    "image": "",
    "answers": [
      "Teams advisor",
      "the Office 365 Groups activity report",
      "the Teams user activity report",
      "the Teams usage report"
    ],
    "correctAnswer": "the Teams usage report",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q370",
    "prompt": "NO.370 You have a Teams deployment. A user cannot sign in to Teams.\nYou need to run self-help diagnostics to troubleshoot the issue.\nSolution: From the Microsoft 365 admin center, you select Service health.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "No",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q371",
    "prompt": "NO.371 You have a Microsoft 365 subscription that uses Teams and contains the users shown in the\nfollowing table.\nYou have the messaging policies shown in the following table.\nThe messaging polices are assigned as shown in the following table.\nFor each of the following statements, select Yes if True. Otherwise select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "st1",
        "label": "User1 can delete sent messages."
      },
      {
        "id": "st2",
        "label": "User2 can delete sent messages."
      },
      {
        "id": "st3",
        "label": "User3 cannot edit sent messages."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "inputType": "radio",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "st1": "Yes",
          "st2": "No",
          "st3": "No"
        }
      }
    ],
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q372",
    "prompt": "NO.372 You have a Microsoft Teams team named Team1.\nTeam1 is deleted accidentally.\nYou need to recover Team1.\nHow should you complete the PowerShell script? To answer, select the appropriate options in the\nanswer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "text": "$Team = Get-AzureADMSDeletedGroup "
        },
        {
          "slot": "param"
        },
        {
          "text": " \"Team1\"\n"
        },
        {
          "slot": "restore"
        },
        {
          "text": " -Id $Team.Id"
        }
      ],
      "slots": {
        "param": {
          "label": "Parameter",
          "options": [
            "-All",
            "-Filter",
            "-SearchString"
          ],
          "correct": "-SearchString"
        },
        "restore": {
          "label": "Restore cmdlet",
          "options": [
            "Restore-ADObject",
            "Restore-AzureADDeletedApplication",
            "Restore-AzureADMSDeletedDirectoryObject"
          ],
          "correct": "Restore-AzureADMSDeletedDirectoryObject"
        }
      }
    }
  },
  {
    "id": "ms700-q373",
    "prompt": "NO.373 You have a Microsoft 365 subscription that contains a user named User1.\nYou have a custom policy named AppPolicy that has the following configurations:\n* Allow all apps published by Microsoft.\n* Allow only specified third-party apps.\n* Block all custom apps.\nYou need to assign AppPolicy to User1.\nHow should you complete the PowerShell command? To answer, select the appropriate options in\nthe answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "slot": "cmdlet"
        },
        {
          "text": " -Identity \"User1\" "
        },
        {
          "slot": "param"
        },
        {
          "text": " AppPolicy"
        }
      ],
      "slots": {
        "cmdlet": {
          "label": "Cmdlet",
          "options": [
            "Grant-CsTeamsAppSetupPolicy",
            "Grant-CsTeamsAppPermissionPolicy",
            "Set-CsTeamsAppSetupPolicy",
            "Set-CsTeamsAppPermissionPolicy"
          ],
          "correct": "Grant-CsTeamsAppPermissionPolicy"
        },
        "param": {
          "label": "Parameter",
          "options": [
            "-Description",
            "-PinnedAppBarApps",
            "-PolicyName"
          ],
          "correct": "-PolicyName"
        }
      }
    }
  },
  {
    "id": "ms700-q374",
    "prompt": "NO.374 Your company has a Microsoft 365 subscription that contains three groups named HR,\nMarketing, and Sales.\nYou need to configure the Microsoft Teams desktop client. The solution must meet the following\nrequirements:\n* Members of the HR group must be prevented from pinning apps to their app bar.\n* Members of the Marketing group must have the Microsoft Planner app pinned to their app bar.\n* Members of the Sales group must not be affected by policies applied to the Marketing and HR\ngroups.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "Modify the global app setup policy.",
      "Modify the global app permission policy.",
      "Create an app setup policy for HR.",
      "Create an app setup policy for Marketing.",
      "Create an app permission policy for Marketing.",
      "Create an app permission policy for HR."
    ],
    "correctAnswer": [
      "Create an app setup policy for HR.",
      "Create an app setup policy for Marketing."
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q375",
    "prompt": "NO.375 You have a Microsoft 365 E5 subscription that uses Teams.\nA user named User1 reports that the recording button is unavailable during a Teams meeting.\nYou need to ensure that the recording button is available for User1.\nWhat should you configure in the Microsoft Teams admin center?",
    "image": "",
    "answers": [
      "Meeting policies",
      "Meeting template policies",
      "Meeting settings",
      "Meeting templates"
    ],
    "correctAnswer": "Meeting policies",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q376",
    "prompt": "NO.376 You have a Microsoft 365 subscription that contains two users named User1 and User2. The\nusers are provisioned for Microsoft Teams calling.\nUser1 is on leave for two weeks.\nYou need to ensure that User2 is notified of all calls to User1 while User1 is away.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "From Voice, add User2 to group call pickup.",
      "From Voice, add User1 to group call pickup.",
      "From Policies, modify the voice routing policy.",
      "From the Microsoft Teams admin center, modify the settings of User2.",
      "From the Microsoft Teams admin center, modify the settings of User1."
    ],
    "correctAnswer": [
      "From Voice, add User2 to group call pickup.",
      "From the Microsoft Teams admin center, modify the settings of User1."
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q377",
    "prompt": "NO.377 Your company has a Microsoft 365 subscription that contains a Microsoft Teams auto\nattendant.\nCalls to the auto attendant will be redirected to a shared voicemail.\nYou need to create a group for the shared voicemail.\nWhich type of group should you create?",
    "image": "",
    "answers": [
      "mail-enabled security",
      "distribution",
      "security",
      "Microsoft 365"
    ],
    "correctAnswer": "Microsoft 365",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q378",
    "prompt": "NO.378 Your company has a Microsoft 365 E5 subscription.\nThe company uses Microsoft Skype for Business Online and plans to upgrade to Microsoft Teams.\nThe network contains the following devices:\n* 100 computers that run Windows 10\n* 50 Android devices\n* 50 iPhone devices\nAll the devices have the Skype for Business app installed.\nYou need to deploy Microsoft Teams to all the devices.\nWhat should you do?",
    "image": "",
    "answers": [
      "From the Microsoft Teams admin center, set Download the Teams app in the background for Skype for Business users to On.",
      "Create a Group Policy Object (GPO) that contains an app package, and then link the GPO.",
      "From the Microsoft Teams admin center, create an app setup policy that includes the Microsoft Teams app, and then assign the policy to all users.",
      "From the Microsoft Intune, push Microsoft Teams to all the devices."
    ],
    "correctAnswer": "From the Microsoft Intune, push Microsoft Teams to all the devices.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q379",
    "prompt": "NO.379 You have a Teams deployment.\nAll users are assigned Microsoft 365 Copilot licenses.\nYou need to ensure that Teams meeting participants can access Copilot features during and after a\nmeeting.\nWhich setting should you enable first?",
    "image": "",
    "answers": [
      "Live captions",
      "Transcription",
      "Live streaming",
      "Require participant agreement for recording and transcription"
    ],
    "correctAnswer": "Transcription",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q380",
    "prompt": "NO.380 You have a Microsoft 365 E5 subscription that includes Teams.\nYou need to recommend a solution to investigate actions that relate to the following Teams activities\n:\n* A new team is created.\n* A new channel is added to a team.\n* A team member changes their role membership.\nThe solution must ensure that you can specify a start date and end date of the activities.\nWhat should you include in the recommendation?",
    "image": "",
    "answers": [
      "Teams advisor",
      "eDiscovery",
      "Microsoft Purview Audit",
      "Teams usage reports"
    ],
    "correctAnswer": "Microsoft Purview Audit",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q381",
    "prompt": "NO.381 Your company uses Microsoft Teams.\nYou have a team named Team1.\nYou need to prevent users from posting animated images to Team1.\nHow should you complete the PowerShell cmdlet? To answer, select the appropriate options in the\nanswer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "text": "get-team -DisplayName \"Team1\" | "
        },
        {
          "slot": "cmdlet"
        },
        {
          "text": " "
        },
        {
          "slot": "param"
        },
        {
          "text": " $false"
        }
      ],
      "slots": {
        "cmdlet": {
          "label": "Cmdlet",
          "options": [
            "Set-Team",
            "Set-TeamChannel",
            "Set-TeamPicture",
            "Set-TeamsApp"
          ],
          "correct": "Set-Team"
        },
        "param": {
          "label": "Parameter",
          "options": [
            "-AllowGiphy",
            "-AllowStickersAndMemes",
            "-AllowCustomMemes",
            "-GiphyContentRating"
          ],
          "correct": "-AllowStickersAndMemes"
        }
      }
    }
  },
  {
    "id": "ms700-q382",
    "prompt": "NO.382 Note: This question is part of a series of questions that present the same scenario. Each\nquestion in the series contains a unique solution that might meet the stated goals. Some question\nsets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYou have a Microsoft 365 subscription that contains several Microsoft SharePoint Online sites.\nYou need to ensure that the content stored in a SharePoint modern team site named Sales is\navailable from Microsoft Teams. The solution must ensure that when a new channel is added to a\nteam, a folder for the channel is created in the Sales site.\nSolution: From the Sales site, you use the Create a Team option.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "No",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q383",
    "prompt": "NO.383 Your company has a Microsoft 365 tenant that uses Microsoft Skype for Business Online.\nAll users connect to Skype for Business Online by using computers that run Windows 10.\nYou plan to upgrade all the users from Skype for Business Online to Microsoft Teams.\nYou need to ensure that the Microsoft Teams client is installed automatically on all the computers.\nWhat should you do from the Teams admin center?",
    "image": "",
    "answers": [
      "From the Messaging policies settings, modify the Global (Org-wide default) messaging policy.",
      "From Org-wide settings, configure the Teams upgrade settings.",
      "From Teams apps, add an App setup policy."
    ],
    "correctAnswer": "From Org-wide settings, configure the Teams upgrade settings.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q384",
    "prompt": "NO.384 You have a Teams channel named Project1.\nYou have a third-party project management app named App1.\nYou need to recommend an extensibility solution that integrates App1 into Teams. The solution must\nmeet the following requirements:\n* Users must be able to access App1 directly from Project1.\n* The members of Project! must be able to collaborate.\nWhat should you include in the recommendation?",
    "image": "",
    "answers": [
      "a connector",
      "a tab",
      "a bot",
      "a meeting extension",
      "a message extension"
    ],
    "correctAnswer": "a tab",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q385",
    "prompt": "NO.385 Note: This question is part of a series of questions that present the same scenario. Each\nquestion in the series contains a unique solution that might meet the stated goals. Some question\nsets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYou have a Microsoft 365 subscription that contains several Microsoft SharePoint Online sites.\nYou need to ensure that the content stored in a SharePoint modern team site named Sales is\navailable from Microsoft Teams. The solution must ensure that when a new channel is added to a\nteam, a folder for the channel is created in the Sales site.\nSolution: From PowerShell, you run the Set-AzureADGroup cmdlet.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "No",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q386",
    "prompt": "NO.386 Your company has a Microsoft Office 365 subscription.\nThe company has offices in France, United States, and Belgium.\nYou plan to implement Phone System to meet the following requirements:\n* The office in Belgium must use SIP trunks from the current telecommunication provider.\n* The office in France must integrate the phone number range and an on-premises IP-PBX.\n* The office in the United States must minimize the infrastructure required to deploy the planned\nPhone System.\nYou need to recommend which PSTN connectivity meets the requirements.\nWhich PSTN connectivity should you recommend for each office? To answer, select the appropriate\noptions in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "text": "France: "
        },
        {
          "slot": "fr"
        },
        {
          "text": "\nBelgium: "
        },
        {
          "slot": "be"
        },
        {
          "text": "\nUnited States: "
        },
        {
          "slot": "us"
        }
      ],
      "slots": {
        "fr": {
          "label": "France",
          "options": [
            "Calling Plans",
            "Direct Routing"
          ],
          "correct": "Direct Routing"
        },
        "be": {
          "label": "Belgium",
          "options": [
            "Calling Plans",
            "Direct Routing"
          ],
          "correct": "Direct Routing"
        },
        "us": {
          "label": "United States",
          "options": [
            "Calling Plans",
            "Direct Routing"
          ],
          "correct": "Calling Plans"
        }
      }
    }
  },
  {
    "id": "ms700-q387",
    "prompt": "NO.387 You are a Microsoft Teams administrator for your company.\nAll the teams used by the company's legal department must meet the following compliance\nrequirements:\n* Each team must expire 365 days after it is created.\n* All team content must be deleted when the team expires.\n* An administrator must be able to restore deleted team content for 30 days.\nWhat should you do?",
    "image": "",
    "answers": [
      "From the Microsoft 365 compliance center, create a retention policy.",
      "From the Azure Active Directory admin center, configure Microsoft 365 Groups expiration.",
      "From the Microsoft 365 admin center, modify the Office 365 group settings.",
      "From the Microsoft Teams admin center, modify the team's policy."
    ],
    "correctAnswer": "From the Azure Active Directory admin center, configure Microsoft 365 Groups expiration.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q388",
    "prompt": "NO.388 You have a Microsoft 365 E3 subscription that uses Teams. The subscription contains an\nadministrator named Admin1 that is assigned the Teams Administrator role.\nAdmin1 reports that he can assign default policy packages to users but cannot create and assign\ncustom policy packages.\nYou need to ensure that Admin1 can create and assign custom policy packages in Teams.\nWhat should you do?",
    "image": "",
    "answers": [
      "For Admin1, run the Grant-CsUserPolicyPackage PowerShell cmdlet.",
      "Assign a Teams Premium license to Admin1.",
      "For Admin1. run the Grant-CsGroupPolicyPackageAssigment PowerShell cmdlet.",
      "Assign a Microsoft 365 E5 license to Admin1."
    ],
    "correctAnswer": "Assign a Teams Premium license to Admin1.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q389",
    "prompt": "NO.389 You have a Microsoft 365 subscription that uses Teams.\nYou have a template to create a team named Team1.\nYou need to modify the template so that only Team1 owners can delete channels and messages.\nHow should you complete the template? To answer, select the appropriate options in the answer\narea.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "text": "\"memberSettings\": {\n  "
        },
        {
          "slot": "member_setting"
        },
        {
          "text": "\n}\n\n\"guestSettings\": {\n  "
        },
        {
          "slot": "guest_setting"
        },
        {
          "text": "\n}\n\n\"messagingSettings\": {\n  "
        },
        {
          "slot": "message_setting"
        },
        {
          "text": "\n}"
        }
      ],
      "slots": {
        "member_setting": {
          "label": "memberSettings",
          "options": [
            "\"allowDeleteChannels\": false",
            "\"allowDeleteChannels\": true",
            "\"allowCreateUpdateChannels\": true",
            "\"allowCreateUpdateChannels\": false"
          ],
          "correct": "\"allowDeleteChannels\": false"
        },
        "guest_setting": {
          "label": "guestSettings",
          "options": [
            "\"allowDeleteChannels\": false",
            "\"allowDeleteChannels\": true",
            "\"allowCreateUpdateChannels\": false",
            "\"allowCreateUpdateChannels\": true"
          ],
          "correct": "\"allowDeleteChannels\": false"
        },
        "message_setting": {
          "label": "messagingSettings",
          "options": [
            "\"allowUserEditMessages\": true",
            "\"allowUserEditMessages\": false",
            "\"allowUserDeleteMessages\": false",
            "\"allowUserDeleteMessages\": true"
          ],
          "correct": "\"allowUserDeleteMessages\": false"
        }
      }
    }
  },
  {
    "id": "ms700-q390",
    "prompt": "NO.390 You have a Microsoft 365 subscription that includes Teams. The subscription contains a user\nnamed User1.\nYou are deploying 10 new Teams devices.\nYou need to ensure that User1 can restart the Teams devices remotely.\nSolution: You assign the Teams Communications Administrator role to User1.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "No",
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q391",
    "prompt": "NO.391 You have a Microsoft 365 subscription that uses Teams.\nThe subscription contains the users shown in the following table.\nUser3 owns a public team named Sales that contains two channels named Planning and Budgets.\nYou have the following custom blocked words list.\nProject, Contoso, Group, Team\nFor each of the following statements, select Yes if True. Otherwise select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "rows": [
      {
        "id": "st1",
        "label": "User1 can create a team named Project A."
      },
      {
        "id": "st2",
        "label": "User2 can create a team named Contoso."
      },
      {
        "id": "st3",
        "label": "In the Sales team, User3 can create a channel named Contoso."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "inputType": "radio",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "st1": "No",
          "st2": "Yes",
          "st3": "No"
        }
      }
    ],
    "allowAnswerShuffle": false
  },
  {
    "id": "ms700-q392",
    "prompt": "NO.392 Your company has a Microsoft 365 subscription.\nYou have a team that uses the following dynamic rule.\nWhich user will be included in the group?",
    "image": "",
    "answers": [
      "A guest user in a department named Global Sales that has the country attribute set to USA.",
      "A member user in a department named Marketing Division that has the country attribute set to USA.",
      "A member user in a department named Marketing/Sales that has the country attribute set to US.",
      "A guest user in a department named US Marketing Division that has the country attribute set to US."
    ],
    "correctAnswer": "A guest user in a department named US Marketing Division that has the country attribute set to US.",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q393",
    "prompt": "NO.393 You have a Microsoft 365 subscription that has Azure Active Directory Premium Plan 2\nlicenses.\nYou need to implement Microsoft Teams lifecycle management to meet the following requirements:\n* All unused teams must be deleted after 180 days.\n* Inactive guest users must be removed from teams automatically every three months.\n* Microsoft Teams admin roles must only be assigned for specific time periods.\nWhich feature should you use for each requirement? To answer, drag the appropriate features to the\ncorrect requirements. Each feature may be used once, more than once, or not at all. You may need to\ndrag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "allowAnswerShuffle": false,
    "type": "dragMatch",
    "items": [
      {
        "id": "it1",
        "label": "A Microsoft 365 group expiration policy"
      },
      {
        "id": "it2",
        "label": "Access reviews in Azure Active Directory (Azure AD)"
      },
      {
        "id": "it3",
        "label": "Azure Active Directory (Azure AD) Privileged Identity Management (PIM)"
      },
      {
        "id": "it4",
        "label": "Entitlement management in Azure Active Directory (Azure AD)"
      }
    ],
    "targets": [
      {
        "id": "req1",
        "label": "All unused teams must be deleted after 180 days."
      },
      {
        "id": "req2",
        "label": "Inactive guest users must be removed from teams automatically every three months."
      },
      {
        "id": "req3",
        "label": "Microsoft Teams Admin roles must only be assigned for specific time periods."
      }
    ],
    "correctByTarget": {
      "req1": "it1",
      "req2": "it2",
      "req3": "it3"
    }
  },
  {
    "id": "ms700-q394",
    "prompt": "NO.394 You have a Microsoft 365 subscription that uses Microsoft Teams and contains the groups\nshown in the following table.\nYou create a new team named Project1.\nWhich groups can be added to Project1?",
    "image": "",
    "answers": [
      "Group1 only",
      "Group2 only",
      "Group3 only",
      "Group1 and Group3 only",
      "Group1. Group2. and Group3"
    ],
    "correctAnswer": "Group3 only",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q395",
    "prompt": "NO.395 You have a Teams Phone deployment.\nYou discover that the Teams client cannot receive PSTN calls but can receive Teams calls.\nYou need to ensure that the Teams client can receive both PSTN and Teams calls.\nWhat should you configure in the Teams client?",
    "image": "",
    "answers": [
      "Manage call group",
      "Manage delegates",
      "Redirect external phone calls",
      "Forward all calls"
    ],
    "correctAnswer": "Redirect external phone calls",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q396",
    "prompt": "NO.396 Your company has a Microsoft 365 tenant.\nGuest users report that they cannot access files or Microsoft OneNote from Microsoft Teams. The\nguest users can access channels, chats, and conversations.\nYou need to ensure that the guest users can access the files and OneNote from Microsoft Teams.\nFor what should you configure external sharing?",
    "image": "",
    "answers": [
      "Microsoft Teams",
      "Microsoft SharePoint Online",
      "Microsoft OneDrive for Business",
      "Microsoft Yammer."
    ],
    "correctAnswer": "Microsoft SharePoint Online",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q397",
    "prompt": "NO.397 Your company uses Microsoft Teams.\nYou need to configure an auto attendant that will use a Direct Routing phone number to receive\nincoming calls.\nWhich type of license do you require?",
    "image": "",
    "answers": [
      "Microsoft 365 E3",
      "Microsoft 365 Phone System - Virtual User",
      "the Advanced Communications add-on for Teams",
      "Microsoft 365 Business Standard"
    ],
    "correctAnswer": "the Advanced Communications add-on for Teams",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q398",
    "prompt": "NO.398 You open the Microsoft Call Quality Dashboard as shown in the following exhibit.\nAll Audio Streams\nThis Report shows the monthly audio streams count, poor count, and poor ratio for the last 7\nmonths. There are no filters applied so the data reflects all the call data that was captured by the\nService. Audio calls made over wireless and external networks can cause poor call rates to go up.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "text": "During the month of July 2019, "
        },
        {
          "slot": "successful"
        },
        {
          "text": " calls were established successfully.\n"
        },
        {
          "text": "During the month of July 2019, "
        },
        {
          "slot": "metric"
        },
        {
          "text": " calls included metric data."
        }
      ],
      "slots": {
        "successful": {
          "label": "Successful calls",
          "options": [
            "0",
            "4",
            "66",
            "70"
          ],
          "correct": "70"
        },
        "metric": {
          "label": "Calls included metric data",
          "options": [
            "0",
            "4",
            "66",
            "70"
          ],
          "correct": "66"
        }
      }
    }
  },
  {
    "id": "ms700-q399",
    "prompt": "NO.399 You have a Microsoft Office 365 subscription.\nYou need to prevent guest users from deleting channels from a Microsoft Teams team.\nWhat should you use?",
    "image": "",
    "answers": [
      "the Microsoft 365 admin center",
      "the Microsoft Teams PowerShell module",
      "the Azure Active Directory admin center",
      "the Security & Compliance admin center"
    ],
    "correctAnswer": "the Microsoft Teams PowerShell module",
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q400",
    "prompt": "NO.400 You have a Microsoft 365 subscription that uses Microsoft Teams to collaborate with guest\nusers.\nYou need to use monthly active users (MAU) billing and access reviews to monitor the team\nmembership of the guest users.\nWhich additional licenses should you assign, and what should you do to enable MAU billing? To\nanswer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "text": "Additional licenses: "
        },
        {
          "slot": "license"
        },
        {
          "text": "\nTo enable MAU billing: "
        },
        {
          "slot": "mau"
        }
      ],
      "slots": {
        "license": {
          "label": "Additional licenses",
          "options": [
            "Office 365 Enterprise E5",
            "Advanced Communications",
            "Azure Active Directory Premium Plan 1",
            "Azure Active Directory Premium Plan 2"
          ],
          "correct": "Office 365 Enterprise E5"
        },
        "mau": {
          "label": "To enable MAU billing",
          "options": [
            "Link an Azure subscription to the Azure AD tenant.",
            "Enable external access in Microsoft Teams.",
            "Modify the External collaboration settings for the Azure AD tenant.",
            "Modify the Configure identity provider settings for the Azure AD tenant."
          ],
          "correct": "Link an Azure subscription to the Azure AD tenant."
        }
      }
    }
  },
  {
    "id": "ms700-q401",
    "prompt": "NO.401 You have a Teams deployment.\nYou need to apply bandwidth restrictions for Teams users in the Buffalo office. The solution must\nmeet the following requirements:\n* The media bit rate must be a maximum of 1 Mbps.\n* Users that travel between the offices must have access to high-quality video while in the New York\noffice.\nWhich two features should you configure? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "a calling policy",
      "Network planner",
      "a Teams update policy",
      "a meeting policy",
      "a network roaming policy"
    ],
    "correctAnswer": [
      "a meeting policy",
      "a network roaming policy"
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "ms700-q402",
    "prompt": "NO.402 Note: This question is part of a series of questions that present the same scenario. Each\nquestion in the series contains a unique solution that might meet the stated goals. Some question\nsets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYour company has a Microsoft 365 subscription that uses an Azure Active Directory (Azure AD) tenant\nnamed contoso.com.\nYou need to prevent guest users in the tenant from using cameras during Microsoft Teams meetings.\nSolution: From Microsoft Teams admin center, you modify the Guest access settings.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "Yes",
    "allowAnswerShuffle": false
  }
];
