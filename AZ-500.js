window.__QUESTION_BANK_FILES__ = window.__QUESTION_BANK_FILES__ || {};
window.__QUESTION_BANK_FILES__["AZ-500"] = [
  {
    "id": "az500-q1",
    "prompt": "NO.1 You assign User8 the Owner role for RG4, RG5, and RG6.\nIn which resource groups can User8 create virtual networks and NSGs? To answer, select the\nappropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "vn",
        "label": "User8 can create virtual networks in:"
      },
      {
        "id": "nsg",
        "label": "User8 can create NSGs in:"
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "options": [
          "RG4 only",
          "RG6 only",
          "RG4 and RG6 only",
          "RG4, RG5, and RG6"
        ],
        "correctByRow": {
          "vn": "RG6 only",
          "nsg": "RG4 and RG6 only"
        }
      }
    ]
  },
  {
    "id": "az500-q2",
    "prompt": "NO.2 You need to meet the technical requirements for VNetwork1.\nWhat should you do first?",
    "image": "",
    "answers": [
      "Create a new subnet on VNetwork1.",
      "Remove the NSGs from Subnet11 and Subnet13.",
      "Associate an NSG to Subnet12.",
      "Configure DDoS protection for VNetwork1."
    ],
    "correctAnswer": "Create a new subnet on VNetwork1.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q3",
    "prompt": "NO.3 What is the membership of Group1 and Group2? To answer, select the appropriate options in\nthe answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "g",
        "label": "Membership"
      }
    ],
    "columns": [
      {
        "id": "group1",
        "label": "Group1",
        "options": [
          "No members",
          "Only User2",
          "Only User2 and User4",
          "User1, User2, User3, and User4"
        ],
        "correctByRow": {
          "g": "User1, User2, User3, and User4"
        }
      },
      {
        "id": "group2",
        "label": "Group2",
        "options": [
          "No members",
          "Only User3",
          "Only User1 and User3",
          "User1, User2, User3, and User4"
        ],
        "correctByRow": {
          "g": "User1, User2, User3, and User4"
        }
      }
    ]
  },
  {
    "id": "az500-q4",
    "prompt": "NO.4 You have an Azure subscription that contains an Azure App Service app named App1, an Azure\ncontainer instance named AC1. and a storage account named storage1. AC1 hosts an app named\nApp2.\nUsers send requests to App1 by using a URL of https:/app1.contoso.com/echo/resource-cache?\nparam1\n=sample. App1 calls App2. which retrieves data from storage1.\nYou need to ensure that a security alert will be generated when connections are detected from\nanomalous IP addresses. Which Microsoft Defender for Cloud service should you use?",
    "image": "",
    "answers": [
      "Microsoft Defender for APIs",
      "Microsoft Defender for Storage",
      "Microsoft Defender for Containers",
      "Microsoft Defender for App Service"
    ],
    "correctAnswer": "Microsoft Defender for App Service",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q5",
    "prompt": "NO.5 You are evaluating the security of the network communication between the virtual machines in\nSub2.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "s1",
        "label": "From VM1, you can successfully ping the public IP address of VM2."
      },
      {
        "id": "s2",
        "label": "From VM1, you can successfully ping the private IP address of VM3."
      },
      {
        "id": "s3",
        "label": "From VM1, you can successfully ping the public IP address of VM5."
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
    "id": "az500-q6",
    "prompt": "NO.6 Which virtual networks in Sub1 can User2 modify and delete in their current state? To answer,\nselect the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "u",
        "label": "User2"
      }
    ],
    "columns": [
      {
        "id": "modify",
        "label": "Virtual networks that User2 can modify",
        "options": [
          "VNET4 only",
          "VNET4 and VNET1 only",
          "VNET4, VNET3, and VNET1 only",
          "VNET4, VNET3, VNET2, and VNET1"
        ],
        "correctByRow": {
          "u": "VNET4 and VNET1 only"
        }
      },
      {
        "id": "delete",
        "label": "Virtual networks that User2 can delete",
        "options": [
          "VNET4 only",
          "VNET4 and VNET1 only",
          "VNET4, VNET3, and VNET1 only",
          "VNET4, VNET3, VNET2, and VNET1"
        ],
        "correctByRow": {
          "u": "VNET4 only"
        }
      }
    ]
  },
  {
    "id": "az500-q7",
    "prompt": "NO.7 You have a Microsoft Entra tenant.\nYou need to prevent nonprivileged Microsoft Entra users from creating service principals in Microsoft\nEntra ID.",
    "image": "",
    "answers": [
      "From the Properties blade, set Access management for Azure resources to No.",
      "From the User settings blade, set Restrict access to Microsoft Entra ID administration portal to Yes.",
      "From the Properties blade, set Enable Security defaults to Yes.",
      "From the User settings blade, set Users can register applications to No."
    ],
    "correctAnswer": "From the User settings blade, set Users can register applications to No.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q8",
    "prompt": "NO.8 You need to ensure that User2 can implement PIM.\nWhat should you do first?",
    "image": "",
    "answers": [
      "Assign User2 the Global administrator role.",
      "Configure authentication methods for contoso.com.",
      "Configure the identity secure score for contoso.com.",
      "Enable multi-factor authentication (MFA) for User2."
    ],
    "correctAnswer": "Enable multi-factor authentication (MFA) for User2.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q9",
    "prompt": "NO.9 You are evaluating the security of VM1, VM2, and VM3 in Sub2.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "s1",
        "label": "From the Internet, you can connect to the web server on VM1 by using HTTP."
      },
      {
        "id": "s2",
        "label": "From the Internet, you can connect to the web server on VM2 by using HTTP."
      },
      {
        "id": "s3",
        "label": "From the Internet, you can connect to the web server on VM3 by using HTTP."
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
    ]
  },
  {
    "id": "az500-q10",
    "prompt": "NO.10 You are evaluating the effect of the application security groups on the network\ncommunication between the virtual machines in Sub2.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "s1",
        "label": "From VM1, you can successfully ping the private IP address of VM4."
      },
      {
        "id": "s2",
        "label": "From VM2, you can successfully ping the private IP address of VM4."
      },
      {
        "id": "s3",
        "label": "From VM1, you can connect to the web server on VM4."
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
    "id": "az500-q11",
    "prompt": "NO.11 You need to meet the identity and access requirements for Group1.\nWhat should you do?",
    "image": "",
    "answers": [
      "Add a membership rule to Group1.",
      "Delete Group1. Create a new group named Group1 that has a membership type of Office 365. Add users and devices to the group.",
      "Modify the membership rule of Group1.",
      "Change the membership type of Group1 to Assigned. Create two groups that have dynamic memberships. Add the new groups to Group1."
    ],
    "correctAnswer": "Change the membership type of Group1 to Assigned. Create two groups that have dynamic memberships. Add the new groups to Group1.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q12",
    "prompt": "NO.12 You need to configure SQLDB1 to meet the data and application requirements.\nWhich three actions should you recommend be performed in sequence? To answer, move the\nappropriate actions from the list of actions to the answer area and arrange them in the correct order.",
    "image": "",
    "type": "dragMatch",
    "allowAnswerShuffle": false,
    "items": [
      {
        "id": "it1",
        "label": "From the Azure portal, create an Azure AD administrator for LitwareSQLServer1."
      },
      {
        "id": "it2",
        "label": "In SQLDB1, create contained database users."
      },
      {
        "id": "it3",
        "label": "Connect to SQLDB1 by using Microsoft SQL Server Management Studio (SSMS)."
      },
      {
        "id": "it4",
        "label": "In Azure AD, create a system-assigned managed identity."
      },
      {
        "id": "it5",
        "label": "In Azure AD, create a user-assigned managed identity."
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
      "step3": "it2"
    }
  },
  {
    "id": "az500-q13",
    "prompt": "NO.13 You need to ensure that the Azure AD application registration and consent configurations\nmeet the identity and access requirements.\nWhat should you use in the Azure portal? To answer, select the appropriate options in the answer\narea.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r",
        "label": "Azure portal settings"
      }
    ],
    "columns": [
      {
        "id": "registration",
        "label": "To configure the registration settings",
        "options": [
          "Azure AD – User settings",
          "Azure AD – App registrations settings",
          "Enterprise Applications – User settings"
        ],
        "correctByRow": {
          "r": "Azure AD – User settings"
        }
      },
      {
        "id": "consent",
        "label": "To configure the consent settings",
        "options": [
          "Azure AD – User settings",
          "Azure AD – App registrations settings",
          "Enterprise Applications – User settings"
        ],
        "correctByRow": {
          "r": "Enterprise Applications – User settings"
        }
      }
    ]
  },
  {
    "id": "az500-q14",
    "prompt": "NO.14 You need to create Role1 to meet the platform protection requirements.\nHow should you complete the role definition of Role1? To answer, select the appropriate options in\nthe answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "text": "{\n  \"Name\": \"Role1\",\n  \"Id\": \"11111111-1111-1111-1111-111111111111\",\n  \"IsCustom\": true,\n  \"Description\": \"VM storage operator\",\n  \"Actions\": [\n    \""
        },
        {
          "slot": "provider"
        },
        {
          "text": "\",\n    \""
        },
        {
          "slot": "resource"
        },
        {
          "text": "\"\n  ],\n  \"NotActions\": [\n  ],\n  \"AssignableScopes\": [\n    \""
        },
        {
          "slot": "scope"
        },
        {
          "text": "\"\n  ]\n}"
        }
      ],
      "slots": {
        "provider": {
          "label": "Provider",
          "options": [
            "\"Microsoft.Compute/\"",
            "\"Microsoft.Resources/\"",
            "\"Microsoft.Storage/\""
          ],
          "correct": "\"Microsoft.Compute/\""
        },
        "resource": {
          "label": "Resource",
          "options": [
            "disks/*",
            "storageAccounts/*",
            "virtualMachines/disks/*"
          ],
          "correct": "disks/*"
        },
        "scope": {
          "label": "AssignableScopes",
          "options": [
            "*",
            "/subscriptions/43894a43-17c2-4a39-8cfc-3540c2653ef4/resourceGroups/Resource Group1",
            "/subscriptions/43894a43-17c2-4a39-8cfc-3540c2653ef4"
          ],
          "correct": "/subscriptions/43894a43-17c2-4a39-8cfc-3540c2653ef4/resourceGroups/Resource Group1"
        }
      }
    }
  },
  {
    "id": "az500-q15",
    "prompt": "NO.15 You need to configure WebApp1 to meet the data and application requirements.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "Upload a public certificate.",
      "Turn on the HTTPS Only protocol setting.",
      "Set the Minimum TLS Version protocol setting to 1.2.",
      "Change the pricing tier of the App Service plan.",
      "Turn on the Incoming client certificates protocol setting."
    ],
    "correctAnswer": [
      "Turn on the HTTPS Only protocol setting.",
      "Turn on the Incoming client certificates protocol setting."
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q16",
    "prompt": "NO.16 You need to ensure that users can access VM0. The solution must meet the platform\nprotection requirements.\nWhat should you do?",
    "image": "",
    "answers": [
      "Move VM0 to Subnet1.",
      "On Firewall, configure a network traffic filtering rule.",
      "Assign RT1 to AzureFirewallSubnet.",
      "On Firewall, configure a DNAT rule."
    ],
    "correctAnswer": "On Firewall, configure a DNAT rule.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q17",
    "prompt": "NO.17 You need to ensure that you can meet the security operations requirements.\nWhat should you do first?",
    "image": "",
    "answers": [
      "Turn on Auto Provisioning in Security Center.",
      "Integrate Security Center and Microsoft Cloud App Security.",
      "Upgrade the pricing tier of Security Center to Standard.",
      "Modify the Security Center workspace configuration."
    ],
    "correctAnswer": "Upgrade the pricing tier of Security Center to Standard.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q18",
    "prompt": "NO.18 You need to deploy AKS1 to meet the platform protection requirements.\nWhich four actions should you perform in sequence? To answer, move the appropriate actions from\nthe list of actions to the answer area and arrange them in the correct order.\nNOTE: More than one order of answer choices is correct. You will receive credit for any of the correct\norders you select.",
    "image": "",
    "type": "dragMatch",
    "allowAnswerShuffle": false,
    "items": [
      {
        "id": "it1",
        "label": "Deploy an AKS cluster."
      },
      {
        "id": "it2",
        "label": "Create a client application."
      },
      {
        "id": "it3",
        "label": "Create a server application."
      },
      {
        "id": "it4",
        "label": "Create an RBAC binding."
      },
      {
        "id": "it5",
        "label": "Create a custom RBAC role."
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
      "step2": "it2",
      "step3": "it1",
      "step4": "it4"
    }
  },
  {
    "id": "az500-q19",
    "prompt": "NO.19 You need to deploy Microsoft Antimalware to meet the platform protection requirements.\nWhat should you do? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r",
        "label": "Policy configuration"
      }
    ],
    "columns": [
      {
        "id": "effect",
        "label": "Create a custom policy definition that has effect set to",
        "options": [
          "Append",
          "Deny",
          "DeployIfNotExists"
        ],
        "correctByRow": {
          "r": "DeployIfNotExists"
        }
      },
      {
        "id": "modify",
        "label": "Create a policy assignment and modify",
        "options": [
          "The Create a Managed Identity setting",
          "The exclusion settings",
          "The scope"
        ],
        "correctByRow": {
          "r": "The scope"
        }
      }
    ]
  },
  {
    "id": "az500-q20",
    "prompt": "NO.20 You need to meet the technical requirements for the finance department users.\nWhich CAPolicy1 settings should you modify?",
    "image": "",
    "answers": [
      "Cloud apps or actions",
      "Conditions",
      "Grant",
      "Session"
    ],
    "correctAnswer": "Session",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q21",
    "prompt": "NO.21 You implement the planned changes for ASG1 and ASG2.\nIn which NSGs can you use ASG1. and the network interfaces of which virtual machines can you\nassign to ASG2?",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r",
        "label": "ASG assignments"
      }
    ],
    "columns": [
      {
        "id": "nsgs",
        "label": "NSGs",
        "options": [
          "NSG2 only",
          "NSG2 and NSG4 only",
          "NSG2, NSG3, and NSG4"
        ],
        "correctByRow": {
          "r": "NSG2 and NSG4 only"
        }
      },
      {
        "id": "vms",
        "label": "Virtual machines",
        "options": [
          "VM3 only",
          "VM2 and VM4 only",
          "VM1, VM2, and VM4 only",
          "VM2, VM3, and VM4 only",
          "VM1, VM2, VM3, and VM4"
        ],
        "correctByRow": {
          "r": "VM1, VM2, and VM4 only"
        }
      }
    ]
  },
  {
    "id": "az500-q22",
    "prompt": "NO.22 You need to configure support for Azure Sentinel notebooks to meet the technical\nrequirements.\nWhat is the minimum number of Azure container registries and Azure Machine Learning workspaces\nrequired?",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r",
        "label": "Minimum required"
      }
    ],
    "columns": [
      {
        "id": "acr",
        "label": "Container registries",
        "options": [
          "0",
          "1",
          "2",
          "3"
        ],
        "correctByRow": {
          "r": "0"
        }
      },
      {
        "id": "ws",
        "label": "Workspaces",
        "options": [
          "0",
          "1",
          "2",
          "3"
        ],
        "correctByRow": {
          "r": "1"
        }
      }
    ]
  },
  {
    "id": "az500-q23",
    "prompt": "NO.23 You need to encrypt storage1 to meet the technical requirements. Which key vaults can you\nuse?",
    "image": "",
    "answers": [
      "KeyVault1 only",
      "KeyVault2 and KeyVault3 only",
      "KeyVault1 and KeyVault3 only",
      "KeyVault1 KeyVault2 and KeyVault3"
    ],
    "correctAnswer": "KeyVault2 and KeyVault3 only",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q24",
    "prompt": "NO.24 You need to delegate the creation of RG2 and the management of permissions for RG1.\nWhich users can perform each task? To answer select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r",
        "label": "Delegation"
      }
    ],
    "columns": [
      {
        "id": "create_rg2",
        "label": "Create RG2",
        "options": [
          "Admin3 only",
          "Admin2 and Admin3 only",
          "Admin3 and Admin4 only",
          "Admin2, Admin3, and Admin4 only",
          "Admin1, Admin2, Admin3, and Admin4"
        ],
        "correctByRow": {
          "r": "Admin3 only"
        }
      },
      {
        "id": "manage_rg1",
        "label": "Manage RG1 permissions",
        "options": [
          "Admin4 only",
          "Admin1 and Admin4 only",
          "Admin3 and Admin4 only",
          "Admin1, Admin2, and Admin4 only",
          "Admin1, Admin2, Admin3, and Admin4"
        ],
        "correctByRow": {
          "r": "Admin4 only"
        }
      }
    ]
  },
  {
    "id": "az500-q25",
    "prompt": "NO.25 You plan to implement JIT VM access. Which virtual machines will be supported?",
    "image": "",
    "answers": [
      "VM1 and VM3 only",
      "VM1. VM2. VM3, and VM4",
      "VM2, VM3, and VM4 only",
      "VM1 only"
    ],
    "correctAnswer": "VM1 and VM3 only",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q26",
    "prompt": "NO.26 From Azure Security Center, you need to deploy SecPol1.\nWhat should you do first?",
    "image": "",
    "answers": [
      "Enable Azure Defender.",
      "Create an Azure Management group.",
      "Create an initiative.",
      "Configure continuous export."
    ],
    "correctAnswer": "Create an Azure Management group.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q27",
    "prompt": "NO.27 You plan to configure Azure Disk Encryption for VM4. Which key vault can you use to store\nthe encryption key?",
    "image": "",
    "answers": [
      "KeyVault1",
      "KeyVault3",
      "KeyVault2"
    ],
    "correctAnswer": "KeyVault1",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q28",
    "prompt": "NO.28 You need to perform the planned changes for OU2 and User1.\nWhich tools should you use? To answer, drag the appropriate tools to the correct resources. Each\ntool may be used once, more than once, or not at all. You may need to drag the split bar between\npanes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dragMatch",
    "allowAnswerShuffle": false,
    "items": [
      {
        "id": "it1",
        "label": "The Azure portal"
      },
      {
        "id": "it2",
        "label": "Azure AD Connect"
      },
      {
        "id": "it3",
        "label": "The Active Directory admin center"
      },
      {
        "id": "it4",
        "label": "Active Directory Sites and Services"
      },
      {
        "id": "it5",
        "label": "Active Directory Users and Computers"
      }
    ],
    "targets": [
      {
        "id": "ou2",
        "label": "OU2"
      },
      {
        "id": "user1",
        "label": "User1"
      }
    ],
    "correctByTarget": {
      "ou2": "it2",
      "user1": "it1"
    }
  },
  {
    "id": "az500-q29",
    "prompt": "NO.29 You have been tasked with configuring an access review, which you plan to assigned to a new\ncollection of reviews. You also have to make sure that the reviews can be reviewed by resource\nowners.\nYou start by creating an access review program and an access review control.\nYou now need to configure the Reviewers.\nWhich of the following should you set Reviewers to?",
    "image": "",
    "answers": [
      "Selected users.",
      "Members (Self).",
      "Group Owners.",
      "Anyone."
    ],
    "correctAnswer": "Group Owners.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q30",
    "prompt": "NO.30 Note: This question is part of a series of questions that present the same scenario. Each\nquestion in the series contains a unique solution that might meet the stated goals. Some question\nsets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYou have an Azure subscription named Sub1.\nYou have an Azure Storage account named sa1 in a resource group named RG1.\nUsers and applications access the blob service and the file service in sa1 by using several shared\naccess signatures (SASs) and stored access policies.\nYou discover that unauthorized users accessed both the file service and the blob service.\nYou need to revoke all access to sa1.\nSolution: You regenerate the Azure storage account access keys.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "Yes",
    "allowAnswerShuffle": false
  },
  {
    "id": "az500-q31",
    "prompt": "NO.31 You have an Azure subscription that contains an Azure key vault and an Azure Storage\naccount. The key vault contains customer-managed keys. The storage account is configured to use\nthe customer-managed keys stored In the key vault.\nYou plan to store data in Azure by using the following services:\n* Azure Files\n* Azure Blob storage\n* Azure Log Analytics\n* Azure Table storage\n* Azure Queue storage\nWhich two services data encryption by using the keys stored in the key vault? Each correct answer\npresent a complete solution.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "Queue storage",
      "Table storage",
      "Azure Files",
      "Blob storage"
    ],
    "correctAnswer": [
      "Azure Files",
      "Blob storage"
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q32",
    "prompt": "NO.32 You have an Azure subscription that contains a route table named RT1. RT1 includes a route\nthat has the following configurations:\n* Name: RouteA\n* IP address prefix: 192.168.0.0/24\n* Next hop IP address: 172.16.10.10\nYou are evaluating whether to add the routes shown in the following table.\nWhich routes can you add to RT1?",
    "image": "",
    "answers": [
      "Route1 only",
      "Route2 only",
      "Route3 only",
      "Route1 and Route2 only",
      "Route1 and Route3 only",
      "Route2 and Route3 only"
    ],
    "correctAnswer": "Route1 and Route3 only",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q33",
    "prompt": "NO.33 Lab Task\nuse the following login credentials as needed:\nTo enter your username, place your cursor in the Sign in box and click on the username below.\nTo enter your password. place your cursor in the Enter password box and click on the password\nbelow.\nAzure Username: Userl -28681041@ExamUsers.com\nAzure Password: GpOAe4@lDg\nIf the Azure portal does not load successfully in the browser, press CTRL-K to reload the portal in a\nnew browser tab.\nThe following information is for technical support purposes only:\nLab Instance: 28681041\nTask 9\nYou need to ensure that the rg1lod28681041n1 Azure Storage account is encrypted by using a key\nstored in the KeyVault28681041 Azure key vault.",
    "image": "",
    "answers": [
      "Questão em formato não suportado por este app (consulte o PDF)."
    ],
    "correctAnswer": "Questão em formato não suportado por este app (consulte o PDF).",
    "allowAnswerShuffle": false
  },
  {
    "id": "az500-q34",
    "prompt": "NO.34 You have an Azure subscription that contains a web app named App1 and an Azure key vault\nnamed Vault1.\nYou need to configure App1 to store and access the secrets in Vault1.\nHow should you configure App1? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r",
        "label": "App1 configuration"
      }
    ],
    "columns": [
      {
        "id": "auth",
        "label": "Configure App1 to authenticate by using a",
        "options": [
          "Key",
          "Certificate",
          "Passphrase",
          "User-assigned managed identity",
          "System-assigned managed identity"
        ],
        "correctByRow": {
          "r": "System-assigned managed identity"
        }
      },
      {
        "id": "kvref",
        "label": "Configure a Key Vault reference for App1 from the",
        "options": [
          "Extensions blade",
          "General settings tab",
          "TLS/SSL settings blade",
          "Application settings tab"
        ],
        "correctByRow": {
          "r": "Application settings tab"
        }
      }
    ]
  },
  {
    "id": "az500-q35",
    "prompt": "NO.35 You have an Azure subscription.\nYou configure the subscription to use a different Azure Active Directory (Azure AD) tenant.\nWhat are two possible effects of the change? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "Role assignments at the subscription level are lost.",
      "Virtual machine managed identities are lost.",
      "Virtual machine disk snapshots are lost.",
      "Existing Azure resources are deleted."
    ],
    "correctAnswer": [
      "Role assignments at the subscription level are lost.",
      "Virtual machine managed identities are lost."
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q36",
    "prompt": "NO.36 You create resources in an Azure subscription as shown in the following table.\nVNET1 contains two subnets named Subnet1 and Subnet2. Subnet1 has a network ID of 10.0.0.0/24.\nSubnet2 has a network ID of 10.1.1.0/24.\nContoso1901 is configured as shown in the exhibit. (Click the Exhibit tab.)\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "s1",
        "label": "An Azure virtual machine on Subnet1 can access data in Contoso1901."
      },
      {
        "id": "s2",
        "label": "An Azure virtual machine on Subnet2 can access data in Contoso1901."
      },
      {
        "id": "s3",
        "label": "A computer on the Internet that has an IP address of 193.77.10.2 can access data in Contoso1901."
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
    ]
  },
  {
    "id": "az500-q37",
    "prompt": "NO.37 You have 15 Azure virtual machines in a resource group named RG1.\nAll virtual machines run identical applications.\nYou need to prevent unauthorized applications and malware from running on the virtual machines.\nWhat should you do?",
    "image": "",
    "answers": [
      "Apply an Azure policy to RG1.",
      "From Azure Security Center, configure adaptive application controls.",
      "Configure Azure Active Directory (Azure AD) Identity Protection.",
      "Apply a resource lock to RG1."
    ],
    "correctAnswer": "From Azure Security Center, configure adaptive application controls.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q38",
    "prompt": "NO.38 You have an Azure subscription named Subscription1 that is linked to a Microsoft Entra\ntenant named contoso.com and a resource group named RG1.\nYou create a custom role named Role1 in contoso.com.\nWhere can you use Role1 for permission delegation?",
    "image": "",
    "answers": [
      "contoso.com only",
      "contoso.com and RG1 only",
      "contoso.com and Subscription 1 only",
      "contoso.com. RG1. and Subscription1"
    ],
    "correctAnswer": "contoso.com. RG1. and Subscription1",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q39",
    "prompt": "NO.39 Note: This question is part of a series of questions that present the same scenario. Each\nquestion in the series contains a unique solution that might meet the stated goals. Some question\nsets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYou use Azure Security Center for the centralized policy management of three Azure subscriptions.\nYou use several policy definitions to manage the security of the subscriptions.\nYou need to deploy the policy definitions as a group to all three subscriptions.\nSolution: You create a policy definition and assignments that are scoped to resource groups.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "No",
    "allowAnswerShuffle": false
  },
  {
    "id": "az500-q40",
    "prompt": "NO.40 Note: This question is part of a series of questions that present the same scenario. Each\nquestion in the series contains a unique solution that might meet the stated goals. Some question\nsets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYou have an Azure Subscription. The subscription contains 50 virtual machines that run Windows\nServer\n2012 R2 or Windows Server 2016.\nYou need to deploy Microsoft Antimalware to the virtual machines.\nSolution: You connect to each virtual machine and add a Windows feature.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "No",
    "allowAnswerShuffle": false
  },
  {
    "id": "az500-q41",
    "prompt": "NO.41 You have an Azure subscription that contains an Azure firewall named AzFW1. AzFW1 has a\nfirewall policy named FWPolicy1. You need to add rule collections to FWPolicy1 to meet the following\nrequirements:\n* Allow traffic based on the FQDN of the destination.\n* Allow TCP traffic.\nWhich types of rule collections should you add for each requirement? To answer, select the\nappropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r",
        "label": "Firewall policy"
      }
    ],
    "columns": [
      {
        "id": "fqdn",
        "label": "Allow traffic based on the destination FQDN",
        "options": [
          "Network only",
          "Application only",
          "Network or DNAT only",
          "Application or DNAT only",
          "Network or application only",
          "Network, application, or DNAT"
        ],
        "correctByRow": {
          "r": "Application only"
        }
      },
      {
        "id": "tcp",
        "label": "Allow TCP traffic",
        "options": [
          "Network only",
          "Application only",
          "Network or DNAT only",
          "Application or DNAT only",
          "Network or application only",
          "Network, application, or DNAT"
        ],
        "correctByRow": {
          "r": "Network only"
        }
      }
    ]
  },
  {
    "id": "az500-q42",
    "prompt": "NO.42 You have an Azure subscription named Subscription1.\nYou deploy a Linux virtual machine named VM1 to Subscription1.\nYou need to monitor the metrics and the logs of VM1.\nD18912E1457D5D1DDCBD40AB3BF70D5D\nWhat should you use?",
    "image": "",
    "answers": [
      "Azure HDInsight",
      "Azure Analysis Services",
      "the AzurePerformanceDiagnostics extension",
      "Linux Diagnostic Extension (LAD) 3.0"
    ],
    "correctAnswer": "the AzurePerformanceDiagnostics extension",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q43",
    "prompt": "NO.43 You have a hybrid Microsoft Entra tenant named contoso.com that contains a user named\nUset1 and the servers shown in the following table.\nThe tenant is linked to an Azure subscription that contains a storage account named storage1. The\nstorage1 account contains a file share named shares1.\nUser1 is assigned the Storage File Data SMB Share Contributor role for storages1.\nThe Security protocol settings for the file shares of storage1 are configured as shown in the following\nexhibit.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE; Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "s1",
        "label": "User1 can map share1 to Server1 by using the access key of storage1."
      },
      {
        "id": "s2",
        "label": "User1 can map share1 to Server1 by using the user's credentials."
      },
      {
        "id": "s3",
        "label": "User1 can map share1 to Server2 by using the access key of storage1."
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
    ]
  },
  {
    "id": "az500-q44",
    "prompt": "NO.44 You have an Azure subscription that contains the storage accounts shown in the following\ntable.\nYou need to create private endpoints for the target sub-resources of the storage accounts. The\nsolution must ensure that all the target sub-resources can be accessed by using a private endpoint.\nWhat is the minimum number of private endpoints you should create for each storage account? To\nanswer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\ns",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r",
        "label": "Private endpoints"
      }
    ],
    "columns": [
      {
        "id": "storage1",
        "label": "storage1",
        "options": [
          "1",
          "2",
          "3",
          "6"
        ],
        "correctByRow": {
          "r": "1"
        }
      },
      {
        "id": "storage2",
        "label": "storage2",
        "options": [
          "1",
          "2",
          "3",
          "6",
          "8"
        ],
        "correctByRow": {
          "r": "1"
        }
      }
    ]
  },
  {
    "id": "az500-q45",
    "prompt": "NO.45 You have an Azure subscription.\nYou plan to deploy the virtual machines shown in the following table.\nYou need to identify the virtual machines and operating systems that can be deployed as confidential\nvirtual machines?\nWhich Windows virtual machines and which Linux virtual machines should you identify?",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r",
        "label": "Confidential VMs"
      }
    ],
    "columns": [
      {
        "id": "windows",
        "label": "Windows",
        "options": [
          "VM1 only",
          "VM3 only",
          "VM1 and VM2 only",
          "VM1 and VM3 only",
          "VM1, VM2 and VM3"
        ],
        "correctByRow": {
          "r": "VM1 only"
        }
      },
      {
        "id": "linux",
        "label": "Linux",
        "options": [
          "VM4, VM5 and VM6",
          "VM5 only",
          "VM6 only",
          "VM4 and VM6 only",
          "VM5 and VM6 only"
        ],
        "correctByRow": {
          "r": "VM4, VM5 and VM6"
        }
      }
    ]
  },
  {
    "id": "az500-q46",
    "prompt": "NO.46 You have a Microsoft Entra tenant that contains three users named User1, User2, and User3.\nYou configure Microsoft Entra Password Protection as shown in the following exhibit.\nThe users perform the following tasks:\n* User1 attempts to reset her password to COntOsO\n* User2 attempts to reset her password to F@brikamHQ\n* User3 attempts to reset her password to PrOduct123.\nWhich password reset attempts fail?",
    "image": "",
    "answers": [
      "User1 only",
      "User2only",
      "User3 only",
      "User1 and User3 only",
      "User1, User2, and User3"
    ],
    "correctAnswer": "User1, User2, and User3",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q47",
    "prompt": "NO.47 You have an Azure subscription that contains a virtual machine named VM1.\nYou are creating a data collection rule (DCR) named DCR1 that will collect events from VM1.\nYou need to ensure that only events that have an ID of 4798 are collected.\nWhat should you use in DCR1?",
    "image": "",
    "answers": [
      "a PowerShell script",
      "aT-SQLquery",
      "an XPath query",
      "a KQL query"
    ],
    "correctAnswer": "an XPath query",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q48",
    "prompt": "NO.48 You need to recommend an encryption solution for the planned ExpressRoute\nimplementation. The solution must meet the technical requirements.\nWhich ExpressRoute circuit should you recommend for each type of encryption? To answer, select\nthe appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r",
        "label": "ExpressRoute encryption"
      }
    ],
    "columns": [
      {
        "id": "layer2",
        "label": "Layer 2 encryption",
        "options": [
          "ER1 only",
          "ER3 only",
          "ER1 and ER2 only",
          "ER2 and ER4 only",
          "ER3 and ER4 only"
        ],
        "correctByRow": {
          "r": "ER3 and ER4 only"
        }
      },
      {
        "id": "layer3",
        "label": "Layer 3 encryption",
        "options": [
          "ER1 only",
          "ER3 only",
          "ER1 and ER2 only",
          "ER2 and ER4 only",
          "ER3 and ER4 only",
          "ER1, ER2, ER3, and ER4"
        ],
        "correctByRow": {
          "r": "ER1, ER2, ER3, and ER4"
        }
      }
    ]
  },
  {
    "id": "az500-q49",
    "prompt": "NO.49 Your network contains an on-premises Active Directory domain named corp.contoso.com.\nYou have an Azure subscription named Sub1 that is associated to an Azure Active Directory (Azure\nAD) tenant named contoso.com.\nYou sync all on-premises identities to Azure AD.\nYou need to prevent users who have a givenName attribute that starts with TEST from being synced\nto Azure AD. The solution must minimize administrative effort.\nWhat should you use?",
    "image": "",
    "answers": [
      "Synchronization Rules Editor",
      "Web Service Configuration Tool",
      "the Azure AD Connect wizard",
      "Active Directory Users and Computers"
    ],
    "correctAnswer": "Synchronization Rules Editor",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q50",
    "prompt": "NO.50 You plan to implement an Azure function named Function1 that will create new storage\naccounts for containerized application instances.\nYou need to grant Function1 the minimum required privileges to create the storage accounts. The\nsolution must minimize administrative effort.\nWhat should you do? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r",
        "label": "Function1 permissions"
      }
    ],
    "columns": [
      {
        "id": "assign_role_to",
        "label": "Assign role to",
        "options": [
          "A group account",
          "A system-assigned managed identity",
          "A user account",
          "A user-assigned managed identity"
        ],
        "correctByRow": {
          "r": "A system-assigned managed identity"
        }
      },
      {
        "id": "role_assignment",
        "label": "Role assignment to create",
        "options": [
          "Built-in role assignment",
          "Classic administrator role assignment",
          "Custom role-based access control (RBAC) role assignment"
        ],
        "correctByRow": {
          "r": "Custom role-based access control (RBAC) role assignment"
        }
      }
    ]
  },
  {
    "id": "az500-q51",
    "prompt": "NO.51 You have an on-premises datacenter.\nYou have an Azure subscription that contains a virtual machine named VM1. VM1 is connected to a\nvirtual network named VNet1. VNet1 is connected to the on-premises datacenter by using a Site-to-\nSite (S2S) VPN.\nYou plan to create an Azure storage account named storage1 and App1.\nYou need to ensure that network communication to each resource meets the following\nrequirements:\n* Connections to App1 must be allowed only from corporate network NAT addresses.\n* Connections from VNet1 to storage1 must use the Microsoft backbone network.\n* The solution must minimize costs.\nWhat should you configure for each resource? To answer, drag the appropriate components to the\ncorrect resources. Each component may be used once, more than once, or not at all. You may need\nto drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "allowAnswerShuffle": false,
    "type": "dragMatch",
    "items": [
      {
        "id": "it1",
        "label": "A private endpoint"
      },
      {
        "id": "it2",
        "label": "A service endpoint"
      },
      {
        "id": "it3",
        "label": "An access restriction rule"
      },
      {
        "id": "it4",
        "label": "Azure Private Link"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "label": "storage1"
      },
      {
        "id": "t2",
        "label": "App1"
      }
    ],
    "correctByTarget": {
      "t1": "it1",
      "t2": "it4"
    }
  },
  {
    "id": "az500-q52",
    "prompt": "NO.52 You have an Azure AD tenant.\nYou plan to implement an authentication solution to meet the following requirements:\n* Require number matching.\n* Display the geographical location when signing in.\nWhich authentication method should you include in the solution?",
    "image": "",
    "answers": [
      "Microsoft Authenticator",
      "FIDO2 security key",
      "Temporary Access Pass",
      "SMS"
    ],
    "correctAnswer": "Temporary Access Pass",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q53",
    "prompt": "NO.53 You have a Microsoft Entra tenant that contains the users shown in the following table.\nYou create and enforce a Microsoft Entra Identity Protection sign-in risk policy that has the following\nsettings:\n* Assignments: Include Group1, exclude Group2\n* Conditions: Sign-in risk level: Low and above\n* Access: Allow access, Require multi-factor authentication\nYou need to identify what occurs when the users sign in to Microsoft Entra ID.\nWhat should you identify for each user? To answer, select the appropriate options in the answer\narea.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "s1",
        "label": "When User1 signs in from an anonymous IP address, the user will:"
      },
      {
        "id": "s2",
        "label": "When User2 signs in from an unfamiliar location, the user will:"
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "options": [
          "Be blocked",
          "Be prompted for MFA",
          "Sign in by using a username and password only"
        ],
        "correctByRow": {
          "s1": "Be prompted for MFA",
          "s2": "Be blocked"
        }
      }
    ]
  },
  {
    "id": "az500-q54",
    "prompt": "NO.54 You have an Azure subscription. That contains the virtual machines shown in the following\ntable.\nYou need to enable file integrity monitoring in Microsoft Defender for Cloud. Which computers will\nsupport file integrity monitoring?",
    "image": "",
    "answers": [
      "Computer1 only",
      "Computer1 and Computer2 only",
      "Computer2 and Computer3 only",
      "Computer1, Computer2, and Computer3"
    ],
    "correctAnswer": "Computer1, Computer2, and Computer3",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q55",
    "prompt": "NO.55 You have an Azure subscription that contains an Azure SQL database named DB1 in the East\nUS Azure region. You create the storage accounts shown in the following table.\nYou plan to enable auditing for DB1.\nWhich storage accounts can you use as the auditing destination for DB1?",
    "image": "",
    "answers": [
      "storage1 only",
      "storage1 and storage4 only",
      "storage2 and storage3 only",
      "storage1, storage2 and storage3 only"
    ],
    "correctAnswer": "storage2 and storage3 only",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q56",
    "prompt": "NO.56 Note: This question is part of a series of questions that present the same scenario. Each\nquestion in the series contains a unique solution that might meet the stated goals. Some question\nsets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYou have an Azure subscription that contains an Azure Kubernetes Service (AKS) cluster named AKS1\nand an Azure container registry named AZCR1.\nYou need to ensure that AKS1 can deploy container images stored in AZCR1.\nSolution: You assign the Kubernetes Agentless Operator role to the system-assigned managed\nidentity of the agent pool for AKS1.\nDoes this meet the requirement?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "No",
    "allowAnswerShuffle": false
  },
  {
    "id": "az500-q57",
    "prompt": "NO.57 You have an Azure subscription that contains the Azure App Service apps shown in the\nfollowing table.\nYou purchase custom SSL certificates from a trusted third-party authority.\nTo which apps can you assign the custom SSL certificates?",
    "image": "",
    "answers": [
      "App4 only",
      "App3 and App4 only",
      "App2, App3, and App4 only",
      "App1, App2, App3, and App4"
    ],
    "correctAnswer": "App3 and App4 only",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q58",
    "prompt": "NO.58 Your company has an Azure Active Directory (Azure AD) tenant named contoso.com.\nThe company is developing an application named App1. App1 will run as a service on server that runs\nWindows Server 2016. App1 will authenticate to contoso.com and access Microsoft Graph to read\ndirectory data.\nYou need to delegate the minimum required permissions to App1.\nWhich three actions should you perform in sequence from the Azure portal? To answer, move the\nappropriate actions from the list of actions to the answer area and arrange them in the correct order.",
    "image": "",
    "type": "dragMatch",
    "allowAnswerShuffle": false,
    "items": [
      {
        "id": "it1",
        "label": "Grant permissions"
      },
      {
        "id": "it2",
        "label": "Add a delegated permission."
      },
      {
        "id": "it3",
        "label": "Configure Azure AD Application Proxy"
      },
      {
        "id": "it4",
        "label": "Add an application permission."
      },
      {
        "id": "it5",
        "label": "Create an app registration."
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
      "step2": "it4",
      "step3": "it1"
    }
  },
  {
    "id": "az500-q59",
    "prompt": "NO.59 Note: This question is part of a series of questions that present the same scenario. Each\nquestion in the series contains a unique solution that might meet the stated goals. Some question\nsets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYou have an Azure subscription named Sub1.\nYou have an Azure Storage account named Sa1 in a resource group named RG1.\nUsers and applications access the blob service and the file service in Sa1 by using several shared\naccess signatures (SASs) and stored access policies.\nYou discover that unauthorized users accessed both the file service and the blob service.\nYou need to revoke all access to Sa1.\nSolution: You regenerate the access keys.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "Yes",
    "allowAnswerShuffle": false
  },
  {
    "id": "az500-q60",
    "prompt": "NO.60 You are configuring just in time (JIT) VM access to a set of Azure virtual machines.\nYou need to grant users PowerShell access to the virtual machine by using JIT VM access.\nWhat should you configure? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r",
        "label": "Configurações"
      }
    ],
    "columns": [
      {
        "id": "perm",
        "label": "Permission that must be granted to users on VM",
        "options": [
          "Read",
          "Update",
          "View",
          "Write"
        ],
        "correctByRow": {
          "r": "Read"
        }
      },
      {
        "id": "port",
        "label": "TCP port that must be allowed",
        "options": [
          "22",
          "25",
          "3389",
          "5986"
        ],
        "correctByRow": {
          "r": "5986"
        }
      }
    ]
  },
  {
    "id": "az500-q61",
    "prompt": "NO.61 Note: This question is part of a series of questions that present the same scenario. Each\nquestion in the series contains a unique solution that might meet the stated goals. Some question\nsets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYou have a hybrid configuration of Azure Active Directory (Azure AD).\nYou have an Azure HDInsight cluster on a virtual network.\nYou plan to allow users to authenticate to the cluster by using their on-premises Active Directory\ncredentials.\nYou need to configure the environment to support the planned authentication.\nSolution: You deploy Azure Active Directory Domain Services (Azure AD DS) to the Azure subscription.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "Yes",
    "allowAnswerShuffle": false
  },
  {
    "id": "az500-q62",
    "prompt": "NO.62 You have an Azure Active Directory (Azure AD) tenant named contoso.com that contains a\nuser named User1.\nYou plan to publish several apps in the tenant.\nYou need to ensure that User1 can grant admin consent for the published apps.\nWhich two possible user roles can you assign to User1 to achieve this goal? Each correct answer\npresents a complete solution.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "Application developer",
      "Security administrator",
      "Application administrator",
      "User administrator",
      "Cloud application administrator"
    ],
    "correctAnswer": [
      "Application administrator",
      "Cloud application administrator"
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q63",
    "prompt": "NO.63 You have an Azure subscription that contains a storage account and an Azure web app named\nApp1.\nApp1 connects to an Azure Cosmos DB database named Cosmos1 that uses a private endpoint named\nEndpoint1. Endpoint1 has the default settings.\nYou need to validate the name resolution to Cosmos1.\nWhich DNS zone should you use?",
    "image": "",
    "answers": [
      "Endpoint1.privatelink.blob.core.windows.net",
      "Endpoint1.privatelink.database.azure.com",
      "Endpoint1.privatelink.azurewebsites.net",
      "Endpoint1.privatelink.documents.azure.com"
    ],
    "correctAnswer": "Endpoint1.privatelink.documents.azure.com",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q64",
    "prompt": "NO.64 You have an Azure subscription named Sub1 that has Security defaults disabled. The\nsubscription contain the following users:\n* Five users that have owner permissions for Sub1.\n* Ten users that have owner permissions for Azure resources.\nNone of the users have multi-factor authentication (MFA) enabled.\nSub1 has the secure score as shown in the Secure Score exhibit. (Click the Secure Score tab.) You plan\nto enable MFA for the following users:\n* Five users that have owner permissions for Sub1.\n* Five users that have owner permissions for Azure resources.\nBy how many points will the secure score increase after you perform the planned changes?",
    "image": "",
    "answers": [
      "0",
      "5",
      "7.5",
      "10",
      "14"
    ],
    "correctAnswer": "7.5",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q65",
    "prompt": "NO.65 You have an Azure subscription that contains an Azure API Management instance named\nContosoAPI1.\nYou need to configure SSL 3.0 support for ContosoAPI1.\nWhat should you do first in the Azure portal?",
    "image": "",
    "answers": [
      "From Certificates, add a certificate.",
      "From Protocols + ciphers, select a backend protocol.",
      "From APIs, add an API tag.",
      "From Pricing tier, change the pricing tier."
    ],
    "correctAnswer": "From Protocols + ciphers, select a backend protocol.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q66",
    "prompt": "NO.66 You have an Azure subscription that contains a resource group named RG1. RG1 contains a\nvirtual machine named VM1 that uses Azure Active Directory (Azure AD) authentication.\nYou have two custom Azure roles named Role1 and Role2 that are scoped to RG1.\nThe permissions for Role1 are shown in the following JSON code.\nThe permissions for Role2 are shown in the following JSON code.\nYou assign the roles to the users shown in the following table.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "s1",
        "label": "User1 can delete VM1."
      },
      {
        "id": "s2",
        "label": "User2 can delete VM1."
      },
      {
        "id": "s3",
        "label": "User3 can sign in to VM1 by using Azure AD credentials."
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
    "id": "az500-q67",
    "prompt": "NO.67 You have a Microsoft Entra tenant that contains the users shown in the following table.\nYou configure the Temporary Access Pass settings as shown in the following exhibit.\nYou add the Temporary Access Pass authentication method to Admin2.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "s1",
        "label": "Admin1 can view the Temporary Access Pass of Admin2."
      },
      {
        "id": "s2",
        "label": "Admin2 can add the Temporary Access Pass authentication method to User1."
      },
      {
        "id": "s3",
        "label": "Admin2 can add the Temporary Access Pass authentication method to Admin1."
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
    ]
  },
  {
    "id": "az500-q68",
    "prompt": "NO.68 You have an Azure subscription named Subscription1 that contains the resources shown in the\nfollowing table.\nYou create an Azure role by using the following JSON file.\nYou assign Role1 to User1 for RG1.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "s1",
        "label": "User1 can create a new virtual machine in RG1."
      },
      {
        "id": "s2",
        "label": "User1 can modify the properties of storage1."
      },
      {
        "id": "s3",
        "label": "User1 can attach the network interface of VM1 to VNET1."
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
          "s3": "No"
        }
      }
    ]
  },
  {
    "id": "az500-q69",
    "prompt": "NO.69 You have an Azure subscription that uses Microsoft Defender for Cloud. The subscription\ncontains the Azure Policy definitions shown in the following table.\nWhich definitions can be assigned as a security policy in Defender for Cloud?",
    "image": "",
    "answers": [
      "Policy1 and Policy2 only",
      "Initiative1 and Initiative2 only",
      "Policy1 and Initiative1 only",
      "Policy2 and Initiative2 only",
      "Policy1, Policy2, Initiative1, and Initiative2"
    ],
    "correctAnswer": "Initiative1 and Initiative2 only",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q70",
    "prompt": "NO.70 You have an Azure subscription named Subscription1 that contains an Azure Active Directory\n(Azure AD) tenant named contosos.com and a resource group named RG1.\nYou create a custom role named Role1 for contoso.com.\nYou need to identify where you can use Role1 for permission delegation.\nWhat should you identify?",
    "image": "",
    "answers": [
      "contoso.com only",
      "contoso.com and RG1 only",
      "contoso.com and Subscription1 only",
      "contoso.com, RG1, and Subscription1"
    ],
    "correctAnswer": "contoso.com only",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q71",
    "prompt": "NO.71 You have an Azure subscription that contains a Microsoft Defender External Attack Surface\nManagement (Defender EASM) resource named EASM1. EASM1 has discovery enabled and contains\nseveral inventory assets.\nYou need to identify which inventory assets are vulnerable to the most critical web app security risks.\nWhich Defender EASM dashboard should you use?",
    "image": "",
    "answers": [
      "Attack Surface Summary",
      "GDPR Compliance",
      "Security Posture",
      "OWASP Top 10"
    ],
    "correctAnswer": "OWASP Top 10",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q72",
    "prompt": "NO.72 You have an Azure subscription that contains the resources shown in the following table.\nTransparent Data Encryption (TDE) is disabled on SQL1.\nYou assign policies to the resource groups as shown in the following table.\n\nYou plan to deploy Azure SQL databases by using an Azure Resource Manager (ARM) template. The\ndatabases will be configured as shown in the following table.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "st1",
        "label": "SQL1 will have TDE enabled automatically."
      },
      {
        "id": "st2",
        "label": "The deployment of SQL2 will fail."
      },
      {
        "id": "st3",
        "label": "SQL3 will be deployed and marked as noncompliant."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "st1": "No",
          "st2": "Yes",
          "st3": "Yes"
        }
      }
    ]
  },
  {
    "id": "az500-q73",
    "prompt": "NO.73 You have an Azure subscription that contains the resources shown in the following table.\n\nSQL1 has the following configurations:\n* Auditing: Enabled\n* Audit log destination: storage1, Workspace1\nDB1 has the following configurations:\n* Auditing: Enabled\n* Audit log destination: storage2\nDB2 has auditing disabled.\nWhere are the audit logs for DB1 and DB2 stored? To answer, select the appropriate options in the\nanswer area NOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "db1",
        "label": "DB1"
      },
      {
        "id": "db2",
        "label": "DB2"
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "options": [
          "storage2 only",
          "storage1 and Workspace1 only",
          "storage2 and Workspace1 only",
          "storage1, storage2, and Workspace1",
          "No audit logs created",
          "storage1 only",
          "Workspace1 only",
          "storage1 and Workspace1"
        ],
        "correctByRow": {
          "db1": "storage1, storage2, and Workspace1",
          "db2": "Workspace1 only"
        }
      }
    ]
  },
  {
    "id": "az500-q74",
    "prompt": "NO.74 You are evaluating the security of the network communication between the virtual machines\nin Sub2.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "st1",
        "label": "From VM1, you can successfully ping the public IP address of VM2."
      },
      {
        "id": "st2",
        "label": "From VM1, you can successfully ping the private IP address of VM3."
      },
      {
        "id": "st3",
        "label": "From VM1, you can successfully ping the private IP address of VM5."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "st1": "No",
          "st2": "Yes",
          "st3": "Yes"
        }
      }
    ]
  },
  {
    "id": "az500-q75",
    "prompt": "NO.75 You have three Azure subscriptions and a user named User1.\nYou need to provide User1 with the ability to manage and view costs for the resources across all\nthree subscriptions. The solution must use the principle of least privilege.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from\n\nthe list of actions to the answer area and arrange them in the correct order.\nNOTE: More than one order of answer choices is correct. You will receive credit for any of the correct\norders you select.",
    "image": "",
    "type": "dragMatch",
    "allowAnswerShuffle": false,
    "items": [
      {
        "id": "it1",
        "label": "Create a management group."
      },
      {
        "id": "it2",
        "label": "Add the three subscriptions to the management group."
      },
      {
        "id": "it3",
        "label": "Assign User1 the Global administrator role."
      },
      {
        "id": "it4",
        "label": "Assign User1 the Owner role for the management group."
      },
      {
        "id": "it5",
        "label": "Assign User1 the Cost Management Contributor role for the management group."
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
      "step2": "it3",
      "step3": "it2"
    }
  },
  {
    "id": "az500-q76",
    "prompt": "NO.76 You have an Azure subscription that contains a virtual network named VNet1. The\nsubscription contains an Azure App Service web app named App1.\nYou have an Azure Front Door profile named AFD1 that has an Azure Web Application Firewall (WAF)\npolicy.\nYou need to ensure that all inbound traffic to App1 is filtered through AFD1.\nWhat should you do?",
    "image": "",
    "answers": [
      "For VNet1, configure network security group (NSG) rules.",
      "For App1, configure the HTTP headers filter settings.",
      "For App1, enable virtual network integration.",
      "Configure Microsoft Entra application proxy."
    ],
    "correctAnswer": "For App1, configure the HTTP headers filter settings.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q77",
    "prompt": "NO.77 You create a new Azure subscription that is associated to a new Azure Active Directory (Azure\nAD) tenant.\nYou create one active conditional access policy named Portal Policy. Portal Policy is used to provide\n\naccess to the Microsoft Azure Management cloud app.\nThe Conditions settings for Portal Policy are configured as shown in the Conditions exhibit. (Click the\nConditions tab.)\nThe Grant settings for Portal Policy are configured as shown in the Grant exhibit. (Click the Grant tab.\n)\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "st1",
        "label": "Users from the Contoso named location must use multi-factor authentication (MFA) to access the Azure portal."
      },
      {
        "id": "st2",
        "label": "Users from the Contoso named location must use multi-factor authentication (MFA) to access the web services hosted in the Azure subscription."
      },
      {
        "id": "st3",
        "label": "Users external to the Contoso named location must use multi-factor authentication (MFA) to access the Azure portal."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
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
    ]
  },
  {
    "id": "az500-q78",
    "prompt": "NO.78 Your company uses Azure DevOps.\nYou need to recommend a method to validate whether the code meets the company's quality\nstandards and code review standards.\nWhat should you recommend implementing in Azure DevOps?",
    "image": "",
    "answers": [
      "branch folders",
      "branch permissions",
      "branch policies",
      "branch locking"
    ],
    "correctAnswer": "branch policies",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q79",
    "prompt": "NO.79 You have an Azure environment.\nYou need to identify any Azure configurations and workloads that are non-compliant with ISO\n27001:2013 standards.\nWhat should you use?",
    "image": "",
    "answers": [
      "Azure Active Directory (Azure AD) Identity Protection",
      "Microsoft Defender for Cloud",
      "Microsoft Defender for Identity",
      "Microsoft Sentinel"
    ],
    "correctAnswer": "Microsoft Defender for Cloud",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q80",
    "prompt": "NO.80 Note: This question is part of a series of questions that present the same scenario. Each\nquestion in the series contains a unique solution that might meet the stated goals. Some question\nsets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYou have an Azure subscription named Sub1.\nYou have an Azure Storage account named Sa1 in a resource group named RG1.\nUsers and applications access the blob service and the file service in Sa1 by using several shared\naccess signatures (SASs) and stored access policies.\nYou discover that unauthorized users accessed both the file service and the blob service.\nYou need to revoke all access to Sa1.\nSolution: You create a lock on Sa1.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "No",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q81",
    "prompt": "NO.81 Note: This question is part of a series of questions that present the same scenario. Each\nquestion in the series contains a unique solution that might meet the stated goals. Some question\nsets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYou have a hybrid configuration of Azure Active Directory (Azure AD).\nYou have an Azure HDInsight cluster on a virtual network.\nYou plan to allow users to authenticate to the cluster by using their on-premises Active Directory\ncredentials.\nYou need to configure the environment to support the planned authentication.\nSolution: You deploy an Azure AD Application Proxy.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "No",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q82",
    "prompt": "NO.82 You have an Azure subscription that contains the subnets shown in the following table.\n\nThe subscription contains Azure web app named WebApp1 that has the following configurations.\n* Region West Us\n* Virtual network VNet1\n* VNet integration on: Enabled\n* Outbound subnet: Subnet11\n* Windows plan (West US): ASP1\nYou plan to deploy an Azure web app named WebApp2 that will have the following settings:\n* Region: West US\n* VNet integration on-Enabled\n* Windows plan (West UAS): WebApp2?\nTo which subnets can you integrate WebApp2?",
    "image": "",
    "answers": [
      "Subnet11 only",
      "Subnet2 only",
      "Subnet11 or subnet12 only",
      "Subnet2 or Subnet21 only",
      "Subnet11, subnet2, or Subnet21"
    ],
    "correctAnswer": "Subnet11 or subnet12 only",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q83",
    "prompt": "NO.83 You have an app that uses an Azure SQL database.\nYou need to be notified if a SQL injection attack is launched against the database.\nWhat should you do?",
    "image": "",
    "answers": [
      "Modify the Diagnostics settings for the database.",
      "Deploy the SQL Health Check solution in Azure Monitor.",
      "Enable Azure Defender for SQL for the database.",
      "Enable server-level auditing for the database."
    ],
    "correctAnswer": "Enable Azure Defender for SQL for the database.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q84",
    "prompt": "NO.84 You have an Azure subscription that contains an Azure SQL database named sql1.\nYou plan to audit sql1.\nYou need to configure the audit log destination. The solution must meet the following requirements:\n* Support querying events by using the Kusto query language.\n\n* Minimize administrative effort.\nWhat should you configure?",
    "image": "",
    "answers": [
      "an event hub",
      "a storage account",
      "a Log Analytics workspace"
    ],
    "correctAnswer": "a Log Analytics workspace",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q85",
    "prompt": "NO.85 You have an Azure Active Directory (Azure AD) tenant that contains the users shown in the\nfollowing table.\n\nIn Azure AD Privileged Identity Management (PIM), the Role settings for the Contributor role are\nconfigured as shown in the exhibit. (Click the Exhibit tab.)\n\nYou assign users the Contributor role on May 1, 2019 as shown in the following table.\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "st1",
        "label": "On May 15, 2019, User1 can activate the Contributor role."
      },
      {
        "id": "st2",
        "label": "On May 15, 2019, User2 can use the Contributor role."
      },
      {
        "id": "st3",
        "label": "On June 15, 2019, User3 can activate the Contributor role."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
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
    ]
  },
  {
    "id": "az500-q86",
    "prompt": "NO.86 You have an Azure subscription that contains a SQL Server on Azure Virtual Machines\ninstance named SQt1 and a Microsoft Sentinel workspace named Sentinel1.\nYou need to monitor security incidents on SQL1 by using Sentinel1.\nWhat should you do first?",
    "image": "",
    "answers": [
      "On SQL1, enable SQL1 Server audit.",
      "On SQL1. install the Connected Machine agent for Azure Arc-enabled servers.",
      "From the Azure portal, create a Log Analytics workspace.",
      "From Sentinel1, enable VM insights."
    ],
    "correctAnswer": "On SQL1, enable SQL1 Server audit.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q87",
    "prompt": "NO.87 You plan to use Azure Log Analytics to collect logs from 200 servers that run Windows Server\n2016.\nYou need to automate the deployment of the Microsoft Monitoring Agent to all the servers by using\nan Azure Resource Manager template.\nHow should you complete the template? To answer, select the appropriate options in the answer\narea.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "text": "{\n  \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\n  \"name\": \"[concat(parameters('vmName'), '/OMSExtension')]\",\n  \"apiVersion\": \"[variables('apiVersion')]\",\n  \"location\": \"[resourceGroup().location]\",\n  \"dependsOn\": [\n    \"[concat('Microsoft.Compute/virtualMachines/', parameters('vmName'))]\"\n  ],\n  \"properties\": {\n    \"publisher\": \"Microsoft.EnterpriseCloud.Monitoring\",\n    \"type\": \"MicrosoftMonitoringAgent\",\n    \"typeHandlerVersion\": \"1.0\",\n    \"autoUpgradeMinorVersion\": true,\n    \"settings\": {\n      \""
        },
        {
          "slot": "box1"
        },
        {
          "text": "\": \"[variable('var1')]\"\n    },\n    \"protectedSettings\": {\n      \""
        },
        {
          "slot": "box2"
        },
        {
          "text": "\": \"[variable('var2')]\"\n    }\n  }\n}"
        }
      ],
      "slots": {
        "box1": {
          "label": "Box 1",
          "options": [
            "AzureADApplicationID",
            "WorkspaceID",
            "WorkspaceName",
            "WorkspaceURL"
          ],
          "correct": "WorkspaceID"
        },
        "box2": {
          "label": "Box 2",
          "options": [
            "AzureADApplicationSecret",
            "StorageAccountKey",
            "WorkspaceID",
            "WorkspaceKey"
          ],
          "correct": "WorkspaceKey"
        }
      }
    }
  },
  {
    "id": "az500-q88",
    "prompt": "NO.88 You have an Azure subscription that contains an Azure Sentinel workspace.\nAzure Sentinel is configured to ingest logs from several Azure workloads. A third-party service\nmanagement platform is used to manage incidents.\nYou need to identify which Azure Sentinel components to configure to meet the following\nrequirements:\n* When Azure Sentinel identifies a threat, an incident must be created.\n* A ticket must be logged in the service management platform when an incident is created in Azure\nSentinel.\nWhich component should you identify for each requirement? To answer, select the appropriate\noptions in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r1",
        "label": "When Azure Sentinel identifies a threat, an incident must be created."
      },
      {
        "id": "r2",
        "label": "A ticket must be logged in the service management platform when an incident is created in Azure Sentinel."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "options": [
          "Analytics",
          "Data connectors",
          "Playbooks",
          "Workbooks"
        ],
        "correctByRow": {
          "r1": "Analytics",
          "r2": "Playbooks"
        }
      }
    ]
  },
  {
    "id": "az500-q89",
    "prompt": "NO.89 You have an Azure subscription that contains four Azure SQL managed instances.\n\nYou need to evaluate the vulnerability of the managed instances to SQL injection attacks.\nWhat should you do first?",
    "image": "",
    "answers": [
      "Create an Azure Sentinel workspace.",
      "Enable Advanced Data Security.",
      "Add the SQL Health Check solution to Azure Monitor.",
      "Create an Azure Advanced Threat Protection (ATP) instance."
    ],
    "correctAnswer": "Enable Advanced Data Security.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q90",
    "prompt": "NO.90 You have an Azure subscription that uses Azure AD Privileged Identity Management (PIM).\nA user named User1 is eligible for the Billing administrator role.\nYou need to ensure that the role can only be used for a maximum of two hours.\nWhat should you do?",
    "image": "",
    "answers": [
      "Create a new access review.",
      "Edit the role assignment settings.",
      "Update the end date of the user assignment",
      "Edit the role activation settings."
    ],
    "correctAnswer": "Edit the role assignment settings.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q91",
    "prompt": "NO.91 You have the hierarchy of Azure resources shown in the following exhibit.\n\nRG1, RG2, and RG3 are resource groups.\nRG2 contains a virtual machine named VM1.\nYou assign role-based access control (RBAC) roles to the users shown in the following table.\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "st1",
        "label": "User1 can deploy virtual machines to RG1."
      },
      {
        "id": "st2",
        "label": "User2 can delete VM2."
      },
      {
        "id": "st3",
        "label": "User3 can reset the password of the built-in Administrator account of VM2."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "st1": "Yes",
          "st2": "Yes",
          "st3": "No"
        }
      }
    ]
  },
  {
    "id": "az500-q92",
    "prompt": "NO.92 You have an Azure subscription that is linked to an Azure AD tenant and contains the virtual\nmachines shown in the following table.\nThe subnets of the virtual networks have the service endpoints shown in the following table.\n\nYou create the resources shown in the following table.\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE:\nEach correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "st1",
        "label": "Connections from VM1 to storage1 always use IP address 10.1.1.5."
      },
      {
        "id": "st2",
        "label": "Connections from VM2 to Vault1 always use IP address 20.224.219.230."
      },
      {
        "id": "st3",
        "label": "Authentication from VM3 to the tenant uses either IP address 10.11.1.5 or 40.122.155.212."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
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
    ]
  },
  {
    "id": "az500-q93",
    "prompt": "NO.93 You have an Azure subscription that uses Azure Active Directory (Azure AD) Privileged\nIdentity Management (PIM).\nA PIM user that is assigned the User Access Administrator role reports receiving an authorization\nerror when performing a role assignment or viewing the list of assignments.\nYou need to resolve the issue by ensuring that the PIM service principal has the correct permissions\nfor the subscription. The solution must use the principle of least privilege.\nWhich role should you assign to the PIM service principle?",
    "image": "",
    "answers": [
      "Contributor",
      "User Access Administrator",
      "Managed Application Operator",
      "Resource Policy Contributor"
    ],
    "correctAnswer": "User Access Administrator",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q94",
    "prompt": "NO.94 You have an Azure subscription named Sub1 that is associated to an Azure Active Directory\n(Azure AD) tenant named contoso.com.\nAn administrator named Admin1 has access to the following identities:\n* An OpenID-enabled user account\n* A Hotmail account\n* An account in contoso.com\n* An account in an Azure AD tenant named fabrikam.com\nYou plan to use Azure Account Center to transfer the ownership of Sub1 to Admin1.\nTo which accounts can you transfer the ownership of Sub1?",
    "image": "",
    "answers": [
      "contoso.com only",
      "contoso.com, fabrikam.com, and Hotmail only",
      "contoso.com and fabrikam.com only",
      "contoso.com, fabrikam.com, Hotmail, and OpenID-enabled user account"
    ],
    "correctAnswer": "contoso.com and fabrikam.com only",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q95",
    "prompt": "NO.95 You have an Azure subscription that contains an Azure web app named 1 and a virtual\nmachine named VM1.\nVM1 runs Microsoft SQL Server and is connected to a virtual network named VNet1. App1, VM1, and\nVent are in the US Central Azure region.\nYou need to ensure that App1 can connect to VM1. The solution must minimize costs.",
    "image": "",
    "answers": [
      "NAT gateway integration",
      "Azure Front Door",
      "regional virtual network integration",
      "gateway-required virtual network integration",
      "Azure Application Gateway integration"
    ],
    "correctAnswer": "regional virtual network integration",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q96",
    "prompt": "NO.96 You are securing access to the resources in an Azure subscription.\nA new company policy states that all the Azure virtual machines in the subscription must use\nmanaged disks.\n\nYou need to prevent users from creating virtual machines that use unmanaged disks.\nWhat should you use?",
    "image": "",
    "answers": [
      "Azure Monitor",
      "Azure Policy",
      "Azure Security Center",
      "Azure Service Health"
    ],
    "correctAnswer": "Azure Policy",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q97",
    "prompt": "NO.97 You have an Azure subscription named Subscription1 that contains a resource group named\nRG1 and a user named User1. User1 is assigned the Owner role for RG1.\nYou create an Azure Blueprints definition named Blueprint1 that includes a resource group named\nRG2 as shown in the following exhibit.\nYou assign Blueprint1 to Subscription1 by using the following settings:\n* Lock assignment: Read Only\n* Managed Identity: System assigned\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "st1",
        "label": "A locking mode of Read Only will be assigned to RG1."
      },
      {
        "id": "st2",
        "label": "User1 can add tags to RG2."
      },
      {
        "id": "st3",
        "label": "You can remove User1 from the Tag Contributor role for RG2."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "st1": "Yes",
          "st2": "Yes",
          "st3": "No"
        }
      }
    ]
  },
  {
    "id": "az500-q98",
    "prompt": "NO.98 You create an Azure SQL managed instance named SQL1 and enable Microsoft Entra-only\nauthentication.\nYou need to ensure that both User1 and User2 are set as the Microsoft Entra admin for SQL1.\nSolution: You set Group1 as the Microsoft Entra admin for SQL1.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "Yes",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q99",
    "prompt": "NO.99 You have an Azure subscription that uses Microsoft Defender for Cloud.\nYou plan to use the Secure Score Over Time workbook.\nYou need to configure the Continuous export settings for the Defender for Cloud data.\nWhich two settings should you configure? To answer, select the appropriate settings in the answer\narea.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r",
        "label": "Resposta"
      }
    ],
    "columns": [
      {
        "id": "exp",
        "label": "Exported data types",
        "options": [
          "Security recommendations",
          "Secure score",
          "Security alerts",
          "Regulatory compliance"
        ],
        "correctByRow": {
          "r": "Security alerts"
        }
      },
      {
        "id": "freq",
        "label": "Export frequency",
        "options": [
          "Streaming updates",
          "Snapshots (Preview)"
        ],
        "correctByRow": {
          "r": "Snapshots (Preview)"
        }
      }
    ]
  },
  {
    "id": "az500-q100",
    "prompt": "NO.100 You plan to deploy an app that will modify the properties of Azure Active Directory (Azure\nAD) users by using Microsoft Graph. You need to ensure that the app can access Azure AD. What\nshould you configure first?",
    "image": "",
    "answers": [
      "a custom role-based access control (RBAC) role",
      "an external identity",
      "an Azure AD Application Proxy",
      "an app registration"
    ],
    "correctAnswer": "an app registration",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q101",
    "prompt": "NO.101 Note: This section contains one or more sets of questions with the same scenario and\nproblem. Each question presents a unique solution to the problem. You must determine whether the\nsolution meets the stated goals.\n\nMore than one solution in the set might solve the problem. It is also possible that none of the\nsolutions in the set solve the problem.\nAfter you answer a question in this section, you will NOT be able to return. As a result, these\nquestions do not appear on the Review Screen.\nYou have an Azure subscription that contains the resources shown in the following table.\nYou have The users shown in the following table.\nYou create an Azure SQL managed instance named SQL1 and enable Microsoft Entra-only\nauthentication.\nYou need to ensure that both User1 and User2 are set as the Microsoft Entra admin for SQL1.\nSolution: You set App1 as the Microsoft Entra admin for SQL1.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "No",
    "allowAnswerShuffle": false
  },
  {
    "id": "az500-q102",
    "prompt": "NO.102 You plan to create an Azure Kubernetes Service (AKS) cluster in an Azure subscription.\nThe manifest of the registered server application is shown in the following exhibit.\n\nYou need to ensure that the AKS cluster and Azure Active Directory (Azure AD) are integrated.\nWhich property should you modify in the manifest?",
    "image": "",
    "answers": [
      "accessTokenAcceptedVersion",
      "keyCredentials",
      "groupMembershipClaims",
      "acceptMappedClaims"
    ],
    "correctAnswer": "groupMembershipClaims",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q103",
    "prompt": "NO.103 You have an Azure Active Directory (Azure AD) tenant that contains two users named User1 and User2 and a registered app named App1.\nYou create an app-specific role named Role1.\nYou need to assign Role1 to User1 and enable User2 to request access to App1.\nWhich two settings should you modify? To answer, select the appropriate settings in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "Owners",
      "Roles and administrators (Preview)",
      "Users and groups",
      "Single sign-on",
      "Provisioning",
      "Application proxy",
      "Self-service",
      "Conditional Access",
      "Permissions",
      "Token encryption",
      "Sign-ins",
      "Usage & insights"
    ],
    "correctAnswer": [
      "Roles and administrators (Preview)",
      "Self-service"
    ],
    "allowAnswerShuffle": false
  },
  {
    "id": "az500-q104",
    "prompt": "NO.104 You have an Azure subscription that contains the virtual machines shown in the following table.\n\nVNET1, VNET2, and VNET3 are peered with each other. You perform the following actions:\n* Create two application security groups named ASG1 and ASG2 in the West US region.\n* Add the network interface of VM1 to ASG1.\n\nWhich virtual machines can be added to ASG1 and ASG2? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "asg1",
        "label": "ASG1:"
      },
      {
        "id": "asg2",
        "label": "ASG2:"
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "options": [
          "VM1 only",
          "VM2 only",
          "VM3 only",
          "VM4 only",
          "VM1 and VM2 only",
          "VM1 and VM4 only",
          "VM2, VM3, and VM4 only",
          "VM1, VM2, and VM4 only",
          "VM1, VM2, VM3, and VM4"
        ],
        "correctByRow": {
          "asg1": "VM2, VM3, and VM4 only",
          "asg2": "VM1, VM2, and VM4 only"
        }
      }
    ]
  },
  {
    "id": "az500-q105",
    "prompt": "NO.105 You have an Azure Active Directory (Azure AD) tenant.\nYou have the deleted objects shown in the following table.\nOn May 4, 2020, you attempt to restore the deleted objects by using the Azure Active Directory\nadmin center.\nWhich two objects can you restore? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "Group1",
      "Group2",
      "User2",
      "User1"
    ],
    "correctAnswer": [
      "Group2",
      "User2"
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q106",
    "prompt": "NO.106 You are testing an Azure Kubernetes Service (AKS) cluster. The cluster is configured as\nshown in the exhibit.\n(Click the Exhibit tab.)\n\nYou plan to deploy the cluster to production. You disable HTTP application routing.\nYou need to implement application routing that will provide reverse proxy and TLS termination for\nAKS services by using a single IP address.\nWhat should you do?",
    "image": "",
    "answers": [
      "Create an AKS Ingress controller.",
      "Install the container network interface (CNI) plug-in.",
      "Create an Azure Standard Load Balancer.",
      "Create an Azure Basic Load Balancer."
    ],
    "correctAnswer": "Create an AKS Ingress controller.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q107",
    "prompt": "NO.107 Lab Task\nuse the following login credentials as needed:\nTo enter your username, place your cursor in the Sign in box and click on the username below.\nTo enter your password, place your cursor in the Enter password box and click on the password below.\nAzure Username: User1 -28681041@ExamUsers.com\nAzure Password: GpOAe4@lDg\nIf the Azure portal does not load successfully in the browser, press CTRL-K to reload the portal in a new browser tab.\nThe following information is for technical support purposes only:\nLab Instance: 28681041\nTask 7\nYou need to collect all the audit failure data from the security log of a virtual machine named VM1 to an Azure Storage account.\nTo complete this task, sign in to the Azure portal.",
    "image": "",
    "answers": [
      "Questão em formato não suportado por este app (consulte o PDF)."
    ],
    "correctAnswer": "Questão em formato não suportado por este app (consulte o PDF).",
    "allowAnswerShuffle": false
  },
  {
    "id": "az500-q108",
    "prompt": "NO.108 From Azure Security Center, you enable Azure Container Registry vulnerability scanning of\nthe images in Registry1.\nYou perform the following actions:\n* Push a Windows image named Image1 to Registry1.\n* Push a Linux image named Image2 to Registry1.\n* Push a Windows image named Image3 to Registry1.\n* Modify Image1 and push the new image as Image4 to Registry1.\n* Modify Image2 and push the new image as Image5 to Registry1.\nWhich two images will be scanned for vulnerabilities? Each correct answer presents a complete\nsolution.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "Image4",
      "Image2",
      "Image1",
      "Image3",
      "Image5"
    ],
    "correctAnswer": [
      "Image2",
      "Image1"
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q109",
    "prompt": "NO.109 You have Azure Resource Manager templates that you use to deploy Azure virtual machines\n.\n\nYou need to disable unused Windows features automatically as instances of the virtual machines are\nprovisioned.\nWhat should you use?",
    "image": "",
    "answers": [
      "device compliance policies in Microsoft Intune",
      "Azure Automation State Configuration",
      "application security groups",
      "Azure Advisor"
    ],
    "correctAnswer": "Azure Automation State Configuration",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q110",
    "prompt": "NO.110 Note: The question is included in a number of questions that depicts the identical set-up.\nHowever, every question has a distinctive result. Establish if the solution satisfies the requirements.\nYour company has an Active Directory forest with a single domain, named weylandindustries.com.\nThey also have an Azure Active Directory (Azure AD) tenant with the same name.\nYou have been tasked with integrating Active Directory and the Azure AD tenant. You intend to\ndeploy Azure AD Connect.\nYour strategy for the integration must make sure that password policies and user logon limitations\naffect user accounts that are synced to the Azure AD tenant, and that the amount of necessary\nservers are reduced.\nSolution: You recommend the use of password hash synchronization and seamless SSO.\nDoes the solution meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "No",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q111",
    "prompt": "NO.111 You are configuring and securing a network environment.\nYou deploy an Azure virtual machine named VM1 that is configured to analyze network traffic.\nYou need to ensure that all network traffic is routed through VM1.\nWhat should you configure?",
    "image": "",
    "answers": [
      "a system route",
      "a network security group (NSG)",
      "a user-defined route"
    ],
    "correctAnswer": "a user-defined route",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q112",
    "prompt": "NO.112 Lab Task\nuse the following login credentials as needed:\nTo enter your username, place your cursor in the Sign in box and click on the username below.\nTo enter your password. place your cursor in the Enter password box and click on the password\nbelow.\nAzure Username: Userl -28681041@ExamUsers.com\nAzure Password: GpOAe4@lDg\nIf the Azure portal does not load successfully in the browser, press CTRL-K to reload the portal in a\nnew browser tab.\nThe following information is for technical support purposes only:\nLab Instance: 28681041\nTask 5\nYou need to ensure that only devices connected to a 131-107.0.0/16 subnet can access data in the\nrg1lod28681041 Azure Storage account.",
    "image": "",
    "answers": [
      "(Lab Task)"
    ],
    "correctAnswer": "(Lab Task)",
    "allowAnswerShuffle": false
  },
  {
    "id": "az500-q113",
    "prompt": "NO.113 You have a web app named WebApp1.\nYou create a web application firewall (WAF) policy named WAF1.\nYou need to protect WebApp1 by using WAF1.\nWhat should you do first?",
    "image": "",
    "answers": [
      "Deploy an Azure Front Door.",
      "Add an extension to WebApp1.",
      "Deploy Azure Firewall."
    ],
    "correctAnswer": "Deploy an Azure Front Door.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q114",
    "prompt": "NO.114 You have a Microsoft Entra tenant that contains a user named User1.\nYou plan to enable passwordless authentication for the tenant.\nYou need to ensure that User1 can enable the combined registration experience. The solution must\nuse the principle of least privilege.\nWhich role should you assign to User1?",
    "image": "",
    "answers": [
      "Security Administrator",
      "Global Administrator",
      "Privileged Role Administrator",
      "Authentication Administrator"
    ],
    "correctAnswer": "Authentication Administrator",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q115",
    "prompt": "NO.115 You have a Azure subscription.\nYou enable Azure Active Directory (Azure AD) Privileged identify (PIM).\nYour company's security policy for administrator accounts has the following conditions:\n* The accounts must use multi-factor authentication (MFA).\n* The account must use 20-character complex passwords.\n* The passwords must be changed every 180 days.\n* The account must be managed by using PIM.\nYou receive alerts about administrator who have not changed their password during the last 90 days.\nYou need to minimize the number of generated alerts.\nWhich PIM alert should you modify?",
    "image": "",
    "answers": [
      "Roles don't require multi-factor authentication for activation.",
      "Administrator aren't using their privileged roles",
      "Roles are being assigned outside of Privileged identity Management",
      "Potential state accounts in a privileged role."
    ],
    "correctAnswer": "Potential state accounts in a privileged role.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q116",
    "prompt": "NO.116 You have an Azure subscription that contains an Azure App Services web app named\nWebApp1. WebApp1 is accessed by users in multiple Azure regions.\nYou need to secure access to WebApp1. The solution must meet the following requirements:\n* Protect against common web vulnerabilities.\n* Optimize the routing of traffic from different regions.\nWhat should you use?",
    "image": "",
    "answers": [
      "Azure Application Gateway",
      "Azure Content Delivery Network (CDN)",
      "Azure Firewall",
      "Azure Front Door Premium"
    ],
    "correctAnswer": "Azure Front Door Premium",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q117",
    "prompt": "NO.117 Note: This question is part of a series of questions that present the same scenario. Each\nquestion in the series contains a unique solution that might meet the stated goals. Some question\nsets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYou have an Azure subscription that contains an Azure Kubernetes Service (AKS) cluster named AKS1\nand an Azure container registry named AZCR1.\nYou need to ensure that AKS1 can deploy container images stored in AZCR1.\nSolution: You configure AKS1 to use a user-assigned managed identity and assign the Azure\nKubernetes Service Cluster Admin Role to the managed identity.\nDoes this meet the requirement?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "Yes",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q118",
    "prompt": "NO.118 You have an Azure subscription that contains an Azure App Service app named App1, an\nAzure container instance named AC1. and a storage account named storage1. AC1 hosts an app\nnamed App2.\nUsers send requests to App1 by using a URL of https:/app1.contoso.com/echo/resource-cache?\nparam1\n=sample. App1 calls App2. which retrieves data from storage1.\nYou need to ensure that a security alert will be generated when connections are detected from\nanomalous IP addresses. Which Microsoft Defender for Cloud service should you use?",
    "image": "",
    "answers": [
      "Microsoft Defender for App Service",
      "Microsoft Defender for APIs",
      "Microsoft Defender for Storage",
      "Microsoft Defender for Containers"
    ],
    "correctAnswer": "Microsoft Defender for App Service",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q119",
    "prompt": "NO.119 You have an Azure subscription that contains the resources shown in the following table.\nTransparent Data Encryption (TDE) is disabled on SQL1.\nYou assign policies to the resource groups as shown in the following table.\n\nYou plan to deploy Azure SQL databases by using an Azure Resource Manager (ARM) template. The databases will be configured as shown in the following table.\n\nFor each of the following statements, select Yes if the statement is true, otherwise select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "s1",
        "label": "SQL1 will have TDE enabled automatically."
      },
      {
        "id": "s2",
        "label": "The deployment of SQL2 will fail."
      },
      {
        "id": "s3",
        "label": "SQL3 will be deployed and marked as noncompliant."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
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
    "id": "az500-q120",
    "prompt": "NO.120 You have an Azure subscription that has a managed identity named identity and is linked to an Azure Active Directory (Azure AD) tenant. The tenant contains the resources shown in the following table.\n\nWhich resources can be added to AU1 and AU2? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
  "type": "dropdownMatrix",
  "allowAnswerShuffle": false,
  "rows": [
    {
      "id": "au1",
      "label": "AU1:"
    },
    {
      "id": "au2",
      "label": "AU2:"
    }
  ],
  "columns": [
    {
      "id": "resp",
      "label": "Resposta",
      "optionsByRow": {
        "au1": [
          "AU2 only",
          "Group2 only",
          "Identity1 only",
          "AU2 and Group2 only",
          "Group2 and Identity1 only"
        ],
        "au2": [
          "Identity1 only",
          "AU1 and Identity1 only",
          "Group1 and Group2 only",
          "AU1, Group2 and Identity1 only",
          "Group1, Group2 and User1 only"
        ]
      },
      "correctByRow": {
        "au1": "Group2 and Identity1 only",
        "au2": "Group1, Group2 and User1 only"
      }
    }
  ]
},
  {
    "id": "az500-q121",
    "prompt": "NO.121 You have a Microsoft Entra tenant named contoso.com.\nYou collaborate with a partner organization that has a Microsoft Entra tenant named fabrikam.com.\nFabrikam.\ncom has multi-factor authentication (MFA) enabled for all users.\nContoso.com has the Cross-tenant access settings configured as shown in the Cross-tenant access\nsettings exhibit. (Click the Cross-tenant access settings:\n\nContoso.com has the External collaboration settings configured as shown in the External\ncollaboration settings exhibit. (Click the External collaboration settings tab.)\nYou create a Conditional Access policy that has the following settings:\n* Name: CAPolicy1\n* Assignments\no Guest or external users: B2B collaboration guest users\no Target resources\n# Include: All cloud apps o Access controls\n# Grant access\n\n# Require device to be marked as compliant\n# Require multi-factor authentication\n# Enable policy: On\nFor each of the following statements, select Yes if the statement is true, otherwise select No.\nNOTE: Each correct section is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "st1",
        "label": "Users with devices that have a compliant device claim from fabrikam.com will be granted access to the cloud apps in contoso.com."
      },
      {
        "id": "st2",
        "label": "To minimize the number of MFA authentication prompts for the users in fabrikam.com, you must configure the Trust settings."
      },
      {
        "id": "st3",
        "label": "Users with devices that have a compliant device claim from fabrikam.com can review the user properties of the users in contoso.com."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
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
    ]
  },
  {
    "id": "az500-q122",
    "prompt": "NO.122 You create an Azure subscription.\nYou need to ensure that you can use Azure Active Directory (Azure AD) Privileged Identity\nManagement (PIM) to secure Azure AD roles.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from\nthe list of actions to the answer area and arrange them in the correct order.",
    "image": "",
    "type": "dragMatch",
    "allowAnswerShuffle": false,
    "items": [
      {
        "id": "it1",
        "label": "Verify your identity by using multi-factor authentication (MFA)."
      },
      {
        "id": "it2",
        "label": "Consent to PIM."
      },
      {
        "id": "it3",
        "label": "Sign up PIM for Azure AD roles."
      },
      {
        "id": "it4",
        "label": "Discover privileged roles."
      },
      {
        "id": "it5",
        "label": "Discover resources."
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
      "step1": "it2",
      "step2": "it1",
      "step3": "it3"
    }
  },
  {
    "id": "az500-q123",
    "prompt": "NO.123 You have an Azure subscription that contains the application gateways shown in the\n\nfollowing table.\nYou need to configure settings to implement URL rewrite and prevent SQL injection attacks.\nWhich application gateways support each requirement? To answer, select the appropriate options in\nthe answer area NOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "url",
        "label": "Implement URL rewrite:"
      },
      {
        "id": "sqlinj",
        "label": "Prevent SQL injection attacks:"
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "options": [
          "GW2 only",
          "GW3 only",
          "GW1 and GW2 only",
          "GW2 and GW3 only",
          "GW1, GW2, and GW3"
        ],
        "correctByRow": {
          "url": "GW2 and GW3 only",
          "sqlinj": "GW3 only"
        }
      }
    ]
  },
  {
    "id": "az500-q124",
    "prompt": "NO.124 Lab Task\nTask 1\n\nYou need to ensure that connections from the Internet to VNET1\\subnet0 are allowed only over TCP\nport\n7777. The solution must use only currently deployed resources.",
    "image": "",
    "answers": [
      "(Lab Task)"
    ],
    "correctAnswer": "(Lab Task)",
    "allowAnswerShuffle": false
  },
  {
    "id": "az500-q125",
    "prompt": "NO.125 You have an Azure subscription that contains a user named UseR1. You need to ensure that\nUseR1 can perform the following tasks:\n* Create groups.\n* Create access reviews for role-assignable groups.\n* Assign Azure AD roles to groups.\nThe solution must use the principle of least privilege. Which role should you assign to User1?",
    "image": "",
    "answers": [
      "Groups administrator",
      "Authentication administrator",
      "Identity Governance Administrator",
      "Privileged role administrator"
    ],
    "correctAnswer": "Identity Governance Administrator",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q126",
    "prompt": "NO.126 You have an Azure subscription that contains the storage accounts shown in the following table.\n\nYou enable Microsoft Defender for Storage.\nWhich storage services are monitored by Microsoft Defender for Storage, and which storage accounts are protected by Microsoft Defender for Storage? To answer, select the appropriate options in the answer area.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r",
        "label": "Resposta"
      }
    ],
    "columns": [
      {
        "id": "svc",
        "label": "Monitored storage services:",
        "options": [
          "Blob services only",
          "File services and table services only",
          "Blob services and file services only",
          "All storage services"
        ],
        "correctByRow": {
          "r": "File services and table services only"
        }
      },
      {
        "id": "acct",
        "label": "Protected storage accounts:",
        "options": [
          "storage1 only",
          "storage1, storage4, and storage5 only",
          "storage1, storage2, storage3, storage4, and storage5",
          "storage3 and storage5 only"
        ],
        "correctByRow": {
          "r": "storage1, storage4, and storage5 only"
        }
      }
    ]
  },
  {
    "id": "az500-q127",
    "prompt": "NO.127 You have an Azure subscription and the computers shown in the following table.\nYou need to perform a vulnerability scan of the computers by using Microsoft Defender for Cloud.\nWhich computers can you scan?",
    "image": "",
    "answers": [
      "VM1 only",
      "VM1 and VM2 only",
      "Server1 and VMSS1.0 only",
      "VM1, VM2, and Server1 only",
      "VM1, VM2, Server1, and VMSS1.0"
    ],
    "correctAnswer": "VM1, VM2, and Server1 only",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q128",
    "prompt": "NO.128 You have an Azure subscription that contains a blob container named cont1. Cont1 has the\naccess policies shown in the following exhibit.\n\nUse the drop-down menus to select the answer choice that completes each statement based on the\ninformation presented in the graphic.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "text": "The maximum number of additional stored access policies that you can add to cont1 is "
        },
        {
          "slot": "stored"
        },
        {
          "text": ".\n\nThe maximum number of additional immutable blob storage policies that you can add to cont1 is "
        },
        {
          "slot": "immutable"
        },
        {
          "text": "."
        }
      ],
      "slots": {
        "stored": {
          "label": "Stored access policies",
          "options": [
            "1",
            "2",
            "4",
            "7",
            "15"
          ],
          "correct": "1"
        },
        "immutable": {
          "label": "Immutable blob storage policies",
          "options": [
            "1",
            "2",
            "4",
            "7",
            "15"
          ],
          "correct": "7"
        }
      }
    }
  },
  {
    "id": "az500-q129",
    "prompt": "NO.129 You have an Azure subscription that contains the key vaults shown in the following table.\nThe subscription contains the users shown in the following table.\nOn June 1, you perform the following actions:\n\n* Delete a key named key1 from KeyVault1.\n* Delete a secret named secret 1 from KeyVault2.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "k1",
        "label": "Admin1 can recover key1 on June 5."
      },
      {
        "id": "s1",
        "label": "Admin2 can purge secret1 on June 12."
      },
      {
        "id": "k2",
        "label": "Admin3 can recover key1 on June 17."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "k1": "Yes",
          "s1": "Yes",
          "k2": "No"
        }
      }
    ]
  },
  {
    "id": "az500-q130",
    "prompt": "NO.130 You have Azure virtual machines that have Update Management enabled. The virtual machines are configured as shown in the following table.n\nYou schedule two update deployments named Update1 and Update2. Update1 updates VM3. Update2 updates VM6.\nWhich additional virtual machines can be updated by using Update1 and Update2? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r",
        "label": "Resposta"
      }
    ],
    "columns": [
      {
        "id": "u1",
        "label": "Update1:",
        "options": [
          "VM2 only",
          "VM4 only",
          "VM1 and VM2 only",
          "VM1, VM2, VM4, VM5, and VM6"
        ],
        "correctByRow": {
          "r": "VM1 and VM2 only"
        }
      },
      {
        "id": "u2",
        "label": "Update2:",
        "options": [
          "VM5 only",
          "VM1 and VM5 only",
          "VM4 and VM5 only",
          "VM1, VM2, and VM5 only",
          "VM1, VM2, VM3, VM4, and VM5"
        ],
        "correctByRow": {
          "r": "VM4 and VM5 only"
        }
      }
    ]
  },
  {
    "id": "az500-q131",
    "prompt": "NO.131 Lab Task\nTask 5\nA user named Debbie has the Azure app installed on her mobile device.\nYou need to ensure that debbie@contoso.com is alerted when a resource lock is deleted.",
    "image": "",
    "answers": [
      "(Lab Task)"
    ],
    "correctAnswer": "(Lab Task)",
    "allowAnswerShuffle": false
  },
  {
    "id": "az500-q132",
    "prompt": "NO.132 You are troubleshooting a security issue for an Azure Storage account.\nYou enable the diagnostic logs for the storage account.\nWhat should you use to retrieve the diagnostics logs?",
    "image": "",
    "answers": [
      "Azure Storage Explorer",
      "SQL query editor in Azure",
      "File Explorer in Windows",
      "Azure Security Center"
    ],
    "correctAnswer": "Azure Storage Explorer",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q133",
    "prompt": "NO.133 You have 20 Azure subscriptions and a security group named Group1. The subscriptions are\nchildren of the root management group.\nEach subscription contains a resource group named RG1.\nYou need to ensure that for each subscription RG1 meets the following requirements:\n* The members of Group1 are assigned the Owner role.\n\n* The modification of permissions to RG1 is prevented.\nWhat should you do? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r",
        "label": "Resposta"
      }
    ],
    "columns": [
      {
        "id": "rbac",
        "label": "Configure role-based access control (RBAC) role assignments by using:",
        "options": [
          "Azure Blueprints",
          "Azure Policy",
          "Azure Security Center"
        ],
        "correctByRow": {
          "r": "Azure Blueprints"
        }
      },
      {
        "id": "prevent",
        "label": "Prevent the modification of permissions to RG1 by using:",
        "options": [
          "A resource lock",
          "A role-based access control (RBAC) role assignment at the resource group level",
          "Azure Blueprint assignments in locking mode"
        ],
        "correctByRow": {
          "r": "A role-based access control (RBAC) role assignment at the resource group level"
        }
      }
    ]
  },
  {
    "id": "az500-q134",
    "prompt": "NO.134 You have an Azure subscription that is linked to a Microsoft Entra tenant. The tenant\ncontains the groups shown in the following table.\nThe tenant contains the users shown in the following table.\n\nThe subscription contains the Azure SQL servers shown in the following table.\nThe servers are configured for Microsoft Entra-only authentication.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "db1",
        "label": "User1 can alter the schema of DB1."
      },
      {
        "id": "db2u1",
        "label": "User1 can alter the schema of DB2."
      },
      {
        "id": "db2u2",
        "label": "User2 can alter the schema of DB2."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "db1": "Yes",
          "db2u1": "Yes",
          "db2u2": "No"
        }
      }
    ]
  },
  {
    "id": "az500-q135",
    "prompt": "NO.135 You have an Azure subscription that uses Microsoft Defender for Cloud.\nYou need to use Defender for Cloud to review regulatory compliance with the Azure CIS 1.4,0\nstandard. The solution must minimize administrative effort.\nWhat should you do first?",
    "image": "",
    "answers": [
      "Assign an Azure policy.",
      "Manually add the Azure CIS 1.4.0 standard.",
      "Disable one of the Out of the box standards.",
      "Add a custom initiative."
    ],
    "correctAnswer": "Manually add the Azure CIS 1.4.0 standard.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q136",
    "prompt": "NO.136 You have an Azure subscription that contains a storage account named storage1 and several\nvirtual machines.\nThe storage account and virtual machines are in the same Azure region. The network configurations\nof the virtual machines are shown in the following table.\n\nThe virtual network subnets have service endpoints defined as shown in the following table.n* Firewall - Address range: 52.233.129.0/24\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "s1",
        "label": "VM1 can connect to storage1."
      },
      {
        "id": "s2",
        "label": "VM2 can connect to storage1."
      },
      {
        "id": "s3",
        "label": "VM3 can connect to storage1."
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
    ]
  },
  {
    "id": "az500-q137",
    "prompt": "NO.137 You have an Azure subscription.\nYou plan to deploy a virtual machine named VM1.\nYou need to use confidential disk encryption on VM1.\nWhich virtual machine series should you use for VM1, and which type of disks can be encrypted by\nusing confidential disk encryption? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r",
        "label": "Answer Area"
      }
    ],
    "columns": [
      {
        "id": "series",
        "label": "Virtual machine series",
        "options": [
          "Ddv5",
          "ECasv5",
          "Lsv2",
          "NVadsA10v5"
        ],
        "correctByRow": {
          "r": "ECasv5"
        }
      },
      {
        "id": "disks",
        "label": "Disks",
        "options": [
          "Data disks only",
          "The OS disk only",
          "The OS disk and data disks"
        ],
        "correctByRow": {
          "r": "The OS disk and data disks"
        }
      }
    ]
  },
  {
    "id": "az500-q138",
    "prompt": "NO.138 You have a management group named Group1 that contains an Azure subscription named\nsub1. Sub1 has a subscription ID of 11111111-1234-1234-1234-1111111111.\nYou need to create a custom Azure role-based access control (RBAC) role that will delegate\npermissions to manage the tags on all the objects in Group1.\nWhat should you include in the role definition of Role1? To answer, select the appropriate options in\nthe answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r",
        "label": "Answer Area"
      }
    ],
    "columns": [
      {
        "id": "provider",
        "label": "Resource provider",
        "options": [
          "Microsoft.Authorization",
          "Microsoft.Resources",
          "Microsoft.Support"
        ],
        "correctByRow": {
          "r": "Microsoft.Resources"
        }
      },
      {
        "id": "scope",
        "label": "Assignable scope",
        "options": [
          "/",
          "/Group1",
          "/subscriptions/11111111-1234-1234-1234-111111111111"
        ],
        "correctByRow": {
          "r": "/subscriptions/11111111-1234-1234-1234-111111111111"
        }
      }
    ]
  },
  {
    "id": "az500-q139",
    "prompt": "NO.139 You have an Azure subscription.\nYou create a new virtual network named VNet1.\n\nYou plan to deploy an Azure web app named App1 that will use VNet1 and will be reachable by using\nprivate IP addresses. The solution must support inbound and outbound network traffic.\nWhat should you do?",
    "image": "",
    "answers": [
      "Create an Azure App Service Hybrid Connection.",
      "Configure regional virtual network integration.",
      "Create an App Service Environment",
      "Create an Azure application gateway."
    ],
    "correctAnswer": "Create an App Service Environment",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q140",
    "prompt": "NO.140 You have an Azure subscription named Sub1 that uses Microsoft Defender for Cloud. You\nhave the management group hierarchy shown in the following exhibit.\n\nYou create the definitions shown in the following table.\n\nYou need to use Defender for Cloud to add a security policy. Which definitions can you use as a\nsecurity policy?",
    "image": "",
    "answers": [
      "Policy1 only",
      "Policy1 and Initiative1 only",
      "Initiative1 and Initiative2 only",
      "Initiative1, Initiative2, and Initiatives only",
      "Policy1, Initiative1, Initiative2, and Initiative3"
    ],
    "correctAnswer": "Policy1 and Initiative1 only",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q141",
    "prompt": "NO.141 Lab Task\n\nTask 2\nYou need to ensure that the events in the NetworkSecurityGroupRuleCounter log of the VNETOI-\nSubnet0- NSG network security group (NSG) are stored in the Iogs31330471 Azure Storage account\nfor 30 days.",
    "image": "",
    "answers": [
      "Questão em formato não suportado por este app (consulte o PDF)."
    ],
    "correctAnswer": "Questão em formato não suportado por este app (consulte o PDF).",
    "allowAnswerShuffle": false
  },
  {
    "id": "az500-q142",
    "prompt": "NO.142 You have two Azure subscriptions named Sub1 and Sub2. Sub1 contains a resource group\nnamed RG1 and an Azure policy named Policy1.\nYou need to remediate the non-compliant resources in Sub1 based on Policy1.\nHow should you complete the PowerShell script? To answer, select the appropriate options in the answer\narea.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "text": "$policyAssignmentId = \"/subscriptions/f0710c27-9663-4c05-19f8-1b4be01e86a5/providers/Microsoft.Authorization/policyAssignments/policy1\"\n"
        },
        {
          "slot": "blank1"
        },
        {
          "text": " -Subscription \"Sub1\"\n"
        },
        {
          "slot": "blank2"
        },
        {
          "text": " -PolicyAssignmentId $policyAssignmentId -Name \"policy1\" -ResourceDiscoveryMode ReEvaluateCompliance"
        }
      ],
      "slots": {
        "blank1": {
          "label": "Blank 1",
          "options": [
            "Get-AzPolicyRemediation",
            "Set-AzContext",
            "Set-AzResourceGroup",
            "Start-AzPolicyComplianceScan",
            "Start-AzPolicyRemediation"
          ],
          "correct": "Set-AzContext"
        },
        "blank2": {
          "label": "Blank 2",
          "options": [
            "Get-AzPolicyRemediation",
            "Set-AzContext",
            "Set-AzResourceGroup",
            "Start-AzPolicyComplianceScan",
            "Start-AzPolicyRemediation"
          ],
          "correct": "Start-AzPolicyRemediation"
        }
      }
    }
  },
  {
    "id": "az500-q143",
    "prompt": "NO.143 You have an Azure SQL Database server named SQL1.\nYou plan to turn on Advanced Threat Protection for SQL1 to detect all threat detection types.\nWhich action will Advanced Threat Protection detect as a threat?",
    "image": "",
    "answers": [
      "A user updates more than 50 percent of the records in a table.",
      "A user attempts to sign as SELECT * from table1.",
      "A user is added to the db_owner database role.",
      "A user deletes more than 100 records from the same table."
    ],
    "correctAnswer": "A user attempts to sign as SELECT * from table1.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q144",
    "prompt": "NO.144 You have an Azure subscription that contains the resources shown in the following table.\n\nYou plan to enable Azure Defender for the subscription.\nWhich resources can be protected by using Azure Defender?",
    "image": "",
    "answers": [
      "VM1, VNET1, storage1, and Vault1",
      "VM1, VNET1, and storage1 only",
      "VM1, storage1, and Vault1 only",
      "VM1 and VNET1 only",
      "VM1 and storage1 only"
    ],
    "correctAnswer": "VM1, VNET1, storage1, and Vault1",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q145",
    "prompt": "NO.145 You have been tasked with applying conditional access policies for your company's current\nAzure Active Directory (Azure AD).\nThe process involves assessing the risk events and risk levels.\nWhich of the following is the risk level that should be configured for users that have leaked\ncredentials?",
    "image": "",
    "answers": [
      "None",
      "Low",
      "Medium",
      "High"
    ],
    "correctAnswer": "High",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q146",
    "prompt": "NO.146 You are collecting events from Azure virtual machines to an Azure Log Analytics workspace.\nYou plan to create alerts based on the collected events\nYou need to identify which Azure services can be used to create the alerts.\nWhich two services should you identify? Each correct answer presents a complete solution NOTE:\nEach correct selection is worth one point.",
    "image": "",
    "answers": [
      "Azure Monitor",
      "Azure Security Center",
      "Azure Analytics Services",
      "Azure Sentinel",
      "Azure Advisor"
    ],
    "correctAnswer": [
      "Azure Monitor",
      "Azure Sentinel"
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q147",
    "prompt": "NO.147 You have an Azure subscription that contains an Azure SQL database named SQL1. SQL1\ncontains the columns shown in the following table.\n\nYou configure SQL! to use Always Encrypted.\nYou need to configure deterministic encryption.\nWhich column supports deterministic encryption?",
    "image": "",
    "answers": [
      "Column1",
      "Column2",
      "Column3",
      "Column4"
    ],
    "correctAnswer": "Column2",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q148",
    "prompt": "NO.148 You have an Azure subscription.\nYou create an Azure web app named Contoso1812 that uses an S1 App service plan.\nYou create a DNS record for www.contoso.com that points to the IP address of Contoso1812.\nYou need to ensure that users can access Contoso1812 by using the https://www.contoso.com URL.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "Turn on the system-assigned managed identity for Contoso1812.",
      "Add a hostname to Contoso1812.",
      "Scale out the App Service plan of Contoso1812.",
      "Add a deployment slot to Contoso1812.",
      "Scale up the App Service plan of Contoso1812.",
      "Upload a PFX file to Contoso1812"
    ],
    "correctAnswer": [
      "Add a hostname to Contoso1812.",
      "Upload a PFX file to Contoso1812"
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q149",
    "prompt": "NO.149 You have an Azure subscription that contains the storage accounts shown in the following table.\n\nYou need to configure authorization access.\nWhich authorization types can you use for each storage account? To answer, select the appropriate\noptions in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "st1",
        "label": "storage1:"
      },
      {
        "id": "st2",
        "label": "storage2:"
      },
      {
        "id": "st3",
        "label": "storage3:"
      }
    ],
    "columns": [
      {
        "id": "auth",
        "label": "Authorization type",
        "options": [
          "Shared Key only",
          "Shared access signature (SAS) only",
          "Azure Active Directory (Azure AD) only",
          "Shared Key and shared access signature (SAS) only",
          "Shared Key, shared access signature (SAS), and Azure Active Directory (Azure AD)"
        ],
        "correctByRow": {
          "st1": "Shared Key, shared access signature (SAS), and Azure Active Directory (Azure AD)",
          "st2": "Shared Key only",
          "st3": "Shared Key, shared access signature (SAS), and Azure Active Directory (Azure AD)"
        }
      }
    ]
  },
  {
    "id": "az500-q150",
    "prompt": "NO.150 You have a Microsoft Entra tenant.\nYou need to prevent nonprivileged Microsoft Entra users from creating service principals in Microsoft\nEntra ID.",
    "image": "",
    "answers": [
      "From the Properties blade, set Enable Security defaults to Yes.",
      "From the Properties blade, set Access management for Azure resources to No.",
      "From the User settings blade, set Restrict access to Microsoft Entra ID administration portal to Yes.",
      "From the User settings blade, set Users can register applications to No."
    ],
    "correctAnswer": "From the User settings blade, set Users can register applications to No.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q151",
    "prompt": "NO.151 You have an Azure Kubernetes Service (AKS) cluster that will connect to an Azure Container\nRegistry.\nYou need to use automatically generated service principal for the AKS cluster to authenticate to the\nAzure Container Registry.\nWhat should you create?",
    "image": "",
    "answers": [
      "a secret in Azure Key Vault",
      "a role assignment",
      "an Azure Active Directory (Azure AD) user",
      "an Azure Active Directory (Azure AD) group"
    ],
    "correctAnswer": "a role assignment",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q152",
    "prompt": "NO.152 You have the Azure virtual networks shown in the following table.\n\nYou have the Azure virtual machines shown in the following table.\n\nThe firewalls on all the virtual machines allow ping traffic.\nNSG1 is configured as shown in the exhibit.\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "s1",
        "label": "VM1 can ping VM3 successfully."
      },
      {
        "id": "s2",
        "label": "VM2 can ping VM4 successfully."
      },
      {
        "id": "s3",
        "label": "VM3 can be accessed by using Remote Desktop from the internet."
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
    ]
  },
  {
    "id": "az500-q153",
    "prompt": "NO.153 Note: This question is part of a series of questions that present the same scenario. Each\nquestion in the series contains a unique solution that might meet the stated goals. Some question\nsets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYou have an Azure Subscription named Sub1.\nYou have an Azure Storage account named Sa1 in a resource group named RG1.\nUsers and applications access the blob service and the file service in Sa1 by using several shared\naccess signatures (SASs) and stored access policies.\nYou discover that unauthorized users accessed both the file service and the blob service.\nYou need to revoke all access to Sa1.\nSolution: You generate new SASs.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "No",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q154",
    "prompt": "NO.154 You have an Azure subscription that contains the resources shown in the following table.\n\nYou plan to deploy an Azure Private Link service named APL1.\nWhich resource must you reference during the creation of APL1?",
    "image": "",
    "answers": [
      "VMSS1",
      "VM1",
      "SQL",
      "LB1"
    ],
    "correctAnswer": "LB1",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q155",
    "prompt": "NO.155 You have an Azure subscription that contains the resources shown in the following table.\n\nYou need to configure storage1 to regenerate keys automatically every 90 days. Which cmdlet should\nyou run?",
    "image": "",
    "answers": [
      "set -A=StorageAccount",
      "Add-A:StorogcAccountmanagementPolicyAction",
      "Set-A;StorageAccountimanagementPolicy",
      "Add-AsKeyVaultmanageStorageAccount"
    ],
    "correctAnswer": "Add-AsKeyVaultmanageStorageAccount",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q156",
    "prompt": "NO.156 You have an Azure subscription that contains the following resources:\n* A virtual network named VNET1 that contains two subnets named Subnet1 and Subnet2.\n* A virtual machine named VM1 that has only a private IP address and connects to Subnet1.\nYou need to ensure that Remote Desktop connections can be established to VM1 from the internet.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from\nthe list of actions to the answer area and arrange then in the correct order.",
    "image": "",
    "type": "dragMatch",
    "allowAnswerShuffle": false,
    "items": [
      {
        "id": "it1",
        "label": "Configure a network security group (NSG)."
      },
      {
        "id": "it2",
        "label": "Create a network rule collection."
      },
      {
        "id": "it3",
        "label": "Create a NAT rule collection."
      },
      {
        "id": "it4",
        "label": "Create a new subnet."
      },
      {
        "id": "it5",
        "label": "Deploy Azure Application Gateway."
      },
      {
        "id": "it6",
        "label": "Deploy Azure Firewall."
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
      "step1": "it4",
      "step2": "it6",
      "step3": "it3"
    }
  },
  {
    "id": "az500-q157",
    "prompt": "NO.157 You have an Azure subscription that contains the virtual machines shown in the following\ntable.\nYou create the Azure policies shown in the following table.\nYou create the resource locks shown in the following table.\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "s1",
        "label": "You can start VM1."
      },
      {
        "id": "s2",
        "label": "You can start VM2."
      },
      {
        "id": "s3",
        "label": "You can create a virtual machine in RG2."
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
          "s3": "No"
        }
      }
    ]
  },
  {
    "id": "az500-q158",
    "prompt": "NO.158 You need to create an Azure key vault. The solution must ensure that any object deleted\nfrom the key vault be retained for 90 days.\nHow should you complete the command? To answer, select the appropriate options in the answer\narea.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "text": "New-AzureRmKeyVault -VaultName 'KeyVault1' -ResourceGroupName 'RG1'\n  -Location 'East US' "
        },
        {
          "slot": "box1"
        },
        {
          "text": " "
        },
        {
          "slot": "box2"
        }
      ],
      "slots": {
        "box1": {
          "label": "Box 1",
          "options": [
            "-EnabledForDeployment",
            "-EnablePurgeProtection",
            "-Tag"
          ],
          "correct": "-EnablePurgeProtection"
        },
        "box2": {
          "label": "Box 2",
          "options": [
            "-Confirm",
            "-DefaultProfile",
            "-EnableSoftDelete",
            "-SKU"
          ],
          "correct": "-EnableSoftDelete"
        }
      }
    }
  },
  {
    "id": "az500-q159",
    "prompt": "NO.159 On Monday, you configure an email notification in Azure Security Center to notify user\nuser1@contoso.com.\nOn Tuesday, Security Center generates the security alerts shown in the following table.\n\nHow many email notifications will user1@contoso.com receive on Tuesday? To answer, select the\nappropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r",
        "label": "Answer Area"
      }
    ],
    "columns": [
      {
        "id": "rdp",
        "label": "Total number of Security Center email notifications about an RDP brute force attack on Tuesday",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctByRow": {
          "r": "4"
        }
      },
      {
        "id": "total",
        "label": "Total number of Security Center email notifications on Tuesday",
        "options": [
          "3",
          "4",
          "6",
          "9",
          "11"
        ],
        "correctByRow": {
          "r": "11"
        }
      }
    ]
  },
  {
    "id": "az500-q160",
    "prompt": "NO.160 You have an Azure subscription named Sub1. Sub1 contains a virtual network named VNet1\nthat contains one subnet named Subnet1.\nSubnet1 contains an Azure virtual machine named VM1 that runs Ubuntu Server 20.04.\nYou create a service endpoint for Microsoft. Storage in Subnet1.\nYou need to ensure that when you deploy Docker containers to VM1, the containers can access Azure\nStorage resources by using the service endpoint.\nWhat should you do on VM1 before you deploy the container?",
    "image": "",
    "answers": [
      "Create an application security group and a network security group (NSG).",
      "Install the container network interface (CNI) plug-in.",
      "Edit the docker-compose.ym1 file."
    ],
    "correctAnswer": "Install the container network interface (CNI) plug-in.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q161",
    "prompt": "NO.161 You have an Azure subscription that contains 100 virtual machines and has Azure Security\nCenter Standard tier enabled.\nYou plan to perform a vulnerability scan of each virtual machine.\nYou need to deploy the vulnerability scanner extension to the virtual machines by using an Azure\nResource Manager template.\nWhich two values should you specify in the code to automate the deployment of the extension to the\nvirtual machines? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "the user-assigned managed identity",
      "the workspace ID",
      "the Azure Active Directory (Azure AD) ID",
      "the Key Vault managed storage account key",
      "the system-assigned managed identity",
      "the primary shared key"
    ],
    "correctAnswer": [
      "the user-assigned managed identity",
      "the Azure Active Directory (Azure AD) ID"
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q162",
    "prompt": "NO.162 You have an Azure Active Directory (Azure AD) tenant. The tenant contains users that are\nassigned Azure AD Premium Plan 2 licenses.\nYou have an partner company that has a domain named The fabrikam.com domain contains a user\nnamed user'. User' has an email address of userl@tabrikam.com.\nYou to provide User1 with to the resources in the tenant The solution must meet the following\nrequirements:\n* user1 must be able to sign in by using the userl@fabrikam.com credentials\n* You must be able to grant User1 access to the resources in the tenant\n* Administrative effort must be minimized.\nWhat should you do?",
    "image": "",
    "answers": [
      "Create a user account for user1.",
      "Create an invite for User1.",
      "To the tenant add fabrikamcom as a custom domain",
      "Set Enable guest self-service sign up via user flows to Yes for the tenant."
    ],
    "correctAnswer": "Create an invite for User1.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q163",
    "prompt": "NO.163 You have an Azure subscription named Subscription1 that contains the resources shown in\nthe following table.\nYou need to identify which initiatives and policies you can add to Subscription1 by using Azure\n\nSecurity Center.\nWhat should you identify?",
    "image": "",
    "answers": [
      "Policy1 and Policy2 only",
      "Initiative1 only",
      "Initiative1 and Initiative2 only",
      "Initiative1, Initiative2, Policy1, and Policy2"
    ],
    "correctAnswer": "Initiative1, Initiative2, Policy1, and Policy2",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q164",
    "prompt": "NO.164 You have an Azure subscription that contains a Microsoft Sentinel workspace.\nMicrosoft Sentinel is configured to ingest logs from several Azure workloads. A third-party service\nmanagement platform is used to manage incidents.\nYou need to identify which Microsoft Sentinel components to configure to meet the following\nrequirements:\n* When Microsoft Sentinel identifies a threat an incident must be created.\n* A ticket must be logged in the service management platform when an incident is created in\nMicrosoft Sentinel.\nWhich component should you identify for each requirement? To answer, select the appropriate\noptions in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "req1",
        "label": "When Microsoft Sentinel identifies a threat, an incident must be created."
      },
      {
        "id": "req2",
        "label": "A ticket must be logged in the service management platform when an incident is created in Microsoft Sentinel."
      }
    ],
    "columns": [
      {
        "id": "comp",
        "label": "Component",
        "options": [
          "Analytics",
          "Data connectors",
          "Playbooks",
          "Workbooks"
        ],
        "correctByRow": {
          "req1": "Analytics",
          "req2": "Playbooks"
        }
      }
    ]
  },
  {
    "id": "az500-q165",
    "prompt": "NO.165 Your network contains an on-premises Active Directory domain named contoso.com. The\ndomain contains a user named User1.\nYou have an Azure subscription that is linked to an Azure Active Directory (Azure AD) tenant named\ncontoso.com. The tenant contains an Azure Storage account named storage1. Storage1 contains an\nAzure file share named share1.\nCurrently, the domain and the tenant are not integrated.\nYou need to ensure that User1 can access share1 by using his domain credentials.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from\nthe list of actions to the answer area and arrange them in the correct order.",
    "image": "",
    "type": "dragMatch",
    "allowAnswerShuffle": false,
    "items": [
      {
        "id": "it1",
        "label": "Create a private link to storage1."
      },
      {
        "id": "it2",
        "label": "Enable Active Directory Domain Services (AD DS) authentication on storage1."
      },
      {
        "id": "it3",
        "label": "Implement Azure AD Connect."
      },
      {
        "id": "it4",
        "label": "Create a service endpoint to storage1."
      },
      {
        "id": "it5",
        "label": "Assign share-level permissions for share1."
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
      "step1": "it3",
      "step2": "it2",
      "step3": "it5"
    }
  },
  {
    "id": "az500-q166",
    "prompt": "NO.166 You have an Azure subscription named Sub1 that contains the virtual machines shown in the\nfollowing table.\n\nYou need to ensure that the virtual machines in RG1 have the Remote Desktop port closed until an\nauthorized user requests access.\nWhat should you configure?",
    "image": "",
    "answers": [
      "Azure Active Directory (Azure AD) Privileged Identity Management (PIM)",
      "an application security group",
      "Azure Active Directory (Azure AD) conditional access",
      "just in time (JIT) VM access"
    ],
    "correctAnswer": "just in time (JIT) VM access",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q167",
    "prompt": "NO.167 You have an Azure subscription that contains the alerts shown in the following exhibit.\nUse the drop-down menus to select the answer choice that completes each statement based on the\ninformation presented in the graphic.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "a1",
        "label": "The state of Alert1 that was fired at 11:23:52"
      },
      {
        "id": "a2",
        "label": "The state of Alert2 that was fired at 11:23:24"
      }
    ],
    "columns": [
      {
        "id": "state",
        "label": "Resposta",
      "optionsByRow": {
        "a1": [
          "cannot be changed",
          "can be changed to Closed only",
          "can be changed to New only",
          "can be changed to New or Closed"
        ],
        "a2": [
          "cannot be changed",
          "can be changed to Acknowledged only",
          "can be changed to New only",
          "can be changed to New or Acknowledged"
        ]
      },
        "correctByRow": {
          "a1": "can be changed to Closed only",
          "a2": "can be changed to New or Acknowledged"
        }
      }
    ]
  },
  {
    "id": "az500-q168",
    "prompt": "NO.168 Lab Task\nTask 3\nYou need to ensure that a user named Danny-31330471 can sign in to any SQL database on a\nMicrosoft SQL server named web31330471 by using SQL Server Management Studio (SSMS) and\nAzure AD credentials.",
    "image": "",
    "answers": [
      "Questão em formato não suportado por este app (consulte o PDF)."
    ],
    "correctAnswer": "Questão em formato não suportado por este app (consulte o PDF).",
    "allowAnswerShuffle": false
  },
  {
    "id": "az500-q169",
    "prompt": "NO.169 You have an Azure subscription that contains an Azure App Services web app named\nWebApp1 and an Azure key vault named Vault1. Vault1 has the certificates shown in the following\ntable.\n\nYou plan to implement TLS for WebApp1.\nYou need to add a certificate to WebApp1.\nWhich certificates from Vault1 can you add to WebApp1?",
    "image": "",
    "answers": [
      "Cert1 and Cert2 only",
      "Cert1 and Cert3 only",
      "Cert3 and Cert4 only",
      "Cert1, Cert2, Cert3, and Cert4"
    ],
    "correctAnswer": "Cert1 and Cert2 only",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q170",
    "prompt": "NO.170 You have three on-premises servers named Server1, Server2, and Server3 that run Windows\nServer1 and Server2 and located on the Internal network. Server3 is located on the premises\nnetwork. All servers have access to Azure.\nFrom Azure Sentinel, you install a Windows firewall data connector.\nYou need to collect Microsoft Defender Firewall data from the servers for Azure Sentinel.\nWhat should you do?",
    "image": "",
    "answers": [
      "Create an event subscription from Server1, Server2 and Server3",
      "Install the On-premises data gateway on each server.",
      "Install the Microsoft Agent on each server.",
      "Install the Microsoft Agent on Server1 and Server2 install the on-premises data gateway on"
    ],
    "correctAnswer": "Install the Microsoft Agent on each server.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q171",
    "prompt": "NO.171 You have an Azure subscription named Subscription1 that contains the resources shown in the following table.\n\nYou have an Azure subscription named Subscription2 that contains the following resources:\n* An Azure Sentinel workspace\n* An Azure Event Grid instance\n\nYou need to ingest the CEF messages from the NVAs to Azure Sentinel.\nWhat should you configure for each subscription? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "sub1",
        "label": "Subscription1:"
      },
      {
        "id": "sub2",
        "label": "Subscription2:"
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
      "optionsByRow": {
        "sub1": [
          "An Azure Log Analytics agent on a Linux virtual machine",
          "A Data Factory pipeline",
          "An Event Hubs namespace",
          "An Azure Service Bus queue"
        ],
        "sub2": [
          "A new Azure Log Analytics workspace",
          "A new Azure Sentinel data connector",
          "A new Azure Sentinel playbook",
          "A new Event Grid resource provider"
        ]
      },
        "correctByRow": {
          "sub1": "An Event Hubs namespace",
          "sub2": "A new Azure Log Analytics workspace"
        }
      }
    ]
  },
  {
    "id": "az500-q172",
    "prompt": "NO.172 You have an Azure subscription.\nYou have the following custom role-based access control (RBAC) role definition.\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\n\nStatements:\n• The custom role grants a user permission to delete Azure SQL Database resources.\n• The custom role grants a user permission to manage the Microsoft Entra admin settings for an Azure SQL Database server.\n• The custom role grants a user permission to reset the administrator password for instances of Azure Database for MariaDB.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "s1",
        "label": "The custom role grants a user permission to delete Azure SQL Database resources."
      },
      {
        "id": "s2",
        "label": "The custom role grants a user permission to manage the Microsoft Entra admin settings for an Azure SQL Database server."
      },
      {
        "id": "s3",
        "label": "The custom role grants a user permission to reset the administrator password for instances of Azure Database for MariaDB."
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
          "s3": "No"
        }
      }
    ]
  },
  {
    "id": "az500-q173",
    "prompt": "NO.173 You have an Azure subscription that contains an Azure web app named App1.\nYou plan to configure a Conditional Access policy for App1. The solution must meet the following requirements:\n* Only allow access to App1 from Windows devices.\n* Only allow devices that are marked as compliant to access App1.\n\nWhich Conditional Access policy settings should you configure? To answer, drag the appropriate settings to the correct requirements.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dragMatch",
    "allowAnswerShuffle": false,
    "items": [
      {
        "id": "it1",
        "label": "Cloud apps or actions"
      },
      {
        "id": "it1_2",
        "label": "Cloud apps or actions"
      },
      {
        "id": "it2",
        "label": "Conditions"
      },
      {
        "id": "it2_2",
        "label": "Conditions"
      },
      {
        "id": "it3",
        "label": "Grant"
      },
      {
        "id": "it3_2",
        "label": "Grant"
      },
      {
        "id": "it4",
        "label": "Session"
      },
      {
        "id": "it4_2",
        "label": "Session"
      }
    ],
    "targets": [
      {
        "id": "r1",
        "label": "Only allow access to App1 from Windows devices:"
      },
      {
        "id": "r2",
        "label": "Only allow devices that are marked as compliant to access App1:"
      }
    ],
    "correctByTarget": {
      "r1": "it2",
      "r2": "it2_2"
    }
  },
  {
    "id": "az500-q174",
    "prompt": "NO.174 You have an Azure key vault named KeyVault1 that contains the items shown in the following table.\n\nIn KeyVault1 the following events occur in sequence:\n* Item1 is deleted.\n* Item2 and Policy1 are deleted.\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\n\nStatements:\n• You can recover Policy1.\n• You can add a new key named Item1.\n• You can recover Item2.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "s1",
        "label": "You can recover Policy1."
      },
      {
        "id": "s2",
        "label": "You can add a new key named Item1."
      },
      {
        "id": "s3",
        "label": "You can recover Item2."
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
    ]
  },
  {
    "id": "az500-q175",
    "prompt": "NO.175 You have an Azure environment.\nYou need to identify any Azure configurations and workloads that are non-compliant with ISO 27001 standards.\nWhat should you use?",
    "image": "",
    "answers": [
      "Azure Sentinel",
      "Azure Active Directory (Azure AD) Identity Protection",
      "Azure Security Center",
      "Azure Advanced Threat Protection (ATP)"
    ],
    "correctAnswer": "Azure Security Center",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q176",
    "prompt": "NO.176 You are implementing an Azure Application Gateway web application firewall (WAF) named WAF1.\nYou have the following Bicep code snippet.\n\n(customRules: MatchRule, action: Block, matchVariable: RemoteAddr, operator: IPMatch, negationCondition: true, matchValues: 10.10.10.0/24)\n(policySettings: requestBodyCheck: true, maxRequestBodySizeInKb: 128, state: Enabled, mode: Detection)\n(managedRules: OWASP 3.2)\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\n\nStatements:\n• A request to the backend pool from IP address 10.1.1.5 is allowed.\n• Incoming requests attempting file path attacks are blocked.\n• WAF1 allows a 50-MB file to be uploaded.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "s1",
        "label": "A request to the backend pool from IP address 10.1.1.5 is allowed."
      },
      {
        "id": "s2",
        "label": "Incoming requests attempting file path attacks are blocked."
      },
      {
        "id": "s3",
        "label": "WAF1 allows a 50-MB file to be uploaded."
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
    ]
  },
  {
    "id": "az500-q177",
    "prompt": "NO.177 This question is part of a series that presents the same scenario.\nYou use Azure Security Center for the centralized policy management of three Azure subscriptions.\nYou use several policy definitions to manage the security of the subscriptions.\nYou need to deploy the policy definitions as a group to all three subscriptions.\n\nSolution: You create an initiative and an assignment that is scoped to the Tenant Root Group management group.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "Yes",
    "allowAnswerShuffle": false
  },
  {
    "id": "az500-q178",
    "prompt": "NO.178 You have an Azure subscription that contains the Azure Log Analytics workspaces shown in the following table.\n\nYou create the virtual machines shown in the following table.\n\nYou plan to use Azure Sentinel to monitor Windows Defender Firewall on the virtual machines.\nWhich virtual machines can you connect to Azure Sentinel?",
    "image": "",
    "answers": [
      "VM1 and VM3 only",
      "VM1 only",
      "VM1 and VM2 only",
      "VM1, VM2, VM3 and VM4"
    ],
    "correctAnswer": "VM1, VM2, VM3 and VM4",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q179",
    "prompt": "NO.179 You have an Azure subscription that contains an Azure key vault named Vault1 and a virtual machine named VM1. VM1 has the Key Vault VM extension installed.\nFor Vault1, you rotate the keys, secrets, and certificates.\nWhat will be updated automatically on VM1?",
    "image": "",
    "answers": [
      "the keys only",
      "the secrets only",
      "the certificates only",
      "the keys and secrets only",
      "the secrets and certificates only",
      "the keys, secrets, and certificates"
    ],
    "correctAnswer": "the certificates only",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q180",
    "prompt": "NO.180 You have a Microsoft Entra tenant that contains the users shown in the following table.\n\nAll the users have devices that contain certificates issued by a certification authority (CA) named ContosoCA.\nYou create a Conditional Access policy that has the following settings:\n* Name: CAPolicy1\n* Assignments\n  - Users and groups: Group1\n  - Target resources: Include All cloud apps\n  - Access controls: Grant access: Require multi-factor authentication\n* Enable policy: On\n\nYou enable and target certificate-based authentication and configure it (Group1 targeted, protection level Single-factor authentication).\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\n\nStatements:\n• User1 can sign in without providing a password.\n• User2 can choose to use a certificate or a smart card to sign in.\n• User3 must use a certificate during sign-in.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "s1",
        "label": "User1 can sign in without providing a password."
      },
      {
        "id": "s2",
        "label": "User2 can choose to use a certificate or a smart card to sign in."
      },
      {
        "id": "s3",
        "label": "User3 must use a certificate during sign-in."
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
    ]
  },
  {
    "id": "az500-q181",
    "prompt": "NO.181 You have two Azure virtual machines in the East US2 region as shown in the following table.\n\nYou deploy and configure an Azure Key vault.\nYou need to ensure that you can enable Azure Disk Encryption on VM1 and VM2.\nWhat should you modify on each virtual machine? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "vm1",
        "label": "VM1:"
      },
      {
        "id": "vm2",
        "label": "VM2:"
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "options": [
          "The operating system version",
          "The tier",
          "The type"
        ],
        "correctByRow": {
          "vm1": "The tier",
          "vm2": "The operating system version"
        }
      }
    ]
  },
  {
    "id": "az500-q182",
    "prompt": "NO.182 You have 10 on-premises servers that run Windows Server 2019.\nYou plan to implement Azure Security Center vulnerability scanning for the servers.\nWhat should you install on the servers first?",
    "image": "",
    "answers": [
      "the Security Events data connector in Azure Sentinel",
      "the Microsoft Defender for Endpoint agent",
      "the Azure Arc enabled servers Connected Machine agent",
      "the Microsoft Endpoint Configuration Manager client"
    ],
    "correctAnswer": "the Azure Arc enabled servers Connected Machine agent",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q183",
    "prompt": "NO.183 You have an Azure subscription. The subscription contains Azure virtual machines that run Windows Server 2016.\nYou need to implement a policy to ensure that each virtual machine has a custom antimalware virtual machine extension installed.\nHow should you complete the policy? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "text": "{\n  \"if\": {\n    \"allOf\": [\n      {\n        \"field\": \"type\",\n        \"equals\": \"Microsoft.Compute/virtualMachines\"\n      },\n      {\n        \"field\": \"Microsoft.Compute/imageSKU\",\n        \"equals\": \"2016-Datacenter\"\n      }\n    ]\n  },\n  \"then\": {\n    \"effect\": \""
        },
        {
          "slot": "effect"
        },
        {
          "text": "\",\n    \"details\": {\n      \"type\": \"Microsoft.GuestConfiguration/guestConfigurationAssignments\",\n      \"roleDefinitionIds\": [\n        \"/providers/microsoft.authorization/roleDefinitions/12345678-1234-5678-abcd-012345678910\"\n      ],\n      \"name\": \"customExtension\",\n      \"deployment\": {\n        \"properties\": {\n          \"mode\": \"incremental\",\n          \"parameters\": {},\n          \""
        },
        {
          "slot": "detailsProp"
        },
        {
          "text": "\": {\n          }\n        }\n      }\n    }\n  }\n}"
        }
      ],
      "slots": {
        "effect": {
          "label": "Effect",
          "options": [
            "Append",
            "Deny",
            "DeployIfNotExists"
          ],
          "correct": "DeployIfNotExists"
        },
        "detailsProp": {
          "label": "Details property",
          "options": [
            "existenceCondition",
            "resources",
            "template"
          ],
          "correct": "template"
        }
      }
    }
  },
  {
    "id": "az500-q184",
    "prompt": "NO.184 You have an Azure subscription named Sub1 that is associated to an Azure Active Directory (Azure AD) tenant named contoso.com.\nYou are assigned the Global administrator role for the tenant. You are responsible for managing Azure Security Center settings.\nYou need to create a custom sensitivity label.\nWhat should you do first?",
    "image": "",
    "answers": [
      "Create a custom sensitive information type.",
      "Elevate access for global administrators in Azure AD.",
      "Upgrade the pricing tier of the Security Center to Standard.",
      "Enable integration with Microsoft Cloud App Security."
    ],
    "correctAnswer": "Create a custom sensitive information type.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q185",
    "prompt": "NO.185 You have an Azure subscription that contains a resource group named RG1 and a security group named ServerAdmins. RG1 contains 10 virtual machines, a virtual network named VNET1, and a network security group (NSG) named NSG1. ServerAdmins can access the virtual machines by using RDP.\nYou need to ensure that NSG1 only allows RDP connections to the virtual machines for a maximum of 60 minutes when a member of ServerAdmins requests access.\nWhat should you configure?",
    "image": "",
    "answers": [
      "an Azure policy assigned to RG1",
      "a just in time (JIT) VM access policy in Microsoft Defender for Cloud",
      "an Azure AD Privileged Identity Management (PIM) role assignment",
      "an Azure Bastion host on VNET1"
    ],
    "correctAnswer": "a just in time (JIT) VM access policy in Microsoft Defender for Cloud",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q186",
    "prompt": "NO.186 Note: This question is part of a series of questions that present the same scenario. Each\nquestion in the series contains a unique solution that might meet the stated goals. Some question\nsets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYou use Azure Security Center for the centralized policy management of three Azure subscriptions.\nYou use several policy definitions to manage the security of the subscriptions.\nYou need to deploy the policy definitions as a group to all three subscriptions.\nSolution: You create an initiative and an assignment that is scoped to a management group.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "Yes",
    "allowAnswerShuffle": false
  },
  {
    "id": "az500-q187",
    "prompt": "NO.187 You have an Azure subscription that contains a user named Admin1 and a resource group\nnamed RG1.\nIn Azure Monitor, you create the alert rules shown in the following table.\n\nAdmin1 performs the following actions on RG1:\n* Adds a virtual network named VNET1\n* Adds a Delete lock named Lock1\nWhich rules will trigger an alert as a result of the actions of Admin1? To answer, select the\nappropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r",
        "label": "Resposta"
      }
    ],
    "columns": [
      {
        "id": "vnet1",
        "label": "Adding VNET1:",
        "options": [
          "Rule2 only",
          "Rule4 only",
          "Rule2 and Rule 4 only",
          "Rule3 and Rule 4 only",
          "Rule1, Rule2, Rule3 and Rule 4"
        ],
        "correctByRow": {
          "r": "Rule2 and Rule 4 only"
        }
      },
      {
        "id": "lock1",
        "label": "Adding Lock1:",
        "options": [
          "Rule2 only",
          "Rule4 only",
          "Rule2 and Rule 4 only",
          "Rule3 and Rule 4 only",
          "Rule1, Rule2, Rule3 and Rule 4"
        ],
        "correctByRow": {
          "r": "Rule2 and Rule 4 only"
        }
      }
    ]
  },
  {
    "id": "az500-q188",
    "prompt": "NO.188 Your on-premises network contains a Hyper-V virtual machine named VM1. You need to use\nAzure Arc to onboard VM1 to Microsoft Defender for Cloud. What should you install first?",
    "image": "",
    "answers": [
      "the Azure Monitor agent",
      "the Azure Connected Machine agent",
      "the Log Analytics agent",
      "the guest configuration agent"
    ],
    "correctAnswer": "the Log Analytics agent",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q189",
    "prompt": "NO.189 You have an Azure subscription that contains an Azure SQL database named SQLDB1.\nSQLDB1 contains the columns shown in the following table.\n\nFor the Email and Birthday columns, you implement dynamic data masking by using the default\nmasking function.\nWhich value will the users see in each column? To answer, drag the appropriate values to the correct\ncolumns. Each value may be used once, more than once, or not at all. You may need to drag the split\nbar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dragMatch",
    "allowAnswerShuffle": false,
    "items": [
      {
        "id": "it1",
        "label": "1900-01-01"
      },
      {
        "id": "it2",
        "label": "1900-01-01 00:00:00.0000"
      },
      {
        "id": "it3",
        "label": "2010-XX-XX"
      },
      {
        "id": "it4",
        "label": "XXXX"
      }
    ],
    "targets": [
      {
        "id": "email",
        "label": "Email"
      },
      {
        "id": "birthday",
        "label": "Birthday"
      }
    ],
    "correctByTarget": {
      "email": "it1",
      "birthday": "it3"
    }
  },
  {
    "id": "az500-q190",
    "prompt": "NO.190 You have an Azure AD tenant that contains the users shown in the following table.\n\nYou need to ensure that the users cannot create app passwords. The solution must ensure that User1\ncan continue to use the Mail and Calendar app.\nWhat should you do?",
    "image": "",
    "answers": [
      "Assign User1 the Authentication Policy Administrator role.",
      "Enable Azure AD Password Protection.",
      "Configure a multi-factor authentication (MFA) registration policy.",
      "Create a new app registration."
    ],
    "correctAnswer": "Configure a multi-factor authentication (MFA) registration policy.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q191",
    "prompt": "NO.191 You have an Azure Storage account named storage1 that has a container named container1.\nYou need to prevent the blobs in container1 from being modified. What should you do?",
    "image": "",
    "answers": [
      "From container1, change the access level.",
      "From container1, add an access policy.",
      "From container1, modify the Access Control (IAM) settings.",
      "From storage1, enable soft delete for blobs."
    ],
    "correctAnswer": "From container1, add an access policy.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q192",
    "prompt": "NO.192 You have an Azure subscription.\nYou create an Azure Firewall policy that has the rules shown in the following table.\n\nIn which order should the rules be processed? To answer, move all rules from the list of rules to the\nanswer area and arrange them in the correct order.",
    "image": "",
    "type": "dragMatch",
    "allowAnswerShuffle": false,
    "items": [
      {
        "id": "it1",
        "label": "Rule1"
      },
      {
        "id": "it2",
        "label": "Rule2"
      },
      {
        "id": "it3",
        "label": "Rule3"
      },
      {
        "id": "it4",
        "label": "Rule4"
      },
      {
        "id": "it5",
        "label": "Rule5"
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
      },
      {
        "id": "step5",
        "label": "Step 5"
      }
    ],
    "correctByTarget": {
      "step1": "it1",
      "step2": "it2",
      "step3": "it3",
      "step4": "it4",
      "step5": "it5"
    }
  },
  {
    "id": "az500-q193",
    "prompt": "NO.193 You have an Azure subscription that contains a resource group named RG1 and the\nidentities shown in the following table.\n\nYou assign Group4 the Contributor role for RG1.\nWhich identities can you add to Group4 as members?",
    "image": "",
    "answers": [
      "User1 only",
      "User1 and Group3 only",
      "User1, Group1, and Group3 only",
      "User1, Group2, and Group3 only",
      "User1, Group1, Group2, and Group3"
    ],
    "correctAnswer": "User1, Group1, Group2, and Group3",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q194",
    "prompt": "NO.194 You create an Azure subscription with Azure AD Premium P2.\nYou need to ensure that you can use Azure Active Directory (Azure AD) Privileged Identity\nManagement (PIM) to secure Azure roles.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from\nthe list of actions to the answer area and arrange them in the correct order.",
    "image": "",
    "type": "dragMatch",
    "allowAnswerShuffle": false,
    "items": [
      {
        "id": "it1",
        "label": "Discover privileged roles."
      },
      {
        "id": "it2",
        "label": "Sign up PIM for Azure AD roles."
      },
      {
        "id": "it3",
        "label": "Consent to PIM."
      },
      {
        "id": "it4",
        "label": "Discover resources."
      },
      {
        "id": "it5",
        "label": "Verify your identity by using multi-factor authentication (MFA)."
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
      "step2": "it3",
      "step3": "it2"
    }
  },
  {
    "id": "az500-q195",
    "prompt": "NO.195 You have an Azure subscription that uses Microsoft Defender for Cloud. The subscription\ncontains an instance of Azure Database for PostgreSQL.\nYou need to ensure that an email alert is triggered when a suspected brute force attack on the\ndatabase is detected. The solution must minimize administrative effort.\nWhat should you configure?",
    "image": "",
    "answers": [
      "an Azure Monitor alert rule",
      "Microsoft Defender for open-source relational databases",
      "the Azure Monitor activity log",
      "the PostgreSQL Audit extension (pgAudit)"
    ],
    "correctAnswer": "Microsoft Defender for open-source relational databases",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q196",
    "prompt": "NO.196 You need to configure an access review. The review will be assigned to a new collection of\nreviews and reviewed by resource owners.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from\nthe list of actions to the answer area and arrange them in the correct order.",
    "image": "",
    "type": "dragMatch",
    "allowAnswerShuffle": false,
    "items": [
      {
        "id": "it1",
        "label": "Create an access review program."
      },
      {
        "id": "it2",
        "label": "Set Reviewers to Selected users."
      },
      {
        "id": "it3",
        "label": "Create an access review audit."
      },
      {
        "id": "it4",
        "label": "Create an access review control."
      },
      {
        "id": "it5",
        "label": "Set Reviewers to Group owners."
      },
      {
        "id": "it6",
        "label": "Set Reviewers to Members."
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
      "step2": "it4",
      "step3": "it5"
    }
  },
  {
    "id": "az500-q197",
    "prompt": "NO.197 You have the Azure Information Protection conditions shown in the following table.\n\nYou have the Azure Information Protection labels shown in the following table.\n\nYou need to identify how Azure Information Protection will label files.\nWhat should you identify? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r",
        "label": "Resposta"
      }
    ],
    "columns": [
      {
        "id": "word",
        "label": "If User1 creates a Microsoft Word file that includes the text \"Black and White\", the file will be assigned:",
        "options": [
          "No label",
          "Label1 only",
          "Label2 only",
          "Label1 and Label2"
        ],
        "correctByRow": {
          "r": "Label2 only"
        }
      },
      {
        "id": "notepad",
        "label": "If User1 creates a Microsoft Notepad file that includes the text \"Black or white\", the file will be assigned:",
        "options": [
          "No label",
          "Label1 only",
          "Label2 only",
          "Label1 and Label2"
        ],
        "correctByRow": {
          "r": "No label"
        }
      }
    ]
  },
  {
    "id": "az500-q198",
    "prompt": "NO.198 You have the hierarchy of Azure resources shown in the following exhibit.\nYou create the Azure Blueprints definitions shown in the following table.\nTo which objects can you assign Blueprint1 and Blueprint2? To answer, select the appropriate options\nin the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r",
        "label": "Resposta"
      }
    ],
    "columns": [
      {
        "id": "bp1",
        "label": "Blueprint1:",
        "options": [
          "ManagementGroup1 only",
          "ManagementGroup1, Subscription1, and RG1 only",
          "ManagementGroup1, Subscription1, RG1, and VM1",
          "Subscription1 only",
          "Tenant Root Group only",
          "Tenant Root Group, ManagementGroup1, and Subscription1 only"
        ],
        "correctByRow": {
          "r": "Subscription1 only"
        }
      },
      {
        "id": "bp2",
        "label": "Blueprint2:",
        "options": [
          "ManagementGroup1 only",
          "Subscription1 and RG1 only",
          "Subscription1 only",
          "Subscription1, RG1, and VM1"
        ],
        "correctByRow": {
          "r": "Subscription1 only"
        }
      }
    ]
  },
  {
    "id": "az500-q199",
    "prompt": "NO.199 You have an Azure web app named webapp1.\nYou need to configure continuous deployment for webapp1 by using an Azure Repo.\nWhat should you create first?",
    "image": "",
    "answers": [
      "an Azure Application Insights service",
      "an Azure DevOps organization",
      "an Azure Storage account",
      "an Azure DevTest Labs lab"
    ],
    "correctAnswer": "an Azure DevOps organization",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q200",
    "prompt": "NO.200 You have an Azure subscription that contains a resource group named RG1 and the network\nsecurity groups (NSGs) shown in the following table.\n\nYou create the Azure policy shown in the following exhibit.\nYou assign the policy to RG1.\nWhat will occur if you assign the policy to NSG1 and NSG2?",
    "image": "",
    "answers": [
      "Flow logs will be enabled for NSG1 and NSG2.",
      "Flow logs will be enabled for NSG2 only.",
      "Flow logs will be disabled for NSG1 and NSG2.",
      "Flow logs will be enabled for NSG1 only."
    ],
    "correctAnswer": "Flow logs will be enabled for NSG2 only.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q201",
    "prompt": "NO.201 You have an Azure Active Directory (Azure AD) tenant named contoso1812.onmicrosoft.com that contains the users shown in the following table.\nYou create an Azure Information Protection label named Label1. The Protection settings for Label1 are configured as shown in the exhibit.\nLabel1 is applied to a file named File1.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "s1",
        "label": "User1 can print File1."
      },
      {
        "id": "s2",
        "label": "User3 can read File1."
      },
      {
        "id": "s3",
        "label": "User4 can print File1."
      }
    ],
    "columns": [
      {
        "id": "yn",
        "label": "",
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
    ]
  },
  {
    "id": "az500-q202",
    "prompt": "NO.202 You have an Azure subscription that contains the following resources:\n* A network virtual appliance (NVA) that runs non-Microsoft firewall software and routes all outbound traffic from the virtual machines to the internet\n* An Azure function that contains a script to manage the firewall rules of the NVA\n* Azure Security Center standard tier enabled for all virtual machines\n* An Azure Sentinel workspace\n* 30 virtual machines\nYou need to ensure that when a high-priority alert is generated in Security Center for a virtual machine, an incident is created in Azure Sentinel and then a script is initiated to configure a firewall rule for the NVA.\nHow should you configure Azure Sentinel to meet the requirements? To answer, drag the appropriate components to the correct requirements.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dragMatch",
    "allowAnswerShuffle": false,
    "items": [
      {
        "id": "it1",
        "label": "A data connector for Security Center"
      },
      {
        "id": "it2",
        "label": "A data connector for the firewall software"
      },
      {
        "id": "it3",
        "label": "A playbook"
      },
      {
        "id": "it4",
        "label": "A rule"
      },
      {
        "id": "it5",
        "label": "A Security Events connector"
      },
      {
        "id": "it6",
        "label": "A workbook"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "label": "Enable alert notifications from Security Center:"
      },
      {
        "id": "t2",
        "label": "Create an incident:"
      },
      {
        "id": "t3",
        "label": "Initiate a script to configure the firewall rule:"
      }
    ],
    "correctByTarget": {
      "t1": "it1",
      "t2": "it4",
      "t3": "it3"
    }
  },
  {
    "id": "az500-q203",
    "prompt": "NO.203 You have a hybrid configuration of Azure Active Directory (Azure AD). You have an Azure\nSQL Database instance that is configured to support Azure AD authentication.\nDatabase developers must connect to the database instance and authenticate by using their on-\npremises Active Directory account.\nYou need to ensure that developers can connect to the instance by using Microsoft SQL Server\nManagement Studio. The solution must minimize authentication prompts.\nWhich authentication method should you recommend?",
    "image": "",
    "answers": [
      "Active Directory - Password",
      "Active Directory - Universal with MFA support",
      "SQL Server Authentication",
      "Active Directory - Integrated"
    ],
    "correctAnswer": "Active Directory - Integrated",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q204",
    "prompt": "NO.204 You have an Azure Active Directory (Azure AD) tenant named contoso.com that contains three security groups named Group1, Group2, and Group3 and the users shown in the following table.\nGroup3 is a member of Group2.\nIn contoso.com, you register an enterprise application named App1 that has the following settings:\n* Owners: User1\n* Users and groups: Group2\nYou configure the properties of App1 as shown in the exhibit.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "u1",
        "label": "User1 has App1 listed on his My Apps portal."
      },
      {
        "id": "u2",
        "label": "User2 has App1 listed on her My Apps portal."
      },
      {
        "id": "u3",
        "label": "User3 has App1 listed on her My Apps portal."
      }
    ],
    "columns": [
      {
        "id": "yn",
        "label": "",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "u1": "Yes",
          "u2": "Yes",
          "u3": "No"
        }
      }
    ]
  },
  {
    "id": "az500-q205",
    "prompt": "NO.205 You have an Azure subscription that contains the resources shown in the following table.\n \nYou need to configure AFW1 to only allow traffic from VM1 to storage accounts in the West US Azure\nregion. The solution must minimize administrative effort.\nWhat should you configure?",
    "image": "",
    "answers": [
      "a DNAT rule",
      "a network rule",
      "an SNAT private IP address range",
      "an application rule"
    ],
    "correctAnswer": "a network rule",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q206",
    "prompt": "NO.206 You have a management group named MG1 that contains an Azure subscription named Sub1.\nSub1 contains the resources shown in the table.\nYou create two Azure Virtual Network Manager instances and security admin configurations as shown.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "st1",
        "label": "If you change Priority for NSGRule1 to 100, NSG1 will be processed before SA1 and SA2."
      },
      {
        "id": "st2",
        "label": "Internet traffic is blocked to the public IP address of VM1."
      },
      {
        "id": "st3",
        "label": "If you change Action for SARule1 to Allow, internet traffic to the public IP address of VM1 will be enabled automatically."
      }
    ],
    "columns": [
      {
        "id": "yn",
        "label": "",
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
    ]
  },
  {
    "id": "az500-q207",
    "prompt": "NO.207 Note: This question is part of a series of questions that present the same scenario. Each\nquestion in the series contains a unique solution that might meet the stated goals. Some question\nsets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYou use Azure Security Center for the centralized policy management of three Azure subscriptions.\nYou use several policy definitions to manage the security of the subscriptions.\nYou need to deploy the policy definitions as a group to all three subscriptions.\nSolution: You create a resource graph and an assignment that is scoped to a management group.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "Yes",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q208",
    "prompt": "NO.208 You have an Azure AD tenant.\nYou plan to implement an authentication solution to meet the following requirements:\n* Require number matching.\n* Display the geographical location when signing in.\nWhich authentication method should you include in the solution?",
    "image": "",
    "answers": [
      "SMS",
      "Temporary Access Pass",
      "Microsoft Authenticator",
      "FID02 security key"
    ],
    "correctAnswer": "Temporary Access Pass",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q209",
    "prompt": "NO.209 You have an Azure subscription that contains the virtual machines shown in the following\ntable.\n \nAll the virtual networks are peered.\nYou deploy Azure Bastion to VNET2.\nWhich virtual machines can be protected by the bastion host?",
    "image": "",
    "answers": [
      "VM1, VM2, VM3, and VM4",
      "VM1, VM2, and VM3 only",
      "VM2 and VM4 only",
      "VM2 only"
    ],
    "correctAnswer": "VM1, VM2, VM3, and VM4",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q210",
    "prompt": "NO.210 You have an Azure subscription that contains the resources shown in the following table.\n \nYou need to ensure that ServerAdmins can perform the following tasks:\nCreate virtual machine to the existing virtual network in RG2 only.\nThe solution must use the principle of least privilege.\nWhich two role-based access control (RBAC) roles should you assign to ServerAdmins? Each correct\nanswer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "the Contributor role for the subscription IT Certification Guaranteed, The Easy Way! 189",
      "the Network Contributor role for RG2",
      "A custom RBAC role for the subscription",
      "a custom RBAC role for RG2",
      "the Network Contributor role for RG1.",
      "the Virtual Machine Contributor role for RG1."
    ],
    "correctAnswer": [
    "a custom RBAC role for RG2",
    "the Virtual Machine Contributor role for RG1."
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q211",
    "prompt": "NO.211 You are configuring network connectivity for two Azure virtual networks named VNET1 and VNET2.\nYou need to implement VPN gateways to meet the following requirements:\n* VNET1 must have six site-to-site connections that use BGP.\n* VNET2 must have 12 site-to-site connections that use BGP.\n* Costs must be minimized.\nWhich VPN gateway SKU should you use for each virtual network? To answer, drag the appropriate SKUs to the correct networks.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dragMatch",
    "allowAnswerShuffle": false,
    "items": [
      {
        "id": "it1",
        "label": "Basic"
      },
      {
        "id": "it2",
        "label": "Basic"
      },
      {
        "id": "it3",
        "label": "VpnGw1"
      },
      {
        "id": "it4",
        "label": "VpnGw1"
      },
      {
        "id": "it5",
        "label": "VpnGw2"
      },
      {
        "id": "it6",
        "label": "VpnGw2"
      },
      {
        "id": "it7",
        "label": "VpnGw3",
      },
      {
        "id": "it8",
        "label": "VpnGw3"
      }
    ],
    "targets": [
      {
        "id": "vnet1",
        "label": "VNET1:"
      },
      {
        "id": "vnet2",
        "label": "VNET2:"
      }
    ],
    "correctByTarget": {
      "vnet1": "it3",
      "vnet2": "it4"
    }
  },
  {
    "id": "az500-q212",
    "prompt": "NO.212 You have an Azure subscription that contains three storage accounts, an Azure SQL managed instance named SQL1, and three Azure SQL databases.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "db1",
        "label": "Audit events for DB1 are written to storage1."
      },
      {
        "id": "db2",
        "label": "Audit events for DB2 are written to storage1 and storage2."
      },
      {
        "id": "db3",
        "label": "Storage3 can be used as an audit log destination for DB3."
      }
    ],
    "columns": [
      {
        "id": "yn",
        "label": "",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "db1": "Yes",
          "db2": "Yes",
          "db3": "No"
        }
      }
    ]
  },
  {
    "id": "az500-q213",
    "prompt": "NO.213 You have an Azure subscription that contains a web app named Appl. App1 provides users\nwith product images and videos. Users access App1 by using a URL of HTTPS://appl.contoso.com. You\ndeploy two server pools named Pool! and Pool2. Pool1 hosts product images. Pool2 hosts product\nvideos. You need to optimize The performance of Appl. The solution must meet the following\nrequirements:\n* Minimize the performance impact of TLS connections on Pool1 and Pool2.\n* Route user requests to the server pools based on the requested URL path.\nWhat should you include in the solution?",
    "image": "",
    "answers": [
      "Azure Traffic Manager",
      "Azure Bastion",
      "Azure Application Gateway",
      "Azure Front Door"
    ],
    "correctAnswer": "Azure Application Gateway",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q214",
    "prompt": "NO.214 You have an Azure subscription that contains an Azure Files share named share1 and a user\nnamed User1.\nIdentity-based authentication is configured for share1.\nUser1 attempts to access share1 from a Windows 10 device by using SMB.\nWhich type of token will Azure Files use to authorize the request?",
    "image": "",
    "answers": [
      "OAuth 20",
      "JSON Web Token (JWT)",
      "Kerberos",
      "SAML"
    ],
    "correctAnswer": "Kerberos",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q215",
    "prompt": "NO.215 You have an Azure Container Registry named ContReg1 that contains a container image\nnamed image1.\nYou enable content trust for ContReg1.\nAfter content trust is enabled, you push two images to ContReg1 as shown in the following table.\nWhich images are trusted images?",
    "image": "",
    "answers": [
      "image1 and image2 only",
      "image2 only",
      "image1, image2, and image3"
    ],
    "correctAnswer": "image2 only",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q216",
    "prompt": "NO.216 You have an on-premises datacenter that contains multiple servers.\nYou have an Azure subscription.\nYou plan to onboard the on-premises servers to Microsoft Defender for Cloud by using a script.\nYou need to create an identity to enable the script to run without prompting for Microsoft Entra\ncredentials.\nWhich type of identity should you create?",
    "image": "",
    "answers": [
      "user account",
      "user-assigned managed identity",
      "system-assigned managed identity",
      "group account IT Certification Guaranteed, The Easy Way! 192",
      "service principal"
    ],
    "correctAnswer": "user account",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q217",
    "prompt": "NO.217 You have an Azure subscription that contains an Azure key vault. The role assignments for the key vault are shown in the exhibit.\nUse the drop-down menus to select the answer choice that completes each statement based on the information presented.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "k",
        "label": "[Answer choice] can create keys in the key vault."
      },
      {
        "id": "s",
        "label": "[Answer choice] can create secrets in the key vault."
      }
    ],
    "columns": [
      {
        "id": "ac",
        "label": "",
      "optionsByRow": {
        "k": [
          "Only User1",
          "Only User2",
          "Only User1 and User4",
          "Only User1, User2, and User4",
          "User1, User2, User3, and User4"
        ],
        "s": [
          "Only User3",
          "Only User1 and User3",
          "Only User3 and User4",
          "Only User1, User3, and User4",
          "User1, User2, User3, and User4"
        ]
      },
        "correctByRow": {
          "k": "Only User1 and User4",
          "s": "Only User1 and User3"
        }
      }
    ]
  },
  {
    "id": "az500-q218",
    "prompt": "NO.218 You have an Azure subscription that contains an Azure SQL server named sqlsrv1 and an\nAzure SQL database named DB1. Sqlsrv1 is configured for Microsoft Entra authentication only.\nYou have the Microsoft Entra identities shown in the following table.\nWhich users can create scoped credentials for DB1?",
    "image": "",
    "answers": [
      "User1 only",
      "User1 and User2 only",
      "User1, User2, and User3"
    ],
    "correctAnswer": "User1, User2, and User3",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q219",
    "prompt": "NO.219 You have an Azure subscription that contains the virtual machines shown in the table.\nSubnet1 and Subnet2 have a Microsoft.Storage service endpoint configured.\nYou have an Azure Storage account named storageacc1 that is configured as shown in the exhibit.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "vm1",
        "label": "From VM1, you can upload a blob to storageacc1."
      },
      {
        "id": "vm2",
        "label": "From VM2, you can upload a blob to storageacc1."
      },
      {
        "id": "vm3",
        "label": "From VM3, you can upload a blob to storageacc1."
      }
    ],
    "columns": [
      {
        "id": "yn",
        "label": "",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "vm1": "Yes",
          "vm2": "No",
          "vm3": "No"
        }
      }
    ]
  },
  {
    "id": "az500-q220",
    "prompt": "NO.220 You have an Azure subscription named Sub1.\nIn Azure Security Center, you have a workflow automation named WF1. WF1 is configured to send an\nemail message to a user named User1.\nYou need to modify WF1 to send email messages to a distribution group named Alerts.\nWhat should you use to modify WF1?",
    "image": "",
    "answers": [
      "Azure Application Insights",
      "Azure Monitor",
      "Azure Logic Apps Designer",
      "Azure DevOps"
    ],
    "correctAnswer": "Azure Logic Apps Designer",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q221",
    "prompt": "NO.221 You have an Azure subscription named Sub1. Sub1 contains an Azure virtual machine named VM1 that runs Windows Server 2016.\nYou need to encrypt VM1 disks by using Azure Disk Encryption.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.",
    "image": "",
    "type": "dragMatch",
    "allowAnswerShuffle": false,
    "items": [
      {
        "id": "it1",
        "label": "Configure secrets for the Azure key vault."
      },
      {
        "id": "it2",
        "label": "Create an Azure key vault."
      },
      {
        "id": "it3",
        "label": "Run Set-AzureRmStorageAccount."
      },
      {
        "id": "it4",
        "label": "Configure access policies for the Azure key vault."
      },
      {
        "id": "it5",
        "label": "Run Set-AzureRmVmDiskEncryptionExtension."
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
      "step1": "it2",
      "step2": "it4",
      "step3": "it5"
    }
  },
  {

    "id": "az500-q222",
    "prompt": "NO.222 You have an Azure subscription that contains an Azure Data Lake Storage account named\nsa1.\nYou plan to deploy an app named App1 that will access sa1 and perform operations, including Read.\nList, Create Directory, and Delete Directory.\nYou need to ensure that App1 can connect securely to sa1 by using a private endpoint What is the\nminimum number of private endpoints required for sa1?",
    "image": "",
    "answers": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": "1",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q223",
    "prompt": "NO.223 You plan to deploy a custom policy initiative for Microsoft Defender for Cloud.\nYou need to identify all the resource groups that have a Delete lock.\nHow should you complete the policy definition? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "text": "...\n\n  \"policyRule\": {\n    \"if\": {\n      \"field\": \"type\",\n      \"equals\": \""
        },
        {
          "slot": "c1"
        },
        {
          "text": "\"\n    },\n    \"then\": {\n      \"effect\": \"auditIfNotExists\",\n      \"details\": {\n        \"type\": \"Microsoft.Authorization/locks\",\n        \""
        },
        {
          "slot": "c2"
        },
        {
          "text": "\": {\n          \"field\": \"Microsoft.Authorization/locks/level\",\n          \"equals\": \"CanNotDelete\"\n        }\n      }\n    }\n  }\n\n..."
        }
      ],
      "slots": {
        "c1": {
          "label": "equals",
          "options": [
            "Microsoft.Resources/subscriptions",
            "Microsoft.Resources/subscriptions/resourceGroups",
            "resourceGroups"
          ],
          "correct": "Microsoft.Resources/subscriptions/resourceGroups"
        },
        "c2": {
          "label": "details",
          "options": [
            "existenceCondition",
            "operations",
            "value"
          ],
          "correct": "existenceCondition"
        }
      }
    }
  },
  {
    "id": "az500-q224",
    "prompt": "NO.224 You have an Azure AD tenant and an application named App1.\nYou need to ensure that App1 can use Microsoft Entra Verified ID to verify credentials.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.",
    "image": "",
    "type": "dragMatch",
    "allowAnswerShuffle": false,
    "items": [
      {
        "id": "it1",
        "label": "Add an identity provider."
      },
      {
        "id": "it2",
        "label": "Configure an authentication methods policy."
      },
      {
        "id": "it3",
        "label": "Create an Azure key vault."
      },
      {
        "id": "it4",
        "label": "Configure the Verified ID service."
      },
      {
        "id": "it5",
        "label": "Register App1 in Azure AD and grant permissions."
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
      "step1": "it3",
      "step2": "it4",
      "step3": "it5"
    }
  },
  {
    "id": "az500-q225",
    "prompt": "NO.225 You have an Azure subscription that is linked to an Azure Active Directory (Azure AD) tenant\n.\nFrom the Azure portal, you register an enterprise application.\nWhich additional resource will be created in Azure AD?",
    "image": "",
    "answers": [
      "a service principal",
      "an X.509 certificate",
      "a managed identity",
      "a user account"
    ],
    "correctAnswer": "a service principal",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q226",
    "prompt": "NO.226 You are troubleshooting a security issue for an Azure Storage account You enable Azure\nStorage Analytics logs and archive It to a storage account. What should you use to retrieve the\ndiagnostics logs?",
    "image": "",
    "answers": [
      "Azure Storage Explorer",
      "SQL query editor in Azure",
      "Azure Monitor",
      "Azure Cosmos DB explorer"
    ],
    "correctAnswer": "Azure Storage Explorer",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q227",
    "prompt": "NO.227 You have an Azure subscription.\nYou need to ensure that you receive notifications regarding suspicious Azure DNS activity.\nWhich Microsoft Defender plan for Cloud Workload Protection (CWP) should you enable?",
    "image": "",
    "answers": [
      "Storage",
      "Servers",
      "App Service",
      "APIs",
      "Resource Manager"
    ],
    "correctAnswer": "Servers",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q228",
    "prompt": "NO.228 You have a Microsoft Entra tenant named contoso.com that contains a user named User1.\nYou register an app named App1 in contoso.com and create an app role named Role1.\nYou need to assign Role1 to User1.\nWhat should you configure on the Enterprise applications blade of App1 in the Microsoft Entra admin\ncenter?",
    "image": "",
    "answers": [
      "API permissions",
      "App roles",
      "Users and groups",
      "Roles and administrators"
    ],
    "correctAnswer": "Users and groups",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q229",
    "prompt": "NO.229 You need to implement the planned change for WAF1.\nThe solution must minimize administrative effort\nWhat should you do?",
    "image": "",
    "answers": [
      "Create an Azure policy.",
      "Modify the Azure-managed DRS.",
      "Add a custom rule.",
      "Modify the Bot Manager 1.1 rule set."
    ],
    "correctAnswer": "Add a custom rule.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q230",
    "prompt": "NO.230 You have five Azure subscriptions linked to a single Azure Active Directory (Azure AD) tenant.\nYou create an Azure Policy initiative named SecurityPolicyInitiative1.\nYou identify which standard role assignments must be configured on all new resource groups.\nYou need to enforce SecurityPolicyInitiative1 and the role assignments when a new resource group is created.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.",
    "image": "",
    "type": "dragMatch",
    "allowAnswerShuffle": false,
    "items": [
      {
        "id": "it1",
        "label": "Publish an Azure Blueprints version"
      },
      {
        "id": "it2",
        "label": "Assign an Azure blueprint."
      },
      {
        "id": "it3",
        "label": "Create a policy assignment."
      },
      {
        "id": "it4",
        "label": "Create a custom role-based access control (RBAC) role."
      },
      {
        "id": "it5",
        "label": "Create a dedicated management subscription."
      },
      {
        "id": "it6",
        "label": "Create an Azure Blueprints definition."
      },
      {
        "id": "it7",
        "label": "Create an initiative assignment."
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
      "step1": "it6",
      "step2": "it1",
      "step3": "it2"
    }
  },
  {
    "id": "az500-q231",
    "prompt": "NO.231 You have an Azure subscription that uses Microsoft Sentinel.\nYou need to create a Microsoft Sentinel notebook that will use the Guided Investigation - Anomaly\nLookup template.\nWhat should you create first?",
    "image": "",
    "answers": [
      "an analytics rule",
      "a Log Analytics workspace",
      "an Azure Machine Learning workspace",
      "a hunting query"
    ],
    "correctAnswer": "an analytics rule",
    "allowAnswerShuffle": true
  },
  {
  "id": "az500-q232",
  "prompt": "NO.232 You have the role assignments shown in the exhibit.\nUse the drop-down menus to select the answer choice that completes each statement based on the information presented.\nNOTE: Each correct selection is worth one point.",
  "image": "",
  "type": "dropdownMatrix",
  "allowAnswerShuffle": false,
  "rows": [
    {
      "id": "d",
      "label": "[answer choice] can delete VM1."
    },
    {
      "id": "rg",
      "label": "[answer choice] can create new resource groups."
    }
  ],
  "columns": [
    {
      "id": "ac",
      "label": "",
      "optionsByRow": {
        "d": [
          "Admin1 only",
          "Only Admin1 and Admin2",
          "Only Admin1 and Admin3",
          "Only Admin1 and Admin4",
          "Admin1, Admin2, Admin3, and Admin4"
        ],
        "rg": [
          "Admin1 only",
          "Admin2 only",
          "Admin3 only",
          "Only Admin1 and Admin3",
          "Admin1, Admin2, Admin3, and Admin4"
        ]
      },
      "correctByRow": {
        "d": "Only Admin1 and Admin2",
        "rg": "Admin3 only"
      }
    }
  ]
},
  {
    "id": "az500-q233",
    "prompt": "NO.233 You have an Azure subscription named Sub1. Sub1 contains a virtual network named VNet1\nthat contains one subnet named Subnet1.\nYou create a service endpoint for Subnet1.\nSubnet1 contains an Azure virtual machine named VM1 that runs Ubuntu Server 18.04.\nYou need to deploy Docker containers to VM1. The containers must be able to access Azure Storage\nresources and Azure SQL databases by using the service endpoint.",
    "image": "",
    "answers": [
      "Create an application security group and a network security group (NSG).",
      "Edit the docker-compose.yml file.",
      "Install the container network interface (CNI) plug-in."
    ],
    "correctAnswer": "Install the container network interface (CNI) plug-in.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q234",
    "prompt": "NO.234 Your on-premises network contains the servers shown in the following table.\nYou have an Azure subscription that contains multiple virtual machines that run either Windows Server 2019 or SLES.\nYou plan to implement adaptive application controls in Microsoft Defender for Cloud.\nWhich operating systems and platforms can you monitor? To answer, select the appropriate options in the answer area.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "os",
        "label": "Operating systems:"
      },
      {
        "id": "pf",
        "label": "Platforms:"
      }
    ],
    "columns": [
      {
        "id": "os",
        "label": "",
      "optionsByRow": {
        "os": [
          "SLES only",
          "Windows Server only",
          "SLES and Windows Server"
        ],
        "pf": [
          "Azure virtual machines only",
          "Azure virtual machines and Hyper-V virtual machines only",
          "Azure Arc-enabled servers and Azure virtual machines only",
          "Azure virtual machines, Hyper-V virtual machines, and Azure Arc-enabled servers"
        ]
      },
      "correctByRow": {
        "os": "Windows Server only",
        "rg": "Azure virtual machines only"
      }
    }
  ]
},
  {
    "id": "az500-q235",
    "prompt": "NO.235 On Monday, you configure an email notification in Microsoft Defender for Cloud to notify user1@contoso.com about alerts that have a severity level of Low, Medium, or High.\nOn Tuesday, Microsoft Defender for Cloud generates the security alerts shown in the table.\nHow many email notifications will user1@contoso.com receive on Tuesday? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "rdp",
        "label": "Total number of Microsoft Defender for Cloud email notifications about an RDP brute force attack on Tuesday:"
      },
      {
        "id": "total",
        "label": "Total number of Microsoft Defender for Cloud email notifications on Tuesday:"
      }
    ],
    "columns": [
      {
        "id": "n1",
        "label": "",
      "optionsByRow": {
        "rdp": [
          "1",
          "2",
          "3",
          "4"
        ],
        "total": [
          "3",
          "4",
          "7",
          "9",
          "11"
        ]
      },
      "correctByRow": {
          "rdp": "4",
          "total": "7"
        }
      }
    ]
  },
  {
    "id": "az500-q236",
    "prompt": "NO.236 Note: This section contains one or more sets of questions with the same scenario and\\nproblem. Each question presents a unique solution to the problem. You must determine whether the\\nsolution meets the stated goals.\\nMore than one solution in the set might solve the problem. It is also possible that none of the\\nsolutions in the set solve the problem.\\nAfter you answer a question in this section, you will NOT be able to return. As a result, these\\nquestions do not appear on the Review Screen.\\nYou have an Azure subscription that contains the resources shown in the following table.\\nYou have The users shown in the following table.\\nYou create an Azure SQL managed instance named SQL1 and enable Microsoft Entra-only\\nauthentication.\\nYou need to ensure that both User1 and User2 are set as the Microsoft Entra admin for SQL1.\\nSolution: You set MM as the Microsoft Entra admin for SQL1.\\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "No",
    "allowAnswerShuffle": false
  },
  {
    "id": "az500-q237",
    "prompt": "NO.237 You have an Azure Active Directory (Azure AD) tenant that contains the resources shown in\\nthe following table.\\nUser2 is the owner of Group2.\\nThe user and group settings for App1 are configured as shown in the following exhibit.\\nYou enable self-service application access for App1 as shown in the following exhibit.\\nUser3 is configured to approve access to Appl.\\nYou need to identify the owners of Group2 and the users of Appl.\\nWhat should you identify? To answer, select the appropriate options in the answer area.\\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r1",
        "label": " "
      }
    ],
    "columns": [
      {
        "id": "group2owners",
        "label": "Group2 owners",
        "options": [
          "User2 only",
          "User3 only",
          "User1 and User2 only",
          "User2 and User3 only",
          "User1, User2, and User3"
        ],
        "correctByRow": {
          "r1": "User2 only"
        }
      },
      {
        "id": "app1users",
        "label": "App1 users",
        "options": [
          "Group1 members only",
          "Group2 members only",
          "Group1 and Group2 members only",
          "Group1 and Group2 members and User1 only",
          "Group1 and Group2 members, User1, and User3 only"
        ],
        "correctByRow": {
          "r1": "Group1 and Group2 members only"
        }
      }
    ]
  },
  {
    "id": "az500-q238",
    "prompt": "NO.238 You have an Azure AD tenant named contoso.com that has Azure AD Premium P1 licenses.\\nYou need to create a group named Group! that will be assigned the Global reader role.\\nWhich portal should you use to create Group1 and which type of group should you create? To\\nanswer, select the appropriate options in the answer area.\\nNOTE: Each correct selection is worth one point",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r1",
        "label": " "
      }
    ],
    "columns": [
      {
        "id": "portal",
        "label": "Portal",
        "options": [
          "The Azure Active Directory admin center only",
          "The Microsoft 365 admin center only",
          "The Azure Active Directory admin center or the Microsoft 365 admin center"
        ],
        "correctByRow": {
          "r1": "The Azure Active Directory admin center only"
        }
      },
      {
        "id": "grouptype",
        "label": "Group type",
        "options": [
          "Security only",
          "Microsoft 365 only",
          "Security or mail-enabled security only",
          "Security or Microsoft 365 only",
          "Security, Microsoft 365, or mail-enabled security"
        ],
        "correctByRow": {
          "r1": "Security only"
        }
      }
    ]
  },
  {
    "id": "az500-q239",
    "prompt": "NO.239 You have an Azure subscription named Sub1. Sub1 has an Azure Storage account named Storage1 that contains the resources shown in the following table.\\n\\nYou generate a shared access signature (SAS) to connect to the blob service and the file service.\\nWhich tool can you use to access the contents in Container1 and Share1 by using the SAS? To answer, select the appropriate options in the answer area.\\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r1",
        "label": " "
      }
    ],
    "columns": [
      {
        "id": "container1",
        "label": "Tools for Container1",
        "options": [
          "Robocopy.exe",
          "Azure Storage Explorer",
          "File Explorer"
        ],
        "correctByRow": {
          "r1": "Azure Storage Explorer"
        }
      },
      {
        "id": "share1",
        "label": "Tools for Share1",
        "options": [
          "Robocopy.exe",
          "Azure Storage Explorer",
          "File Explorer"
        ],
        "correctByRow": {
          "r1": "Azure Storage Explorer"
        }
      }
    ]
  },
  {
    "id": "az500-q240",
    "prompt": "NO.240 You have an Azure web app named WebApp1.\\nYou upload a certificate to WebApp1.\\nYou need to make the certificate accessible to the app code of WebApp1.\\nWhat should you do?",
    "image": "",
    "answers": [
      "Add a user-assigned managed identity to WebApp1.",
      "Add an app setting to the WebApp1 configuration.",
      "Enable system-assigned managed identity for the WebApp1.",
      "Configure the TLS/SSL binding for WebApp1."
    ],
    "correctAnswer": "Add an app setting to the WebApp1 configuration.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q241",
    "prompt": "NO.241 You are troubleshooting a security issue for an Azure Storage account.\\nYou enable the diagnostic logs for the storage account. What should you use to retrieve the\\ndiagnostics logs?",
    "image": "",
    "answers": [
      "the Security & Compliance admin center",
      "SQL query editor in Azure",
      "File Explorer in Windows",
      "AzCopy"
    ],
    "correctAnswer": "AzCopy",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q242",
    "prompt": "NO.242 You have an Azure subscription that contains an Azure Kubernetes Service (AKS) cluster\\nnamed AKS1.\\nYou have an Azure container registry that stores container images that were deployed by using Azure\\nDevOps Microsoft-hosted agents.\\nYou need to ensure that administrators can access AKS1 only from specific networks. The solution\\nmust minimize administrative effort.\\nWhat should you configure for AKS1?",
    "image": "",
    "answers": [
      "an Application Gateway Ingress Controller (AGIC)",
      "a private cluster",
      "authorized IP address ranges",
      "a private endpoint"
    ],
    "correctAnswer": "authorized IP address ranges",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q243",
    "prompt": "NO.243 You have an Azure key vault named KeyVault1 that contains the items shown in the\\nfollowing table.\\nIn KeyVault, the following events occur in sequence:\\n*Item1 is deleted\\n* Administrator enables soft delete\\n* Item2 and Policy1 are deleted.\\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "s1",
        "label": "You can recover Policy1."
      },
      {
        "id": "s2",
        "label": "You can add a new key named Item1."
      },
      {
        "id": "s3",
        "label": "You can add a new secret named Item2."
      }
    ],
    "columns": [
      {
        "id": "choice",
        "label": "Answer",
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
    ]
  },
  {
    "id": "az500-q244",
    "prompt": "NO.244 Note: The question is included in a number of questions that depicts the identical set-up.\\nHowever, every question has a distinctive result. Establish if the solution satisfies the requirements.\\n‘Your company has an Active Directory forest with a single domain, named weylandindustries.com.\\nThey also have an Azure Active Directory (Azure AD) tenant with the same name.\\nYou have been tasked with integrating Active Directory and the Azure AD tenant. You intend to\\ndeploy Azure AD Connect.\\nYour strategy for the integration must make sure that password policies and user logon limitations\\naffect user accounts that are synced to the Azure AD tenant, and that the amount of necessary\\nservers are reduced.\\nSolution: You recommend the use of pass-through authentication and seamless SSO with password\\nhash synchronization.\\nDoes the solution meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "Yes",
    "allowAnswerShuffle": false
  },
  {
    "id": "az500-q245",
    "prompt": "NO.245 You have an Azure subscription that contains the resources shown in the following Table.\\nYou plan to enable Microsoft Defender for Cloud for the subscription. Which resources can be\\nprotected by using Microsoft Defender for Cloud?",
    "image": "",
    "answers": [
      "VM1, VNET1, and storage1 only",
      "VMI, storage1, and Vault only",
      "VM1.VNET1, storage1, and Vault1",
      "VM1 and storage1 only",
      "VM1 and VNET only"
    ],
    "correctAnswer": "VM1.VNET1, storage1, and Vault1",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q246",
    "prompt": "NO.246 You have a Microsoft Sentinel deployment.\\nYou need to connect a third-party security solution to the deployment. The third-party solution will\\nsend Common Event Format (CER-formatted messages.\\n‘What should you include in the solution? To answer, select the appropriate options in the answer\\narea.\\nNOTE: Each correct selection is worth one point.\\n‘ower Bren\\noe .\\nFora events to Moo Sentel ying .",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r1",
        "label": " "
      }
    ],
    "columns": [
      {
        "id": "deploy",
        "label": "Deploy",
        "options": [
          "A Windows server and a Windows Event Forwarding subscription",
          "A Linux server and a Syslog subscription",
          "An Azure Log Analytics workspace only"
        ],
        "correctByRow": {
          "r1": "A Windows server and a Windows Event Forwarding subscription"
        }
      },
      {
        "id": "forward",
        "label": "Forward events to Microsoft Sentinel by using",
        "options": [
          "An Azure Log Analytics agent",
          "The Azure Monitor agent",
          "The Microsoft Sentinel data collector API"
        ],
        "correctByRow": {
          "r1": "An Azure Log Analytics agent"
        }
      }
    ]
  },
  {
    "id": "az500-q247",
    "prompt": "NO.247 You have an Azure Active Directory (Azure AD) tenant that contains a group named Groupt\\nYou need to ensure that the members of Groupt sign in by using passwordless authentication What\\nshould you do?\\n‘A. Configure the Microsoft Authenticator authentication method policy.",
    "image": "",
    "answers": [
      "Configure the Microsoft Authenticator authentication method policy.",
      "Configure the certificate-based authentication (CBA) policy.",
      "Configure the sign-in risk policy.",
      "Create a Conditional Access policy."
    ],
    "correctAnswer": "Configure the Microsoft Authenticator authentication method policy.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q248",
    "prompt": "NO.248 You work at a company named Contoso, Ltd. that has the offices shown in the following table.\\nContoso has an Azure Active Directory (Azure AD) tenant named contoso.com. All contoso.com users\\nhave Azure Multi-Factor Authentication (MFA) enabled. The tenant contains the users shown in the\\nfollowing table.\\nThe multi-actor settings for contoso.com are configured as shown in the following exhibit.\\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "st1",
        "label": "When User1 signs in to Device1 from the Seattle office on June 10, the user will be prompted for MFA."
      },
      {
        "id": "st2",
        "label": "When User2 signs in to Device2 from the Boston office on June 5, the user will be prompted for MFA."
      },
      {
        "id": "st3",
        "label": "When User1 signs in to a new device from the Seattle office on June 7, the user will be prompted for MFA."
      }
    ],
    "columns": [
      {
        "id": "choice",
        "label": "Answer",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "st1": "No",
          "st2": "Yes",
          "st3": "Yes"
        }
      }
    ]
  },
  {
    "id": "az500-q249",
    "prompt": "NO.249 You need to implement the function apps to meet the technical requirements.\\nWhich apps should you include in the implementation?",
    "image": "",
    "answers": [
      "Fa1 and Fa2 only",
      "Fa2 and Fa3 only",
      "Fa1 and Fa3 only",
      "Fa1, Fa2, and Fa3"
    ],
    "correctAnswer": "Fat, Fa2, and Fa3",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q250",
    "prompt": "NO.250 You have an Azure subscription. The subscription contains a virtual network named VNet1 that contains the subnets shown in the following table.\n\nThe subscription contains the function apps shown in the following table.\n\nThe outbound traffic of which app is controlled by using NSG1?",
    "image": "",
    "answers": [
      "App4 only",
      "App3 and App4 only",
      "App2, App3, and App4 only",
      "App1, App2, App3, and App4"
    ],
    "correctAnswer": "App1, App2, App3, and App4",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q251",
    "prompt": "NO.251 You have an Azure subscription that contains a Microsoft Defender External Attack Surface\nManagement (Defender EASM) resource named EASM1. You review the Attack Surface Summary\ndashboard. You need to identify the following insights:\n* Deprecated technologies that are no longer supported\n* Infrastructure that will soon expire\nWhich section of the dashboard should you review?",
    "image": "",
    "answers": [
      "Securing the Cloud",
      "Sensitive Services",
      "attack surface composition",
      "Attack Surface Priorities"
    ],
    "correctAnswer": "attack surface composition",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q252",
    "prompt": "NO.252 You have an Azure Active Directory (Azure AD) tenant named contoso.com that contains the\nusers shown in the following table.\n\nAzure AD Privileged Identity Management (PIM) is enabled for the tenant.\nIn PIM, the Password Administrator role has the following settings:\n* Maximum activation duration (hours): 2\n* Send email notifying admins of activation: Disable\n* Require incident/request ticket number during activation: Disable\n* Require Azure Multi-Factor Authentication for activation: Enable\n* Require approval to activate this role: Enable\n* Selected approver: Group1\n\nYou assign users the Password Administrator role as shown in the following table.\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "s1",
        "label": "When User1 signs in, the user is assigned the Password Administrator role automatically."
      },
      {
        "id": "s2",
        "label": "User2 can request to activate the Password Administrator role."
      },
      {
        "id": "s3",
        "label": "If User3 wants to activate the Password Administrator role, the user can approve their own request."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
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
    ]
  },
  {
    "id": "az500-q253",
    "prompt": "NO.253 You have an Azure subscription that contains a storage account.\nYou need to grant User1 access to blob1. The solution must ensure that the access expires after six\ndays.\nWhat should you use?",
    "image": "",
    "answers": [
      "a shared access policy",
      "a shared access signature (SAS)",
      "role-based access control (RBAC)",
      "a managed identity"
    ],
    "correctAnswer": "a shared access signature (SAS)",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q254",
    "prompt": "NO.254 You have an Azure subscription.\nYou need to create and deploy an Azure policy that meets the following requirements:\n* When a new virtual machine is deployed, automatically install a custom security extension.\n* Trigger an autogenerated remediation task for non-compliant virtual machines to install the\n  extension.\n\nWhat should you include in the policy? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r",
        "label": "Resposta"
      }
    ],
    "columns": [
      {
        "id": "effect",
        "label": "Definition effect:",
        "options": [
          "Append",
          "DeployIfNotExists",
          "EnforceOPAConstraint",
          "EnforceRegoPolicy",
          "Modify"
        ],
        "correctByRow": {
          "r": "DeployIfNotExists"
        }
      },
      {
        "id": "rem",
        "label": "Assignment remediation task:",
        "options": [
          "A managed identity that has the Contributor role",
          "A managed identity that has the User Access Administrator role",
          "A service principal that has the Contributor role",
          "A service principal that has the User Access Administrator role"
        ],
        "correctByRow": {
          "r": "A managed identity that has the Contributor role"
        }
      }
    ]
  },
  {
    "id": "az500-q255",
    "prompt": "NO.255 You have an Azure Active Directory (Azure AD) tenant that contains the users shown in the\nfollowing table.\n\nFrom Azure AD Privileged Identity Management (PIM), you configure the settings for the Security\nAdministrator role as shown in the following exhibit.\n\nFrom PIM, you assign the Security Administrator role to the following groups:\n* Group1: Active assignment type, permanently assigned\n* Group2: Eligible assignment type, permanently eligible\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "s1",
        "label": "User1 can only activate the Security Administrator role in five hours."
      },
      {
        "id": "s2",
        "label": "If User2 activates the Security Administrator role, the user will be assigned the role immediately."
      },
      {
        "id": "s3",
        "label": "User3 can activate the Security Administrator role."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
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
    ]
  },
  {
    "id": "az500-q256",
    "prompt": "NO.256 You have an Azure subscription named Subscription1 that contains the resources shown in the\nfollowing table.\n\nYou create a custom RBAC role in Subscription1 by using the following JSON file.\n\nYou assign Role1 to User1 on RG1.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "s1",
        "label": "User1 can add VM1 to VNET1."
      },
      {
        "id": "s2",
        "label": "User1 can start and stop App1."
      },
      {
        "id": "s3",
        "label": "User1 can start and stop cont1."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "s1": "No",
          "s2": "No",
          "s3": "No"
        }
      }
    ]
  },
  {
    "id": "az500-q257",
    "prompt": "NO.257 You have an Azure Storage account that contains a blob container named container1 and a\nclient application named App1. You need to enable App1 access to container1 by using Microsoft\nEntra authentication. What should you do? To answer, select the appropriate options in the answer\narea.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r",
        "label": "Resposta"
      }
    ],
    "columns": [
      {
        "id": "entra",
        "label": "From Microsoft Entra:",
        "options": [
          "Register App1.",
          "Create an access package.",
          "Implement an application proxy.",
          "Modify the authentication methods."
        ],
        "correctByRow": {
          "r": "Register App1."
        }
      },
      {
        "id": "storage",
        "label": "From the storage account:",
        "options": [
          "Configure Access control (IAM).",
          "Add a private endpoint.",
          "Regenerate the access key.",
          "Generate a shared access signature (SAS)."
        ],
        "correctByRow": {
          "r": "Configure Access control (IAM)."
        }
      }
    ]
  },
  {
    "id": "az500-q258",
    "prompt": "NO.258 You have an Azure subscription that contains a resource group named RG1 and an Azure\npolicy named Policy1.\nYou need to assign Policy1 to RG1.\nHow should you complete the script? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "text": "$rg = Get-AzResourceGroup -Name 'RG1'\n$policy = "
        },
        {
          "slot": "blank1"
        },
        {
          "text": " -Name 'Policy1'\n"
        },
        {
          "slot": "blank2"
        },
        {
          "text": " -Name 'AuditStorageAccounts' -PolicyDefinition $policy -Scope $rg.ResourceId"
        }
      ],
      "slots": {
        "blank1": {
          "label": "Blank 1",
          "options": [
            "Get-AzPolicyAssignment",
            "Get-AzPolicyDefinition",
            "Get-AzPolicySetDefinition",
            "New-AzPolicyAssignment",
            "New-AzPolicyDefinition",
            "New-AzPolicySetDefinition",
            "Set-AzPolicySetDefinition",
            "Set-AzPolicyAssignment",
            "Set-AzPolicyDefinition"
          ],
          "correct": "Get-AzPolicyDefinition"
        },
        "blank2": {
          "label": "Blank 2",
          "options": [
            "Get-AzPolicyAssignment",
            "Get-AzPolicyDefinition",
            "Get-AzPolicySetDefinition",
            "New-AzPolicyAssignment",
            "New-AzPolicyDefinition",
            "New-AzPolicySetDefinition",
            "Set-AzPolicySetDefinition",
            "Set-AzPolicyAssignment",
            "Set-AzPolicyDefinition"
          ],
          "correct": "New-AzPolicyAssignment"
        }
      }
    }
  },
  {
    "id": "az500-q259",
    "prompt": "NO.259 You have an Azure Active Directory (Azure AD) tenant.\nYou need to prevent nonprivileged Azure AD users from creating service principals in Azure AD.\nWhat should you do in the Azure Active Directory admin center of the tenant?",
    "image": "",
    "answers": [
      "From the Properties blade, set Enable Security defaults to Yes.",
      "From the Properties blade, set Access management for Azure resources to No.",
      "From the User settings blade, set Users can register applications to No.",
      "From the User settings blade, set Restrict access to Azure AD administration portal to Yes."
    ],
    "correctAnswer": "From the User settings blade, set Users can register applications to No.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q260",
    "prompt": "NO.260 You have an Azure subscription that contains the resources shown in the following table.\n\nYou create the Azure Storage accounts shown in the following table.\n\nYou need to configure auditing for SQL1.\nWhich storage accounts and Log Analytics workspaces can you use as the audit log destination?\nTo answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r",
        "label": "Resposta"
      }
    ],
    "columns": [
      {
        "id": "sa",
        "label": "Storage accounts that can be used as the audit log destination:",
        "options": [
          "Storage1 only",
          "Storage2 only",
          "Storage1 and Storage2 only",
          "Storage1, Storage2, and Storage3"
        ],
        "correctByRow": {
          "r": "Storage2 only"
        }
      },
      {
        "id": "la",
        "label": "Log Analytics workspaces that can be used as the audit log destination:",
        "options": [
          "Analytics1 only",
          "Analytics1 and Analytics2 only",
          "Analytics1 and Analytics3 only",
          "Analytics1, Analytics2, and Analytics3"
        ],
        "correctByRow": {
          "r": "Analytics1, Analytics2, and Analytics3"
        }
      }
    ]
  },
  {
    "id": "az500-q261",
    "prompt": "NO.261 You have an Azure subscription that contains a web app named App1.\nUsers must be able to select between a Google identity or a Microsoft identity when authenticating\nto App1.\nYou need to add Google as an identity provider in Azure AD.\nWhich two pieces of information should you configure? Each correct answer presents part of the\nsolution.\nEach correct selection is worth one point.",
    "image": "",
    "answers": [
      "a tenant name",
      "a tenant ID",
      "the endpoint URL of an application",
      "a client ID",
      "a client secret"
    ],
    "correctAnswer": [
      "a client ID",
      "a client secret"
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q262",
    "prompt": "NO.262 Your company has an Azure subscription named Sub1 that is associated to an Azure Active\nDirectory Azure (Azure AD) tenant named contoso.com.\nThe company develops a mobile application named App1. App1 uses the OAuth 2 implicit grant type\nto acquire Azure AD access tokens.\nYou need to register App1 in Azure AD.\nWhat information should you obtain from the developer to register the application?",
    "image": "",
    "answers": [
      "a redirect URI",
      "a reply URL",
      "a key",
      "an application ID"
    ],
    "correctAnswer": "a redirect URI",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q263",
    "prompt": "NO.263 You have a Microsoft Entra tenant named contoso.com. The tenant contains the users\nshown in the following table.\n\nYou configure an access review named Review1 as shown in the following exhibit. Dates in the exhibit\nare in the MM/DD/YYYY format.\n\nUse the drop-down menus to select the answer choice that completes each statement based on the\ninformation presented in the graphic.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r",
        "label": "Resposta"
      }
    ],
    "columns": [
      {
        "id": "r1",
        "label": "User3 can perform Review1 for [answer choice].",
        "options": [
          "User3 only",
          "User1 and User2 only",
          "User1, User2, and User3"
        ],
        "correctByRow": {
          "r": "User3 only"
        }
      },
      {
        "id": "r2",
        "label": "If User2 fails to complete Review1 by December 12, 2020, [answer choice].",
        "options": [
          "User3 will receive a confirmation request",
          "the Password administrator role will be revoked from User2",
          "User2 will retain the Password administrator role"
        ],
        "correctByRow": {
          "r": "User3 will receive a confirmation request"
        }
      }
    ]
  },
  {
    "id": "az500-q264",
    "prompt": "NO.264 You have an Azure subscription that contains an instance of Azure Firewall Standard named\nAzFW1. You need to identify whether you can use the following features with AzFW1:\n* TLS inspection\n* Threat intelligence\n* The network intrusion detection and prevention systems (IDPS)\nWhat can you use?",
    "image": "",
    "answers": [
      "TLS inspection only",
      "threat intelligence only",
      "TLS inspection and the IDPS only",
      "threat intelligence and the IDPS only",
      "TLS inspection, threat intelligence, and the IDPS"
    ],
    "correctAnswer": "TLS inspection only",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q265",
    "prompt": "NO.265 You have an Azure subscription named Sub1.\nYou create a virtual network that contains one subnet. On the subnet, you provision the virtual\nmachines shown in the following table.\n\nCurrently, you have not provisioned any network security groups (NSGs).\nYou need to implement network security to meet the following requirements:\n* Allow traffic to VM4 from VM3 only.\n* Allow traffic from the Internet to VM1 and VM2 only.\n* Minimize the number of NSGs and network security rules.\n\nHow many NSGs and network security rules should you create? To answer, select the appropriate\noptions in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "nsg",
        "label": "NSGs:"
      },
      {
        "id": "rules",
        "label": "Network security rules:"
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctByRow": {
          "nsg": "1",
          "rules": "3"
        }
      }
    ]
  },
  {
    "id": "az500-q266",
    "prompt": "NO.266 You have an Azure subscription that contains virtual machines.\nYou enable just in time (JIT) VM access to all the virtual machines.\nYou need to connect to a virtual machine by using Remote Desktop.\nWhat should you do first?",
    "image": null,
    "answers": [
      "From Azure Directory (Azure AD) Privileged Identity Management (PIM), activate the Security administrator user role.",
      "From Azure Active Directory (Azure AD) Privileged Identity Management (PIM), activate the Owner role for the virtual machine.",
      "From the Azure portal, select the virtual machine, select Connect, and then select Request access.",
      "From the Azure portal, select the virtual machine and add the Network Watcher Agent virtual machine extension."
    ],
    "correctAnswer": "From the Azure portal, select the virtual machine, select Connect, and then select Request access.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q267",
    "prompt": "NO.267 Note: This question is part of a series of questions that present the same scenario. Each\nquestion in the series contains a unique solution that might meet the stated goals. Some question\n\nsets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYou have a hybrid configuration of Azure Active Directory (AzureAD).\nYou have an Azure HDInsight cluster on a virtual network.\nYou plan to allow users to authenticate to the cluster by using their on-premises Active Directory\ncredentials.\nYou need to configure the environment to support the planned authentication.\nSolution: You deploy the On-premises data gateway to the on-premises network.\nDoes this meet the goal?",
    "image": null,
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "No",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q268",
    "prompt": "NO.268 You have an Azure subscription.\nYou plan to create a storage account.\nYou need to use customer-managed keys to encrypt the tables in the storage account.\nFrom Azure Cloud Shell, which three cmdlets should you run in sequence? To answer, move the\nappropriate cmdlets from the list of cmdlets to the answer area and arrange them in the correct\norder.",
    "image": null,
    "type": "dragMatch",
    "allowAnswerShuffle": true,
    "items": [
      {
        "id": "it1",
        "label": "New-AzStorageAccountKey"
      },
      {
        "id": "it2",
        "label": "New-AzStorageTable"
      },
      {
        "id": "it3",
        "label": "Register-AzProviderFeature"
      },
      {
        "id": "it4",
        "label": "New-AzStorageAccount"
      },
      {
        "id": "it5",
        "label": "Register-AzResourceProvider"
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
      "step1": "it4",
      "step2": "it1",
      "step3": "it2"
    }
  },
  {
    "id": "az500-q269",
    "prompt": "NO.269 Your network contains an on-premises Active Directory domain named adatum.com that\nsyncs to Azure Active Directory (Azure AD).\nThe Azure AD tenant contains the users shown in the following table.\nYou configure the Authentication methods - Password Protection settings for adatum.com as shown\nin the following exhibit.\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": null,
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "s1",
        "label": "User1 will be prompted to change the password on the next sign-in."
      },
      {
        "id": "s2",
        "label": "User2 can change the password to @d@tum_CompleX123."
      },
      {
        "id": "s3",
        "label": "User3 can change the password to Adatum123!."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
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
    "id": "az500-q270",
    "prompt": "NO.270 You company has an Azure Active Directory (Azure AD) tenant named contoso.com.\nYou plan to create several security alerts by using Azure Monitor.\nYou need to prepare the Azure subscription for the alerts.\nWhat should you create first?",
    "image": null,
    "answers": [
      "An Azure Storage account",
      "an Azure Log Analytics workspace",
      "an Azure event hub",
      "an Azure Automation account"
    ],
    "correctAnswer": "an Azure Log Analytics workspace",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q271",
    "prompt": "NO.271 You have the Azure resource shown in the following table.\n\nYou need to meet the following requirements:\n* Internet-facing virtual machines must be protected by using network security groups (NSGs).\n* All the virtual machines must have disk encryption enabled.\nWhat is the minimum number of security that you should create in Azure Security Center?",
    "image": null,
    "answers": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "4",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q272",
    "prompt": "NO.272 You have 10 on-premises servers that run Windows Server 2019.\nYou plan to implement Azure Security Center vulnerability scanning for the servers.\n\nWhat should you install on the servers first?",
    "image": null,
    "answers": [
      "the Security Events data connector in Azure Sentinel",
      "the Microsoft Endpoint Configuration Manager client",
      "the Azure Arc enabled servers Connected Machine agent",
      "the Microsoft Defender for Endpoint agent"
    ],
    "correctAnswer": "the Azure Arc enabled servers Connected Machine agent",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q273",
    "prompt": "NO.273 You have an Azure subscription name Sub1 that contains an Azure Policy definition named\nPolicy1. Policy1 has the following settings:\n* Definition location: Tenant Root Group\n* Category: Monitoring\nYou need to ensure that resources that are noncompliant with Policy1 are listed in the Azure Security\nCenter dashboard.\nWhat should you do first?",
    "image": null,
    "answers": [
      "Change the Category of Policy1 to Security Center.",
      "Add Policy1 to a custom initiative.",
      "Change the Definition location of Policy1 to Sub1.",
      "Assign Policy1 to Sub1."
    ],
    "correctAnswer": "Assign Policy1 to Sub1.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q274",
    "prompt": "NO.274 You have an Azure key vault named Vault1 that stores the resources shown in following\ntable.\n\nWhich resources support the creation of a rotation policy?",
    "image": null,
    "answers": [
      "Key1 Only",
      "Cert1 only",
      "Key1 and Secret1 only",
      "Key1 and Cert1 only",
      "Secret1 and Cert1 only",
      "Key1, Secret1, and Cert1"
    ],
    "correctAnswer": "Key1 and Secret1 only",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q275",
    "prompt": "NO.275 You have an Azure Kubernetes Service (AKS) cluster that will connect to an Azure Container\nRegistry.\n\nYou need to use the automatically generated service principal for the AKS cluster to authenticate to\nthe Azure Container Registry.\nWhat should you create?",
    "image": null,
    "answers": [
      "an Azure AD user",
      "a secret in Azure Key Vault",
      "an Azure AD group",
      "a role assignment"
    ],
    "correctAnswer": "a role assignment",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q276",
    "prompt": "NO.276 You have an Azure subscription that contains the virtual machines shown in the following\ntable.\nSubnet1 and Subnet2 have a network security group {NSG). The NSG has an outbound rule that has\nthe following configurations:\n* Port; Any\n* Source: Any\n* Priority: 100\n* Action: Deny\n* Protocol: Any\n* Destination: Storage\nThe subscription contains a storage account named storage1.\nYou create a private endpoint named Private1 that has the following settings:\n* Resource type: Microsoft.Storage/storageAccounts\n* Resource: storage1\n* Target sub-resource: blob\n* Virtual network: VNet1\n* Subnet: Subnet1\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\nAnswer:",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r1",
        "label": "From VM2, you can create a container in storage1."
      },
      {
        "id": "r2",
        "label": "From VM1, you can upload data to the blob storage of storage1."
      },
      {
        "id": "r3",
        "label": "From VM2, you can upload data to the blob storage of storage1."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "r1": "No",
          "r2": "Yes",
          "r3": "No"
        }
      }
    ]
  },
  {
    "id": "az500-q277",
    "prompt": "NO.277 You have an Azure Active Directory (Azure AD) tenant named Contoso.com and an Azure\nService (AKS) cluster AKS1.\nYou discover that AKS1 cannot be accessed by using accounts from Contoso.com You need to ensure\nAKS1 can be accessed by using accounts from Contoso.com The solution must minimize\nadministrative effort.\nWhat should you do first?\nA. From Azure recreate AKS1,\nB. From AKS1, upgrade the version of Kubermetes.\nC. From Azure AD, implement Azure AD Premium P2.\nD. From Azure AD, configure the User settings",
    "image": "",
    "answers": [
      "From Azure recreate AKS1,",
      "From AKS1, upgrade the version of Kubermetes.",
      "From Azure AD, implement Azure AD Premium P2.",
      "From Azure AD, configure the User settings"
    ],
    "correctAnswer": "From Azure recreate AKS1,",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q278",
    "prompt": "NO.278 Your on-premises network contains an Active Directory Domain Services (AD DS) domain\nand the devices shown in the following table.\nYou have a hybrid Microsoft Entra tenant that contains a synced user named User1.\nYou have an Azure subscription that contains the Azure Files shares shown in the following table.\nUsed is assigned the Storage File Data SMB Share Contributor role tor storage1 and storage2.\nThe Security settings for Share! are configured as shown in the following exhibit.\nFor each of the following statements, select Yes if the statement is true. Otherwise. Select No.\nNOTE: Each correct selection is worth one point.\nAnswer:",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r1",
        "label": "User1 can mount share1 to Server2 by providing a storage access key."
      },
      {
        "id": "r2",
        "label": "User1 can mount share1 to Device1 by using their Microsoft Entra identity."
      },
      {
        "id": "r3",
        "label": "User1 can mount share2 to Server1 by using their AD DS identity."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "r1": "Yes",
          "r2": "Yes",
          "r3": "Yes"
        }
      }
    ]
  },
  {
    "id": "az500-q279",
    "prompt": "NO.279 You have an Azure subscription that contains a storage account named contoso2023. You\nneed to perform the following tasks:\n* Verify that identity-based authentication over SMB is enabled.\n* Only grant users access to contoso2023 in the year 2023.\nWhich two settings should you use? To answer, select the appropriate settings in the answer area\nNOTE: Each correct selection is worth one point.\nIT Certification Guaranteed, The Easy Way!\n246",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r1",
        "label": "Verify that identity-based authentication over SMB is enabled."
      },
      {
        "id": "r2",
        "label": "Only grant users access to contoso2023 in the year 2023."
      }
    ],
    "columns": [
      {
        "id": "setting",
        "label": "Setting",
        "options": [
          "Access Control (IAM)",
          "File shares",
          "Access keys",
          "Shared access signature",
          "Encryption",
          "Networking",
          "Data protection"
        ],
        "correctByRow": {
          "r1": "File shares",
          "r2": "Shared access signature"
        }
      }
    ]
  },
  {
    "id": "az500-q280",
    "prompt": "NO.280 You have an Azure subscription that contains the virtual networks shown in the following\ntable.\n \nThe virtual networks contain the subnets shown in the following table.\nAnswer:",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r1",
        "label": "You can associate RT1 with Subnet3."
      },
      {
        "id": "r2",
        "label": "You can delete RT1."
      },
      {
        "id": "r3",
        "label": "When you attempt to ping VM2 from VM1, traffic is routed to 172.16.10.10."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "r1": "Yes",
          "r2": "No",
          "r3": "No"
        }
      }
    ]
  },
  {
    "id": "az500-q281",
    "prompt": "NO.281 You have an Azure subscription that contains a virtual network named VNet1 VNet1\ncontains a single subnet.\nThe subscription contains a virtual machine named VM1 that is connected to VNet1.\nYou plan to deploy an Azure SQL managed instance named SQL1.\nYou need to ensure that VM1 can access SQL1.\nWhich three components should you create? Each correct answer presents pan of the solution.\nNOTE: Each correct selection is worth one point.\nA. a virtual network gateway\nB. a network security group (NSG)\nC. a route table\nD. a subnet\nE. a network security perimeter\nIT Certification Guaranteed, The Easy Way!\n249",
    "image": "",
    "answers": [
      "a virtual network gateway",
      "a network security group (NSG)",
      "a route table",
      "a subnet",
      "a network security perimeter"
    ],
    "correctAnswer": [
      "a network security group (NSG)",
      "a route table",
      "a subnet"
    ],
    "allowAnswerShuffle": true
  },
  {
  "id": "az500-q282",
  "prompt": "NO.282 You have an Azure Sentinel workspace that has an Azure Active Directory (Azure AD) data\nconnector.\nYou are threat hunting suspicious traffic from a specific IP address.\nYou need to annotate an intermediate event stored in the workspace and be able to reference the IP\naddress when navigating through the investigation graph.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from\nthe list of actions to the answer area and arrange them in the correct order.",
  "image": "",
  "type": "dragMatch",
  "allowAnswerShuffle": true,
  "items": [
    {
      "id": "a1",
      "label": "Add the query to Favorites."
    },
    {
      "id": "a2",
      "label": "From the Azure Sentinel workspace, run an Azure Log Analytics query."
    },
    {
      "id": "a3",
      "label": "In a Jupyter notebook, create a reference to the IP address."
    },
    {
      "id": "a4",
      "label": "Add a bookmark and assign a tag."
    },
    {
      "id": "a5",
      "label": "Add a bookmark and map an entity."
    },
    {
      "id": "a6",
      "label": "From Azure Monitor, run an Azure Log Analytics query."
    },
    {
      "id": "a7",
      "label": "Select a query result."
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
    "step1": "a6",
    "step2": "a7",
    "step3": "a5"
  }
},
  {
    "id": "az500-q283",
    "prompt": "NO.283 You have an Azure subscription that contains the Azure virtual machines shown in the\nfollowing table.\nYou create an MDM Security Baseline profile named Profile1.\nYou need to identify to which virtual machines Profile1 can be applied.\nWhich virtual machines should you identify?\nA. VM1 only\nB. VM1, VM2, and VM3 only\nC. VM1 and VM3 only\nD. VM1, VM2, VM3, and VM4",
    "image": "",
    "answers": [
      "VM1 only",
      "VM1, VM2, and VM3 only",
      "VM1 and VM3 only",
      "VM1, VM2, VM3, and VM4"
    ],
    "correctAnswer": "VM1 only",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q284",
    "prompt": "NO.284 You have an Azure subscription that contains an Azure SQL database named SQL1 and an\nAzure key vault named KeyVault1. KeyVault1 stores the keys shown in the following table.\n \nYou reed to configure Transparent Data Encryption (TDE). TDE will use a customer-managed key for\nSQL1?\nA. Key1. Key2 Key3. and Key4\nB. Key1 only\nC. Key2 only\nD. Key1 and key2 only\nE. Key2 and Key3 only",
    "image": "",
    "answers": [
      "Key1. Key2 Key3. and Key4",
      "Key1 only",
      "Key2 only",
      "Key1 and key2 only",
      "Key2 and Key3 only"
    ],
    "correctAnswer": "Key2 and Key3 only",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q285",
    "prompt": "NO.285 You have an Azure subscription named Sub1 that contains the resource groups shown in the\nfollowing table.\n \nYou create the Azure Policy definition shown in the following exhibit.\nYou assign the policy to Sub1.\nYou plan to create the resources shown in the following table.\n \nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\nAnswer:",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r1",
        "label": "You can create IPobject1."
      },
      {
        "id": "r2",
        "label": "You can create Obj1."
      },
      {
        "id": "r3",
        "label": "You can create OBJ3."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "r1": "No",
          "r2": "No",
          "r3": "No"
        }
      }
    ]
  },
  {
    "id": "az500-q286",
    "prompt": "NO.286 You have an Azure AD tenant that contains the groups shown in the following table.\n \nYou assign licenses to the groups as shown in the following table.\n \nOn May1, you delete Group1. Group2, and Group3.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\nAnswer:",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r1",
        "label": "On May 3, you can restore Group1."
      },
      {
        "id": "r2",
        "label": "On May 15, you can restore Group2."
      },
      {
        "id": "r3",
        "label": "On June 3, you can restore Group3."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "r1": "Yes",
          "r2": "Yes",
          "r3": "Yes"
        }
      }
    ]
  },
  {
    "id": "az500-q287",
    "prompt": "NO.287 You have an Azure subscription named Subscription1 that contains a resource group named\nRG1 and the users shown in the following table.\nYou perform the following tasks:\n* Assign User1 the Network Contributor role for Subscription1.\n* Assign User2 the Contributor role for RG1.\nTo Subscription1 and RG1, you assign the following policy definition: External accounts with write\npermissions should be removed from your subscription.\nWhat is the Compliance State of the policy assignments?\nA. The Compliance State of both policy assignments is Non-compliant.\nB. The Compliance State of the policy assignment to Subscription1 is Compliant, and the Compliance\nState of the policy assignment to RG1 is Non-compliant.\nC. The Compliance State of the policy assignment to Subscription1 is Non-compliant, and the\nCompliance State of the policy assignment to RG1 is Compliant.\nD. The Compliance State of both policy assignments is Compliant.",
    "image": "",
    "answers": [
      "The Compliance State of both policy assignments is Non-compliant.",
      "The Compliance State of the policy assignment to Subscription1 is Compliant, and the Compliance",
      "The Compliance State of the policy assignment to Subscription1 is Non-compliant, and the",
      "The Compliance State of both policy assignments is Compliant."
    ],
    "correctAnswer": "The Compliance State of both policy assignments is Non-compliant.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q288",
    "prompt": "NO.288 You have an Azure subscription named Sub1 that contains the Azure key vaults shown in the\nfollowing table:\nIn Sub1, you create a virtual machine that has the following configurations:\n* Name: VM1\n* Size: DS2v2\n* Resource group: RG1\n* Region: West Europe\n* Operating system: Windows Server 2022\nYou plan to enable Azure Disk Encryption on VM1.\nIn which key vaults can you store the encryption key for VM1?\nA. Vault1 or Vault3 only\nB. Vault1, Vault2, Vault3, or Vault4\nC. Vault1 only\nD. Vault1 or Vault2 only",
    "image": "",
    "answers": [
      "Vault1 or Vault3 only",
      "Vault1, Vault2, Vault3, or Vault4",
      "Vault1 only",
      "Vault1 or Vault2 only"
    ],
    "correctAnswer": [
      "Vault1 or Vault3 only"
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q289",
    "prompt": "NO.289 You plan to use Azure Resource Manager templates to perform multiple deployments of\nidentically configured Azure virtual machines. The password for the administrator account of each\ndeployment is stored as a secret in different Azure key vaults.\nYou need to identify a method to dynamically construct a resource ID that will designate the key vault\ncontaining the appropriate secret during each deployment. The name of the key vault and the name\nof the secret will be provided as inline parameters.\nWhat should you use to construct the resource ID?\nA. a key vault access policy\nB. a linked template\nC. a parameters file\nD. an automation account",
    "image": "",
    "answers": [
      "a key vault access policy",
      "a linked template",
      "a parameters file",
      "an automation account"
    ],
    "correctAnswer": [
      "a parameters file"
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q290",
    "prompt": "NO.290 You have an Azure subscription that contains the following resources:\n* An Azure key vault\n* An Azure SQL database named Database1\n* Two Azure App Service web apps named AppSrv1 and AppSrv2 that are configured to use system-\nassigned managed identities and access Database1 You need to implement an encryption solution for\nDatabase1 that meets the following requirements:\n* The data in a column named Discount in Database1 must be encrypted so that only AppSrv1 can\ndecrypt the data.\n* AppSrv1 and AppSrv2 must be authorized by using managed identities to obtain cryptographic keys.\nHow should you configure the encryption settings fa Database1 To answer, select the appropriate\noptions in the answer area.\nNOTE: Each correct selection is worth one point",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r",
        "label": "Resposta"
      }
    ],
    "columns": [
      {
        "id": "enc",
        "label": "To configure the encryption of Database1:",
        "options": [
          "Always Encrypted by using Azure Key Vault.",
          "Always Encrypted by using the Windows Certificate Store.",
          "Transparent Data Encryption (TDE) by using Azure Key Vault integration.",
          "Transparent Data Encryption (TDE) by using Bring Your Own Key (BYOK)."
        ],
        "correctByRow": {
          "r": "Always Encrypted by using Azure Key Vault."
        }
      },
      {
        "id": "keys",
        "label": "To obtain the cryptographic keys:",
        "options": [
          "Create an access policy in Azure Key Vault.",
          "Generate a key on an HSM device.",
          "Import App Service certificates to AppSrv1 and AppSrv2.",
          "Register an enterprise application in Azure AD."
        ],
        "correctByRow": {
          "r": "Create an access policy in Azure Key Vault."
        }
      }
    ]
  },
  {
    "id": "az500-q291",
    "prompt": "NO.291 You have an Azure subscription named Sub1 that contains an Azure Log Analytics workspace\nnamed LAW1.\nYou have 500 Azure virtual machines that run Windows Server 2016 and are enrolled in LAW1.\nYou plan to add the System Update Assessment solution to LAW1.\nYou need to ensure that System Update Assessment-related logs are uploaded to LAW1 from 100 of\nthe virtual machines only.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from\nthe list of actions to the answer area and arrange them in the correct order.",
    "image": "",
    "type": "dragMatch",
    "allowAnswerShuffle": false,
    "leftItems": [
      {
        "id": "a1",
        "label": "Create a new workspace."
      },
      {
        "id": "a2",
        "label": "Apply the scope configuration to the solution."
      },
      {
        "id": "a3",
        "label": "Create a scope configuration."
      },
      {
        "id": "a4",
        "label": "Create a computer group."
      },
      {
        "id": "a5",
        "label": "Create a data source."
      }
    ],
    "rightSlots": [
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
    "correctMatches": {
      "s1": "Create a computer group.",
      "s2": "Create a scope configuration.",
      "s3": "Apply the scope configuration to the solution."
    }
  },
  {
    "id": "az500-q292",
    "prompt": "NO.292 You network contains an on-premises Active Directory domain that syncs to an Azure Active\nDirectory (Azure AD) tenant. The tenant contains the users shown in the following table.\n \nThe tenant contains the groups shown in the following table.\n \nYou configure a multi-factor authentication (MFA) registration policy that and the following settings:\n* Assignments:\n* Include: Group1\n* Exclude Group2\nControls: Require Azure MFA registration\nEnforce Policy: On\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nAnswer:",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r1",
        "label": "User1 will be prompted to configure MFA registration during the user's next Azure AD authentication."
      },
      {
        "id": "r2",
        "label": "User2 must configure MFA during the user's next Azure AD authentication."
      },
      {
        "id": "r3",
        "label": "User3 will be prompted to configure MFA registration during the user's next Azure AD authentication."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "r1": "Yes",
          "r2": "No",
          "r3": "Yes"
        }
      }
    ]
  },
  {
    "id": "az500-q293",
    "prompt": "NO.293 You have an Azure subscription that contains an Azure key vault named Vault1.\nIn Vault1, you create a secret named Secret1.\nAn application developer registers an application in Azure Active Directory (Azure AD).\nYou need to ensure that the application can use Secret1.\nWhat should you do?\nA. In Azure AD, create a role.\nB. In Azure Key Vault, create a key.\nC. In Azure Key Vault, create an access policy.\nD. In Azure AD, enable Azure AD Application Proxy.",
    "image": "",
    "answers": [
      "In Azure AD, create a role.",
      "In Azure Key Vault, create a key.",
      "In Azure Key Vault, create an access policy.",
      "In Azure AD, enable Azure AD Application Proxy."
    ],
    "correctAnswer": [
      "In Azure Key Vault, create an access policy."
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q294",
    "prompt": "NO.294 You have an Azure subscription.\nYou plan to map an online infrastructure and perform vulnerability scanning for the following:\n* ASNs\n* Hostnames\n* IP addresses\n* SSL certificates\nWhat should you use?\nA. Microsoft Defender for Cloud\nB. Microsoft Defender for Identity\nC. Microsoft Defender for Endpoint\nD. Microsoft Defender External Attack Surface Management (Defender EASM)",
    "image": "",
    "answers": [
      "Microsoft Defender for Cloud",
      "Microsoft Defender for Identity",
      "Microsoft Defender for Endpoint",
      "Microsoft Defender External Attack Surface Management (Defender EASM)"
    ],
    "correctAnswer": "Microsoft Defender External Attack Surface Management (Defender EASM)",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q295",
    "prompt": "NO.295 You have an Azure subscription that contains a user named User1 and a storage account\nnamed storage 1. The storage1 account contains the resources shown in the following table:\n \nUser1 is assigned the following roles for storage1:\n* Storage Blob Data Reader\n* Storage Table Data Contributor\n* Storage File Data SMB Share Reader\nAnswer:\nNo, Yes, No",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r1",
        "label": "On October 1, 2022, if User1 accesses folder1 by using SAS1, he can delete the files in folder1."
      },
      {
        "id": "r2",
        "label": "On October 1, 2022, if User1 maps folder1 as a network drive by using his Azure Active Directory (Azure AD) credentials, he can delete the files in folder1."
      },
      {
        "id": "r3",
        "label": "On October 1, 2022, User1 can delete the rows in table1 by using SAS1."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "r1": "No",
          "r2": "Yes",
          "r3": "No"
        }
      }
    ]
  },
  {
    "id": "az500-q296",
    "prompt": "NO.296 You have an Azure Active Directory (Azure AD) tenant named contoso.com that contains the\nusers shown in the following table.\nYou create and enforce an Azure AD Identity Protection user risk policy that has the following\nsettings:\n* Assignment: Include Group1, Exclude Group2\n* Conditions: Sign-in risk of Medium and above\n* Access: Allow access, Require password change\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r1",
        "label": "If User1 signs in from an unfamiliar location, he must change his password."
      },
      {
        "id": "r2",
        "label": "If User2 signs in from an anonymous IP address, she must change her password."
      },
      {
        "id": "r3",
        "label": "If User3 signs in from a computer containing malware that is communicating with known bot servers, he must change his password."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "r1": "Yes",
          "r2": "Yes",
          "r3": "No"
        }
      }
    ]
  },
  {
    "id": "az500-q297",
    "prompt": "NO.297 You have an Azure subscription that uses Microsoft Defender for Cloud.\nDefender for Cloud has the security alerts shown in the following exhibit.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "text": "If you change the status of the alert that was triggered at 05:11 PM to Dismissed, "
        },
        {
          "slot": "choice1"
        },
        {
          "text": ".\n\nThe status of the alert that was triggered at 12:44 PM "
        },
        {
          "slot": "choice2"
        },
        {
          "text": "."
        }
      ],
      "slots": {
        "choice1": {
          "label": "Answer choice 1",
          "options": [
            "the alert will no longer be visible",
            "the alert activity start time will change",
            "the alert severity will change to Low",
            "the status of all four alerts will change"
          ],
          "correct": "the alert will no longer be visible"
        },
        "choice2": {
          "label": "Answer choice 2",
          "options": [
            "can be changed to Active, In Progress, or Dismissed",
            "can be changed to Active only",
            "can be changed to Active or Dismissed only",
            "can be changed to In Progress or Dismissed only",
            "cannot be changed"
          ],
          "correct": "can be changed to Active, In Progress, or Dismissed"
        }
      }
    }
  },
  {
    "id": "az500-q298",
    "prompt": "NO.298 You have a management group named MG1 that contains an Azure subscription and a\nresource group named RG1. RG1 contains a virtual machine named VM1. You have the custom Azure\nroles shown in the following table.\n \nThe permissions for Role1 are shown in the following role definition file.\nYou assign the roles to the users shown in the following table.\n \nFor each of the following statements, select Yes if the statement is true. Otherwise, select No NOTE:\nEach correct selection is worth one point.\nAnswer:",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r1",
        "label": "User1 can delete VM1."
      },
      {
        "id": "r2",
        "label": "User2 can delete VM1."
      },
      {
        "id": "r3",
        "label": "User3 can delete VM1."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "r1": "Yes",
          "r2": "No",
          "r3": "Yes"
        }
      }
    ]
  },
  {
    "id": "az500-q299",
    "prompt": "NO.299 You have an Azure subscription that contains an Azure key vault.\nYou create a storage account named storagel.\nYou plan to store data in the following storagel services:\n* Azure Files\n* Azure Blob storage\n* Azure Table storage\n* Azure Queue storage\nFor which two services can you configure data encryption by using the keys stored in the key vault?\nEach correct answer presents a complete solution.\nNOTE Each correct selection is worth one point.\nA. Azure Files\nB. Table storage\nC. Queue storage\nD. Blob storage",
    "image": "",
    "answers": [
      "Azure Files",
      "Table storage",
      "Queue storage",
      "Blob storage"
    ],
    "correctAnswer": [
      "Azure Files",
      "Blob storage"
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q300",
    "prompt": "NO.300 Note: This question is part of a series of questions that present the same scenario. Each\nquestion in the series contains a unique solution that might meet the stated goals. Some question\nsets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYou have an Azure Subscription. The subscription contains 50 virtual machines that run Windows\nServer\n2012 R2 or Windows Server 2016.\nYou need to deploy Microsoft Antimalware to the virtual machines.\nSolution: You add an extension to each virtual machine.\nDoes this meet the goal?\nA. Yes\nB. No",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": [
      "Yes"
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q301",
    "prompt": "NO.301 You have an Azure Active directory tenant that syncs with an Active Directory Domain\nServices (AD DS) domain.\nYou plan to create an Azure file share that will contain folders and files.\nWhich identity store can you use to assign permissions to the Azure file share and folders within the\nshare?\nTo answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "azurefileshare",
        "label": "Azure file share:"
      },
      {
        "id": "folders",
        "label": "Folders in the file share:"
      }
    ],
    "columns": [
      {
        "id": "identity",
        "label": "Identity store",
        "options": [
          "AD DS only",
          "Azure AD only",
          "AD DS and Azure AD"
        ],
        "correctByRow": {
          "azurefileshare": "AD DS only",
          "folders": "AD DS and Azure AD"
        }
      }
    ]
  },
  {
    "id": "az500-q302",
    "prompt": "NO.302 You have an Azure subscription that contains a user named User1. You need to ensure that\nUser1 can create managed identities. The solution must use the principle of least privilege.\nWhat should you do?",
    "image": "",
    "answers": [
      "Create a resource group and assign User1 to the Managed Identity Contributor role.",
      "Create a management group and assign User1 the Managed Identity Operator role.",
      "Create an organizational unit (OU) and assign User1 the User administrator Azure AD role.",
      "Create management group and assign User1 the Hybrid Identity Administrator Azure AD role."
    ],
    "correctAnswer": "Create a resource group and assign User1 to the Managed Identity Contributor role.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q303",
    "prompt": "NO.303 You have an Azure subscription named Subcription1 that contains the resources shown in\nthe following table.\nYou have an Azure subscription named Subcription2 that contains the following resources:\n* An Azure Sentinel workspace\n\n* An Azure Event Grid instance\nYou need to ingest the CEF messages from the NVAs to Azure Sentinel.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dragMatch",
    "allowAnswerShuffle": false,
    "items": [
      {
        "id": "it1",
        "label": "An Azure Log Analytics agent on a Linux virtual machine"
      },
      {
        "id": "it2",
        "label": "A Data Factory pipeline"
      },
      {
        "id": "it3",
        "label": "An Event Hubs namespace"
      },
      {
        "id": "it4",
        "label": "An Azure Service Bus queue"
      },
      {
        "id": "it5",
        "label": "A new Azure Log Analytics workspace"
      },
      {
        "id": "it6",
        "label": "A new Azure Sentinel data connector"
      },
      {
        "id": "it7",
        "label": "A new Azure Sentinel playbook"
      },
      {
        "id": "it8",
        "label": "A new Event Grid resource provider"
      }
    ],
    "targets": [
      {
        "id": "sub1_1",
        "label": "Subscription1 (selection 1)"
      },
      {
        "id": "sub1_2",
        "label": "Subscription1 (selection 2)"
      },
      {
        "id": "sub2",
        "label": "Subscription2"
      }
    ],
    "correctByTarget": {
      "sub1_1": "it2",
      "sub1_2": "it3",
      "sub2": "it5"
    }
  },
  {
    "id": "az500-q304",
    "prompt": "NO.304 Lab Task\nuse the following login credentials as needed:\nTo enter your username, place your cursor in the Sign in box and click on the username below.\nTo enter your password. place your cursor in the Enter password box and click on the password\nbelow.\nAzure Username: Userl -28681041@ExamUsers.com\nAzure Password: GpOAe4@lDg\nIf the Azure portal does not load successfully in the browser, press CTRL-K to reload the portal in a\nnew browser tab.\nThe following information is for technical support purposes only:\nLab Instance: 28681041\nTask 10\nYou need to create a new Azure AD directory named 28681041.onmicrosoft.com. The new directory\nmust contain a new user named user1@28681041.onmicrosoft.com.",
    "image": "",
    "answers": [
      "Questão em formato não suportado por este app (consulte o PDF)."
    ],
    "correctAnswer": "Questão em formato não suportado por este app (consulte o PDF).",
    "allowAnswerShuffle": false
  },
  {
    "id": "az500-q305",
    "prompt": "NO.305 You have an Azure Active Directory (Azure AD) tenant that contains a user named Admin1.\nAdmin1 is assigned the Application developer role.\nYou purchase a cloud app named App1 and register App1 in Azure AD.\nAdmin1 reports that the option to enable token encryption for App1 is unavailable.\nYou need to ensure that Admin1 can enable token encryption for App1 in the Azure portal.\nWhat should you do?",
    "image": "",
    "answers": [
      "Upload a certificate for App1.",
      "Modify the API permissions of App1.",
      "Add App1 as an enterprise application.",
      "Assign Admin1 the Cloud application administrator role."
    ],
    "correctAnswer": "Add App1 as an enterprise application.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q306",
    "prompt": "NO.306 You have Azure Resource Manager templates that you use to deploy Azure virtual machines\n.\nYou need to disable unused Windows features automatically as instances of the virtual machines are\nprovisioned.\nWhat should you use?",
    "image": "",
    "answers": [
      "security policies in Azure Security Center",
      "Azure Logic Apps",
      "an Azure Desired State Configuration (DSC) virtual machine extension",
      "Azure Advisor"
    ],
    "correctAnswer": "an Azure Desired State Configuration (DSC) virtual machine extension",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q307",
    "prompt": "NO.307 Note: This question is part of a series of questions that present the same scenario. Each\nquestion in the series contains a unique solution that might meet the stated goals. Some question\nsets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\n\nYou have a hybrid configuration of Azure Active Directory (AzureAD).\nYou have an Azure HDInsight cluster on a virtual network.\nYou plan to allow users to authenticate to the cluster by using their on-premises Active Directory\ncredentials.\nYou need to configure the environment to support the planned authentication.\nSolution: You create a site-to-site VPN between the virtual network and the on-premises network.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "Yes",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q308",
    "prompt": "NO.308 You have an Azure subscription named Sub1 that is associated to an Azure Active Directory\n(Azure AD) tenant named contoso.com.\nYou plan to implement an application that will consist of the resources shown in the following table.\nUsers will authenticate by using their Azure AD user account and access the Cosmos DB account by\nusing resource tokens.\nYou need to identify which tasks will be implemented in CosmosDB1 and WebApp1.\nWhich task should you identify for each resource? To answer, select the appropriate options in the\nanswer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "cosmos",
        "label": "CosmosDB1:"
      },
      {
        "id": "webapp",
        "label": "WebApp1:"
      }
    ],
    "columns": [
      {
        "id": "task",
        "label": "Task",
        "options": [
          "Authenticate Azure AD users and generate resource tokens.",
          "Authenticate Azure AD users and relay resource tokens.",
          "Create database users and generate resource tokens."
        ],
        "correctByRow": {
          "cosmos": "Create database users and generate resource tokens.",
          "webapp": "Authenticate Azure AD users and relay resource tokens."
        }
      }
    ]
  },
  {
    "id": "az500-q309",
    "prompt": "NO.309 You have a Microsoft Entra tenant that contains a user named User1.\nYou have an app registration named App1.\nFor App1, you create an app role named Role1.\nYou need to assign User1 to Role1.\nWhat should you use in the Azure portal?",
    "image": "",
    "answers": [
      "Roles and administrators for App1 from Enterprise applications",
      "App roles for App1 from App registrations",
      "Users and groups for App1 from Enterprise applications",
      "API permissions for App1 from App registrations",
      "Roles and administrators from the Microsoft Entra admin center"
    ],
    "correctAnswer": "Users and groups for App1 from Enterprise applications",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q310",
    "prompt": "NO.310 You have an Azure subscription that contains the virtual machines shown in the following\ntable.\n\nFrom Azure Security Center, you turn on Auto Provisioning.\nYou deploy the virtual machines shown in the following table.\n\nOn which virtual machines is the Log Analytics agent installed?",
    "image": "",
    "answers": [
      "VM3 only",
      "VM1 and VM3 only",
      "VM3 and VM4 only",
      "VM1, VM2, VM3, and VM4"
    ],
    "correctAnswer": "VM1, VM2, VM3, and VM4",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q311",
    "prompt": "NO.311 You have an Azure subscription.\nYou plan to deploy an Azure SQL managed instance named AzSQL1.\nYou need to recommend an encryption solution for AzSQL1.\nThe solution must meet the following requirements:\n* The database engine must be prevented from performing key provisioning, data encryption, and\ndecryption operations.\n* Database administrators must be prevented from viewing the encrypted data in plain text.\nWhat should you include in the recommendation?",
    "image": "",
    "answers": [
      "Azure Disk Encryption",
      "TLS",
      "Transparent Data Encryption (TDE) with customer-managed keys",
      "Always Encrypted",
      "Transparent Data Encryption (TDE) with Microsoft-managed keys"
    ],
    "correctAnswer": "Always Encrypted",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q312",
    "prompt": "NO.312 You have an Azure subscription.\nYou plan to create a workflow automation in Microsoft Defender for Cloud that will automatically\nremediate a security vulnerability.\nWhat should you create first?",
    "image": "",
    "answers": [
      "an Azure function app",
      "an automation account",
      "a managed identity",
      "an alert rule",
      "an Azure logic app"
    ],
    "correctAnswer": "an Azure logic app",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q313",
    "prompt": "NO.313 You have an Azure subscription that contains the resources shown in the following table.\n\nYou need to configure network connectivity to meet the following requirements:\n* Communication from VM1 to storage' must traverse an optimized Microsoft backbone network.\n* All the outbound traffic from VM1 to the internet must be denied.\n* The solution must minimize costs and administrative effort\nWhat should you configure for VNetl and NSG1? To answer, drag the appropriate components to the\ncorrect resources. Each component may be used once, more than once, or not at all. You may need\nto drag the split bar between panes or scroll to view content NOTE: Each correct selection is worth\none point.",
    "image": "",
    "type": "dragMatch",
    "allowAnswerShuffle": false,
    "items": [
      {
        "id": "it1",
        "label": "A private endpoint"
      },
      {
        "id": "it2",
        "label": "A route table"
      },
      {
        "id": "it3",
        "label": "A service endpoint"
      },
      {
        "id": "it4",
        "label": "A service tag"
      }
    ],
    "targets": [
      {
        "id": "vnet1",
        "label": "VNet1"
      },
      {
        "id": "nsg1",
        "label": "NSG1"
      }
    ],
    "correctByTarget": {
      "vnet1": "it4",
      "nsg1": "it1"
    }
  },
  {
    "id": "az500-q314",
    "prompt": "NO.314 You have an Azure Active Directory (Azure AD) tenant that contains the users shown in the\nfollowing table.\n\nThe tenant contains the named locations shown in the following table.\n\nYou create the conditional access policies for a cloud app named App1 as shown in the following\ntable.\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "s1",
        "label": "User1 can access App1 from an IP address of 154.12.18.10."
      },
      {
        "id": "s2",
        "label": "User2 can access App1 from an IP address of 193.77.10.15."
      },
      {
        "id": "s3",
        "label": "User2 can access App1 from an IP address of 154.12.18.34."
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
    ]
  },
  {
    "id": "az500-q315",
    "prompt": "NO.315 Your company has an Azure subscription named Sub1 that is associated to an Azure Active\nDirectory (Azure AD) tenant named contoso.com.\nThe company develops an application named App1. App1 is registered in Azure AD.\nYou need to ensure that App1 can access secrets in Azure Key Vault on behalf of the application\nusers.\nWhat should you configure?",
    "image": "",
    "answers": [
      "an application permission without admin consent",
      "a delegated permission without admin consent",
      "a delegated permission that requires admin consent",
      "an application permission that requires admin consent"
    ],
    "correctAnswer": "a delegated permission without admin consent",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q316",
    "prompt": "NO.316 You have an Azure subscription that contains 100 virtual machines and has Azure Security\nCent,-. Standard tier enabled.\nYou plan to perform a vulnerability scan of each virtual machine.\nYou need to deploy the vulnerability scanner extension to the virtual machines by using an Azure\nResource Manager template.\nWhich two values should you specify in the code to automate the deployment of the extension to the\nvirtual machines? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "the user assigned managed identity",
      "the Key Vault managed storage account Key",
      "the Azure Active Directory (Azure AD) ID",
      "the system-assigned managed identity",
      "the primary shared key",
      "the workspace ID"
    ],
    "correctAnswer": "the user assigned managed identity",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q317",
    "prompt": "NO.317 You need to delegate a user to implement the planned change for Defender for Cloud.\nThe solution must follow the principle of least privilege.\nWhich user should you choose?",
    "image": "",
    "answers": [
      "Admin1",
      "Admin2",
      "Admin3",
      "Admin4"
    ],
    "correctAnswer": "Admin2",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q318",
    "prompt": "NO.318 You have an Azure subscription named Sub1 that contains the Azure key vaults shown in the\nfollowing table.\n\nIn Sub1, you create a virtual machine that has the following configurations:\n* Name:VM1\n* Size: DS2v2\n* Resource group: RG1\n* Region: West Europe\n* Operating system: Windows Server 2016\nYou plan to enable Azure Disk Encryption on VM1.\nIn which key vaults can you store the encryption key for VM1?",
    "image": "",
    "answers": [
      "Vault1 or Vault3 only",
      "Vault1, Vault2, Vault3, or Vault4",
      "Vault1 only",
      "Vault1 or Vault2 only"
    ],
    "correctAnswer": "Vault1 only",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q319",
    "prompt": "NO.319 You have an Azure subscription named Sub1 that contains the storage accounts shown in\nthe following table\n\nThe storage3 storage account is encrypted by using customer-managed keys.\nYOU need to enable Microsoft Defender for storage to meet the following requirements.\n* The storage1 and storage2 account must be include in the defender for storage requirement.\n* The storage3 account must be exclude from the Defender for Storage protections.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from\nthe list of actions to the answer area and them in the correct order.",
    "image": "",
    "type": "dragMatch",
    "allowAnswerShuffle": false,
    "items": [
      {
        "id": "it1",
        "label": "For storage3, disable the customer-managed keys."
      },
      {
        "id": "it2",
        "label": "Disable Defender for Storage for storage3."
      },
      {
        "id": "it3",
        "label": "Enable the Defender for Storage plan for Sub1."
      },
      {
        "id": "it4",
        "label": "For storage3, assign the AzDefenderPlanAutoEnable tag and set the value to off."
      },
      {
        "id": "it5",
        "label": "Enable the Defender for Storage plan for RG1."
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
      "step1": "it3",
      "step2": "it4",
      "step3": "it5"
    }
  },
  {
    "id": "az500-q320",
    "prompt": "NO.320 You have an Azure subscription that contains the resources shown in the following table.\nYou plan to deploy the virtual machines shown in the following table.\n\nYou need to assign managed identities to the virtual machines. The solution must meet the following\nrequirements:\n* Assign each virtual machine the required roles.\n* Use the principle of least privilege.\nWhat is the minimum number of managed identities required?",
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
    "id": "az500-q321",
    "prompt": "NO.321 You have an Azure subscription that contains an Azure Active Directory (Azure AD) tenant\nnamed contoso.\ncom. The tenant contains the users shown in the following table.\n\nYou create a resource group named RG1.\nWhich users can modify the permissions for RG1 and which users can create virtual networks in RG1?\nTo answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\n\nUsers:\n- User1: Subscription role = Owner; Azure AD user role = None\n- User2: Subscription role = Contributor; Azure AD user role = None\n- User3: Subscription role = Security Admin; Azure AD user role = None\n- User4: Subscription role = None; Azure AD user role = Service administrator",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "perm",
        "label": "Users who can modify the permissions for RG1:"
      },
      {
        "id": "vnet",
        "label": "Users who can create virtual networks in RG1:"
      }
    ],
    "columns": [
      {
        "id": "users",
        "label": "Users",
        "options": [
          "User1 only",
          "User1 and User2 only",
          "User1 and User3 only",
          "User1, User2 and User3 only",
          "User1, User2, User3, and User4"
        ],
        "correctByRow": {
          "perm": "User1 only",
          "vnet": "User1 and User2 only"
        }
      }
    ]
  },
  {
    "id": "az500-q322",
    "prompt": "NO.322 You have an Azure subscription.\nYou plan to deploy a new Conditional Access policy named CAPolicy1.\nYou need to use the What If tool to evaluate how CAPolicy1 will affect uter1. The solution must\nminimize the impact of CAPolicy1 on the users.\nTo what should you set the Enable policy setting for CAPolicy1?",
    "image": "",
    "answers": [
      "Oft",
      "On",
      "Report only"
    ],
    "correctAnswer": "Report only",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q323",
    "prompt": "NO.323 You have an Azure subscription that contains the resources shown in the following table.\nYou need to ensure that ServerAdmins can perform the following tasks:\n* Create virtual machines in RG1 only.\n* Connect the virtual machines to the existing virtual networks in RG2 only.\nThe solution must use the principle of least privilege.\nWhich two role-based access control (RBAC) roles should you assign to ServerAdmins? Each correct\nanswer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "a custom RBAC role for RG2 IT Certification Guaranteed, The Easy Way! 281",
      "the Network Contributor role for RG2",
      "the Contributor role for the subscription",
      "a custom RBAC role for the subscription",
      "the Network Contributor role for RG1",
      "the Virtual Machine Contributor role for RG1"
    ],
    "correctAnswer": "a custom RBAC role for RG2 IT Certification Guaranteed, The Easy Way! 281",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q324",
    "prompt": "NO.324 Lab Task\nuse the following login credentials as needed:\nTo enter your username, place your cursor in the Sign in box and click on the username below.\nTo enter your password. place your cursor in the Enter password box and click on the password\nbelow.\nAzure Username: Userl -28681041@ExamUsers.com\nAzure Password: GpOAe4@lDg\nIf the Azure portal does not load successfully in the browser, press CTRL-K to reload the portal in a\nnew browser tab.\nThe following information is for technical support purposes only:\nLab Instance: 28681041\nTask 2\nYou need to add the network interface of a virtual machine named VM1 to an application security\ngroup named ASG1.",
    "image": "",
    "answers": [
      "Questão em formato não suportado por este app (consulte o PDF)."
    ],
    "correctAnswer": "Questão em formato não suportado por este app (consulte o PDF).",
    "allowAnswerShuffle": false
  },
  {
    "id": "az500-q325",
    "prompt": "NO.325 You have an Azure subscription.\nYou plan to implement Azure DDoS Protection. The solution must meet the following requirement:\n* Provide access to DDoS rapid response support during active attacks.\n* Project Basic SKU public IP addresses.\nYou need to recommend which type of DDoS projection to use for each requirement.\nWhat should you recommend? To answer, drag the appropriate DDoS projection types to the correct\nrequirements. Each DDoS Projection type may be used once, or not at all. You may need to drag the\n\nsplit bar between panes or scroll to view connect.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "Questão em formato não suportado por este app (consulte o PDF)."
    ],
    "correctAnswer": "Questão em formato não suportado por este app (consulte o PDF).",
    "allowAnswerShuffle": false
  },
  {
    "id": "az500-q326",
    "prompt": "NO.326 You have an Azure subscription that contains the virtual machines shown in the following table.\nYou have an Azure Cosmos DB account named cosmos1 configured as shown in the following exhibit.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "s1",
        "label": "VM1 can access cosmos1 over the internet."
      },
      {
        "id": "s2",
        "label": "VM2 can access cosmos1 over the internet."
      },
      {
        "id": "s3",
        "label": "VM3 can access cosmos1 over the internet."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
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
    ]
  },
  {
    "id": "az500-q327",
    "prompt": "NO.327 Lab Task\nTask 4\nYou need to ensure that when administrators deploy resources by using an Azure Resource Manager\ntemplate, the deployment can access secrets in an Azure key vault named KV31330471.",
    "image": "",
    "answers": [
      "Questão em formato não suportado por este app (consulte o PDF)."
    ],
    "correctAnswer": "Questão em formato não suportado por este app (consulte o PDF).",
    "allowAnswerShuffle": false
  },
  {
    "id": "az500-q328",
    "prompt": "NO.328 You have an Azure virtual machine named VM1.\nFrom Azure Security Center, you get the following high-severity recommendation: \"Install endpoint\nprotection solutions on virtual machine\".\nYou need to resolve the issue causing the high-severity recommendation.\nWhat should you do?",
    "image": "",
    "answers": [
      "Add the Microsoft Antimalware extension to VM1.",
      "Install Microsoft System Center Security Management Pack for Endpoint Protection on VM1.",
      "Add the Network Watcher Agent for Windows extension to VM1.",
      "Onboard VM1 to Microsoft Defender Advanced Threat Protection (Microsoft Defender ATP)."
    ],
    "allowAnswerShuffle": false,
    "correctAnswer": "Add the Microsoft Antimalware extension to VM1."
  },
  {
    "id": "az500-q329",
    "prompt": "NO.329 You onboard Azure Sentinel. You connect Azure Sentinel to Azure Security Center.\nYou need to automate the mitigation of incidents in Azure Sentinel. The solution must minimize\nadministrative effort.\nWhat should you create?",
    "image": "",
    "answers": [
      "an alert rule",
      "a playbook",
      "a function app",
      "a runbook"
    ],
    "allowAnswerShuffle": false,
    "correctAnswer": "a playbook"
  },
  {
    "id": "az500-q330",
    "prompt": "NO.330 From Azure Security, you create a custom alert rule.\nYou need to configure which users will receive an email message when the alert is triggered.\nWhat should you do?",
    "image": "",
    "answers": [
      "From Azure Monitor, create an action group.",
      "From Security Center, modify the Security policy settings of the Azure subscription.",
      "From Azure Active Directory (Azure AD). modify the members of the Security Reader role group.",
      "From Security Center, modify the alert rule."
    ],
    "allowAnswerShuffle": false,
    "correctAnswer": "From Azure Monitor, create an action group."
  },
  {
    "id": "az500-q331",
    "prompt": "NO.331 You have an Azure subscription named Subscription1.\nYou need to view which security settings are assigned to Subscription1 by default.\nWhich Azure policy or initiative definition should you review?",
    "image": "",
    "answers": [
      "the Audit diagnostic setting policy definition",
      "the Enable Monitoring in Azure Security Center initiative definition",
      "the Enable Azure Monitor for VMs initiative definition",
      "the Azure Monitor solution 'Security and Audit' must be deployed policy definition"
    ],
    "allowAnswerShuffle": false,
    "correctAnswer": "the Enable Monitoring in Azure Security Center initiative definition"
  },
  {
    "id": "az500-q332",
    "prompt": "NO.332 You have an Azure key vault.\nYou need to delegate administrative access to the key vault to meet the following requirements:\n* Provide a user named User1 with the ability to set advanced access policies for the key vault.\n* Provide a user named User2 with the ability to add and delete certificates in the key vault.\n* Use the principle of least privilege.\nWhat should you use to assign access to each user? To answer, select the appropriate options in the\nanswer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "u1",
        "label": "User1"
      },
      {
        "id": "u2",
        "label": "User2"
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "options": [
          "A key vault access policy",
          "Azure Information Protection",
          "Azure Policy",
          "Managed identities for Azure resources",
          "RBAC"
        ],
        "correctByRow": {
          "u1": "RBAC",
          "u2": "A key vault access policy"
        }
      }
    ]
  },
  {
    "id": "az500-q333",
    "prompt": "NO.333 You have an Azure subscription that contains the resources shown in the following table.\nYou perform the following tasks:\nCreate a managed identity named Managed1.\nCreate a Microsoft 365 group named Group1.\nYou need to identify which service principals were created and which identities can be assigned the Reader role for RG1.\nWhat should you identify? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "sp",
        "label": "Service principals:"
      },
      {
        "id": "idn",
        "label": "Identities:"
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "options": [
          "Managed1, VM1, and App1 only",
          "App1 only",
          "Managed1 and VM1 only",
          "Managed1, VM1, App1, and Group1"
        ],
        "correctByRow": {
          "sp": "Managed1, VM1, and App1 only",
          "idn": "Managed1 and VM1 only"
        }
      }
    ]
  },
  {
    "id": "az500-q334",
    "prompt": "NO.334 You have an Azure subscription named Sub1.\nYou have an Azure Active Directory (Azure AD) group named Group1 that contains all the members of\nyour IT team.\nYou need to ensure that the members of Group1 can stop, start, and restart the Azure virtual\nmachines in Sub1. The solution must use the principle of least privilege.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from\nthe list of actions to the answer area and arrange them in the correct order.",
    "image": "",
    "type": "dragMatch",
    "allowAnswerShuffle": false,
    "items": [
      {
        "id": "it1",
        "label": "Create a JSON file."
      },
      {
        "id": "it2",
        "label": "Run the Update-AzureRmManagementGroup cmdlet."
      },
      {
        "id": "it3",
        "label": "Create an XML file."
      },
      {
        "id": "it4",
        "label": "Run the New-AzureRmRoleDefinition cmdlet."
      },
      {
        "id": "it5",
        "label": "Run the New-AzureRmRoleAssignment cmdlet."
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
      "step2": "it4",
      "step3": "it5"
    }
  },
  {
    "id": "az500-q335",
    "prompt": "NO.335 You have an Azure subscription named Sub1 and use Microsoft Defender for Cloud. Sub1\ncontains a user named User1 and a resource group named RG1. RG1 contains a Log Analytics\nworkspace named Workspace1.\nYou need to ensure that User1 can modify Azure Logic Apps workflows triggered in response to\nsecurity incidents. The solution must follow the principle of least privilege.\nWhich role should you assign to User1. and to which resource should you assign the role? To answer,\nselect the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r",
        "label": "Resposta"
      }
    ],
    "columns": [
      {
        "id": "role",
        "label": "Role:",
        "options": [
          "Logic App Contributor",
          "Contributor",
          "Logic App Operator",
          "Microsoft Sentinel Automation Contributor",
          "Microsoft Sentinel Contributor"
        ],
        "correctByRow": {
          "r": "Logic App Contributor"
        }
      },
      {
        "id": "res",
        "label": "Resource:",
        "options": [
          "RG1",
          "Sub1",
          "Workspace1"
        ],
        "correctByRow": {
          "r": "RG1"
        }
      }
    ]
  },
  {
    "id": "az500-q336",
    "prompt": "NO.336 Your company has an Azure subscription named Subscription1. Subscription1 is associated\nwith the Azure Active Directory tenant that includes the users shown in the following table.\nThe company is sold to a new owner.\nThe company needs to transfer ownership of Subscription1.\nWhich user can transfer the ownership and which tool should the user use? To answer, select the\nappropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r",
        "label": "Resposta"
      }
    ],
    "columns": [
      {
        "id": "user",
        "label": "User:",
        "options": [
          "User1",
          "User2",
          "User3",
          "User4"
        ],
        "correctByRow": {
          "r": "User1"
        }
      },
      {
        "id": "tool",
        "label": "Tool:",
        "options": [
          "Azure Account Center",
          "Azure Cloud Shell",
          "Azure PowerShell",
          "Azure Security Center"
        ],
        "correctByRow": {
          "r": "Azure Account Center"
        }
      }
    ]
  },
  {
    "id": "az500-q337",
    "prompt": "NO.337 You have a Microsoft Entra tenant named contoso.com that contains the users shown in the following table.\nYou add enterprise applications to contoso.com as shown in the following table.\nYou need to identify which users can grant admin consent for App1 and App2.\nTo answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "app1",
        "label": "App1:"
      },
      {
        "id": "app2",
        "label": "App2:"
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "options": [
          "User1 only",
          "User1 and User2 only",
          "User1 and User3 only",
          "User1 and User4 only",
          "User1, User2, and User3 only",
          "User1, User2, and User4 only",
          "User1, User2, User3, and User4"
        ],
        "correctByRow": {
          "app1": "User1 and User3 only",
          "app2": "User1 and User4 only"
        }
      }
    ]
  },
  {
    "id": "az500-q338",
    "prompt": "NO.338 Your network contains an Active Directory forest named contoso.com. You have an Azure\nDirectory (Azure AD) tenant named contoso.com.\nYou plan to configure synchronization by using the Express Settings installation option in Azure AD\nConnect.\nYou need to identify which roles and groups are required to perform the planned configurations. The\nsolution must use the principle of least privilege.\nWhich two roles and groups should you identify? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "the Domain Admins group in Active Directory",
      "the Security administrator role in Azure AD",
      "the Global administrator role in Azure AD",
      "the User administrator role in Azure AD",
      "the Enterprise Admins group in Active Directory"
    ],
    "allowAnswerShuffle": false,
    "correctAnswer": [
      "the Global administrator role in Azure AD",
      "the Enterprise Admins group in Active Directory"
    ]
  },
  {
    "id": "az500-q339",
    "prompt": "NO.339 You have two Azure subscriptions named Sub1 and Sub2 that contain the virtual networks\nshown in the following table.\nYou have an Azure Virtual Network Manager instance that has the following settings:\n* Name: NetMgr1\n* Region: East US\n* Features: Connectivity\n* Management scope: Sub1\nFor NetMgr1, you create the target network groups shown in the following table.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "s1",
        "label": "You can add VNet1 to Group2."
      },
      {
        "id": "s2",
        "label": "You can add VNet2 to Group1."
      },
      {
        "id": "s3",
        "label": "You can add Subnet3 to Group3."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
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
    ]
  },
  {
    "id": "az500-q340",
    "prompt": "NO.340 You have an Azure subscription that contains a virtual network named VNet1. VNet1\ncontains the subnets shown in the following table.\nThe subscription contains the virtual machines shown in the following table.\nVM3 contains a service that listens for connections on port 8080.\nFor VM1, you configure just-in-time (JIT) VM access as shown in the following exhibit.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "s1",
        "label": "You can establish a Remote Desktop connection from VM1 to VM3 for a maximum of three hours."
      },
      {
        "id": "s2",
        "label": "You can establish a Remote Desktop connection from VM2 to VM1 after requesting access."
      },
      {
        "id": "s3",
        "label": "You can establish a Remote Desktop connection from VM3 to VM1 without requesting access."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
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
    "id": "az500-q341",
    "prompt": "NO.341 You have an Azure subscription that contains a managed identity named Identity1 and the\nAzure key vaults shown in the following table.\nKey Vault1 contains an access policy that grants Identity1 the following key permissions:\n* Get\n* List\n* Wrap\n* Unwrap\nYou need to provide Identity1 with the same permissions for KeyVault2. The solution must use the\nprinciple of least privilege.\nWhich role should you assign to Identity1?",
    "image": "",
    "answers": [
      "Key Vault Crypto Service Encryption User",
      "Key Vault Crypto User",
      "Key Vault Reader",
      "Key Vault Crypto Officer"
    ],
    "allowAnswerShuffle": false,
    "correctAnswer": "Key Vault Crypto Officer"
  },
  {
    "id": "az500-q342",
    "prompt": "NO.342 You have an Azure subscription that contains an Azure key vault named KeyVault1 and the\nvirtual machines shown in the following table.\nYou set the Key Vault access policy to Enable access to Azure Disk Encryption for volume encryption.\nKeyVault1 is configured as shown in the following exhibit.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "s1",
        "label": "From VM1, users can manage the keys and secrets stored in KeyVault1."
      },
      {
        "id": "s2",
        "label": "From VM2, users can manage the keys and secrets stored in KeyVault1."
      },
      {
        "id": "s3",
        "label": "VM2 can use KeyVault1 for Azure Disk Encryption."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
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
    ]
  },
  {
    "id": "az500-q343",
    "prompt": "NO.343 You implement the planned changes for the key vaults.\nTo which key vaults can you restore AKV1 backups?",
    "image": "",
    "answers": [
      "AKV4only",
      "AKV3 and AKV4 only",
      "AKV4 and AKV5 only",
      "AKV2, AKV3, and AKV4 only",
      "AKV2, AKV3, AKV4, and AKV5"
    ],
    "allowAnswerShuffle": false,
    "correctAnswer": "AKV4 and AKV5 only"
  },
  {
    "id": "az500-q344",
    "prompt": "NO.344 You have two Azure subscriptions named Sub1 and Sub2 that contain the virtual networks\nshown in the following table.\nYou have an Azure Virtual Network Manager instance named AVNM1 that has the following\nconfigurations:\n* Management scope: Sub1\n* Network groups:\n* NetGrp1: Static membership that includes VNet1\n* NetGrp2: Dynamic membership that has the following criteria: Tags that contain Red\n* Security admin rule collection: SARule1\n* Deployed to all Azure regions\nYou create two new virtual networks as shown in the following table.\nWhich virtual networks will have SARule1 applied?",
    "image": "",
    "answers": [
      "VNet1 and VNet2 only",
      "VNet2 and VNet3 only",
      "VNet1, VNet2, and VNet3 only",
      "VNet2, VNet3, and VNet4 only",
      "VNet1, VNet2, VNet3, and VNet4"
    ],
    "allowAnswerShuffle": false,
    "correctAnswer": "VNet1, VNet2, and VNet3 only"
  },
  {
    "id": "az500-q345",
    "prompt": "NO.345 You have an Azure subscription that contains the virtual networks shown in the following\ntable.\nThe subscription contains the virtual machines shown in the following table.\nOn NIC1, you configure an application security group named ASG1.\nOn which other network interfaces can you configure ASG1?",
    "image": "",
    "answers": [
      "NIC2 only",
      "NIC2, NIC3, NIC4, and NIC5",
      "NIC2 and NIC3 only",
      "NIC2, NIC3, and NIC4 only"
    ],
    "allowAnswerShuffle": false,
    "correctAnswer": [
      "NIC2 and NIC3 only"
    ]
  },
  {
    "id": "az500-q346",
    "prompt": "NO.346 You have an Azure subscription that contains an Azure key vault named ContosoKey1.\nYou create users and assign them roles as shown in the following table.\nYou need to identify which users can perform the following actions:\n* Delegate permissions for ContsosKey1.\n* Configure network access to ContosoKey1.\nWhich users should you identify? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "del",
        "label": "Delegate permissions for ContosoKey1:"
      },
      {
        "id": "net",
        "label": "Configure network access to ContosoKey1:"
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "options": [
          "User1 only",
          "User1 and User2 only",
          "User1 and User3 only",
          "User1 and User4 only",
          "User1, User2, and User3 only",
          "User1, User2, User3, and User4"
        ],
        "correctByRow": {
          "del": "User1 and User3 only",
          "net": "User1 only"
        }
      }
    ]
  },
  {
    "id": "az500-q347",
    "prompt": "NO.347 You have an Azure AD turned that contains a user named User1.\nYou purchase an App named App1.\nUser1 needs to publish App1 by using Azure AD Application Proxy.\nWhich role should you assign to User1?",
    "image": "",
    "answers": [
      "Hybrid identity Administrator",
      "Cloud App Security Administrator",
      "Application Administrator",
      "Cloud Application Administrate"
    ],
    "allowAnswerShuffle": false,
    "correctAnswer": "Application Administrator"
  },
  {
    "id": "az500-q348",
    "prompt": "NO.348 You have an Azure subscription that is linked to a Microsoft Entra tenant named\ncontoso.com. In contoso.\ncom, you register an app named App1. You need to perform the following tasks for App1:\n* Add and configure the Mobile and desktop applications platform.\n* Add the ipaddr optional claim.\nWhich two settings should you select for App1? To answer, select the appropriate settings in the\nanswer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dragMatch",
    "allowAnswerShuffle": false,
    "items": [
      {
        "id": "it1",
        "label": "Branding & properties"
      },
      {
        "id": "it2",
        "label": "Authentication"
      },
      {
        "id": "it3",
        "label": "Certificates & secrets"
      },
      {
        "id": "it4",
        "label": "Token configuration"
      },
      {
        "id": "it5",
        "label": "API permissions"
      },
      {
        "id": "it6",
        "label": "Expose an API"
      },
      {
        "id": "it7",
        "label": "App roles"
      },
      {
        "id": "it8",
        "label": "Owners"
      },
      {
        "id": "it9",
        "label": "Roles and administrators"
      },
      {
        "id": "it10",
        "label": "Manifest"
      }
    ],
    "targets": [
      {
        "id": "step1",
        "label": "Setting 1"
      },
      {
        "id": "step2",
        "label": "Setting 2"
      }
    ],
    "correctByTarget": {
      "step1": "it2",
      "step2": "it4"
    }
  },
  {
    "id": "az500-q349",
    "prompt": "NO.349 You have an Azure Subscription that is linked to an Azure Active Directory (Azure AD). The\ntenant contains the users shown in the following table.\nYou have an Azure key vault named Vault1 that has Purge protection set to Disabled. Vault1 contains\nthe access policies shown in the following table.\nYou create role assignments for Vault1 as shown in the following table.\nFor each of the following statements, Yes if the statement is true, Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "s1",
        "label": "User1 can set Purge protection to Enable for Vault1."
      },
      {
        "id": "s2",
        "label": "User2 can configure firewalls and virtual networks for Vault1."
      },
      {
        "id": "s3",
        "label": "User3 can add access policies to Vault1."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
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
    ]
  },
  {
    "id": "az500-q350",
    "prompt": "NO.350 You company has an Azure subscription named Sub1. Sub1 contains an Azure web app\nnamed WebApp1 that uses Azure Application Insights. WebApp1 requires users to authenticate by\nusing OAuth 2.0 client secrets.\nDevelopers at the company plan to create a multi-step web test app that preforms synthetic\ntransactions emulating user traffic to Web App1.\nYou need to ensure that web tests can run unattended.\nWhat should you do first?",
    "image": "",
    "answers": [
      "In Microsoft Visual Studio, modify the .webtest file.",
      "Upload the .webtest file to Application Insights.",
      "Register the web test app in Azure AD.",
      "Add a plug-in to the web test app."
    ],
    "allowAnswerShuffle": false,
    "correctAnswer": [
      "Upload the .webtest file to Application Insights."
    ]
  },
  {
    "id": "az500-q351",
    "prompt": "NO.351 You plan to use Azure Sentinel to create an analytic rule that will detect suspicious threats\\nand automate responses.\\nWhich components are required for the rule? To answer, select the appropriate options in the",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r",
        "label": "Resposta"
      }
    ],
    "columns": [
      {
        "id": "det",
        "label": "Detect suspicious threats:",
        "inputType": "select",
        "options": [
          "A Kusto query language query",
          "A Transact-SQL query",
          "An Azure PowerShell query",
          "An Azure Sentinel playbook"
        ],
        "correctByRow": {
          "r": "A Kusto query language query"
        }
      },
      {
        "id": "auto",
        "label": "Automate responses:",
        "inputType": "select",
        "options": [
          "An Azure Functions app",
          "An Azure PowerShell script",
          "An Azure Sentinel playbook",
          "An Azure Sentinel workbook"
        ],
        "correctByRow": {
          "r": "An Azure Sentinel playbook"
        }
      }
    ]
  },
  {
    "id": "az500-q352",
    "prompt": "NO.352 You have an Azure virtual machines shown in the following table.\\nYou create an Azure Log Analytics workspace named Analytics1 in RG1 in the East US region.\\nWhich virtual machines can be enrolled in Analytics1?",
    "image": "",
    "answers": [
      "VM1 only",
      "VM1, VM2, and VM3 only",
      "VM1, VM2, VM3, and VM4",
      "VM1 and VM4 only"
    ],
    "correctAnswer": "VM1, VM2, VM3, and VM4",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q353",
    "prompt": "NO.353 Your company uses cloud-based resources from the following platforms:\\n* Azure\\n* Amazon Web Services (AWS)\\n* Google Cloud Platform (GCP)\\nYou plan to implement Microsoft Defender for Cloud.\\nOn which platforms can you use Defender for Cloud to protect containers and storage? To answer,\\nselect the appropriate options in the answer area.\\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "cont",
        "label": "Containers:"
      },
      {
        "id": "stor",
        "label": "Storage:"
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "inputType": "select",
        "options": [
          "Azure only",
          "Azure and AWS only",
          "Azure and GCP only",
          "Azure, AWS, and GCP"
        ],
        "correctByRow": {
          "cont": "Azure, AWS, and GCP",
          "stor": "Azure only"
        }
      }
    ]
  },
  {
    "id": "az500-q354",
    "prompt": "NO.354 You have an Azure subscription that contains a user named User1 and an Azure Container\\nRegistry named ConReg1.\\nYou enable content trust for ContReg1.\\nYou need to ensure that User1 can create trusted images in ContReg1. The solution must use the\\nprinciple of least privilege.\\nWhich two roles should you assign to User1? Each correct answer presents part of the solution.\\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "AcrQuarantineReader",
      "Contributor",
      "AcrPush",
      "AcrImageSigner",
      "AcrQuarantineWriter"
    ],
    "correctAnswer": [
      "AcrPush",
      "AcrImageSigner"
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q355",
    "prompt": "NO.355 You have an Azure subscription that contains an Azure key vault named KeyVault1 and the\\nvirtual machines shown in the following table.\\nYou enable the Azure Disk Encryption for volume encryption KeyVault1 setting.\\nKeyVault1 is configured as shown in the following exhibit.\\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "s1",
        "label": "From VM1, users can manage the keys and secrets stored in KeyVault1."
      },
      {
        "id": "s2",
        "label": "From VM2, users can manage the keys and secrets stored in KeyVault1."
      },
      {
        "id": "s3",
        "label": "VM2 can use KeyVault1 for Azure Disk Encryption."
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
    "id": "az500-q356",
    "prompt": "NO.356 You have an Azure Active Directory (Azure AD) tenant named contoso.com. The tenant\\ncontains the users shown in the following table.\\nYou configure an access review named Review1 as shown in the following exhibit.\\nUse the drop-down menus to select the answer choice that completes each statement based on the\\ninformation presented in the graphic.\\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r",
        "label": "Resposta"
      }
    ],
    "columns": [
      {
        "id": "b1",
        "label": "User3 can perform Review1 for",
        "inputType": "select",
        "options": [
          "User3 only",
          "User1 and User2 only",
          "User1, User2, and User3"
        ],
        "correctByRow": {
          "r": "User3 only"
        }
      },
      {
        "id": "b2",
        "label": "If User2 fails to complete Review1 by March 20, 2019",
        "inputType": "select",
        "options": [
          "The Password administrator role will be revoked from User2",
          "User2 will retain the Password administrator role",
          "User3 will receive a confirmation request"
        ],
        "correctByRow": {
          "r": "User3 will receive a confirmation request"
        }
      }
    ]
  },
  {
    "id": "az500-q357",
    "prompt": "NO.357 You have an Azure subscription that contains an Azure SQL database named SQL1.\\nYou plan to deploy a web app named App1.\\nYou need to provide App1 with read and write access to SQL1. The solution must meet the following\\nrequirements:\\n* Provide App1 with access to SQL1 without storing a password.\\n* Use the principle of least privilege.\\n* Minimize administrative effort.\\nWhich type of account should App1 use to access SQL1, and which database roles should you assign\\nto App1? To answer, select the appropriate options in the answer area.\\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r",
        "label": "Resposta"
      }
    ],
    "columns": [
      {
        "id": "acct",
        "label": "Account type:",
        "inputType": "select",
        "options": [
          "Azure Active Directory User",
          "Managed identity",
          "Service Principal"
        ],
        "correctByRow": {
          "r": "Managed identity"
        }
      },
      {
        "id": "role",
        "label": "Roles:",
        "inputType": "select",
        "options": [
          "db_datawriter only",
          "db_datareader and db_datawriter",
          "db_owner only"
        ],
        "correctByRow": {
          "r": "db_datareader and db_datawriter"
        }
      }
    ]
  },
  {
    "id": "az500-q358",
    "prompt": "NO.358 You have a web app hosted on an on-premises server that is accessed by using a URL of\\nhttps://www.contoso.\\ncom. You plan to migrate the web app to Azure. You will continue to use https://www.contoso.com.\\nYou need to enable HTTPS for the Azure web app. What should you do first?",
    "image": "",
    "answers": [
      "Export the public key from the on-premises server and save the key as a P7b file.",
      "Export the private key from the on-premises server and save the key as a PFX file that is encrypted by using TripleDES.",
      "Export the public key from the on-premises server and save the key as a CER file.",
      "Export the private key from the on-premises server and save the key as a PFX file that is encrypted by using AES256."
    ],
    "correctAnswer": "Export the private key from the on-premises server and save the key as a PFX file that is encrypted by using TripleDES.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q359",
    "prompt": "NO.359 You have a Azure subscription that contains an Azure Container Registry named Registry1.\\nThe subscription uses the Standard use tier of Azure Security Center.\\nYou upload several container images to Register1.\\nYou discover that vulnerability security scans were not performed\\nYou need to ensured that the images are scanned for vulnerabilities when they are uploaded to\\nRegistry1.\\nWhat should you do?",
    "image": "",
    "answers": [
      "From the Azure portal modify the Pricing tier settings.",
      "From Azure CLI, lock the container images.",
      "Upload the container images by using AzCopy",
      "Push the container images to Registry1 by using Docker"
    ],
    "correctAnswer": "From the Azure portal modify the Pricing tier settings.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q360",
    "prompt": "NO.360 You have an Azure Sentinel workspace that contains an Azure Active Directory (Azure AD)\\nconnector, an Azure Log Analytics query named Query1 and a playbook named Playbook1.\\nQuery1 returns a subset of security events generated by Azure AD.\\nYou plan to create an Azure Sentinel analytic rule based on Query1 that will trigger Playbook1.\\nYou need to ensure that you can add Playbook1 to the new rule.\\nWhat should you do? To answer, select the appropriate options in the answer area.\\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r",
        "label": "Resposta"
      }
    ],
    "columns": [
      {
        "id": "r1",
        "label": "Create the rule and set the type to:",
        "inputType": "select",
        "options": [
          "Fusion",
          "Microsoft Security incident creation",
          "Scheduled"
        ],
        "correctByRow": {
          "r": "Scheduled"
        }
      },
      {
        "id": "r2",
        "label": "Configure the playbook to include:",
        "inputType": "select",
        "options": [
          "A managed connector",
          "A system-assigned managed identity",
          "A trigger",
          "Diagnostic settings"
        ],
        "correctByRow": {
          "r": "A trigger"
        }
      }
    ]
  },
  {
    "id": "az500-q361",
    "prompt": "NO.361 You have an Azure subscription that contains two virtual machines named VM1 and VM2\\nthat run Windows Server 2019.\\nYou are implementing Update Management in Azure Automation.\\nYou plan to create a new update deployment named Update1.\\nYou need to ensure that Update! meets the following requirements:\\n* Automatically applies updates to VM1 and VM2.\\n* Automatically adds any new Windows Server 2019 virtual machines to Update1.\\nWhat should you include in Update1?",
    "image": "",
    "answers": [
      "a security group that has a Membership type of Dynamic Device",
      "a security group that has a Membership type of Assigned",
      "a Kusto query language query",
      "a dynamic group query"
    ],
    "correctAnswer": "a dynamic group query",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q362",
    "prompt": "NO.362 You have a network security group (NSG) bound to an Azure subnet.\\nYou run Get-AzureRmNetworkSecurityRuleConfig and receive the output shown in the following\\nexhibit.\\nUse the drop-down menus to select the answer choice that completes each statement based on the\\ninformation presented in the graphic.\\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r",
        "label": "Resposta"
      }
    ],
    "columns": [
      {
        "id": "b1",
        "label": "Traffic destined for an Azure Storage account is",
        "inputType": "select",
        "options": [
          "able to connect to East US",
          "able to connect to East US 2",
          "able to connect to West Europe",
          "prevented from connecting to all regions"
        ],
        "correctByRow": {
          "r": "able to connect to East US 2"
        }
      },
      {
        "id": "b2",
        "label": "FTP connections from 1.2.3.4 to 10.0.0.10/32 are",
        "inputType": "select",
        "options": [
          "allowed",
          "dropped",
          "forwarded"
        ],
        "correctByRow": {
          "r": "dropped"
        }
      }
    ]
  },
  {
    "id": "az500-q363",
    "prompt": "NO.363 You have an Azure subscription linked to an Azure Active Directory Premium Plan 1 tenant.\\nYou plan to implement Azure Active Directory (Azure AD) Identity Protection.\\nYou need to ensure that you can configure a user risk policy and a sign-in risk policy.\\nWhat should you do first?",
    "image": "",
    "answers": [
      "Purchase Azure Active Directory Premium Plan 2 licenses for all users.",
      "Register all users for Azure Multi-Factor Authentication (MFA).",
      "Enable security defaults for Azure AD.",
      "Upgrade Azure Security Center to the standard tier."
    ],
    "correctAnswer": "Purchase Azure Active Directory Premium Plan 2 licenses for all users.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q364",
    "prompt": "NO.364 You have an Azure subscription that contains the resources shown in the following table.\\nVNet1 contains the subnets shown in the following table.\\nYou plan to use the Azure portal to deploy an Azure firewall named AzFW1 to VNet1.\\nWhich resource group and subnet can you use to deploy AzFW1? To answer, select the appropriate\\noptions in the answer area.\\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r",
        "label": "Resposta"
      }
    ],
    "columns": [
      {
        "id": "rg",
        "label": "Resource group:",
        "inputType": "select",
        "options": [
          "RG1",
          "RG3"
        ],
        "correctByRow": {
          "r": "RG3"
        }
      },
      {
        "id": "sub",
        "label": "Subnet:",
        "inputType": "select",
        "options": [
          "AzureFirewallSubnet only",
          "AzureFirewall only",
          "AzureFirewall or AzureFirewallSubnet only",
          "AzureFirewall, AzureFirewallSubnet, or Subnet2 only",
          "AzureFirewall, AzureFirewallSubnet, Subnet1, or Subnet2"
        ],
        "correctByRow": {
          "r": "AzureFirewallSubnet only"
        }
      }
    ]
  },
  {
    "id": "az500-q365",
    "prompt": "NO.365 You have an Azure Subscription that is connected to an on-premises datacenter and\\ncontains the resources shown in the following table.\\nYou need to configure virtual network service endpoints for VNet1 and VNet2. The solution must\\nmeet the following requirements:\\n* The virtual machines that connect to the subnet of VNet1 must access storage1, storage2, and\\nAzure AD by using the Microsoft backbone network.\\n* The virtual machines that connect to the subnet of VNet2 must access storage1 and KeyVault1 by\\nusing the Microsoft backbone network.\\n* The virtual machines must use the Microsoft backbone network to communicate between VNet1\\nand VNet2.\\nHow many service endpoints should you configure for each virtual network? To answer, select the\\nappropriate options in the answer area.\\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "v1",
        "label": "VNet1:"
      },
      {
        "id": "v2",
        "label": "VNet2:"
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "inputType": "select",
        "options": [
          "0",
          "1",
          "2",
          "3",
          "4"
        ],
        "correctByRow": {
          "v1": "3",
          "v2": "2"
        }
      }
    ]
  },
  {
    "id": "az500-q366",
    "prompt": "NO.366 Lab Task\\nTask 6\\nYou need to configure a Microsoft SQL server named Web3l 330471 only to accept connections from\\nthe Subnet0 subnet on the VNET01 virtual network.",
    "image": "",
    "answers": [
      "Questão em formato não suportado por este app (consulte o PDF)."
    ],
    "correctAnswer": "Questão em formato não suportado por este app (consulte o PDF).",
    "allowAnswerShuffle": false
  },
  {
    "id": "az500-q367",
    "prompt": "NO.367 You need to recommend which virtual machines to use to host App1. The solution must\\nmeet the technical requirements for KeyVault1.\\nWhich virtual machines should you use?",
    "image": "",
    "answers": [
      "VM1 only",
      "VM1 and VM2 only",
      "VM1, VM2, and VM4 only",
      "VM1, VM2, VM3. and VM4"
    ],
    "correctAnswer": "VM1, VM2, VM3. and VM4",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q368",
    "prompt": "NO.368 You have an Azure subscription that contains an Azure Blob storage account bolb1.\\nYou need to configure attribute-based access control (ABAC) for blob1.\\nWhich attributes can you use in access conditions?",
    "image": "",
    "answers": [
      "blob index tags only",
      "blob index tags and container names only",
      "file extensions and container names only",
      "blob index tags, file extensions, and container names"
    ],
    "correctAnswer": "blob index tags and container names only",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q369",
    "prompt": "NO.369 You have 15 Azure virtual machines in a resource group named RG1.\\nAll virtual machines run identical applications.\\nYou need to prevent unauthorized applications and malware from running on the virtual machines.\\nWhat should you do?",
    "image": "",
    "answers": [
      "Configure Azure Active Directory (Azure AD) Identity Protection.",
      "From Microsoft Defender for Cloud, configure adaptive application controls.",
      "Apply an Azure policy to RGI.",
      "Apply a resource lock to RGI."
    ],
    "correctAnswer": "From Microsoft Defender for Cloud, configure adaptive application controls.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q370",
    "prompt": "NO.370 You have an Azure subscription that contains the Azure Firewall policies shown in the\\nfollowing table.\\nThe subscription contains the firewalls shown in the following table.\\nThe subscription contains the virtual networks shown in the following table.\\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "s1",
        "label": "You can use URL filtering on the network rules for VNet1."
      },
      {
        "id": "s2",
        "label": "You can use an intrusion detection and prevention system (IDPS) to monitor malicious activity on VNet2."
      },
      {
        "id": "s3",
        "label": "If you configure peering between VNet1 and VNet3, encrypted outbound traffic from VNet3 will be inspected."
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
    ]
  },
  {
    "id": "az500-q371",
    "prompt": "NO.371 You have an Azure subscription that contains the virtual networks shown in the following\\ntable.\\nThe subscription contains the virtual machines shown in the following table.\\nYou have a storage account named contoso2024 that contains the following resources:\\n* A container named Contained that contains a file named File1\\n* A file share named Share1 that contains a file named File2\\nYou create a private endpoint for contoso2024 as shown in the following exhibit.\\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "s1",
        "label": "From VM1, you can access File1 by using a private IP address."
      },
      {
        "id": "s2",
        "label": "From VM2, you can access File1 by using a private IP address."
      },
      {
        "id": "s3",
        "label": "From VM2, you can access File2 by using a private IP address."
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
    ]
  },
  {
    "id": "az500-q372",
    "prompt": "NO.372 Your company plans to create separate subscriptions for each department. Each\\nsubscription will be associated to the same Azure Active Directory (Azure AD) tenant.\\nYou need to configure each subscription to have the same role assignments.\\nWhat should you use?",
    "image": "",
    "answers": [
      "Azure Security Center",
      "Azure Policy",
      "Azure AD Privileged Identity Management (PIM)",
      "Azure Blueprints"
    ],
    "correctAnswer": "Azure Blueprints",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q373",
    "prompt": "NO.373 Your company recently created an Azure subscription.\\nYou have been tasked with making sure that a specified user is able to implement Azure AD Privileged\\nIdentity Management (PIM).\\nWhich of the following is the role you should assign to the user?",
    "image": "",
    "answers": [
      "The Global administrator role.",
      "The Security administrator role.",
      "The Password administrator role.",
      "The Compliance administrator role."
    ],
    "correctAnswer": "The Global administrator role.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q374",
    "prompt": "NO.374 You have an Azure subscription that contains the resources shown in the following table.\\nAn IP address of 10.1.0.4 is assigned to VM5. VM5 does not have a public IP address.\\nVM5 has just in time (JIT) VM access configured as shown in the following exhibit.\\nYou enable JIT VM access for VM5.\\nNSG1 has the inbound rules shown in the following exhibit.\\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "s1",
        "label": "Deleting the security rule that has a priority of 100 will revoke the approved JIT VM access request."
      },
      {
        "id": "s2",
        "label": "Remote Desktop access to VM5 is blocked."
      },
      {
        "id": "s3",
        "label": "An Azure Bastion host will enable Remote Desktop access to VM5 from the internet."
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
    ]
  },
  {
    "id": "az500-q375",
    "prompt": "NO.375 You have 10 virtual machines on a single subnet that has a single network security group\\n(NSG).\\nYou need to log the network traffic to an Azure Storage account.\\nWhich two actions should you perform? Each correct answer presents part of the solution.\\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "Install the Network Performance Monitor solution.",
      "Enable Azure Network Watcher.",
      "Enable diagnostic logging for the NSG.",
      "Enable NSG flow logs.",
      "Create an Azure Log Analytics workspace."
    ],
    "correctAnswer": "Enable NSG flow logs.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q376",
    "prompt": "NO.376 Your network contains an Active Directory forest named contoso.com. The forest contains a\nsingle domain.\nYou have an Azure subscription named Sub1 that is associated to an Azure Active Directory (Azure\nAD) tenant named contoso.com.\nYou plan to deploy Azure AD Connect and to integrate Active Directory and the Azure AD tenant.\nYou need to recommend an integration solution that meets the following requirements:\nEnsures that password policies and user logon restrictions apply to user accounts that are synced to\nthe Tenant Minimizes the number of servers required for the solution.\nWhich authentication method should you include in the recommendation?",
    "image": "",
    "answers": [
      "federated identity with Active Directory Federation Services (AD FS)",
      "password hash synchronization with seamless single sign-on (SSO)",
      "pass-through authentication with seamless single sign-on (SSO)"
    ],
    "correctAnswer": "pass-through authentication with seamless single sign-on (SSO)",
    "type": "multipleChoice",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q377",
    "prompt": "NO.377 You have an Azure subscription that contains three storage account named storage1,\nstorage2, and storage3, three Log Analytics workspaces named Analytics1, Analytics2, Analytics3, and\nthree Azure event hub named EventHub1, EventHub2, and EventHub3.\nFor Microsoft Entra ID, you create the diagnostic settings shown in the following table.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE:\nEach correct selection is worth one point.\n329\nIT Certification Guaranteed, The Easy Way!",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "s1",
        "label": "You can create additional Microsoft Entra diagnostic settings."
      },
      {
        "id": "s2",
        "label": "You can configure retention for locations where Setting4 stores logs."
      },
      {
        "id": "s3",
        "label": "You can configure Setting2 to have Analytics1 and Analytics2 as destinations."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
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
    ]
  },
  {
    "id": "az500-q378",
    "prompt": "NO.378 You have an Azure subscription that contains a user named User1 and a storage account\nnamed storage1. The storage1 account contains the resources shown in the following table.\nIn storage1, you create a shared access signature (SAS) named SAS1 as shown in the following exhibit\n.\n330\nIT Certification Guaranteed, The Easy Way!\nTo which resources can User! write on July 1, 2022 by using SAS1 and key 1? To answer, select the\nappropriate options in the answer area. NOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "sas1",
        "label": "SAS1:"
      },
      {
        "id": "key1",
        "label": "Key1:"
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "options": [
          "folder1 only",
          "container and folder1 only",
          "folder1 and table1 only",
          "container1 and table1 only",
          "container1, folder1, and table1"
        ],
        "correctByRow": {
          "sas1": "container and folder1 only",
          "key1": "container1, folder1, and table1"
        }
      }
    ]
  },
  {
    "id": "az500-q379",
    "prompt": "NO.379 You have an Azure Storage account that contains a blob container named container1 and a\nclient application named App1.\nYou need to enable App1 access to container1 by using Azure Active Directory (Azure AD)\nauthentication.\nWhat should you do? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r",
        "label": "Resposta"
      }
    ],
    "columns": [
      {
        "id": "aad",
        "label": "From Azure AD:",
        "options": [
          "Register App1.",
          "Create an access package.",
          "Implement an application proxy.",
          "Modify the authentication methods."
        ],
        "correctByRow": {
          "r": "Register App1."
        }
      },
      {
        "id": "sa",
        "label": "From the storage account:",
        "options": [
          "Add a private endpoint.",
          "Regenerate the access key.",
          "Configure Access control (IAM).",
          "Generate a shared access signature (SAS)."
        ],
        "correctByRow": {
          "r": "Configure Access control (IAM)."
        }
      }
    ]
  },
  {
    "id": "az500-q380",
    "prompt": "NO.380 You have an Azure subscription that uses Microsoft Defender for Cloud. You have accounts\nfor the following cloud services:\n* Alibaba Cloud\n* Amazon Web Services (AWS)\n* Google Cloud Platform (GCP)\nWhat can you add to Defender for Cloud?",
    "image": "",
    "answers": [
      "AWS only",
      "Alibaba Cloud and AWS only",
      "Alibaba Good and GCP only",
      "AWS and GCP only 333 IT Certification Guaranteed, The Easy Way!",
      "Alibaba Cloud, AWS. and GCP"
    ],
    "correctAnswer": "AWS and GCP only 333 IT Certification Guaranteed, The Easy Way!",
    "type": "multipleChoice",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q381",
    "prompt": "NO.381 You have an Azure subscription that contains an Azure key vault named Vault1.\nOn January 1, 2019, Vault1 stores the following secrets.\nWhich can each secret be used by an application? To answer, select the appropriate options in the\nanswer area.\nNOTE: Each correct selection is worth one point.\n334\nIT Certification Guaranteed, The Easy Way!",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "pwd1",
        "label": "Password1:"
      },
      {
        "id": "pwd2",
        "label": "Password2:"
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "options": [
          "Never",
          "Always",
          "Only after May 1, 2019",
          "Only between March 1, 2019 and May 1, 2019"
        ],
        "correctByRow": {
          "pwd1": "Never",
          "pwd2": "Only between March 1, 2019 and May 1, 2019"
        }
      }
    ]
  },
  {
    "id": "az500-q382",
    "prompt": "NO.382 Your network contains an on-premises Active Directory domain named adatum.com that\nsyncs to Azure Active Directory (Azure AD). Azure AD Connect is installed on a domain member server\nnamed Server1.\nYou need to ensure that a domain administrator for the adatum.com domain can modify the\n335\nIT Certification Guaranteed, The Easy Way!\nsynchronization options. The solution must use the principle of least privilege.\nWhich Azure AD role should you assign to the domain administrator?",
    "image": "",
    "answers": [
      "Security administrator",
      "Global administrator",
      "User administrator"
    ],
    "correctAnswer": "Global administrator",
    "type": "multipleChoice",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q383",
    "prompt": "NO.383 Your company has two offices in Seattle and New York. Each office connects to the Internet\nby using a NAT device. The offices use the IP addresses shown in the following table.\nThe company has an Azure Active Directory (Azure AD) tenant named contoso.com. The tenant\ncontains the users shown in the following table.\nThe MFA service settings are configured as shown in the exhibit. (Click the Exhibit tab.)\n336\nIT Certification Guaranteed, The Easy Way!\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "s1",
        "label": "If User1 signs in to Azure from a device that uses an IP address of 134.18.14.10, User1 must be authenticated by using a phone."
      },
      {
        "id": "s2",
        "label": "If User2 signs in to Azure from a device in the Seattle office, User2 must be authenticated by using the Microsoft Authenticator app."
      },
      {
        "id": "s3",
        "label": "If User2 signs in to Azure from a device in the New York office, User1 must be authenticated by using a phone."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
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
    ]
  },
  {
    "id": "az500-q384",
    "prompt": "NO.384 You have a Microsoft Entra tenant that contains the users shown in the following table.\nYou configure a Conditional Access policy that has the following settings:\n* Name: CAPolicy1\n* Assignments\no Users or workload identities: Group1\no Target resources: All cloud apps\n* Access controls\no Grant access: Require multifactor authentication\nFrom Microsoft Authenticator settings for the tenant, the Enable and Target settings are configured\nas shown in the Enable and Target exhibit. (Click the Enable and Target tab.)\n338\nIT Certification Guaranteed, The Easy Way!\nFrom Microsoft Authenticator settings for the tenant, the Configure settings are configured as shown\nin the Configure exhibit. (Click the Configure tab.)\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\n339\nIT Certification Guaranteed, The Easy Way!",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "s1",
        "label": "User1 is required to use number matching during sign-in."
      },
      {
        "id": "s2",
        "label": "User2 is required to use number matching during sign-in."
      },
      {
        "id": "s3",
        "label": "User3 is required to use number matching during sign-in."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
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
    ]
  },
  {
    "id": "az500-q385",
    "prompt": "NO.385 You have an Azure subscription that contains the virtual machines shown in the following\ntable.\nYou create the Azure policies shown in the following table.\n340\nIT Certification Guaranteed, The Easy Way!\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "s1",
        "label": "You can start VM1."
      },
      {
        "id": "s2",
        "label": "You can start VM2."
      },
      {
        "id": "s3",
        "label": "You can create a virtual machine in RG2."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
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
    "id": "az500-q386",
    "prompt": "NO.386 You have an on-premises server named Server1.\nYou have an Azure subscription that contains a Microsoft Sentinel workspace named Sentinel 1.\nYou install the Windows Firewall solution in Sentinel1.\nYou need to use Microsoft Sentinel to monitor Windows Defender Firewall on Server1.\nWhat should you install on Server1, and what should you create in the Azure subscription? To\nanswer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\n342\nIT Certification Guaranteed, The Easy Way!",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r",
        "label": "Resposta"
      }
    ],
    "columns": [
      {
        "id": "server1",
        "label": "Server1:",
        "options": [
          "The Azure Connected Machine agent",
          "An Azure Pipelines agent",
          "An on-premises data gateway",
          "The Microsoft Entra provisioning agent"
        ],
        "correctByRow": {
          "r": "The Azure Connected Machine agent"
        }
      },
      {
        "id": "sub",
        "label": "Subscription:",
        "options": [
          "A data collection rule (DCR)",
          "A data collection endpoint (DCE)",
          "A private endpoint",
          "An Azure Private Link service"
        ],
        "correctByRow": {
          "r": "A data collection rule (DCR)"
        }
      }
    ]
  },
  {
    "id": "az500-q387",
    "prompt": "NO.387 You have multiple development teams that will create apps in Azure.\nYou plan to create a standard development environment that will be deployed for each team.\nYou need to recommend a solution that will enforce resource locks across the development\nenvironments and ensure that the locks are applied in a consistent manner.\nWhat should you include in the recommendation?",
    "image": "",
    "answers": [
      "an Azure policy",
      "an Azure Resource Manager template",
      "a management group",
      "an Azure blueprint"
    ],
    "correctAnswer": "an Azure blueprint",
    "type": "multipleChoice",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q388",
    "prompt": "NO.388 You have a Microsoft 365 tenant that uses an Azure Active Directory (Azure AD) tenant The\nAzure AD tenant syncs to an on-premises Active Directory domain by using an instance of Azure AD\nConnect.\nYou create a new Azure subscription\nYou discover that the synced on-premises user accounts cannot be assigned rotes in the new\nsubscription.\n343\nIT Certification Guaranteed, The Easy Way!\nYou need to ensure that you can assign Azure and Microsoft 365 roles to the synced Azure AD user\naccounts.\nWhat should you do first?",
    "image": "",
    "answers": [
      "Change the Azure AD tenant used by the new subscription.",
      "Configure the Azure AD tenant used by the new subscription to use pass-through authenticate",
      "Configure the Azure AD tenant used by the new subscription to use federated authentication.",
      "Configure a second instance of Azure AD Connect."
    ],
    "correctAnswer": "Change the Azure AD tenant used by the new subscription.",
    "type": "multipleChoice",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q389",
    "prompt": "NO.389 You have an Azure subscription that contains the virtual machines shown in the following\ntable.\nFrom Azure Security Center, you turn on Auto Provisioning.\nYou deploy the virtual machines shown in the following table.\nOn which virtual machines is the Microsoft Monitoring agent installed?",
    "image": "",
    "answers": [
      "VM3 only",
      "VM1 and VM3 only",
      "VM3 and VM4 only",
      "VM1, VM2, VM3, and VM4"
    ],
    "correctAnswer": "VM1, VM2, VM3, and VM4",
    "type": "multipleChoice",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q390",
    "prompt": "NO.390 You have an Azure subscription that contains the resources shown in the following table.\n344\nIT Certification Guaranteed, The Easy Way!\nApp1 uses Function 1, SQL1, and storage 1.\nYou need to secure the traffic between App1, Function1, SQL1. and storage1, by using private\nendpoints.\nWith which resources can App1 communicate by using a private endpoint?",
    "image": "",
    "answers": [
      "SQL1 only",
      "storage1 only",
      "Function1 only",
      "SQL1 and storage1 only",
      "storage1 and Function1 only",
      "storage1, SQL1, and Function1"
    ],
    "correctAnswer": "storage1, SQL1, and Function1",
    "type": "multipleChoice",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q391",
    "prompt": "NO.391 You have the Azure virtual machines shown in the following table.\nEach virtual machine has a single network interface.\nYou add the network interface of VM1 to an application security group named ASG1.\nYou need to identify the network interfaces of which virtual machines you can add to ASG1.\nWhat should you identify?",
    "image": "",
    "answers": [
      "VM2 only",
      "VM2, VM3, VM4, and VM5",
      "VM2, VM3, and VM5 only",
      "Vm2 and Vm3 only"
    ],
    "correctAnswer": "Vm2 and Vm3 only",
    "type": "multipleChoice",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q392",
    "prompt": "NO.392 You need to implement the planned change for storage2. The solution must meet the\ntechnical requirements for storage encryption.",
    "image": "",
    "answers": [
      "Create an encryption scope in storage2.",
      "Configure storage2 to use an account encryption key. 345 IT Certification Guaranteed, The Easy Way!",
      "Assign an Azure role-based access control (Azure RBAC) role to storage2.",
      "Enable purge protection for storage2."
    ],
    "correctAnswer": "Create an encryption scope in storage2.",
    "type": "multipleChoice",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q393",
    "prompt": "NO.393 You have an Azure subscription that contains an Azure Key Vault Standard key vault named\nVault1. Vault1 hosts a 2048-bit RSA key named key1.\nYou need to ensure that key1 is rotated every 90 days.\nWhat should you do first?",
    "image": "",
    "answers": [
      "Create a key rotation policy.",
      "Modify the Access policies settings of Vault1.",
      "Upgrade Vault1 to Key Vault Premium.",
      "Recreate key1 as an EC key."
    ],
    "correctAnswer": "Create a key rotation policy.",
    "type": "multipleChoice",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q394",
    "prompt": "NO.394 You have an Azure subscription.\nYou plan to create a custom role-based access control (RBAC) role that will provide permission to\nread the Azure Storage account.\nWhich property of the RBAC role definition should you configure?",
    "image": "",
    "answers": [
      "NotActions []",
      "DataActions []",
      "AssignableScopes []",
      "Actions []"
    ],
    "correctAnswer": "Actions []",
    "type": "multipleChoice",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q395",
    "prompt": "NO.395 You have an Azure subscription that contains an Azure Active Directory (Azure AD) tenant\nand a user named User1.\nThe App registrations settings for the tenant are configured as shown in the following exhibit.\nYou plan to deploy an app named App1.\nYou need to ensure that User1 can register App1 in Azure AD. The solution must use the principle of\nleast privilege.\nWhich role should you assign to User1?",
    "image": "",
    "answers": [
      "App Configuration Data Owner for the subscription",
      "Managed Application Contributor for the subscription 346 IT Certification Guaranteed, The Easy Way!",
      "Cloud application administrator in Azure AD",
      "Application developer in Azure AD."
    ],
    "correctAnswer": "Application developer in Azure AD.",
    "type": "multipleChoice",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q396",
    "prompt": "NO.396 Lab Task\nTask 7\nYou need to ensure that connections through an Azure Application Gateway named Homepage-AGW\nare inspected for malicious requests.",
    "image": "",
    "answers": [
      "Questão em formato não suportado por este app (consulte o PDF)."
    ],
    "correctAnswer": "Questão em formato não suportado por este app (consulte o PDF).",
    "allowAnswerShuffle": false
  },
  {
    "id": "az500-q397",
    "prompt": "NO.397 You have an Azure Sentinel workspace that has the following data connectors:\n* Azure Active Directory Identity Protection\n* Common Event Format (CEF)\n* Azure Firewall\nYou need to ensure that data is being ingested from each connector.\nFrom the Logs query window, which table should you query for each connector? To answer, select\nthe appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\n347\nIT Certification Guaranteed, The Easy Way!",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "idp",
        "label": "Azure Active Directory Identity Protection:"
      },
      {
        "id": "afw",
        "label": "Azure Firewall:"
      },
      {
        "id": "cef",
        "label": "CEF:"
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "options": [
          "AzureDiagnostics",
          "CommonSecurityLog",
          "SecurityAlert",
          "SecurityEvent",
          "Syslog"
        ],
        "correctByRow": {
          "idp": "SecurityAlert",
          "afw": "AzureDiagnostics",
          "cef": "CommonSecurityLog"
        }
      }
    ]
  },
  {
    "id": "az500-q398",
    "prompt": "NO.398 You have an Azure subscription that contains an Azure key vault.\nYou need to configure maximum number of days for Which new keys are valid. The solution must\nminimize administrative effort.\nWhat should you use?",
    "image": "",
    "answers": [
      "Key Vault properties",
      "Azure Policy",
      "Azure Purview",
      "Azure Blueprints"
    ],
    "correctAnswer": "Azure Policy",
    "type": "multipleChoice",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q399",
    "prompt": "NO.399 Your on-premises network contains the servers shown in the following table.\nYou have an Azure subscription that contains multiple virtual machines that run either Windows Server 2019 or SLES.\nYou need to configure Azure Monitor to collect data from the on-premises servers and the Azure virtual machines.\nWhat should you select? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r",
        "label": "Resposta"
      }
    ],
    "columns": [
      {
        "id": "os",
        "label": "Operating systems:",
        "options": [
          "SLES only",
          "Windows Server only",
          "SLES and Windows Server"
        ],
        "correctByRow": {
          "r": "SLES and Windows Server"
        }
      },
      {
        "id": "plat",
        "label": "Platforms:",
        "options": [
          "Azure virtual machines only",
          "Azure virtual machines and Hyper-V virtual machines only",
          "Azure Arc-enabled servers and Azure virtual machines only",
          "Azure virtual machines, Hyper-V virtual machines, and Azure Arc-enabled servers"
        ],
        "correctByRow": {
          "r": "Azure Arc-enabled servers and Azure virtual machines only"
        }
      }
    ]
  },
  {
    "id": "az500-q400",
    "prompt": "NO.400 You have an Azure subscription that contains the resources shown in the following table.\n351\nIT Certification Guaranteed, The Easy Way!\nYou plan to use service endpoints and service endpoint policies.\nWhich resources can be accessed by using a service endpoint, and which resources support service\nendpoint policies? To answer, select the appropriate options in the answer area.\nNOTE; Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "access",
        "label": "Can be accessed by using a service endpoint:"
      },
      {
        "id": "policy",
        "label": "Support service endpoint policies:"
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "options": [
          "storage1 and WebApp1 only",
          "VM1 and storage1 only",
          "VM1 and WebApp1 only",
          "VM1, storage1, and WebApp1 only",
          "storage1 only",
          "VM1 only",
          "WebApp1 only"
        ],
        "correctByRow": {
          "access": "storage1 and WebApp1 only",
          "policy": "storage1 only"
        }
      }
    ]
  },
  {
    "id": "az500-q401",
    "prompt": "NO.401 You have a hybrid configuration of Azure Active Directory (Azure AD).\nAll users have computers that run Windows 10 and are hybrid Azure AD joined.\nYou have an Azure SQL database that is configured to support Azure AD authentication.\nDatabase developers must connect to the SQL database by using Microsoft SQL Server Management\nStudio (SSMS) and authenticate by using their on-premises Active Directory account.\nYou need to tell the developers which authentication method to use to connect to the SQL database\nfrom SSMS. The solution must minimize authentication prompts.\nWhich authentication method should you instruct the developers to use?",
    "image": "",
    "answers": [
      "SQL Login",
      "Active Directory - Universal with MFA support",
      "Active Directory - Integrated",
      "Active Directory - Password"
    ],
    "correctAnswer": "Active Directory - Integrated",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q402",
    "prompt": "NO.402 You have an Azure subscription that is linked to a Microsoft Entra tenant. The tenant uses\nMicrosoft Entra ID Protection.\nYou have 2,000 users that are each assigned a Microsoft Entra ID P2 license.\nYou plan to use Azure Monitor to generate an alert when a workload identity that is using leaked\ncredentials is detected.\nYou need to configure the Diagnostic setting to support the planned alert. The solution must\nminimize administrative effort.\nWhich log category should you collect, and to which destination should you send the logs? To answer,\nselect the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r1",
        "label": "Diagnostic setting"
      }
    ],
    "columns": [
      {
        "id": "logCategory",
        "label": "Log category",
        "options": [
          "RiskyServicePrincipals",
          "RiskyUsers",
          "ServicePrincipalRiskEvents",
          "UserRiskEvents"
        ],
        "correctByRow": {
          "r1": "ServicePrincipalRiskEvents"
        }
      },
      {
        "id": "destination",
        "label": "Destination",
        "options": [
          "A Log Analytics workspace",
          "An Azure event hub",
          "A storage account"
        ],
        "correctByRow": {
          "r1": "A Log Analytics workspace"
        }
      }
    ]
  },
  {
    "id": "az500-q403",
    "prompt": "NO.403 You have an Azure subscription named Sub1 that contains the resources shown in the\nfollowing table.\n\nYou need to enable Microsoft Defender for Cloud for storage accounts and virtual machines.\nAt which levels can you enable Defender for Cloud for the storage accounts and the virtual machines?\nTo answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r1",
        "label": "Defender for Cloud levels"
      }
    ],
    "columns": [
      {
        "id": "storage",
        "label": "Storage accounts",
        "options": [
          "Subscription only",
          "Workspace only",
          "Storage account only",
          "Subscription or storage account only",
          "Subscription, workspace, or storage account"
        ],
        "correctByRow": {
          "r1": "Subscription or storage account only"
        }
      },
      {
        "id": "vm",
        "label": "Virtual machines",
        "options": [
          "Subscription only",
          "Workspace only",
          "Virtual machine only",
          "Subscription or virtual machine only",
          "Subscription, workspace, or virtual machine"
        ],
        "correctByRow": {
          "r1": "Subscription, workspace, or virtual machine"
        }
      }
    ]
  },
  {
    "id": "az500-q404",
    "prompt": "NO.404 You have an Azure subscription that uses Microsoft Defender for Cloud.\nYou have an Amazon Web Services (AWS) account.\nYou need to add the AWS account to Defender for Cloud.\nWhat should you do first?",
    "image": "",
    "answers": [
      "From the Azure portal, add the AWS enterprise application.",
      "From the AWS account, enable a security hub.",
      "From Defender for Cloud, configure the Security solutions settings.",
      "From Defender for Cloud, configure the Environment settings."
    ],
    "correctAnswer": "From Defender for Cloud, configure the Environment settings.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q405",
    "prompt": "NO.405 You have an Azure subscription that contains the virtual networks shown in the following\ntable.\n\nThe subscription contains the subnets shown in the following table.\n\nYou plan to create an Azure web app named WebApp2 that will have the following configurations:\n* Region: East US\n* VNet integration: Enabled\n* Scale out: Autoscale to up to 10 instances\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "s1",
        "label": "WebApp2 can be integrated with Subnet11."
      },
      {
        "id": "s2",
        "label": "WebApp2 can be integrated with Subnet12."
      },
      {
        "id": "s3",
        "label": "WebApp2 can be integrated with Subnet21."
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
    ]
  },
  {
    "id": "az500-q406",
    "prompt": "NO.406 Lab Task\nuse the following login credentials as needed:\nTo enter your username, place your cursor in the Sign in box and click on the username below.\nTo enter your password. place your cursor in the Enter password box and click on the password\nbelow.\nAzure Username: User1 -28681041@ExamUsers.com\nAzure Password: GpOAe4@lDg\nIf the Azure portal does not load successfully in the browser, press CTRL-K to reload the portal in a\nnew browser tab.\nThe following information is for technical support purposes only:\nLab Instance: 28681041\nTask 4\nYou need to ensure that a user named user2-28681041 can manage the properties of the virtual\nmachines in the RG1lod28681041 resource group. The solution must use the principle of least\nprivilege.",
    "image": "",
    "answers": [
      "(Lab Task)"
    ],
    "correctAnswer": "(Lab Task)",
    "allowAnswerShuffle": false
  },
  {
    "id": "az500-q407",
    "prompt": "NO.407 You have an Azure subscription that contains the following Azure firewall:\n* Name: Fw1\n* Azure region: UK West\n* Private IP address: 10.1.3.4\n* Public IP address: 23.236.62.147\n\nThe subscription contains the virtual networks shown in the following table.\n\nThe subscription contains the subnets shown in the following table.\n\nThe subscription contains the routes shown in the following table.\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "s1",
        "label": "Traffic from Subnet1-1 to Subnet1-2 is routed through Fw1."
      },
      {
        "id": "s2",
        "label": "Traffic from Subnet2-1 to Subnet1-1 is routed through Fw1."
      },
      {
        "id": "s3",
        "label": "Traffic from Subnet3-1 to the internet is routed through Fw1."
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
    ]
  },
  {
    "id": "az500-q408",
    "prompt": "NO.408 You have an Azure subscription that contains a key vault and an Azure SQL server.\nYou need to deploy an Azure SQL database that uses Transparent Data Encryption (TDE) and a\ncustomer-managed key.\nWhat should you create before you deploy the database?",
    "image": "",
    "answers": [
      "An app registration",
      "A standard general-purpose v2 storage account",
      "A user-assigned managed identity",
      "A user account that is assigned the SQL Security Manager role"
    ],
    "correctAnswer": "A user-assigned managed identity",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q409",
    "prompt": "NO.409 You have an Azure subscription.\nYou plan to create two custom roles named Role1 and Role2.\nThe custom roles will be used to perform the following tasks:\n* Members of Role1 will manage application security groups.\n* Members of Role2 will manage Azure Bastion.\nYou need to add permissions to the custom roles.\nWhich resource provider should you use for each role? To answer, drag the appropriate resource\nproviders to the correct roles. Each resource provider may be used once, more than once, or not at\nall. You may need to drag the split bar between panes or scroll to view content.",
    "image": "",
    "type": "dragMatch",
    "allowAnswerShuffle": false,
    "items": [
      {
        "id": "it1",
        "label": "Microsoft.Compute"
      },
      {
        "id": "it1_2",
        "label": "Microsoft.Compute"
      },
      {
        "id": "it2",
        "label": "Microsoft.Network"
      },
      {
        "id": "it2_2",
        "label": "Microsoft.Network"
      },
      {
        "id": "it3",
        "label": "Microsoft.Security"
      },
      {
        "id": "it3_2",
        "label": "Microsoft.Security"
      },
      {
        "id": "it4",
        "label": "Microsoft.Solutions"
      },
      {
        "id": "it4_2",
        "label": "Microsoft.Solutions"
      }
    ],
    "targets": [
      {
        "id": "role1",
        "label": "Role1"
      },
      {
        "id": "role2",
        "label": "Role2"
      }
    ],
    "correctByTarget": {
      "role1": "it2",
      "role2": "it2_2"
    }
  },
  {
    "id": "az500-q410",
    "prompt": "NO.410 You need to implement the planned change for SQLdb1.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "Create a compliance policy.",
      "Configure Microsoft Entra authentication for SQLServer1.",
      "Create a Conditional Access policy.",
      "Configure a user-assigned managed identity for SQLdb1.",
      "Configure Federated client identity for SQLdb1."
    ],
    "correctAnswer": [
      "Configure Microsoft Entra authentication for SQLServer1.",
      "Create a Conditional Access policy."
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q411",
    "prompt": "NO.411 You have an Azure subscription that contains a resource group named RG1 and a security\ngroup named ServerAdmins. RG1 contains 10 virtual machines, a virtual network named VNET1, and a\nnetwork security group (NSG) named NSG1. ServerAdmins can access the virtual machines by using\nRDP.\nYou need to ensure that NSG1 allows RDP connections to the virtual machines for a maximum of 60\nminutes when a member of ServerAdmins requests access.\nWhat should you configure?",
    "image": "",
    "answers": [
      "an Azure Active Directory (Azure AD) Privileged Identity Management (PIM) role assignment.",
      "a just in time (JIT) VM access policy in Azure Security Center",
      "an Azure Policy assigned to RG1.",
      "an Azure Bastion host on VNET1."
    ],
    "correctAnswer": "a just in time (JIT) VM access policy in Azure Security Center",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q412",
    "prompt": "NO.412 You have an Azure subscription that contains the users shown in the following table.\n\nWhich users can enable Azure AD Privileged Identity Management (PIM)?",
    "image": "",
    "answers": [
      "User2 and User3 only",
      "User1 and User2 only",
      "User2 only",
      "User1 only"
    ],
    "correctAnswer": "User1 and User2 only",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q413",
    "prompt": "NO.413 You have an Azure AD tenant that contains 500 users and an administrative unit named\nAU1.\nFrom the Azure Active Directory admin center, you plan to add the users to AU1 by using Bulk add\nmembers.\nYou need to create and upload a file for the bulk add.\nWhat should you include in the file?",
    "image": "",
    "answers": [
      "only the display name of each user",
      "only the user principal name (UPN) of each user",
      "only the object identifier of each user",
      "only the user principal name (UPN) and object identifier of each user",
      "Only the user principal name (UPN) and display name of each user"
    ],
    "correctAnswer": "Only the user principal name (UPN) and display name of each user",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q414",
    "prompt": "NO.414 You have an Azure subscription that contains several Azure SQL databases and an Azure\nSentinel workspace.\nYou need to create a saved query in the workspace to find events reported by Advanced Threat\nProtection for Azure SQL Database.\nWhat should you do?",
    "image": "",
    "answers": [
      "From Azure CLI run the Get-AzOperationalInsightsworkspace cmdlet.",
      "From the Azure SQL Database query editor, create a Transact-SQL query.",
      "From the Azure Sentinel workspace, create a Kusto Query Language query.",
      "From Microsoft SQL Server Management Studio (SSMS), create a Transact-SQL query."
    ],
    "correctAnswer": "From the Azure Sentinel workspace, create a Kusto Query Language query.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q415",
    "prompt": "NO.415 You have an Azure subscription that contains an Azure SQL server named SQL1. SQL1\ncontains DB1. You need to use Microsoft Defender for Cloud to complete a vulnerability assessment\nfor DB1. What should you do first?",
    "image": "",
    "answers": [
      "From Advanced Threat Protection types, select SQL injection vulnerability.",
      "Configure the Send scan report to setting.",
      "Set Periodic recurring scans to ON.",
      "Enable the Microsoft Defender for SQL plan."
    ],
    "correctAnswer": "From Advanced Threat Protection types, select SQL injection vulnerability.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q416",
    "prompt": "NO.416 You have an Azure subscription named Sub1 that contains the resources shown in the\nfollowing table.\n\nYou need to ensure that you can provide VM1 with secure access to a database on SQL1 by using a\ncontained database user.\nWhat should you do?",
    "image": "",
    "answers": [
      "Enable a managed service identity on VM1.",
      "Create a secret in KV1.",
      "Configure a service endpoint on SQL1.",
      "Create a key in KV1."
    ],
    "correctAnswer": "Enable a managed service identity on VM1.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q417",
    "prompt": "NO.417 You have an Azure subscription that contains a storage account named storage1 and a\nvirtual machine named VM1.\nVM1 is connected to a virtual network named VNet1 that contains one subnet and uses Azure DNS.\nYou need to ensure that VM1 connects to storage1 by using a private IP address. The solution must\nminimize administrative effort.\nWhat should you do?",
    "image": "",
    "answers": [
      "For storage1, disable public network access.",
      "Create an Azure Private DNS zone.",
      "On VNet1, create a new subnet.",
      "For storage1, create a new private endpoint."
    ],
    "correctAnswer": "For storage1, create a new private endpoint.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q418",
    "prompt": "NO.418 You have an Azure subscription that uses Microsoft Defender for Cloud.\nYou have an Amazon Web Service (AWS) account named AWS1 that is connected to Defender for\nCloud.\nYou need to ensure that AWS foundational Security Best Practices. The solution must minimize\nadministrative effort.\nWhat should you do in Defender for Cloud?",
    "image": "",
    "answers": [
      "Create a new customer assessment.",
      "Assign a built-in assessment.",
      "Assign a built-in compliance standard.",
      "Create a new custom standard."
    ],
    "correctAnswer": "Assign a built-in compliance standard.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q419",
    "prompt": "NO.419 You have an Azure subscription that contains the virtual machines shown in the following\ntable.\n\nYou are configuring Microsoft Defender for Servers.\nYou plan to enable adaptive application controls to create an allowlist of known-safe apps on the\nvirtual machines. Which virtual machines support the use of adaptive application controls?",
    "image": "",
    "answers": [
      "VM1 and VM2 only",
      "VM2 and VM4 only",
      "VM2 and VM3 only",
      "VM1, VM2, VM3, and VM4"
    ],
    "correctAnswer": "VM1, VM2, VM3, and VM4",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q420",
    "prompt": "NO.420 Note: This question is included in a number of questions that depict the identical set-up.\nHowever, every question has a distinctive result. Establish if the solution satisfies the requirements.\nYour company has an Active Directory forest with a single domain, named weylandindustries.com.\nThey also have an Azure Active Directory (Azure AD) tenant with the same name.\nYou have been tasked with integrating Active Directory and the Azure AD tenant. You intend to\ndeploy Azure AD Connect.\nYour strategy for the integration must make sure that password policies and user logon limitations\naffect user accounts that are synced to the Azure AD tenant, and that the amount of necessary\nservers is reduced.\nSolution: You recommend the use of federation with Active Directory Federation Services (AD FS).\nDoes the solution meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "No",
    "allowAnswerShuffle": false
  },
  {
    "id": "az500-q421",
    "prompt": "NO.421 You have an Azure subscription that contains the Azure Active Directory (Azure AD) resources shown in the following table.\n\nYou create the groups shown in the following table.\n\nWhich resources can you add to Group5 and Group6? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "g5",
        "label": "Group5"
      },
      {
        "id": "g6",
        "label": "Group6"
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "inputType": "select",
        "options": [
          "User1 only",
          "User1 and Group1 only",
          "User1, Group1, and Managed1 only",
          "User1, Group1, Managed1, and App1"
        ],
        "correctByRow": {
          "g5": "User1, Group1, Managed1, and App1",
          "g6": "User1 only"
        }
      }
    ]
  },
  {
    "id": "az500-q422",
    "prompt": "NO.422 You have an Azure subscription named Sub1 that contains an Azure Log Analytics workspace named LAW1.\nYou have 100 on-premises servers that run Windows Server 2012 R2 and Windows Server 2016. The servers connect to LAW1. LAW1 is configured to collect security-related performance counters from the connected servers.\nYou need to configure alerts based on the data collected by LAW1. The solution must meet the following requirements:\n* Alert rules must support dimensions.\n* The time it takes to generate an alert must be minimized.\n* Alert notifications must be generated only once when the alert is generated and once when the alert is resolved.\nWhich signal type should you use when you create the alert rules?",
    "image": "",
    "answers": [
      "Log",
      "Log (Saved Query)",
      "Metric",
      "Activity Log"
    ],
    "correctAnswer": "Metric",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q423",
    "prompt": "NO.423 You have an Azure subscription.\nYou configure Microsoft Sentinel to use multiple data sources.\nYou need to create analytic rules that meet the following requirements:\n* Rule 1: Automatically match Common Event Format (CEF) logs and syslog data with domain, IP address, and URL indicators.\n* Rule 2: Use Microsoft proprietary algorithms.\nWhich type of detection should you use for each rule? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r1",
        "label": "Rule1"
      },
      {
        "id": "r2",
        "label": "Rule2"
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Detection type",
        "inputType": "select",
        "options": [
          "Threat intelligence",
          "Fusion",
          "Machine learning (ML) behavioral analytics",
          "Microsoft security"
        ],
        "correctByRow": {
          "r1": "Threat intelligence",
          "r2": "Machine learning (ML) behavioral analytics"
        }
      }
    ]
  },
  {
    "id": "az500-q424",
    "prompt": "NO.424 You have an Azure SQL database named DB1 that contains a table named Table1.\nYou need to configure DB1 to meet the following requirements:\n* Sensitive data in Table1 must be identified automatically.\n* Only the first character and last character of the sensitive data must be displayed in query results.\nWhich two features should you configure? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "Auditing",
      "Ledger",
      "Data Discovery & Classification",
      "Dynamic Data Masking",
      "Microsoft Defender for Cloud",
      "Transparent data encryption",
      "Performance overview",
      "Performance recommendations",
      "Query Performance Insight",
      "Automatic tuning",
      "Alerts",
      "Metrics",
      "Diagnostic settings",
      "logs"
    ],
    "correctAnswer": [
      "Data Discovery & Classification",
      "Dynamic Data Masking"
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q425",
    "prompt": "NO.425 You have an Azure subscription that contains the resources shown in the following table.\n\nThe subscription is linked to an Azure Active Directory (Azure AD) tenant that contains the users shown in the following table.\n\nYou create the groups shown in the following table.\n\nThe membership rules for Group1 and Group2 are configured as follows:\n(user.accountEnabled -eq true) or (user.usageLocation -eq \"US\")\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "s1",
        "label": "User1 is a member of Group1 and Group2."
      },
      {
        "id": "s2",
        "label": "User2 is a member of Group2 only."
      },
      {
        "id": "s3",
        "label": "Managed1 is a member of Group1 and Group2."
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
    ]
  },
  {
    "id": "az500-q426",
    "prompt": "NO.426 You have an Azure Sentinel deployment.\nYou need to create a scheduled query rule named Rule1.\nWhat should you use to define the query rule logic for Rule1?",
    "image": "",
    "answers": [
      "a Transact-SQL statement",
      "a JSON definition",
      "GraphQL",
      "a Kusto query"
    ],
    "correctAnswer": "a Kusto query",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q427",
    "prompt": "NO.427 You have an Azure Container Registry named Registry1.\nYou add role assignments for Registry1 as shown in the following table.\n\nWhich users can upload images to Registry1 and download images from Registry1? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "up",
        "label": "Upload images"
      },
      {
        "id": "down",
        "label": "Download images"
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "inputType": "select",
        "options": [
          "User1 only",
          "User1 and User4 only",
          "User1, User3, and User4",
          "User1, User2, User3, and User4",
          "User2 only",
          "User1 and User2 only",
          "User2 and User4 only",
          "User1, User2, and User4",
          "User1, User2, User3, and User4"
        ],
        "correctByRow": {
          "up": "User1 and User4 only",
          "down": "User1, User2, and User4"
        }
      }
    ]
  },
  {
    "id": "az500-q428",
    "prompt": "NO.428 You have a file named File1.yaml that contains the following contents.\n\napiVersion: 2018-10-01\nlocation: eastus\nname: containergroup1\nproperties:\n  containers:\n  - name: container1\n    properties:\n      environmentVariables:\n      - name: 'Variable1'\n        value: 'Value1'\n      - name: 'Variable2'\n        secureValue: 'Value2'\n      image: nginx\n      ports: []\n      resources:\n        requests:\n          cpu: 1.0\n          memoryInGB: 1.5\nosType: Linux\nrestartPolicy: Always\ntags: null\ntype: Microsoft.ContainerInstance/containerGroups\n\nYou create an Azure container instance named container1 by using File1.yaml.\nYou need to identify where you can access the values of Variable1 and Variable2.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "v1",
        "label": "Variable1"
      },
      {
        "id": "v2",
        "label": "Variable2"
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "inputType": "select",
        "options": [
          "Cannot be accessed",
          "Can be accessed from the Azure portal only",
          "Can be accessed from inside container1 only",
          "Can be accessed from inside container1 and the Azure portal"
        ],
        "correctByRow": {
          "v1": "Can be accessed from inside container1 and the Azure portal",
          "v2": "Can be accessed from inside container1 only"
        }
      }
    ]
  },
  {
    "id": "az500-q429",
    "prompt": "NO.429 You plan to deploy Azure container instances.\nYou have a containerized application that validates credit cards. The application is comprised of two containers: an application container and a validation container.\nThe application container is monitored by the validation container. The validation container performs security checks by making requests to the application container and waiting for responses after every transaction.\nYou need to ensure that the application container and the validation container are scheduled to be deployed together. The containers must communicate to each other only on ports that are not externally exposed.\nWhat should you include in the deployment?",
    "image": "",
    "answers": [
      "application security groups",
      "network security groups (NSGs)",
      "management groups",
      "container groups"
    ],
    "correctAnswer": "container groups",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q430",
    "prompt": "NO.430 Your company has an Azure subscription named Subscription1 that contains the users shown in the following table.\nThe company is sold to a new owner.\nThe company needs to transfer ownership of Subscription1.\nWhich user can transfer the ownership and which tool should the user use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r",
        "label": "Resposta"
      }
    ],
    "columns": [
      {
        "id": "user",
        "label": "User",
        "options": [
          "User1",
          "User2",
          "User3",
          "User4"
        ],
        "correctByRow": {
          "r": "User2"
        }
      },
      {
        "id": "tool",
        "label": "Tool",
        "options": [
          "Azure Account Center",
          "Azure Cloud Shell",
          "Azure PowerShell",
          "Azure Security Center"
        ],
        "correctByRow": {
          "r": "Azure Account Center"
        }
      }
    ]
  },
  {
    "id": "az500-q431",
    "prompt": "NO.431 You have an Azure Active Directory (Azure AD) tenant that contains two administrative units named AU1 and AU2.\nUsers are assigned to the administrative units as shown in the following table.\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "s1",
        "label": "Admin1 can reset the password of User1."
      },
      {
        "id": "s2",
        "label": "Admin2 can reset the password of User3."
      },
      {
        "id": "s3",
        "label": "Admin3 can reset the password of Admin4."
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
    ]
  },
  {
    "id": "az500-q432",
    "prompt": "NO.432 You have an Azure Active Directory (Azure AD) tenant named contoso.onmicrosoft.com.\nThe User administrator role is assigned to a user named Admin1.\nAn external partner has a Microsoft account that uses the user1@outlook.com sign in.\nAdmin1 attempts to invite the external partner to sign in to the Azure AD tenant and receives the following error message: \"Unable to invite user user1@outlook.com Generic authorization exception.\"\nYou need to ensure that Admin1 can invite the external partner to sign in to the Azure AD tenant.\nWhat should you do?",
    "image": "",
    "answers": [
      "From the Roles and administrators blade, assign the Security administrator role to Admin1.",
      "From the Organizational relationships blade, add an identity provider.",
      "From the Custom domain names blade, add a custom domain.",
      "From the Users blade, modify the External collaboration settings."
    ],
    "correctAnswer": "From the Users blade, modify the External collaboration settings.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q433",
    "prompt": "NO.433 You have a Microsoft 365 E5 subscription.\nYou have an Azure subscription that uses Microsoft Defender for Cloud.\nYou have an on-premises datacenter that contains the servers shown in the following table.\nYou enable direct onboarding to Microsoft Defender for Cloud.\nWhich servers will be onboarded to Defender for Cloud?",
    "image": "",
    "answers": [
      "Server1 only",
      "Server2 only",
      "Server3 only",
      "Server1 and Server3",
      "Server2 and Server3",
      "Server1, Server2, and Server3"
    ],
    "correctAnswer": "Server3 only",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q434",
    "prompt": "NO.434 You have an Azure resource group that contains 100 virtual machines.\nYou have an initiative named Initiative1 that contains multiple policy definitions. Initiative1 is assigned to the resource group.\nYou need to identify which resources do NOT match the policy definitions.\nWhat should you do?",
    "image": "",
    "answers": [
      "From Azure Security Center, view the Regulatory compliance assessment.",
      "From the Policy blade of the Azure Active Directory admin center, select Compliance.",
      "From Azure Security Center, view the Secure Score.",
      "From the Policy blade of the Azure Active Directory admin center, select Assignments."
    ],
    "correctAnswer": "From Azure Security Center, view the Regulatory compliance assessment.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q435",
    "prompt": "NO.435 You have an on-premises network and an Azure subscription.\nYou have the Microsoft SQL Server instances shown in the following table.\nYou plan to implement Microsoft Defender for SQL.\nWhich SQL Server instances will be protected by Microsoft Defender for SQL?",
    "image": "",
    "answers": [
      "sql1 and sql2 only",
      "sql1, sql2, and sql3 only",
      "sql1, sql2, and sql4 only",
      "sql1, sql2, sql3, and sql4"
    ],
    "correctAnswer": "sql1, sql2, sql3, and sql4",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q436",
    "prompt": "NO.436 You have an Azure SQL database.\nYou implement Always Encrypted.\nYou need to ensure that application developers can retrieve and decrypt data in the database.\nWhat pieces of information should you provide to the developers? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "a stored access policy",
      "a shared access signature (SAS)",
      "the column encryption key",
      "user credentials",
      "the column master key"
    ],
    "correctAnswer": [
      "the column encryption key",
      "the column master key"
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q437",
    "prompt": "NO.437 You have an Azure subscription.\nYou plan to use Microsoft Defender for Cloud to provide AI security posture management capabilities.\nYou need to recommend a Defender for Cloud plan that supports the deployment requirements. The solution must minimize costs.\nWhat should you recommend?",
    "image": "",
    "answers": [
      "Microsoft Defender for App Service",
      "Microsoft Defender for APIs",
      "Foundational Cloud Security Posture Management (CSPM)",
      "Defender Cloud Security Posture Management (CSPM)"
    ],
    "correctAnswer": "Foundational Cloud Security Posture Management (CSPM)",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q438",
    "prompt": "NO.438 You have an Azure subscription named Sub1.\nIn Azure Security Center, you have a security playbook named Play1. Play1 is configured to send an email message to a user named User1.\nYou need to modify Play1 to send email messages to a distribution group named Alerts.\nWhat should you use to modify Play1?",
    "image": "",
    "answers": [
      "Azure DevOps",
      "Azure Application Insights",
      "Azure Monitor",
      "Azure Logic Apps Designer"
    ],
    "correctAnswer": "Azure Logic Apps Designer",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q439",
    "prompt": "NO.439 Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou use Azure Security Center for the centralized policy management of three Azure subscriptions.\nYou use several policy definitions to manage the security of the subscriptions.\nYou need to deploy the policy definitions as a group to all three subscriptions.\nSolution: You create a policy initiative and assignments that are scoped to resource groups.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "No",
    "allowAnswerShuffle": false
  },
  {
    "id": "az500-q440",
    "prompt": "NO.440 You create a new Azure subscription.\nYou need to ensure that you can create custom alert rules in Azure Security Center.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "Onboard Azure Active Directory (Azure AD) Identity Protection.",
      "Create an Azure Storage account.",
      "Implement Azure Advisor recommendations.",
      "Create an Azure Log Analytics workspace.",
      "Upgrade the pricing tier of Security Center to Standard."
    ],
    "correctAnswer": [
      "Create an Azure Log Analytics workspace.",
      "Upgrade the pricing tier of Security Center to Standard."
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q441",
    "prompt": "NO.441 You are configuring an Azure Kubernetes Service (AKS) cluster that will connect to an Azure\nContainer Registry.\nYou need to use the auto-generated service principal to authenticate to the Azure Container Registry.\nWhat should you create?",
    "image": "",
    "answers": [
      "an Azure Active Directory (Azure AD) group",
      "an Azure Active Directory (Azure AD) role assignment",
      "an Azure Active Directory (Azure AD) user",
      "a secret in Azure Key Vault"
    ],
    "correctAnswer": "an Azure Active Directory (Azure AD) role assignment",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q442",
    "prompt": "NO.442 Note: This question is part of a series of questions that present the same scenario. Each\nquestion in the series contains a unique solution that might meet the stated goals. Some question\nsets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYou have an Azure subscription that contains an Azure Kubernetes Service (AKS) cluster named AKS1\nand an Azure container registry named AZCR1.\nYou need to ensure that AKS1 can deploy container images stored in AZCR1.\nSolution: You assign the AcrPush role-based access control (RBAC) role to the system-assigned\nmanaged identity of AKS1.\nDoes this meet the requirement?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "No",
    "allowAnswerShuffle": false
  },
  {
    "id": "az500-q443",
    "prompt": "NO.443 You have an Azure subscription named Sub 1 that is associated to an Azure Active Directory\n(Azure AD) tenant named contoso.com. The tenant contains the users shown in the following table.\n\nUser1 - Global administrator\nUser2 - Security administrator\nUser3 - Security reader\nUser4 - License administrator\n\nEach user is assigned an Azure AD Premium P2 license.\nYou plan to onboard and configure Azure AD Identity Protection.\nWhich users can onboard Azure AD Identity Protection, remediate users, and configure policies? To\nanswer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "onboard",
        "label": "Users who can onboard Azure AD Identity Protection:"
      },
      {
        "id": "configure",
        "label": "Users who can remediate users and configure policies:"
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "options": [
          "User1 only",
          "User1 and User2 only",
          "User1, User2, and User3 only",
          "User1, User2, User3, and User4 only"
        ],
        "correctByRow": {
          "onboard": "User1 only",
          "configure": "User1 and User2 only"
        }
      }
    ]
  },
  {
    "id": "az500-q444",
    "prompt": "NO.444 You have an Azure subscription that contains a user named Admin1 and a virtual machine\nnamed VM1.\nVM1 runs Windows Server 2019 and was deployed by using an Azure Resource Manager template.\nVM1 is the member of a backend pool of a public Azure Basic Load Balancer.\nAdmin1 reports that VM1 is listed as Unsupported on the Just in time VM access blade of Azure\nSecurity Center.\nYou need to ensure that Admin1 can enable just in time (JIT) VM access for VM1.\nWhat should you do?",
    "image": "",
    "answers": [
      "Create and configure an additional public IP address for VM1.",
      "Replace the Basic Load Balancer with an Azure Standard Load Balancer.",
      "Assign an Azure Active Directory Premium Plan 1 license to Admin1.",
      "Create and configure a network security group (NSG)."
    ],
    "correctAnswer": "Create and configure a network security group (NSG).",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q445",
    "prompt": "NO.445 You suspect that users are attempting to sign in to resources to which they have no access.\nYou need to create an Azure Log Analytics query to identify failed user sign-in attempts from the last\nthree days. The results must only show users who had more than five failed sign-in attempts.\nHow should you configure the query? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "inlineDropdown",
    "allowAnswerShuffle": false,
    "inline": {
      "parts": [
        {
          "text": "let timeframe = 3d;\n\n  \SecurityEvent\n    \| Where TimeGenerated > ago(3d) \n      \| Where AccountType == 'User' and"
        },
        {
          "slot": "c1"
        },
        {
          "text": "==4625\"\n| Summarie failed_login_attemps="
        },
        {
          "slot": "c2"
        },
        {
          "text": "\n          \latest_failed_login=arg_max (TimeGenerated by Account | Where failedlogin attemps > 5"
        }
      ],
      "slots": {
        "c1": {
          "label": "equals",
          "options": [
            "ActivityID",
            "DataType",
            "EventID",
            "QuantityUnit"
          ],
          "correct": "EventID"
        },
        "c2": {
          "label": "details",
          "options": [
            "Count()",
            "Countif()",
            "Makeset()",
            "Split()"
          ],
          "correct": "Count()"
        }
      }
    }
  },
  {
    "id": "az500-q446",
    "prompt": "NO.446 You have an Azure subscription that contains the custom roles shown in the following table.\n\nIn the Azure portal, you plan to create new custom roles by cloning existing roles. The new roles will\nbe configured as shown in the following table.\n\nWhich roles can you clone to create each new role? To answer, select the appropriate options in the\nanswer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r",
        "label": "Resposta"
      }
    ],
    "columns": [
      {
        "id": "role3",
        "label": "Role3:",
        "options": [
          "Role1 only",
          "Built-in Azure AD roles only",
          "Role1 and built-in Azure AD roles only",
          "Role1, built-in Azure AD roles, and built-in Azure subscription roles"
        ],
        "correctByRow": {
          "r": "Role1 only"
        }
      },
      {
        "id": "role4",
        "label": "Role4:",
        "options": [
          "Role2 only",
          "Role2 and built-in Azure subscription roles only",
          "Role2, built-in Azure subscription roles, and built-in Azure AD roles"
        ],
        "correctByRow": {
          "r": "Role2 and built-in Azure subscription roles only"
        }
      }
    ]
  },
  {
    "id": "az500-q447",
    "prompt": "NO.447 You have an Azure subscription that contains an Azure key vault named Vault1 and a virtual\nmachine named VM1.\nVM1 is connected to a virtual network named VNet1.\nYou need to allow access to Vault1 only from VM1.\nWhat should you do in the Networking settings of Vault1?",
    "image": "",
    "answers": [
      "From the Firewalls and virtual networks tab, set Allow trusted Microsoft services to bypass this firewall to Yes for Vault1.",
      "From the Firewalls and virtual networks tab, add the IP address of VM1.",
      "From the Firewalls and virtual networks tab, add VNet1.",
      "From the Private endpoint connections tab, create a private endpoint for VM1."
    ],
    "correctAnswer": "From the Private endpoint connections tab, create a private endpoint for VM1.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q448",
    "prompt": "NO.448 You have an Azure App Service web app named App1 as shown in the exhibit.\nSubnet2 contains a virtual machine named VM1.\nUse the drop-down menus to select the answer choice that completes each statement based on the\ninformation presented in the graphic.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "r",
        "label": "Resposta"
      }
    ],
    "columns": [
      {
        "id": "deny",
        "label": "To deny outbound access, configure [answer choice] on Subnet2.",
        "options": [
          "a network security group (NSG)",
          "a service endpoint",
          "an application security group"
        ],
        "correctByRow": {
          "r": "a network security group (NSG)"
        }
      },
      {
        "id": "connect",
        "label": "To connect to a virtual network in a different region, configure [answer choice].",
        "options": [
          "Gateway-required VNet integrations",
          "an Azure NAT Gateway integration",
          "Regional VNet integrations"
        ],
        "correctByRow": {
          "r": "Gateway-required VNet integrations"
        }
      }
    ]
  },
  {
    "id": "az500-q449",
    "prompt": "NO.449 You have an Azure subscription.\nYou need to deploy an Azure virtual WAN to meet the following requirements:\n* Create three secured virtual hubs located in the East US, West US, and North Europe Azure regions.\n* Ensure that security rules sync between the regions.\nWhat should you use?",
    "image": "",
    "answers": [
      "Azure Firewall Manager",
      "Azure Virtual Network Manager",
      "Azure Network Function Manager",
      "Azure Front Door"
    ],
    "correctAnswer": "Azure Firewall Manager",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q450",
    "prompt": "NO.450 You have an Azure subscription that contains an app named App1. App1 has the app\nregistration shown in the following table.\n\nMicrosoft.Graph - User.Read - Delegated - Admin consent required: No - Status: None\nMicrosoft.Graph - Calendars.Read - Delegated - Admin consent required: No - Status: None\n\nYou need to ensure that App1 can read all user calendars and create appointments. The solution\nmust use the principle of least privilege.\nWhat should you do?",
    "image": "",
    "answers": [
      "Add a new Delegated API permission for Microsoft.Graph Calendars.ReadWrite.",
      "Add a new Application API permission for Microsoft.Graph Calendars.ReadWrite.",
      "Select Grant admin consent.",
      "Add a new Delegated API permission for Microsoft.Graph Calendars.ReadWrite.Shared."
    ],
    "correctAnswer": "Add a new Delegated API permission for Microsoft.Graph Calendars.ReadWrite.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q451",
    "prompt": "NO.451 You have an Azure Active Directory (Azure AD) tenant and a root management group.\nYou create 10 Azure subscriptions and add the subscriptions to the root management group.\nYou need to create an Azure Blueprints definition that will be stored in the root management group.\nWhat should you do first?",
    "image": "",
    "answers": [
      "Add an Azure Policy definition to the root management group.",
      "Modify the role-based access control (RBAC) role assignments for the root management group.",
      "Create a user-assigned identity.",
      "Create a service principal."
    ],
    "correctAnswer": "Modify the role-based access control (RBAC) role assignments for the root management group.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q452",
    "prompt": "NO.452 You have an Azure subscription that contains a user named User1. User1 is assigned the\nReader role for the subscription.\nYou plan to create a custom role named Role1 and assign Role1 to User1.\nYou need to ensure that User1 can create and manage application security groups by using the Azure\nportal.\nWhich two permissions should you add to Role1? To answer, select the appropriate permissions in the\nanswer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "Microsoft Monitoring Insights / Microsoft.SecurityGraph",
      "Microsoft Monitoring Insights / Enable your workforce to be productive on all their devices, while keeping your organization's information protected.",
      "Microsoft Monitoring Insights / Microsoft.DynamicsTelemetry",
      "Microsoft Network",
      "Microsoft Operations Management",
      "Microsoft Policy Insights",
      "Microsoft Portal",
      "Microsoft Power BI Dedicated",
      "Microsoft Power Platform",
      "Microsoft Project Babylon",
      "Microsoft Purview",
      "Microsoft Resource Graph"
    ],
    "correctAnswer": [
      "Microsoft Network",
      "Microsoft Portal"
    ],
    "type": "multipleChoice",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q453",
    "prompt": "NO.453 You have an Azure subscription that uses Microsoft Defender for Cloud.\nYou have an Amazon Web Services (AWS) account.\nYou need to ensure that when you deploy a new AWS Elastic Compute Cloud (EC2) instance, the\nMicrosoft Defender for Servers agent installs automatically.\nWhat should you configure first?",
    "image": "",
    "answers": [
      "the Log Analytics agent",
      "the Azure Monitor agent",
      "the native cloud connector",
      "the classic cloud connector"
    ],
    "correctAnswer": "the Log Analytics agent",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q454",
    "prompt": "NO.454 Lab Task\nuse the following login credentials as needed:\nTo enter your username, place your cursor in the Sign in box and click on the username below.\nTo enter your password, place your cursor in the Enter password box and click on the password\nbelow.\nAzure Username: User1-28681041@ExamUsers.com\nAzure Password: GpOAe4@lDg\nIf the Azure portal does not load successfully in the browser, press CTRL-K to reload the portal in a\nnew browser tab.\nThe following information is for technical support purposes only:\nLab Instance: 28681041\nTask 3\nThe developers at your company plan to create a web app named App28681041 and to publish the\napp to https://www.contoso.com. You need to perform the following tasks:\n* Ensure that App28681041 is registered to Azure AD.\n* Generate a password for App28681041.",
    "image": "",
    "answers": [
      "(Lab Task)"
    ],
    "correctAnswer": "(Lab Task)",
    "allowAnswerShuffle": false
  },
  {
    "id": "az500-q455",
    "prompt": "NO.455 You have an Azure subscription.\nYou plan to create a workflow automation in Azure Security Center that will automatically remediate\na security vulnerability.\nWhat should you create first?",
    "image": "",
    "answers": [
      "a managed identity",
      "an automation account",
      "an Azure function app",
      "an alert rule",
      "an Azure logic app"
    ],
    "correctAnswer": "an Azure logic app",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q456",
    "prompt": "NO.456 Your company has an Active Directory forest with a single domain, named\nweylandindustries.com. They also have an Azure Active Directory (Azure AD) tenant with the same\nname.\nAfter syncing all on-premises identities to Azure AD, you are informed that users with a givenName\nattribute starting with LAB should not be allowed to sync to Azure AD.\nWhich of the following actions should you take?",
    "image": "",
    "answers": [
      "You should make use of the Synchronization Rules Editor to create an attribute-based filtering rule.",
      "You should configure a DNAT rule on the Firewall.",
      "You should configure a network traffic filtering rule on the Firewall.",
      "You should make use of Active Directory Users and Computers to create an attribute-based filtering rule."
    ],
    "correctAnswer": "You should make use of the Synchronization Rules Editor to create an attribute-based filtering rule.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q457",
    "prompt": "NO.457 You have an Azure subscription that is linked to an Azure AD tenant and contains the\nresources shown in the following table.\n\nGroup1 - Dynamic device security group in Azure AD\nManaged1 - Managed identity\nVM1 - Virtual machine that has a system-assigned managed identity\nVM2 - Virtual machine\nApp1 - Enterprise application in Azure AD\n\nWhich resources can be assigned the Contributor role for VM1?",
    "image": "",
    "answers": [
      "Managed1 and App1 only",
      "Group1 and Managed1 only",
      "Group1, Managed1, and VM2 only",
      "Group1, Managed1, VM1, and App1 only"
    ],
    "correctAnswer": "Managed1 and App1 only",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q458",
    "prompt": "NO.458 You have an Azure subscription that contains a virtual machine named VM1.\nYou create an Azure key vault that has the following configurations:\n* Name: Vault5\n* Region: West US\n* Resource group: RG1\nYou need to use Vault5 to enable Azure Disk Encryption on VM1. The solution must support backing\nup VM1 by using Azure Backup.\nWhich key vault settings should you configure?",
    "image": "",
    "answers": [
      "Access policies",
      "Secrets",
      "Keys",
      "Locks"
    ],
    "correctAnswer": "Keys",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q459",
    "prompt": "NO.459 Lab Task\nuse the following login credentials as needed:\nTo enter your username, place your cursor in the Sign in box and click on the username below.\nTo enter your password, place your cursor in the Enter password box and click on the password\nbelow.\nAzure Username: User1-28681041@ExamUsers.com\nAzure Password: GpOAe4@lDg\nIf the Azure portal does not load successfully in the browser, press CTRL-K to reload the portal in a\nnew browser tab.\nThe following information is for technical support purposes only:\nLab Instance: 28681041\nTask 6\nYou need to email an alert to a user named admin1@contoso.com if the average CPU usage of a\nvirtual machine named VM1 is greater than 70 percent for a period of 15 minutes.",
    "image": "",
    "answers": [
      "(Lab Task)"
    ],
    "correctAnswer": "(Lab Task)",
    "allowAnswerShuffle": false
  },
  {
    "id": "az500-q460",
    "prompt": "NO.460 You create an alert rule that has the following settings:\n* Resource: RG1\n* Condition: All Administrative operations\n* Actions: Action groups configured for this alert rule: ActionGroup1\n* Alert rule name: Alert1\n\nYou create an action rule that has the following settings:\n* Scope: VM1\n* Filter criteria: Resource Type = \"Virtual Machines\"\n* Define on this scope: Suppression\n* Suppression config: From now (always)\n* Name: ActionRule1\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "vm1",
        "label": "If you start VM1, an alert is triggered."
      },
      {
        "id": "vm2",
        "label": "If you start VM2, an alert is triggered."
      },
      {
        "id": "tag",
        "label": "If you add a tag to RG1, an alert is triggered."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "vm1": "No",
          "vm2": "Yes",
          "tag": "No"
        }
      }
    ]
  },
  {
    "id": "az500-q461",
    "prompt": "NO.461 You have an Azure subscription that contains 100 virtual machines. Azure Diagnostics is\nenabled on all the virtual machines.\nYou are planning the monitoring of Azure services in the subscription.\nYou need to retrieve the following details:\n* Identify the user who deleted a virtual machine three weeks ago.\n* Query the security events of a virtual machine that runs Windows Server 2016.\nWhat should you use in Azure Monitor? To answer, drag the appropriate configuration settings to the\ncorrect details. Each configuration setting may be used once, more than once, or not at all.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dragMatch",
    "allowAnswerShuffle": false,
    "items": [
      {
        "id": "it1",
        "label": "Activity log"
      },
      {
        "id": "it2",
        "label": "Logs"
      },
      {
        "id": "it3",
        "label": "Metrics"
      },
      {
        "id": "it4",
        "label": "Service Health"
      }
    ],
    "targets": [
      {
        "id": "t1",
        "label": "Identify the user who deleted a virtual machine three weeks ago"
      },
      {
        "id": "t2",
        "label": "Query the security events of a virtual machine that runs Windows Server 2016"
      }
    ],
    "correctByTarget": {
      "t1": "it1",
      "t2": "it2"
    }
  },
  {
    "id": "az500-q462",
    "prompt": "NO.462 Lab Task\nuse the following login credentials as needed:\nTo enter your username, place your cursor in the Sign in box and click on the username below.\nTo enter your password, place your cursor in the Enter password box and click on the password\nbelow.\nAzure Username: User1-28681041@ExamUsers.com\nAzure Password: GpOAe4@lDg\nIf the Azure portal does not load successfully in the browser, press CTRL-K to reload the portal in a\nnew browser tab.\nThe following information is for technical support purposes only:\nLab Instance: 28681041\nTask 8\nYou need to prevent HTTP connections to the rg1lod28681041n1 Azure Storage account.",
    "image": "",
    "answers": [
      "(Lab Task)"
    ],
    "correctAnswer": "(Lab Task)",
    "allowAnswerShuffle": false
  },
  {
    "id": "az500-q463",
    "prompt": "NO.463 You have an Azure subscription that contains a virtual network. The virtual network contains\nthe subnets shown in the following table.\nThe subscription contains the virtual machines shown in the following table.\nYou enable just in time (JIT) VM access for all the virtual machines.\nYou need to identify which virtual machines are protected by JIT.\nWhich virtual machines should you identify?",
    "image": "",
    "answers": [
      "VM4 only",
      "VM1 and VM3 only",
      "VM1, VM3, and VM4 only",
      "VM1, VM2, VM3, and VM4"
    ],
    "correctAnswer": "VM1, VM3, and VM4 only",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q464",
    "prompt": "NO.464 You have an Azure subscription that contains the resources shown in the following table.\n\nUser1 - Azure Active Directory (Azure AD) user\nUser2 - Azure Active Directory (Azure AD) user\nGroup1 - Azure Active Directory (Azure AD) group\nVault1 - Azure key vault\n\nUser1 is a member of Group1. Group1 and User2 are assigned the Key Vault Contributor role for\nVault1.\nOn January 1, 2019, you create a secret in Vault1. The secret is configured as shown in the exhibit:\n* Name: Password1\n* Activation Date: 2019-03-01 12:00:00 AM\n* Expiration Date: 2020-03-01 12:00:00 AM\n* Enabled: Yes\n\nUser2 is assigned an access policy to Vault1. The policy has the following configurations:\n* Key Management Operations: Get, List, and Restore\n* Cryptographic Operations: Decrypt and Unwrap Key\n* Secret Management Operations: Get, List, and Restore\n\nGroup1 is assigned an access policy to Vault1. The policy has the following configurations:\n* Key Management Operations: Get and Recover\n* Secret Management Operations: List, Backup, and Recover\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "u1jan",
        "label": "On January 1, 2019, User1 can view the value of Password1."
      },
      {
        "id": "u2jun",
        "label": "On June 1, 2019, User2 can view the value of Password1."
      },
      {
        "id": "u1jun",
        "label": "On June 1, 2019, User1 can view the value of Password1."
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "options": [
          "Yes",
          "No"
        ],
        "correctByRow": {
          "u1jan": "No",
          "u2jun": "Yes",
          "u1jun": "No"
        }
      }
    ]
  },
  {
    "id": "az500-q465",
    "prompt": "NO.465 You have an Azure Active Directory (Azure AD) tenant that contains the users shown in the\nfollowing table.\n\nUser1 - Member of: Group1, Group2 - Multi-factor authentication (MFA) status: Enabled\nUser2 - Member of: Group1 - Multi-factor authentication (MFA) status: Disabled\nUser3 - Member of: Group1 - Multi-factor authentication (MFA) status: Disabled\n\nYou create and enforce an Azure AD Identity Protection sign-in risk policy that has the following\nsettings:\n* Assignments: Include Group1, exclude Group2\n* Conditions: Sign-in risk level: Medium and above\n* Access: Allow access, Require multi-factor authentication\n\nYou need to identify what occurs when the users sign in to Azure AD.\nWhat should you identify for each user? To answer, select the appropriate options in the answer\narea.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "u1",
        "label": "When User1 signs in from an anonymous IP address, the user will:"
      },
      {
        "id": "u2",
        "label": "When User2 signs in from an unfamiliar location, the user will:"
      },
      {
        "id": "u3",
        "label": "When User3 signs in from an infected device, the user will:"
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "options": [
          "Be blocked",
          "Be prompted for MFA",
          "Sign in by using a username and password only"
        ],
        "correctByRow": {
          "u1": "Be prompted for MFA",
          "u2": "Be blocked",
          "u3": "Be blocked"
        }
      }
    ]
  },
  {
    "id": "az500-q466",
    "prompt": "NO.466 You have an Azure subscription that contains the virtual networks shown in the following table.\n\nNSG1 and NSG2 both have default rules only.\nThe subscription contains the virtual machines shown in the following table.\n\nThe subscription contains the web apps shown in the following table.\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "s1",
        "label": "WebApp1 can connect to VM2."
      },
      {
        "id": "s2",
        "label": "NSG1 controls inbound traffic to WebApp1."
      },
      {
        "id": "s3",
        "label": "WebApp2 can connect to VM1."
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
    ]
  },
  {
    "id": "az500-q467",
    "prompt": "NO.467 You have an Azure subscription named Subscription1.\nYou deploy a Linux virtual machine named VM1 to Subscription1.\nYou need to monitor the metrics and the logs of VM1.\nWhat should you use?",
    "image": "",
    "answers": [
      "the AzurePerformanceDiagnostics extension",
      "Azure HDInsight",
      "Linux Diagnostic Extension (LAD) 3.0",
      "Azure Analysis Services"
    ],
    "correctAnswer": "the AzurePerformanceDiagnostics extension",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q468",
    "prompt": "NO.468 You have an Azure subscription that contains an Azure Active Directory (Azure AD) tenant.\nWhen a developer attempts to register an app named App1 in the tenant, the developer receives the error message shown in the exhibit.\nYou need to ensure that the developer can register App1 in the tenant.\nWhat should you do for the tenant?",
    "image": "",
    "answers": [
      "Modify the User settings.",
      "Set Enable Security default to Yes.",
      "Modify the Directory properties.",
      "Configure the Consent and permissions settings for enterprise applications."
    ],
    "correctAnswer": "Modify the User settings.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q469",
    "prompt": "NO.469 You have the Azure key vaults shown in the following table.\n\nKV1 stores a secret named Secret1 and a key for a managed storage account named Key1.\nYou back up Secret1 and Key1.\nTo which key vaults can you restore each backup? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "secret1",
        "label": "You can restore the Secret1 backup to:"
      },
      {
        "id": "key1",
        "label": "You can restore the Key1 backup to:"
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "options": [
          "KV1 only",
          "KV1 and KV2 only",
          "KV1, KV2 and KV3 only",
          "KV1, KV2 and KV4 only",
          "KV1, KV2, KV3, KV4, and KV5"
        ],
        "correctByRow": {
          "secret1": "KV1, KV2 and KV3 only",
          "key1": "KV1, KV2 and KV3 only"
        }
      }
    ]
  },
  {
    "id": "az500-q470",
    "prompt": "NO.470 You need to implement the planned change for VM1 to access storage1.\nThe solution must meet the technical requirements.\nWhat should you do first?",
    "image": "",
    "answers": [
      "Configure a system-assigned managed identity on VM1.",
      "Configure federated identity credentials for ID1.",
      "Assign the Storage Blob Data Reader role to storage1.",
      "Assign ID1 to VM1.",
      "Add a role assignment condition to storage1."
    ],
    "correctAnswer": "Configure a system-assigned managed identity on VM1.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q471",
    "prompt": "NO.471 You have an Azure subscription that contains a resource group named RG1. RG1 contains a storage account named storage1.\nYou have two custom Azure roles named Role1 and Role2 that are scoped to RG1.\nThe permissions for Role1 are shown in the following JSON code.\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "u1",
        "label": "User1 can read data in storage1."
      },
      {
        "id": "u2",
        "label": "User2 can read data in storage1."
      },
      {
        "id": "u3",
        "label": "User3 can restore storage1 from a backup in Azure Backup."
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
          "u1": "Yes",
          "u2": "Yes",
          "u3": "No"
        }
      }
    ]
  },
  {
    "id": "az500-q472",
    "prompt": "NO.472 You have an Azure subscription that contains the resources shown in the following table.\n\nBoth VM1 and VM2 connect to VNET1 and are configured to use NSG1.\nYou need to ensure that only VM1 and VM2 can access DB1.\nWhat should you do?",
    "image": "",
    "answers": [
      "Add the IP address range of VNET1 to the Firewall setting of DB1.",
      "For NSG1, configure a rule that has a service tag.",
      "Create an application security group.",
      "Configure DB1 to allow access from only VNET1."
    ],
    "correctAnswer": "For NSG1, configure a rule that has a service tag.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q473",
    "prompt": "NO.473 You have an Azure subscription that contains the virtual networks shown in the following table.\n\nThe Azure virtual machines on SpokeVNetSubnet0 can communicate with the computers on the on-premises network.\nYou plan to deploy an Azure firewall to HubVNet.\nYou create the following two routing tables:\n* RT1: Includes a user-defined route that points to the private IP address of the Azure firewall as a next hop address\n* RT2: Disables BGP route propagation and defines the private IP address of the Azure firewall as the default gateway\nYou need to ensure that traffic between SpokeVNetSubnet0 and the on-premises network flows through the Azure firewall.\nTo which subnet should you associate each route table? To answer, drag the appropriate subnets to the correct route tables. Each subnet may be used once, more than once, or not at all.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dragMatch",
    "allowAnswerShuffle": false,
    "items": [
      {
        "id": "azurefw",
        "label": "Azure FirewallSubnet"
      },
      {
        "id": "gateway",
        "label": "GatewaySubnet"
      },
      {
        "id": "hub0",
        "label": "HubVNetSubnet0"
      }
    ],
    "targets": [
      {
        "id": "rt1",
        "label": "RT1"
      },
      {
        "id": "rt2",
        "label": "RT2"
      }
    ],
    "correctByTarget": {
      "rt1": "gateway",
      "rt2": "hub0"
    }
  },
  {
    "id": "az500-q474",
    "prompt": "NO.474 From the Azure portal, you are configuring an Azure policy.\nYou plan to assign policies that use the DeployIfNotExist, AuditIfNotExist, Append, and Deny effects.\nWhich effect requires a managed identity for the assignment?",
    "image": "",
    "answers": [
      "AuditIfNotExist",
      "Append",
      "DeployIfNotExist",
      "Deny"
    ],
    "correctAnswer": "DeployIfNotExist",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q475",
    "prompt": "NO.475 You have an Azure key vault named sk2311 configured as shown in the exhibit.\n\nsk2311 contains the items shown in the following table.\n\nIn sk2311, the following events occur in sequence:\n* Item1 is deleted.\n* Item2 and Policy1 are deleted.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "p1",
        "label": "You can recover Policy1."
      },
      {
        "id": "i1",
        "label": "You can add a new key named Item1."
      },
      {
        "id": "i2",
        "label": "You can recover Item2."
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
          "p1": "No",
          "i1": "Yes",
          "i2": "Yes"
        }
      }
    ]
  },
  {
    "id": "az500-q476",
    "prompt": "NO.476 You have the Azure virtual machines shown in the following table.\n\nFor which virtual machine can you enable Update Management?",
    "image": "",
    "answers": [
      "VM2 and VM3 only",
      "VM2, VM3, and VM4 only",
      "VM1, VM2, and VM4 only",
      "VM1, VM2, VM3, and VM4",
      "VM1, VM2, and VM3 only"
    ],
    "correctAnswer": "VM1, VM2, and VM4 only",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q477",
    "prompt": "NO.477 You have an Azure Storage account named storage1 and an Azure virtual machine named VM1. VM1 has a premium SSD managed disk.\nYou need to enable Azure Disk Encryption for VM1.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.",
    "image": "",
    "type": "dragMatch",
    "allowAnswerShuffle": false,
    "items": [
      {
        "id": "set-cmdlet",
        "label": "Run the Set-AzVMDiskEncryptionExtension cmdlet."
      },
      {
        "id": "kv-vm-deploy",
        "label": "Set the Key Vault access policy to Enable access to Azure Virtual Machines for deployment."
      },
      {
        "id": "kv-disk-encryption",
        "label": "Set the Key Vault access policy to Enable access to Azure Disk Encryption for volume encryption."
      },
      {
        "id": "cert",
        "label": "Generate a key vault certificate."
      },
      {
        "id": "create-kv",
        "label": "Create an Azure key vault."
      },
      {
        "id": "cmk",
        "label": "Configure storage1 to use a customer-managed key."
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
      "step1": "create-kv",
      "step2": "kv-disk-encryption",
      "step3": "set-cmdlet"
    }
  },
  {
    "id": "az500-q478",
    "prompt": "NO.478 You are implementing conditional access policies.\nYou must evaluate the existing Azure Active Directory (Azure AD) risk events and risk levels to configure and implement the policies.\nYou need to identify the risk level of the following risk events:\n* Users with leaked credentials\n* Impossible travel to atypical locations\n* Sign-ins from IP addresses with suspicious activity\nWhich level should you identify for each risk event? To answer, drag the appropriate levels to the correct risk events. Each level may be used once, more than once, or not at all.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dragMatch",
    "allowAnswerShuffle": false,
    "items": [
      {
        "id": "low",
        "label": "Low"
      },
      {
        "id": "low_2",
        "label": "Low"
      },
      {
        "id": "medium",
        "label": "Medium"
      },
      {
        "id": "medium_2",
        "label": "Medium"
      },
      {
        "id": "high",
        "label": "High"
      },
      {
        "id": "high_2",
        "label": "High"
      }
    ],
    "targets": [
      {
        "id": "leaked",
        "label": "Users with leaked credentials"
      },
      {
        "id": "travel",
        "label": "Impossible travel to atypical locations"
      },
      {
        "id": "ip",
        "label": "Sign-ins from IP addresses with suspicious activity"
      }
    ],
    "correctByTarget": {
      "leaked": "high",
      "travel": "medium",
      "ip": "medium_2"
    }
  },
  {
    "id": "az500-q479",
    "prompt": "NO.479 You have an Azure Active Directory (Azure AD) tenant named contoso.com that contains the users shown in the following table.\n\nContoso.com contains a group naming policy. The policy has a custom blocked word list rule that includes the word Contoso.\nWhich users can create a group named Contoso Sales in contoso.com? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "security",
        "label": "Users who can create a security group named Contoso Sales:"
      },
      {
        "id": "o365",
        "label": "Users who can create an Office 365 group named Contoso Sales:"
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "options": [
          "Admin1 only",
          "Admin1 and Admin2 only",
          "Admin1 and Admin3 only",
          "Admin1, Admin2, and Admin3"
        ],
        "correctByRow": {
          "security": "Admin1 and Admin3 only",
          "o365": "Admin1 and Admin3 only"
        }
      }
    ]
  },
  {
    "id": "az500-q480",
    "prompt": "NO.480 Your network contains an on-premises Active Directory domain named adatum.com that syncs to a Microsoft Entra tenant.\nThe Microsoft Entra tenant contains the users shown in the following table.\n\nYou configure the Microsoft Entra Password Protection settings for adatum.com as shown in the exhibit.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "u1",
        "label": "User1 will be prompted to change the password on the next sign-in."
      },
      {
        "id": "u2",
        "label": "User2 can change the password to @@tum_C0mpleX123."
      },
      {
        "id": "u3",
        "label": "User3 can change the password to Adatum123!."
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
          "u2": "No",
          "u3": "Yes"
        }
      }
    ]
  },
  {
    "id": "az500-q481",
    "prompt": "NO.481 You have an Azure subscription named Sub1 that contains an Azure Storage account named Contosostorage1 and an Azure key vault named Contosokeyvault1.\nYou plan to create an Azure Automation runbook that will rotate the keys of Contosostorage1 and store them in Contosokeyvault1.\nYou need to implement prerequisites to ensure that you can implement the runbook.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.",
    "image": "",
    "type": "dragMatch",
    "allowAnswerShuffle": false,
    "items": [
      {
        "id": "set-policy",
        "label": "Run Set-AzureRmKeyVaultAccessPolicy"
      },
      {
        "id": "create-aa",
        "label": "Create an Azure Automation account."
      },
      {
        "id": "import-modules",
        "label": "Import PowerShell modules to the Azure Automation account."
      },
      {
        "id": "create-uami",
        "label": "Create a user-assigned managed identity."
      },
      {
        "id": "create-connection",
        "label": "Create a connection resource in the Azure Automation account."
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
      "step1": "create-aa",
      "step2": "import-modules",
      "step3": "create-connection"
    }
  },
  {
    "id": "az500-q482",
    "prompt": "NO.482 Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure subscription named Subscription1 that contains a logical Azure SQL server named SQL1.\nYou need to ensure that users can authenticate to SQL1 by using Azure Active Directory (Azure AD) credentials.\nSolution: You assign an Azure AD user as the Microsoft Entra admin for SQL1.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "No",
    "allowAnswerShuffle": false
  },
  {
    "id": "az500-q483",
    "prompt": "NO.483 You have a Microsoft Entra tenant that uses Microsoft Entra Permissions Management and contains the accounts shown in the following table.\nWhich accounts will be listed as assigned to highly privileged roles on the Azure AD insights tab in the Entra Permissions Management portal?",
    "image": "",
    "answers": [
      "Admin1 only",
      "Admin2 and Admin3 only",
      "Admin2 and Admin4 only",
      "Admin1, Admin2, and Admin3 only",
      "Admin2, Admin3, and Admin4 only",
      "Admin1, Admin2, Admin3, and Admin4"
    ],
    "correctAnswer": "Admin1, Admin2, and Admin3 only",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q484",
    "prompt": "NO.484 Lab Task\nuse the following login credentials as needed:\nTo enter your username, place your cursor in the Sign in box and click on the username below.\nTo enter your password, place your cursor in the Enter password box and click on the password below.\nAzure Username: User1-28681041@ExamUsers.com\nAzure Password: GpOAe4@lDg\nIf the Azure portal does not load successfully in the browser, press CTRL-K to reload the portal in a new browser tab.\nThe following information is for technical support purposes only:\nLab Instance: 28681041\nTask 1\nYou need to configure Azure to allow RDP connections from the Internet to a virtual machine named VM1.\nThe solution must minimize the attack surface of VM1.",
    "image": "",
    "answers": [
      "Configure Just-in-time (JIT) VM access for VM1.",
      "Create an inbound NSG rule that permanently allows RDP from Any to VM1.",
      "Assign the Owner role to User1 on VM1.",
      "Create an Azure Bastion host and disable public access to VM1."
    ],
    "correctAnswer": "Configure Just-in-time (JIT) VM access for VM1.",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q485",
    "prompt": "NO.485 You have an Azure subscription that contains an Azure key vault and an Azure SQL database named SQL1.\nYou generate a key named Key1.\nYou need to enable Transparent Data Encryption (TDE) for SQL1 by using Key1.\nWhich two settings should you modify for Key1? To answer, select the appropriate settings in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "answers": [
      "Set expiration date.",
      "Expiration date.",
      "Enabled.",
      "Tags.",
      "Encrypt",
      "Decrypt.",
      "Sign.",
      "Verify.",
      "Wrap Key.",
      "Unwrap Key."
 ],
    "correctAnswer": [
      "Enabled.",
      "Wrap Key."
    ],
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q486",
    "prompt": "NO.486 You need to configure the AKS1 and ID1 managed identities to meet the technical requirements. The solution must follow the principle of least privilege.\nWhich role should you assign to each identity? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "aks1",
        "label": "AKS1"
      },
      {
        "id": "id1",
        "label": "ID1"
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "options": [
          "AcrPull",
          "AcrPush",
          "Contributor",
          "Owner",
          "Reader"
        ],
        "correctByRow": {
          "aks1": "AcrPull",
          "id1": "AcrPush"
        }
      }
    ]
  },
  {
    "id": "az500-q487",
    "prompt": "NO.487 You have an Azure subscription that contains a Microsoft Defender External Attack Surface Management (Defender EASM) resource named EASM1. EASM1 contains the inventory assets shown in the following table.\n\nWhich assets are scanned daily, and which assets will display in the default dashboard charts? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "scanned",
        "label": "Scanned daily"
      },
      {
        "id": "dashboard",
        "label": "Display in the default dashboard charts"
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "options": [
          "VM1 only",
          "VM1 and VM2 only",
          "VM1, VM2, and VM3 only",
          "VM1, VM2, VM3, and VM4"
        ],
        "correctByRow": {
          "scanned": "VM1, VM2, and VM3 only",
          "dashboard": "VM1 only"
        }
      }
    ]
  },
  {
    "id": "az500-q488",
    "prompt": "NO.488 You have an Azure subscription that contains an Azure Data Lake Storage Gen2 account named storage1.\nYou deploy an Azure Synapse Analytics workspace named synapsews1 to a managed virtual network.\nYou need to enable access from synapsews1 to storage1.\nWhat should you configure?",
    "image": "",
    "answers": [
      "a virtual network gateway",
      "a network security group (NSG)",
      "a private endpoint",
      "peering"
    ],
    "correctAnswer": "a private endpoint",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q489",
    "prompt": "NO.489 You have an Azure web app named webapp1.\nYou need to configure continuous deployment for webapp1 by using an Azure Repo.\nWhat should you create first?",
    "image": "",
    "answers": [
      "an Azure Application Insights service",
      "an Azure DevOps organization",
      "an Azure Storage account",
      "an Azure DevTest Labs lab"
    ],
    "correctAnswer": "an Azure DevOps organization",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q490",
    "prompt": "NO.490 You have an Azure Active Directory (Azure AD) tenant that contains a user named User1.\nYou need to ensure that User1 can create and manage administrative units. The solution must use the principle of least privilege.\nWhich role should you assign to User1?",
    "image": "",
    "answers": [
      "Privileged role administrator",
      "Helpdesk administrator",
      "Global administrator",
      "Security administrator"
    ],
    "correctAnswer": "Privileged role administrator",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q491",
    "prompt": "NO.491 You have an Azure AD tenant that contains the users shown in the following table.\n\nYou enable passwordless authentication for the tenant.\nWhich authentication method can each user use for passwordless authentication? To answer, drag the appropriate authentication methods to the correct users. Each authentication method may be used once, more than once, or not at all.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dragMatch",
    "allowAnswerShuffle": false,
    "items": [
      {
        "id": "fido2-only",
        "label": "FIDO2 security key only"
      },
      {
        "id": "authenticator-only",
        "label": "Microsoft Authenticator app only"
      },
      {
        "id": "whfb-only",
        "label": "Windows Hello for Business only"
      },
      {
        "id": "authenticator-whfb",
        "label": "Microsoft Authenticator app and Windows Hello for Business only"
      },
      {
        "id": "whfb-fido2",
        "label": "Windows Hello for Business and FIDO2 security key only"
      },
      {
        "id": "all-three",
        "label": "Microsoft Authenticator app, Windows Hello for Business, and FIDO2 security key"
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
      "user1": "authenticator-only",
      "user2": "whfb-only"
    }
  },
  {
    "id": "az500-q492",
    "prompt": "NO.492 Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure subscription named Sub1.\nYou have an Azure Storage account named Sa1 in a resource group named RG1.\nUsers and applications access the blob service and the file service in Sa1 by using several shared access signatures (SASs) and stored access policies.\nYou discover that unauthorized users accessed both the file service and the blob service.\nYou need to revoke all access to Sa1.\nSolution: You create a new stored access policy.\nDoes this meet the goal?",
    "image": "",
    "answers": [
      "Yes",
      "No"
    ],
    "correctAnswer": "No",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q493",
    "prompt": "NO.493 You have an Azure key vault named Vault1 that stores the resources shown in the following table.\n\nWhich resources support the creation of a rotation policy?",
    "image": "",
    "answers": [
      "Key1 only",
      "Cert1 only",
      "Key1 and Secret1 only",
      "Key1 and Cert1 only",
      "Secret1 and Cert1 only",
      "Key1, Secret1, and Cert1"
    ],
    "correctAnswer": "Key1 only",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q494",
    "prompt": "NO.494 You have an Azure subscription that uses Microsoft Defender.\nYou enable the CIS Microsoft Azure Foundations Benchmark v2.0.0 built-in to the subscription.\nYou need to ensure that when users attempt to assign custom role-based access control (RBAC) roles, they receive a custom error message that includes a link to an internal website. The solution must minimize the impact on other policies.\nWhat should you configure?",
    "image": "",
    "answers": [
      "the effect of the policy",
      "the remediation task of the policy",
      "a policy-specific non-compliance message",
      "the default non-compliance message of the built-in"
    ],
    "correctAnswer": "a policy-specific non-compliance message",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q495",
    "prompt": "NO.495 You have an Azure subscription named Sub1 that is associated to an Azure AD tenant named contoso.com.\nThe tenant contains the users shown in the following table.\\n\nEach user is assigned an Azure AD Premium P2 license.\nYou plan to onboard and configure Azure AD Identity Protection.\nWhich users can onboard Azure AD Identity Protection, remediate users, and configure policies? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    "image": "",
    "type": "dropdownMatrix",
    "allowAnswerShuffle": false,
    "rows": [
      {
        "id": "onboard",
        "label": "Users who can onboard Azure AD Identity Protection"
      },
      {
        "id": "remediate",
        "label": "Users who can remediate users and configure policies"
      }
    ],
    "columns": [
      {
        "id": "resp",
        "label": "Resposta",
        "options": [
          "User1 only",
          "User1 and User2 only",
          "User1 and User3 only",
          "User1, User2, and User3 only",
          "User1, User2, User3, and User4 only"
        ],
        "correctByRow": {
          "onboard": "User1 only",
          "remediate": "User1 and User2 only"
        }
      }
    ]
  },
  {
    "id": "az500-q496",
    "prompt": "NO.496 You have an Azure Active Directory (Azure AD) tenant named contoso.com.\nYou need to configure diagnostic settings for contoso.com. The solution must meet the following requirements:\n* Retain logs for two years.\n* Query logs by using the Kusto query language.\n* Minimize administrative effort.\nWhere should you store the logs?",
    "image": "",
    "answers": [
      "an Azure Log Analytics workspace",
      "an Azure event hub",
      "an Azure Storage account"
    ],
    "correctAnswer": "an Azure Log Analytics workspace",
    "allowAnswerShuffle": true
  },
  {
    "id": "az500-q497",
    "prompt": "NO.497 You have an Azure subscription that contains an Azure SQL Database logical server named SQL1 and an Azure virtual machine named VM1. VM1 uses a private IP address only.\nThe Firewall and virtual networks settings for SQL1 are shown in the following exhibit.\nYou need to ensure that VM1 can connect to SQL1. The solution must use the principle of least privilege.\nWhat should you do?",
    "image": "",
    "answers": [
      "Add an existing virtual network.",
      "Set Connection Policy to Proxy.",
      "Create a new firewall rule.",
      "Set Allow Azure services and resources to access this server to Yes."
    ],
    "correctAnswer": "Create a new firewall rule.",
    "allowAnswerShuffle": true
  }
];
