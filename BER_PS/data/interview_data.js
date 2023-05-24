let interview_data_raw = `[
    {
        "InterviewId": "5c09e1d9-c741-4fb7-a9d4-4a198a8dc8f4",
        "InterviewEndDate": "2023-03-31 09:36:19",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1,
        "download_time": "24-05-2023 10:07:47"
    },
    {
        "InterviewId": "34a25ff2-d7ea-4e88-9777-2f780b6ffb95",
        "InterviewEndDate": "2023-03-31 09:42:42",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d66414a4-5237-4f38-9fc3-5d924aeaa880",
        "InterviewEndDate": "2023-03-31 09:44:20",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 14
    },
    {
        "InterviewId": "9bf89772-7eed-4375-9924-065a1d0b9634",
        "InterviewEndDate": "2023-03-31 09:46:09",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 14
    },
    {
        "InterviewId": "52fe04a9-8a3c-4dbe-acb7-58cb9f2753d5",
        "InterviewEndDate": "2023-03-31 09:41:46",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 14
    },
    {
        "InterviewId": "cd22841f-efbf-481d-919d-6f5b1c6bc408",
        "InterviewEndDate": "2023-03-31 09:43:57",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 14
    },
    {
        "InterviewId": "9d7a48fe-2929-4e85-9564-346ad76797f6",
        "InterviewEndDate": "2023-03-31 09:53:41",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "14cd2ce8-1688-4a3d-be33-1c2a2137b937",
        "InterviewEndDate": "2023-03-31 09:52:54",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 14
    },
    {
        "InterviewId": "6f6b594e-47e2-4df6-81d4-655369bcbf3b",
        "InterviewEndDate": "2023-03-31 09:55:27",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 14
    },
    {
        "InterviewId": "59ffafef-2bea-4f7a-8d45-488d6e9e67e0",
        "InterviewEndDate": "2023-03-31 09:59:04",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 14
    },
    {
        "InterviewId": "781b64dc-db57-46be-b032-6abfdecf169d",
        "InterviewEndDate": "2023-03-31 10:19:45",
        "InterviewState": "Completed",
        "Flight": "TK 1722",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "37c457c4-c4c1-4c4d-85df-457938e682e4",
        "InterviewEndDate": "2023-03-31 10:23:03",
        "InterviewState": "Completed",
        "Flight": "TK 1722",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "fa9cc138-5d87-4dfd-ac54-698eb1b8b201",
        "InterviewEndDate": "2023-03-31 10:40:29",
        "InterviewState": "Completed",
        "Flight": "TK 1722",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 14
    },
    {
        "InterviewId": "a6d4ccd8-9a87-4dff-a848-029dd04d39b3",
        "InterviewEndDate": "2023-03-31 10:31:13",
        "InterviewState": "Completed",
        "Flight": "TK 1722",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "fb4bc197-f21c-4a0f-abce-5d3b2167675b",
        "InterviewEndDate": "2023-03-31 10:35:47",
        "InterviewState": "Completed",
        "Flight": "TK 1722",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "71965725-8244-4754-b124-5f095b7db868",
        "InterviewEndDate": "2023-03-31 11:14:25",
        "InterviewState": "Completed",
        "Flight": "LX  977",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d87ebfbc-af92-4c2b-81ef-0caca37d4c33",
        "InterviewEndDate": "2023-03-31 10:46:05",
        "InterviewState": "Completed",
        "Flight": "TK 1722",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 14
    },
    {
        "InterviewId": "724bdaf9-75c2-4389-ab67-008307df726f",
        "InterviewEndDate": "2023-03-31 11:14:34",
        "InterviewState": "Completed",
        "Flight": "LX  967",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 1
    },
    {
        "InterviewId": "dd62fbb7-6d57-457d-978a-672f7c0db617",
        "InterviewEndDate": "2023-03-31 11:13:36",
        "InterviewState": "Completed",
        "Flight": "LX  977",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 14
    },
    {
        "InterviewId": "0a8b508d-ba9b-4957-ba4a-7100a4fec081",
        "InterviewEndDate": "2023-03-31 11:16:44",
        "InterviewState": "Completed",
        "Flight": "LX  977",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 14
    },
    {
        "InterviewId": "8116bc1e-7a45-4a37-b280-2259e1f40bfc",
        "InterviewEndDate": "2023-03-31 12:11:06",
        "InterviewState": "Completed",
        "Flight": "BA 8492",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "558aff26-573d-462f-a57b-2ca7e578b171",
        "InterviewEndDate": "2023-03-31 12:05:01",
        "InterviewState": "Completed",
        "Flight": "BA 8492",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "8441dcac-a4f7-4576-8cb7-014ce3678ebf",
        "InterviewEndDate": "2023-03-31 12:04:02",
        "InterviewState": "Completed",
        "Flight": "BA 8492",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "f8ff6a37-2018-4dd6-8136-568072442739",
        "InterviewEndDate": "2023-03-31 12:06:52",
        "InterviewState": "Completed",
        "Flight": "BA 8492",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "e5bd8146-67f9-4d33-913c-0006432af08b",
        "InterviewEndDate": "2023-03-31 11:56:20",
        "InterviewState": "Completed",
        "Flight": "BA 8492",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 14
    },
    {
        "InterviewId": "6b17a5b0-5e6c-47d6-93d0-0ed87a11d943",
        "InterviewEndDate": "2023-03-31 12:11:40",
        "InterviewState": "Completed",
        "Flight": "BA 8492",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 14
    },
    {
        "InterviewId": "39f63019-74bd-456b-b4f4-2d9ef77e574c",
        "InterviewEndDate": "2023-03-31 12:04:06",
        "InterviewState": "Completed",
        "Flight": "BA 8492",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 14
    },
    {
        "InterviewId": "41b350a8-7225-4770-b2cb-156e592451bf",
        "InterviewEndDate": "2023-03-31 12:17:44",
        "InterviewState": "Completed",
        "Flight": "BA 8492",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 14
    },
    {
        "InterviewId": "de424247-681b-498d-81bd-207e5f9d79a2",
        "InterviewEndDate": "2023-03-31 12:13:39",
        "InterviewState": "Completed",
        "Flight": "BA 8492",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "5b9094e7-35cf-495e-a976-3e17a36fde75",
        "InterviewEndDate": "2023-03-31 13:25:31",
        "InterviewState": "Completed",
        "Flight": "EJU4076",
        "Dest": "Venedig (VCE)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3e766a0b-4be8-41c6-bf94-01bece051ce6",
        "InterviewEndDate": "2023-03-31 13:17:56",
        "InterviewState": "Completed",
        "Flight": "LH 1937",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 1
    },
    {
        "InterviewId": "6a9b2145-5693-4e36-8782-466e2391cca8",
        "InterviewEndDate": "2023-03-31 13:20:40",
        "InterviewState": "Completed",
        "Flight": "LH 1937",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 1
    },
    {
        "InterviewId": "0a95861a-34bf-4224-9a4b-02c2840b0a65",
        "InterviewEndDate": "2023-03-31 13:25:35",
        "InterviewState": "Completed",
        "Flight": "LH 1937",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 14
    },
    {
        "InterviewId": "2b17217a-5a59-4846-9857-1019cdd3ae31",
        "InterviewEndDate": "2023-03-31 13:29:11",
        "InterviewState": "Completed",
        "Flight": "LH 1937",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 14
    },
    {
        "InterviewId": "8d37d22c-f72d-44b2-9bc6-7232b7b52985",
        "InterviewEndDate": "2023-03-31 13:33:59",
        "InterviewState": "Completed",
        "Flight": "LH 1937",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 1
    },
    {
        "InterviewId": "19d4856b-c407-430b-8b5d-5aee977d218c",
        "InterviewEndDate": "2023-03-31 13:32:47",
        "InterviewState": "Completed",
        "Flight": "LH 1937",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 1
    },
    {
        "InterviewId": "a302f078-00c5-49dd-8de9-408105b1d7de",
        "InterviewEndDate": "2023-03-31 13:32:29",
        "InterviewState": "Completed",
        "Flight": "LH 1937",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 1
    },
    {
        "InterviewId": "8f263014-179d-4bb8-8e45-6682fe8269b1",
        "InterviewEndDate": "2023-03-31 14:35:47",
        "InterviewState": "Completed",
        "Flight": "EZY3162",
        "Dest": "Glasgow (GLA)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 14
    },
    {
        "InterviewId": "d1a5abfa-dd2d-4b55-91b5-26b3e3d8f212",
        "InterviewEndDate": "2023-03-31 14:04:07",
        "InterviewState": "Completed",
        "Flight": "LH 1939",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 1
    },
    {
        "InterviewId": "a135d8e9-41fa-45a6-bf23-2ce396e11c1c",
        "InterviewEndDate": "2023-03-31 14:07:36",
        "InterviewState": "Completed",
        "Flight": "LH 1939",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 1
    },
    {
        "InterviewId": "968edecb-c58c-42eb-8300-247e6d81a66a",
        "InterviewEndDate": "2023-03-31 14:28:20",
        "InterviewState": "Completed",
        "Flight": "EZY3162",
        "Dest": "Glasgow (GLA)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "52320841-0cf1-41d5-9996-06e924fd92e6",
        "InterviewEndDate": "2023-03-31 14:03:41",
        "InterviewState": "Completed",
        "Flight": "LH 1939",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 14
    },
    {
        "InterviewId": "bfa4c020-4039-4274-be33-3f411f500b6a",
        "InterviewEndDate": "2023-03-31 14:31:08",
        "InterviewState": "Completed",
        "Flight": "EZY3162",
        "Dest": "Glasgow (GLA)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 14
    },
    {
        "InterviewId": "2e5025ee-14b6-4e13-9303-3e8a5e7b4e8f",
        "InterviewEndDate": "2023-03-31 14:54:32",
        "InterviewState": "Completed",
        "Flight": "XQ  947",
        "Dest": "Izmir (ADB)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 1
    },
    {
        "InterviewId": "c8b43c09-ae29-4726-ad78-6ce8803b83ca",
        "InterviewEndDate": "2023-03-31 14:38:09",
        "InterviewState": "Completed",
        "Flight": "EZY3162",
        "Dest": "Glasgow (GLA)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "a63a22d0-9048-4a54-912c-314b778165c4",
        "InterviewEndDate": "2023-03-31 14:50:10",
        "InterviewState": "Completed",
        "Flight": "EZY3162",
        "Dest": "Glasgow (GLA)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 14
    },
    {
        "InterviewId": "9818897d-1f52-4320-93f9-09ad6774b1dc",
        "InterviewEndDate": "2023-03-31 14:55:50",
        "InterviewState": "Completed",
        "Flight": "EZY3162",
        "Dest": "Glasgow (GLA)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 14
    },
    {
        "InterviewId": "fc4970d9-1385-4c9e-8d42-352bdfba239e",
        "InterviewEndDate": "2023-04-01 15:03:52",
        "InterviewState": "Completed",
        "Flight": "LH  191",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 1
    },
    {
        "InterviewId": "929ebd8b-9666-4d0e-af0a-04e1d5f6ebaa",
        "InterviewEndDate": "2023-03-31 15:30:06",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 14
    },
    {
        "InterviewId": "5f59a081-211c-4c74-bfd4-06a79348ebb5",
        "InterviewEndDate": "2023-03-31 15:27:20",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 14
    },
    {
        "InterviewId": "2dabeaa4-9279-4b2c-9e0f-2c403fcecd45",
        "InterviewEndDate": "2023-04-01 15:36:07",
        "InterviewState": "Completed",
        "Flight": "MS  732",
        "Dest": "Kairo (CAI)",
        "AirlineCode": "Egypt Air",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d2b168f0-c058-4780-a28e-2a1d9ecfd206",
        "InterviewEndDate": "2023-04-01 15:31:26",
        "InterviewState": "Completed",
        "Flight": "MS  732",
        "Dest": "Kairo (CAI)",
        "AirlineCode": "Egypt Air",
        "InterviewerID": 11
    },
    {
        "InterviewId": "476dce9d-e499-437a-aa8a-043a6e5f0443",
        "InterviewEndDate": "2023-04-01 15:37:28",
        "InterviewState": "Completed",
        "Flight": "MS  732",
        "Dest": "Kairo (CAI)",
        "AirlineCode": "Egypt Air",
        "InterviewerID": 11
    },
    {
        "InterviewId": "df5207cd-9417-4980-95d5-204bd35dc7c4",
        "InterviewEndDate": "2023-04-01 15:41:00",
        "InterviewState": "Completed",
        "Flight": "MS  732",
        "Dest": "Kairo (CAI)",
        "AirlineCode": "Egypt Air",
        "InterviewerID": 11
    },
    {
        "InterviewId": "fa571d5e-4302-4145-8026-21958e4dfec2",
        "InterviewEndDate": "2023-04-01 16:09:01",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "010393fa-d0ec-4839-a2da-3ece50b4d6d8",
        "InterviewEndDate": "2023-04-01 15:58:56",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c91b746d-49cc-4e46-bf39-568cbd6f99f4",
        "InterviewEndDate": "2023-04-01 16:15:16",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "e0154b9c-eca4-4ac1-a0a6-656d4a12a4e8",
        "InterviewEndDate": "2023-04-01 17:32:43",
        "InterviewState": "Completed",
        "Flight": "A3  823",
        "Dest": "Athen (ATH)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "150ef25b-0529-48f8-96a1-1217600490ed",
        "InterviewEndDate": "2023-04-01 17:15:01",
        "InterviewState": "Completed",
        "Flight": "A3  823",
        "Dest": "Athen (ATH)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "23aefebe-13b6-459b-839a-48ebced8e87c",
        "InterviewEndDate": "2023-04-01 17:26:52",
        "InterviewState": "Completed",
        "Flight": "A3  823",
        "Dest": "Athen (ATH)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "3bbf092a-59f3-4fb0-9c42-018615fe6e4e",
        "InterviewEndDate": "2023-04-01 18:55:18",
        "InterviewState": "Completed",
        "Flight": "SN 2588",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "1df3873d-4972-4a8e-98d9-16c5c311a3d4",
        "InterviewEndDate": "2023-04-01 18:58:12",
        "InterviewState": "Completed",
        "Flight": "SN 2588",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "242016ae-ebf7-423c-a8f2-700f72377630",
        "InterviewEndDate": "2023-04-01 19:33:39",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "7b20112b-df16-4d1d-91ed-33c7637dd0bd",
        "InterviewEndDate": "2023-04-01 19:24:23",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "09095421-55e1-453a-a093-2d433bbae4a2",
        "InterviewEndDate": "2023-04-01 21:18:53",
        "InterviewState": "Completed",
        "Flight": "BA  987",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 11
    },
    {
        "InterviewId": "fcacbf63-3666-4572-baa5-508721aa0ffe",
        "InterviewEndDate": "2023-04-01 21:01:57",
        "InterviewState": "Completed",
        "Flight": "BA  987",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 11
    },
    {
        "InterviewId": "5ecf3b8e-d846-4739-bf50-16c61db38402",
        "InterviewEndDate": "2023-04-01 21:11:08",
        "InterviewState": "Completed",
        "Flight": "BA  987",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 11
    },
    {
        "InterviewId": "27b0824b-bad8-4978-9b58-60114908bddd",
        "InterviewEndDate": "2023-04-04 08:01:47",
        "InterviewState": "Completed",
        "Flight": "EW  013",
        "Dest": "K\u00f6ln (CGN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "847341b9-c28c-4f90-833b-10b24c07d767",
        "InterviewEndDate": "2023-04-04 08:01:34",
        "InterviewState": "Completed",
        "Flight": "EJU5063",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "94598149-2e72-4386-9802-599a328b689e",
        "InterviewEndDate": "2023-04-04 08:22:01",
        "InterviewState": "Completed",
        "Flight": "EJU5063",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "3bc8cc4f-8cfb-411d-a610-1545d19c5d54",
        "InterviewEndDate": "2023-04-04 08:23:06",
        "InterviewState": "Completed",
        "Flight": "EJU5063",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "cd30ca52-0893-4c83-8e65-41e72a1fe7a9",
        "InterviewEndDate": "2023-04-04 08:44:29",
        "InterviewState": "Completed",
        "Flight": "EW 8342",
        "Dest": "Salzburg (SZG)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "672549ce-88ec-448c-b0c5-661ccaef1eca",
        "InterviewEndDate": "2023-04-04 09:26:53",
        "InterviewState": "Completed",
        "Flight": "KL 1822",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "70726327-93a3-4de5-b016-5fe66f0bdf9e",
        "InterviewEndDate": "2023-04-04 10:20:23",
        "InterviewState": "Completed",
        "Flight": "AF 1435",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 11
    },
    {
        "InterviewId": "0dd1e408-3831-4699-a338-5b35ed348e3e",
        "InterviewEndDate": "2023-04-04 10:58:01",
        "InterviewState": "Completed",
        "Flight": "EW 8370",
        "Dest": "Lanzarote (ACE)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ea94407d-f148-47c5-825e-2c782eef2fce",
        "InterviewEndDate": "2023-04-04 12:05:57",
        "InterviewState": "Completed",
        "Flight": "SN 2582",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8706d0b3-2718-4378-bc10-2484f9f386b4",
        "InterviewEndDate": "2023-04-04 11:59:40",
        "InterviewState": "Completed",
        "Flight": "SN 2582",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "99210640-00af-4d64-b83d-04b2cdeccd6e",
        "InterviewEndDate": "2023-04-04 11:55:25",
        "InterviewState": "Completed",
        "Flight": "SN 2582",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "58166a96-e1ec-4e16-b8f2-2149eb047c5c",
        "InterviewEndDate": "2023-04-04 12:50:33",
        "InterviewState": "Completed",
        "Flight": "EJU5263",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "89a87b95-49bd-49c8-b521-6a2f901ad2d5",
        "InterviewEndDate": "2023-04-04 12:59:18",
        "InterviewState": "Completed",
        "Flight": "EJU5263",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "846d3e1b-5979-4d3e-b99e-5d2e929f77ca",
        "InterviewEndDate": "2023-04-04 12:39:41",
        "InterviewState": "Completed",
        "Flight": "EJU5263",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d464ee1c-ed3e-477c-add9-3ef0c2c56d93",
        "InterviewEndDate": "2023-04-04 12:59:59",
        "InterviewState": "Completed",
        "Flight": "EJU5263",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "39742b8c-3790-4d1c-98c0-3bb915cc2c33",
        "InterviewEndDate": "2023-04-04 13:07:12",
        "InterviewState": "Completed",
        "Flight": "EJU5263",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8c57bf94-a790-4b82-b427-5740edd8e747",
        "InterviewEndDate": "2023-04-04 13:08:26",
        "InterviewState": "Completed",
        "Flight": "EJU5263",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8c88f6eb-57cf-4b1f-ba5d-4aee401a10bc",
        "InterviewEndDate": "2023-04-04 13:11:07",
        "InterviewState": "Completed",
        "Flight": "EJU5263",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c6d6977a-15df-49a9-8332-5929a5961525",
        "InterviewEndDate": "2023-04-04 13:40:24",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "4e921fd3-d996-4727-9a77-3de7c3e5f124",
        "InterviewEndDate": "2023-04-04 13:30:21",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "80b26030-455d-4670-b378-566aed41c3ee",
        "InterviewEndDate": "2023-04-04 13:27:45",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "e7b64ca8-fd01-42f7-9f93-26dfcaf19e6d",
        "InterviewEndDate": "2023-04-04 13:29:52",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "4bbcce9a-bc22-4e5d-867d-33072133094f",
        "InterviewEndDate": "2023-04-04 13:59:56",
        "InterviewState": "Completed",
        "Flight": "FI  529",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "Icelandair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "20568b70-2010-4f5b-a215-02d33781f973",
        "InterviewEndDate": "2023-04-05 07:48:54",
        "InterviewState": "Completed",
        "Flight": "EJU5247",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "46c8d6e5-2207-45e7-8f47-5e5f4db080e3",
        "InterviewEndDate": "2023-04-05 07:53:17",
        "InterviewState": "Completed",
        "Flight": "EJU5247",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 10
    },
    {
        "InterviewId": "03852335-fd76-4963-9c9a-34ecae5b7575",
        "InterviewEndDate": "2023-04-05 07:53:44",
        "InterviewState": "Completed",
        "Flight": "EW 4601",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b370e9e8-d165-4217-a089-6a2b93be58ea",
        "InterviewEndDate": "2023-04-05 07:53:08",
        "InterviewState": "Completed",
        "Flight": "EJU5247",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b48334b4-4e7b-4421-8603-2db7fc6487d8",
        "InterviewEndDate": "2023-04-05 08:57:26",
        "InterviewState": "Completed",
        "Flight": "AY 1432",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f5d2e2f0-d3d2-404e-8c68-22291fce7744",
        "InterviewEndDate": "2023-04-05 07:59:00",
        "InterviewState": "Completed",
        "Flight": "EJU5247",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "07817b23-71cb-4522-9d74-2a288fbbe3d6",
        "InterviewEndDate": "2023-04-05 08:18:34",
        "InterviewState": "Completed",
        "Flight": "EJU5063",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "dba6c39f-1131-4895-a8aa-52a438d13806",
        "InterviewEndDate": "2023-04-05 08:55:22",
        "InterviewState": "Completed",
        "Flight": "AY 1432",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "a7278364-3b09-4d68-833b-54c44ab76abd",
        "InterviewEndDate": "2023-04-05 09:09:30",
        "InterviewState": "Completed",
        "Flight": "AY 1432",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "692c33eb-a620-4935-8f80-0ec6af4c1149",
        "InterviewEndDate": "2023-04-05 09:34:13",
        "InterviewState": "Completed",
        "Flight": "EJU5261",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8821fd23-415b-4d04-b250-6b07736e0d81",
        "InterviewEndDate": "2023-04-05 09:13:00",
        "InterviewState": "Completed",
        "Flight": "AY 1432",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "9dd6d35f-a76e-4bc1-9765-0c78e86de17f",
        "InterviewEndDate": "2023-04-05 09:39:35",
        "InterviewState": "Completed",
        "Flight": "EJU5261",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "e88fc3e1-f6f5-4efa-a304-18701cfba5f8",
        "InterviewEndDate": "2023-04-05 09:31:10",
        "InterviewState": "Completed",
        "Flight": "EJU5261",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "64aef928-e78a-407c-833d-3088ac5e52bc",
        "InterviewEndDate": "2023-04-05 09:29:22",
        "InterviewState": "Completed",
        "Flight": "EJU5261",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "042e9341-b2b4-45aa-8e61-2f627d5b2aa4",
        "InterviewEndDate": "2023-04-05 09:38:56",
        "InterviewState": "Completed",
        "Flight": "EJU5261",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d5ca2fa3-d231-47b1-9288-0ba770fbac1d",
        "InterviewEndDate": "2023-04-05 09:43:08",
        "InterviewState": "Completed",
        "Flight": "EJU5261",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "4121d19b-7565-401b-82b6-590a7dfb82e8",
        "InterviewEndDate": "2023-04-05 10:29:47",
        "InterviewState": "Completed",
        "Flight": "EJU4898",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "71ca9f63-5c70-48be-8eb7-0eb5d38a9563",
        "InterviewEndDate": "2023-04-05 10:49:22",
        "InterviewState": "Completed",
        "Flight": "EJU4898",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "339c7c47-cab3-4c84-a671-4c52d3b57399",
        "InterviewEndDate": "2023-04-05 11:48:03",
        "InterviewState": "Completed",
        "Flight": "LH  185",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ebb7fedb-f409-4b6d-8e18-296e23ceff88",
        "InterviewEndDate": "2023-04-05 12:20:07",
        "InterviewState": "Completed",
        "Flight": "FR 2599",
        "Dest": "Riga (RIX)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "766521bf-e8cd-4c59-a8f2-4b33987e5b5a",
        "InterviewEndDate": "2023-04-05 13:55:40",
        "InterviewState": "Completed",
        "Flight": "LH  175",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "e7412ab6-cf21-44ed-8b91-5bd53cb32d67",
        "InterviewEndDate": "2023-04-07 16:16:26",
        "InterviewState": "Completed",
        "Flight": "D8 4506",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Norwegian Air Sweden AOC",
        "InterviewerID": 998
    },
    {
        "InterviewId": "8dc6f8a6-1a60-4ce9-9555-0635842ffcfa",
        "InterviewEndDate": "2023-04-05 16:17:25",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "a953b52d-2245-43b3-a859-43f255658edd",
        "InterviewEndDate": "2023-04-05 16:33:37",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "81443b1d-dc1c-45b8-b046-63039b5bb20f",
        "InterviewEndDate": "2023-04-05 16:36:59",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "ca843e4e-f6bb-4797-a8c3-3d2a90616d31",
        "InterviewEndDate": "2023-04-05 16:37:31",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "c2c00025-c017-47b5-9fff-3cb1edfd61b5",
        "InterviewEndDate": "2023-04-05 16:40:18",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "79ca734e-3949-4e71-a0e2-09dc5361585f",
        "InterviewEndDate": "2023-04-05 17:11:28",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "93cd4f0b-b46c-4646-b3f0-0318a9473e6f",
        "InterviewEndDate": "2023-04-05 17:12:07",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "bc55be72-cf0a-4013-8b99-076d35283672",
        "InterviewEndDate": "2023-04-05 17:10:43",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "563f3bcf-3fd4-48fe-855a-01d6309cb57a",
        "InterviewEndDate": "2023-04-05 17:59:24",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3eb24815-68c2-4d84-8069-69ef9a735f63",
        "InterviewEndDate": "2023-04-05 17:58:01",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 1
    },
    {
        "InterviewId": "e24d00b8-2eb7-4b51-9d8d-3ee3b754a8f7",
        "InterviewEndDate": "2023-04-05 18:14:44",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4a32f6f9-a4eb-445a-95b9-26257e43574a",
        "InterviewEndDate": "2023-04-05 18:48:14",
        "InterviewState": "Completed",
        "Flight": "N0  601",
        "Dest": "New York (JFK)",
        "AirlineCode": "Norse Atlantic Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "8fbef057-2aef-466d-af87-305009ce6b28",
        "InterviewEndDate": "2023-04-05 18:52:28",
        "InterviewState": "Completed",
        "Flight": "N0  601",
        "Dest": "New York (JFK)",
        "AirlineCode": "Norse Atlantic Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3c68bb4b-e6f9-4d2e-a73e-1be9086aeb2a",
        "InterviewEndDate": "2023-04-05 19:01:23",
        "InterviewState": "Completed",
        "Flight": "N0  601",
        "Dest": "New York (JFK)",
        "AirlineCode": "Norse Atlantic Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9529520a-34d3-4759-80d2-58d92daeb23f",
        "InterviewEndDate": "2023-04-05 19:03:02",
        "InterviewState": "Completed",
        "Flight": "N0  601",
        "Dest": "New York (JFK)",
        "AirlineCode": "Norse Atlantic Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "00a48a51-0169-4072-a0dc-44388e204a9c",
        "InterviewEndDate": "2023-04-07 19:33:00",
        "InterviewState": "Completed",
        "Flight": "TK 1724",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "7553300d-09df-44be-b4f4-57125da7b679",
        "InterviewEndDate": "2023-04-07 16:05:41",
        "InterviewState": "Completed",
        "Flight": "D8 4506",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Norwegian Air Sweden AOC",
        "InterviewerID": 998
    },
    {
        "InterviewId": "5872aeff-6e3e-4966-8d45-3d77eea6e7f6",
        "InterviewEndDate": "2023-04-07 16:21:12",
        "InterviewState": "Completed",
        "Flight": "D8 4506",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Norwegian Air Sweden AOC",
        "InterviewerID": 1
    },
    {
        "InterviewId": "60818e21-246c-4261-8fdd-59bf01ab20f1",
        "InterviewEndDate": "2023-04-07 16:20:53",
        "InterviewState": "Completed",
        "Flight": "D8 4506",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Norwegian Air Sweden AOC",
        "InterviewerID": 1
    },
    {
        "InterviewId": "73afc1b3-031b-44fd-a988-3bc63be4b963",
        "InterviewEndDate": "2023-04-07 16:23:37",
        "InterviewState": "Completed",
        "Flight": "D8 4506",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Norwegian Air Sweden AOC",
        "InterviewerID": 998
    },
    {
        "InterviewId": "8a2c45d0-6928-4346-a969-595f4a9f1619",
        "InterviewEndDate": "2023-04-07 17:08:56",
        "InterviewState": "Completed",
        "Flight": "EZY2934",
        "Dest": "Bristol (BRS)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 998
    },
    {
        "InterviewId": "cc902dbd-68ee-49cc-a411-5495f77cf89b",
        "InterviewEndDate": "2023-04-07 18:16:58",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "01c0dfd3-6444-4c02-865a-5e933961c31d",
        "InterviewEndDate": "2023-04-07 18:41:36",
        "InterviewState": "Completed",
        "Flight": "SN 2588",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "f55c88c3-6528-436c-9b17-5b9796e16568",
        "InterviewEndDate": "2023-04-07 18:43:19",
        "InterviewState": "Completed",
        "Flight": "SN 2588",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "85651b41-87ae-4ab0-a537-281aa0170f9f",
        "InterviewEndDate": "2023-04-07 18:45:47",
        "InterviewState": "Completed",
        "Flight": "EW 8046",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 998
    },
    {
        "InterviewId": "be635c8b-65b3-4f71-8059-1485efb36894",
        "InterviewEndDate": "2023-04-07 18:51:51",
        "InterviewState": "Completed",
        "Flight": "LO  390",
        "Dest": "Warschau (WAW)",
        "AirlineCode": "LOT Polish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9d34e464-2b65-49ef-af32-68f9b4dea1da",
        "InterviewEndDate": "2023-04-07 18:57:18",
        "InterviewState": "Completed",
        "Flight": "EJU5267",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d3857fb6-fba0-4f11-a3f6-03ef056039b0",
        "InterviewEndDate": "2023-04-07 19:05:13",
        "InterviewState": "Completed",
        "Flight": "SN 2588",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "2cb3e78d-459b-4607-a03b-340861420001",
        "InterviewEndDate": "2023-04-07 19:00:02",
        "InterviewState": "Completed",
        "Flight": "SN 2588",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "c260a0ff-3519-454d-9386-4b4582d259c8",
        "InterviewEndDate": "2023-04-07 19:39:56",
        "InterviewState": "Completed",
        "Flight": "TK 1724",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "18f0bc6f-0fd2-4872-94a7-019fd084a8a4",
        "InterviewEndDate": "2023-04-07 19:35:59",
        "InterviewState": "Completed",
        "Flight": "TK 1724",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "4389d0f2-90a2-4c04-a206-218d7e5bdab9",
        "InterviewEndDate": "2023-04-07 19:40:38",
        "InterviewState": "Completed",
        "Flight": "TK 1724",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "557357ec-041c-4e11-8f2e-2c642b435fb4",
        "InterviewEndDate": "2023-04-07 19:40:35",
        "InterviewState": "Completed",
        "Flight": "TK 1724",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "13f2430c-6aee-44a6-b7b9-15f34b007cec",
        "InterviewEndDate": "2023-04-07 19:30:47",
        "InterviewState": "Completed",
        "Flight": "TK 1724",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "db7c1bf4-813a-45e8-bd2d-6657b737e216",
        "InterviewEndDate": "2023-04-11 08:23:35",
        "InterviewState": "Completed",
        "Flight": "SN 2580",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c13498d0-c5e0-4f20-ac15-5504de5fd68e",
        "InterviewEndDate": "2023-04-10 07:30:54",
        "InterviewState": "Completed",
        "Flight": "EJU5147",
        "Dest": "Paris (CDG)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "4d8e2045-736a-407f-a5c0-2e9ccea44bbb",
        "InterviewEndDate": "2023-04-10 07:37:06",
        "InterviewState": "Completed",
        "Flight": "EJU5147",
        "Dest": "Paris (CDG)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "197c9793-2cbf-428d-bab5-5e4b21779b48",
        "InterviewEndDate": "2023-04-10 07:32:50",
        "InterviewState": "Completed",
        "Flight": "EJU5147",
        "Dest": "Paris (CDG)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2e49ee4f-6d28-4464-8e46-330d7350e506",
        "InterviewEndDate": "2023-04-10 07:35:41",
        "InterviewState": "Completed",
        "Flight": "EJU5147",
        "Dest": "Paris (CDG)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c6b297d6-52de-47eb-b1a7-438f64bc0968",
        "InterviewEndDate": "2023-04-10 08:25:04",
        "InterviewState": "Completed",
        "Flight": "EZS1186",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 11
    },
    {
        "InterviewId": "53e8783e-042b-40bc-9247-52b6519a5cc9",
        "InterviewEndDate": "2023-04-10 08:16:22",
        "InterviewState": "Completed",
        "Flight": "EZS1186",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b98ff21a-41bd-4cf9-9bd3-36f075fa28ce",
        "InterviewEndDate": "2023-04-10 08:24:17",
        "InterviewState": "Completed",
        "Flight": "EZS1186",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 11
    },
    {
        "InterviewId": "433ca4c4-dc21-4a81-b2f4-39183807f28d",
        "InterviewEndDate": "2023-04-10 09:25:10",
        "InterviewState": "Completed",
        "Flight": "EJU5145",
        "Dest": "Nizza (NCE)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "5425127d-7029-4238-bf9d-2334028eff60",
        "InterviewEndDate": "2023-04-10 08:40:03",
        "InterviewState": "Completed",
        "Flight": "EW 4601",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d2e08ac0-aa30-4645-8f27-278ebfd0830a",
        "InterviewEndDate": "2023-04-10 09:18:26",
        "InterviewState": "Completed",
        "Flight": "EJU5145",
        "Dest": "Nizza (NCE)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "5367e2c7-4b2d-49e7-af51-012501a96e1e",
        "InterviewEndDate": "2023-04-10 10:21:37",
        "InterviewState": "Completed",
        "Flight": "EJU5103",
        "Dest": "Valencia (VLC)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "74fc8531-df54-4962-b9d1-051df3c4ae8b",
        "InterviewEndDate": "2023-04-10 12:06:00",
        "InterviewState": "Completed",
        "Flight": "KL 1824",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "5df81a8d-aefa-49e7-80e1-70ac5fb9c3c3",
        "InterviewEndDate": "2023-04-10 12:10:55",
        "InterviewState": "Completed",
        "Flight": "KL 1824",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b26a3ed0-f8d2-4ff2-957a-67c73d3e8990",
        "InterviewEndDate": "2023-04-10 12:11:34",
        "InterviewState": "Completed",
        "Flight": "KL 1824",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "83d6b02f-0d74-4c2c-8933-527cc551087c",
        "InterviewEndDate": "2023-04-10 13:15:09",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "049e66b9-9634-412a-99a7-10dcaf62a1b6",
        "InterviewEndDate": "2023-04-10 14:05:45",
        "InterviewState": "Completed",
        "Flight": "EJU5071",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "7eebb77f-c9b9-4c55-b7df-5bd4aac7a750",
        "InterviewEndDate": "2023-04-11 07:56:10",
        "InterviewState": "Completed",
        "Flight": "LH  175",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "75ff8a1c-ea22-451c-b761-3bf1cbb98702",
        "InterviewEndDate": "2023-04-10 14:00:19",
        "InterviewState": "Completed",
        "Flight": "EJU5071",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ae4d2e4a-71d0-41a2-8470-61a08533d67a",
        "InterviewEndDate": "2023-04-11 17:01:31",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "f99bbec0-2bf3-4df8-84c0-427666b08d3c",
        "InterviewEndDate": "2023-04-11 07:51:58",
        "InterviewState": "Completed",
        "Flight": "LH  175",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d04a6723-ffd4-4d66-920a-5ba02b924775",
        "InterviewEndDate": "2023-04-11 08:24:54",
        "InterviewState": "Completed",
        "Flight": "SN 2580",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "3fcd40d0-1f33-4336-9407-5e4f10124f79",
        "InterviewEndDate": "2023-04-11 08:20:15",
        "InterviewState": "Completed",
        "Flight": "SN 2580",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b0b82fde-8224-4c69-b931-3e11cebeb325",
        "InterviewEndDate": "2023-04-11 08:25:06",
        "InterviewState": "Completed",
        "Flight": "SN 2580",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c5384bdf-ccec-4597-9d0c-3499ae1e269c",
        "InterviewEndDate": "2023-04-11 09:19:50",
        "InterviewState": "Completed",
        "Flight": "FR  110",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "afaff12d-87dd-4f6d-a11a-1e740209de76",
        "InterviewEndDate": "2023-04-11 09:16:59",
        "InterviewState": "Completed",
        "Flight": "FR  110",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f01c7ff6-26ee-4a54-825d-444f157418fd",
        "InterviewEndDate": "2023-04-11 09:25:33",
        "InterviewState": "Completed",
        "Flight": "FR  110",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c51b4c14-de13-41e5-a03b-6ba851e936d9",
        "InterviewEndDate": "2023-04-11 09:04:13",
        "InterviewState": "Completed",
        "Flight": "FR  110",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2f1cb519-bc8f-45a4-991c-545bc745100d",
        "InterviewEndDate": "2023-04-11 09:17:27",
        "InterviewState": "Completed",
        "Flight": "FR  110",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b37a8b60-195e-445f-aa37-166594c70e5b",
        "InterviewEndDate": "2023-04-11 09:21:13",
        "InterviewState": "Completed",
        "Flight": "FR  110",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "0052c1da-87a1-4a0c-a80e-51dab2b63b79",
        "InterviewEndDate": "2023-04-11 09:31:24",
        "InterviewState": "Completed",
        "Flight": "FR  110",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "5dd41921-6a53-4336-ab1a-558b48b5d3c0",
        "InterviewEndDate": "2023-04-11 10:14:29",
        "InterviewState": "Completed",
        "Flight": "FR  234",
        "Dest": "Malaga (AGP)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b9fad539-dc0c-4369-a89e-078901428676",
        "InterviewEndDate": "2023-04-11 10:12:43",
        "InterviewState": "Completed",
        "Flight": "FR  234",
        "Dest": "Malaga (AGP)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f4b2ce63-3d88-4433-a977-47bba30daebf",
        "InterviewEndDate": "2023-04-11 10:10:36",
        "InterviewState": "Completed",
        "Flight": "FR  234",
        "Dest": "Malaga (AGP)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d0bf7458-8e14-4759-9c4e-39b49c3ebc4b",
        "InterviewEndDate": "2023-04-11 10:07:45",
        "InterviewState": "Completed",
        "Flight": "FR  234",
        "Dest": "Malaga (AGP)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "52f262e1-16a9-4279-90e8-2dc0a32b0764",
        "InterviewEndDate": "2023-04-11 10:08:08",
        "InterviewState": "Completed",
        "Flight": "FR  234",
        "Dest": "Malaga (AGP)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "6df0a03f-7904-4b46-ae0d-68bf64f2150c",
        "InterviewEndDate": "2023-04-11 10:19:58",
        "InterviewState": "Completed",
        "Flight": "FR  234",
        "Dest": "Malaga (AGP)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "310bceea-60e0-4d5d-83bc-6c78cd5460cc",
        "InterviewEndDate": "2023-04-11 10:21:15",
        "InterviewState": "Completed",
        "Flight": "FR  234",
        "Dest": "Malaga (AGP)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "cf9b97d0-6cf5-4a24-9120-2faac3d06f31",
        "InterviewEndDate": "2023-04-11 11:44:17",
        "InterviewState": "Completed",
        "Flight": "LH  185",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "30aa9cab-4d76-4806-a847-0cf08d2d2a92",
        "InterviewEndDate": "2023-04-11 12:40:07",
        "InterviewState": "Completed",
        "Flight": "FR  134",
        "Dest": "Rom (FCO)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "6cb826eb-9872-4942-a2d8-1fe1e0d1ac77",
        "InterviewEndDate": "2023-04-11 12:53:00",
        "InterviewState": "Completed",
        "Flight": "FR  134",
        "Dest": "Rom (FCO)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "627d84c9-e480-4b9a-81d3-62fac5d03f88",
        "InterviewEndDate": "2023-04-11 13:39:11",
        "InterviewState": "Completed",
        "Flight": "FR 1146",
        "Dest": "Thessaloniki (SKG)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "1c0ebb6c-0c14-41e7-949e-228df314fa1f",
        "InterviewEndDate": "2023-04-11 13:40:47",
        "InterviewState": "Completed",
        "Flight": "FR 1146",
        "Dest": "Thessaloniki (SKG)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "32e46dff-6eba-4b51-bc51-10a74ff17d65",
        "InterviewEndDate": "2023-04-11 17:57:42",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "5ce06b04-1844-42c5-b061-5536658f4635",
        "InterviewEndDate": "2023-04-11 17:56:44",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "27b4a13f-8391-4da8-8500-478369382405",
        "InterviewEndDate": "2023-04-11 17:00:18",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 998
    },
    {
        "InterviewId": "fe27470e-e1ff-4c6c-ba24-0f0b2875ebcc",
        "InterviewEndDate": "2023-04-11 17:39:32",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "64aaf23a-fd4e-4f67-994e-5c2febd43ab5",
        "InterviewEndDate": "2023-04-11 17:26:44",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 998
    },
    {
        "InterviewId": "ccddfce0-229f-48ec-ad94-55601b149e9a",
        "InterviewEndDate": "2023-04-11 18:01:28",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "9869c862-92dc-4a55-a9a2-1472db42891f",
        "InterviewEndDate": "2023-04-11 18:06:23",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "02af3b64-907e-4437-8652-212b95b4418b",
        "InterviewEndDate": "2023-04-11 18:10:14",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "11868558-6eeb-4261-8b61-5f527ba2daa2",
        "InterviewEndDate": "2023-04-11 19:27:15",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "433a07b6-9547-46a0-b9a3-4dac2a46d077",
        "InterviewEndDate": "2023-04-11 19:23:18",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "7b70423c-fe3c-4cad-b752-6386b288b93e",
        "InterviewEndDate": "2023-04-11 19:02:35",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "43b4ef46-aaf6-4f4a-b9b2-2d03346afc4e",
        "InterviewEndDate": "2023-04-11 19:03:52",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "82928434-22d3-41ec-9d54-3637e633124b",
        "InterviewEndDate": "2023-04-11 18:36:57",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "feb017bc-c01c-4968-8980-1f7b92469524",
        "InterviewEndDate": "2023-04-11 19:07:14",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "3df9c5f9-d847-4f48-b77c-2df7b7ab0c68",
        "InterviewEndDate": "2023-04-11 18:29:26",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "0f908e55-8e8b-4d34-994e-5765c37a64ce",
        "InterviewEndDate": "2023-04-11 19:20:37",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "1a7cb169-1527-4f9a-8cd0-2380b11fda8c",
        "InterviewEndDate": "2023-04-11 19:03:17",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "6ae42ad4-93ea-4fcb-9650-06710f598360",
        "InterviewEndDate": "2023-04-11 19:24:33",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "dec304d9-147b-4dd7-80f1-452b7303d255",
        "InterviewEndDate": "2023-04-11 19:11:26",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "801bc18d-43ba-42e2-a00a-5433a7cd17cf",
        "InterviewEndDate": "2023-04-11 19:26:36",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "be842f2e-60d7-4188-b6ba-29bad00b134e",
        "InterviewEndDate": "2023-04-11 20:05:52",
        "InterviewState": "Completed",
        "Flight": "LX  983",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 998
    },
    {
        "InterviewId": "04c2083d-4937-4438-8200-2f9f0d2fe118",
        "InterviewEndDate": "2023-04-11 19:59:01",
        "InterviewState": "Completed",
        "Flight": "LX  983",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 998
    },
    {
        "InterviewId": "2b20db5b-c89a-41b9-94bb-68eadf782626",
        "InterviewEndDate": "2023-04-11 20:01:00",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "b901e9b9-da13-4cc0-8b64-50631498f06d",
        "InterviewEndDate": "2023-04-11 20:02:22",
        "InterviewState": "Completed",
        "Flight": "LX  983",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 998
    },
    {
        "InterviewId": "ac65816a-cde3-4a93-850a-462b6c463ae6",
        "InterviewEndDate": "2023-04-11 20:04:48",
        "InterviewState": "Completed",
        "Flight": "LX  983",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 998
    },
    {
        "InterviewId": "e95f1662-be98-4806-a244-28847b9eff47",
        "InterviewEndDate": "2023-04-11 20:05:11",
        "InterviewState": "Completed",
        "Flight": "LX  983",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 12
    },
    {
        "InterviewId": "0ca49a46-f762-4474-8d5c-416aabf29b2a",
        "InterviewEndDate": "2023-04-11 20:12:57",
        "InterviewState": "Completed",
        "Flight": "LX  983",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 998
    },
    {
        "InterviewId": "180ae0f8-6b91-46fe-b32e-1f072eee9474",
        "InterviewEndDate": "2023-04-11 20:17:23",
        "InterviewState": "Completed",
        "Flight": "LX  983",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 12
    },
    {
        "InterviewId": "5b69feb2-963f-4664-b922-51c9c81870bb",
        "InterviewEndDate": "2023-04-11 21:40:40",
        "InterviewState": "Completed",
        "Flight": "BA  999",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 998
    },
    {
        "InterviewId": "95b0515e-e801-40cd-8ded-623aa9570dd0",
        "InterviewEndDate": "2023-04-11 20:16:44",
        "InterviewState": "Completed",
        "Flight": "LX  983",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 998
    },
    {
        "InterviewId": "bdb75815-5ea9-4531-9f27-3b4d9d94c762",
        "InterviewEndDate": "2023-04-11 20:24:12",
        "InterviewState": "Completed",
        "Flight": "LX  983",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 998
    },
    {
        "InterviewId": "8c246a6f-e4a4-4f70-84ed-2b9d8f27ac12",
        "InterviewEndDate": "2023-04-11 20:49:59",
        "InterviewState": "Completed",
        "Flight": "LX  983",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 12
    },
    {
        "InterviewId": "dcca2e5d-758b-4989-86b9-68a28c98f5ed",
        "InterviewEndDate": "2023-04-11 21:36:37",
        "InterviewState": "Completed",
        "Flight": "BA  999",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "fa1de466-de8b-4ff5-8f4e-6fe0babe3c68",
        "InterviewEndDate": "2023-04-11 21:37:07",
        "InterviewState": "Completed",
        "Flight": "BA  999",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "575e849c-3294-4e1e-b190-431367490b52",
        "InterviewEndDate": "2023-04-11 22:07:52",
        "InterviewState": "Completed",
        "Flight": "XM  211",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Zimex Aviation",
        "InterviewerID": 12
    },
    {
        "InterviewId": "a8e1a8f3-633b-499a-a74e-070c1fd0e93c",
        "InterviewEndDate": "2023-04-11 22:06:49",
        "InterviewState": "Completed",
        "Flight": "BA  999",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "a463fac1-52b0-41a1-b167-3829949f525e",
        "InterviewEndDate": "2023-04-11 22:10:04",
        "InterviewState": "Completed",
        "Flight": "XM  211",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Zimex Aviation",
        "InterviewerID": 998
    },
    {
        "InterviewId": "ebebc3d8-7189-4950-be63-66c5f3f19b1a",
        "InterviewEndDate": "2023-04-11 22:07:34",
        "InterviewState": "Completed",
        "Flight": "BA  999",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "98aa6ae4-cb10-459d-99be-425053eeedfd",
        "InterviewEndDate": "2023-04-11 22:17:39",
        "InterviewState": "Completed",
        "Flight": "EI  337",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 998
    },
    {
        "InterviewId": "8d14f98e-b593-4d23-bba5-670cb8835610",
        "InterviewEndDate": "2023-04-11 22:16:42",
        "InterviewState": "Completed",
        "Flight": "XM  211",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Zimex Aviation",
        "InterviewerID": 12
    },
    {
        "InterviewId": "21657fd2-f489-4a41-b3fa-63f49384c304",
        "InterviewEndDate": "2023-04-11 22:21:38",
        "InterviewState": "Completed",
        "Flight": "EI  337",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 998
    },
    {
        "InterviewId": "cebf8a2a-53ce-463c-b040-0b5c01eac2a6",
        "InterviewEndDate": "2023-04-11 22:19:44",
        "InterviewState": "Completed",
        "Flight": "EI  337",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 998
    },
    {
        "InterviewId": "e66679f9-3189-425e-a533-22390effdef9",
        "InterviewEndDate": "2023-04-11 22:22:41",
        "InterviewState": "Completed",
        "Flight": "XM  211",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Zimex Aviation",
        "InterviewerID": 12
    },
    {
        "InterviewId": "db7add20-9ab9-4d7c-bb98-67cac612234a",
        "InterviewEndDate": "2023-04-11 22:30:00",
        "InterviewState": "Completed",
        "Flight": "XM  211",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Zimex Aviation",
        "InterviewerID": 12
    },
    {
        "InterviewId": "25ee0b96-4cae-40d7-9be4-60f1181935dc",
        "InterviewEndDate": "2023-04-11 22:24:02",
        "InterviewState": "Completed",
        "Flight": "XM  211",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Zimex Aviation",
        "InterviewerID": 12
    },
    {
        "InterviewId": "dfdab2d3-a520-47cd-a027-0ff718c3223d",
        "InterviewEndDate": "2023-04-11 22:44:32",
        "InterviewState": "Completed",
        "Flight": "XM  211",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Zimex Aviation",
        "InterviewerID": 12
    },
    {
        "InterviewId": "a568bb8d-e790-4c6b-8c00-0c9d316b244b",
        "InterviewEndDate": "2023-04-11 22:42:44",
        "InterviewState": "Completed",
        "Flight": "XM  211",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Zimex Aviation",
        "InterviewerID": 12
    },
    {
        "InterviewId": "c0ceafa4-7a42-45d6-a12e-05ede491ea47",
        "InterviewEndDate": "2023-04-14 15:51:11",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "3119f5aa-7f4e-4958-92e0-616f47ec6fd6",
        "InterviewEndDate": "2023-04-14 16:02:20",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "b8386287-9d06-4b8b-93e6-135776d3aa1c",
        "InterviewEndDate": "2023-04-14 17:00:00",
        "InterviewState": "Completed",
        "Flight": "LX  969",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 12
    },
    {
        "InterviewId": "57622386-0226-4ea9-a209-0a355fc2bb7d",
        "InterviewEndDate": "2023-04-14 17:19:16",
        "InterviewState": "Completed",
        "Flight": "XQ  661",
        "Dest": "Antalya (AYT)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 12
    },
    {
        "InterviewId": "2ead4af8-be6c-4b0c-958a-6137e227c859",
        "InterviewEndDate": "2023-04-14 17:40:45",
        "InterviewState": "Completed",
        "Flight": "XQ  967",
        "Dest": "Izmir (ADB)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 12
    },
    {
        "InterviewId": "5e41169a-206a-4a96-acbd-6a1b8d5c7534",
        "InterviewEndDate": "2023-04-14 18:05:43",
        "InterviewState": "Completed",
        "Flight": "XQ  661",
        "Dest": "Antalya (AYT)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 12
    },
    {
        "InterviewId": "b5f81039-50cd-431f-9092-1dcc6309ed1a",
        "InterviewEndDate": "2023-04-14 18:07:05",
        "InterviewState": "Completed",
        "Flight": "XQ  967",
        "Dest": "Izmir (ADB)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 12
    },
    {
        "InterviewId": "676855c0-4fb0-4f82-b745-3e4990f45ad9",
        "InterviewEndDate": "2023-04-14 18:10:49",
        "InterviewState": "Completed",
        "Flight": "XQ  661",
        "Dest": "Antalya (AYT)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 12
    },
    {
        "InterviewId": "42fed580-f3ee-43c0-ae34-52da99603189",
        "InterviewEndDate": "2023-04-14 18:24:24",
        "InterviewState": "Completed",
        "Flight": "XQ  661",
        "Dest": "Antalya (AYT)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 12
    },
    {
        "InterviewId": "d2954810-7091-4680-b1d1-3b8c3c3d0783",
        "InterviewEndDate": "2023-04-14 20:19:35",
        "InterviewState": "Completed",
        "Flight": "FR  162",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "e7127cab-799f-4aa9-8968-238a3d1fdb74",
        "InterviewEndDate": "2023-04-14 19:43:42",
        "InterviewState": "Completed",
        "Flight": "FR  140",
        "Dest": "Rom (FCO)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "973f1523-1eb5-4b1a-bdfe-04e623fa0a0e",
        "InterviewEndDate": "2023-04-14 20:16:53",
        "InterviewState": "Completed",
        "Flight": "FR  162",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "ccd65e41-1572-4d8e-a025-41a0cee7bda9",
        "InterviewEndDate": "2023-04-14 20:25:04",
        "InterviewState": "Completed",
        "Flight": "FR  162",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "466814f5-34dc-4f92-ae5a-398d78bf006e",
        "InterviewEndDate": "2023-04-14 20:11:10",
        "InterviewState": "Completed",
        "Flight": "FR  162",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "cf426515-9925-4097-a23e-620aedbb0f77",
        "InterviewEndDate": "2023-04-14 20:27:14",
        "InterviewState": "Completed",
        "Flight": "FR  162",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "95d4858a-f68a-4390-8c84-68fcb9f60495",
        "InterviewEndDate": "2023-04-14 20:33:42",
        "InterviewState": "Completed",
        "Flight": "FR  162",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "2c77202f-4857-44c4-b53f-654add5c8e9b",
        "InterviewEndDate": "2023-04-14 21:53:37",
        "InterviewState": "Completed",
        "Flight": "LG 9474",
        "Dest": "Luxemburg (LUX)",
        "AirlineCode": "Luxair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "a5f3abd8-7f01-4dc5-a0d4-0034517a396b",
        "InterviewEndDate": "2023-04-14 21:39:25",
        "InterviewState": "Completed",
        "Flight": "LG 9474",
        "Dest": "Luxemburg (LUX)",
        "AirlineCode": "Luxair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "9fb0e8be-7a75-4a6f-a16f-4b4627e2bbed",
        "InterviewEndDate": "2023-04-14 22:27:58",
        "InterviewState": "Completed",
        "Flight": "XR  592",
        "Dest": "Hurghada (HRG)",
        "AirlineCode": "Corendon Airlines Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "0eb34390-4e01-4e27-b462-5009d7bf6541",
        "InterviewEndDate": "2023-04-14 22:19:51",
        "InterviewState": "Completed",
        "Flight": "XR  592",
        "Dest": "Hurghada (HRG)",
        "AirlineCode": "Corendon Airlines Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "5d141838-f303-4d1a-a21f-633a10dbd53a",
        "InterviewEndDate": "2023-04-14 22:17:39",
        "InterviewState": "Completed",
        "Flight": "XR  592",
        "Dest": "Hurghada (HRG)",
        "AirlineCode": "Corendon Airlines Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "d01c8283-38af-4b64-b178-10e3b52d8e3f",
        "InterviewEndDate": "2023-04-14 22:41:47",
        "InterviewState": "Completed",
        "Flight": "EZY2604",
        "Dest": "London (LTN)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 12
    },
    {
        "InterviewId": "163d2efc-d1e8-4ea7-9dde-602a4c0ce22d",
        "InterviewEndDate": "2023-04-14 22:55:17",
        "InterviewState": "Completed",
        "Flight": "EZY2604",
        "Dest": "London (LTN)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 12
    },
    {
        "InterviewId": "48b20013-dc06-4f40-8289-16d1632ee730",
        "InterviewEndDate": "2023-04-14 22:52:56",
        "InterviewState": "Completed",
        "Flight": "EZY2604",
        "Dest": "London (LTN)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 12
    },
    {
        "InterviewId": "4cddc01c-2283-4846-b95f-44d293daca71",
        "InterviewEndDate": "2023-04-14 23:02:52",
        "InterviewState": "Completed",
        "Flight": "EZY2604",
        "Dest": "London (LTN)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 12
    },
    {
        "InterviewId": "79d9c6ed-0c91-4b4c-aaa0-55a1e7325197",
        "InterviewEndDate": "2023-04-16 12:27:33",
        "InterviewState": "Completed",
        "Flight": "OG  701",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "PLAY",
        "InterviewerID": 1
    },
    {
        "InterviewId": "e086955a-5349-40dc-aced-606064120f59",
        "InterviewEndDate": "2023-04-16 12:20:52",
        "InterviewState": "Completed",
        "Flight": "OG  701",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "PLAY",
        "InterviewerID": 1
    },
    {
        "InterviewId": "276d32a3-c1fb-455d-b566-1a37301943ea",
        "InterviewEndDate": "2023-04-16 12:12:54",
        "InterviewState": "Completed",
        "Flight": "OG  701",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "PLAY",
        "InterviewerID": 1
    },
    {
        "InterviewId": "57776873-2225-4947-a755-01e3e0ffbe17",
        "InterviewEndDate": "2023-04-16 12:24:48",
        "InterviewState": "Completed",
        "Flight": "EW 6891",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b8a50804-4a4c-43b0-a156-2029fa589746",
        "InterviewEndDate": "2023-04-16 13:06:52",
        "InterviewState": "Completed",
        "Flight": "EJU5187",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 1
    },
    {
        "InterviewId": "822d72ed-c182-4faa-86e0-038f529fd9ac",
        "InterviewEndDate": "2023-04-16 13:08:40",
        "InterviewState": "Completed",
        "Flight": "EJU5187",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 1
    },
    {
        "InterviewId": "53dcb77d-4307-4295-9194-432c16b2404f",
        "InterviewEndDate": "2023-04-16 13:47:09",
        "InterviewState": "Completed",
        "Flight": "TP  533",
        "Dest": "Lissabon (LIS)",
        "AirlineCode": "TAP Air Portugal",
        "InterviewerID": 1
    },
    {
        "InterviewId": "c5fd93b8-28cb-424c-bbe3-465d911f8bbb",
        "InterviewEndDate": "2023-04-16 13:52:20",
        "InterviewState": "Completed",
        "Flight": "TP  533",
        "Dest": "Lissabon (LIS)",
        "AirlineCode": "TAP Air Portugal",
        "InterviewerID": 1
    },
    {
        "InterviewId": "395bd5da-5986-4567-ad57-45d2c681bc73",
        "InterviewEndDate": "2023-04-16 15:15:00",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "8fca22d5-8de7-4fc4-9abe-3416fd7ec3de",
        "InterviewEndDate": "2023-04-16 14:29:09",
        "InterviewState": "Completed",
        "Flight": "EJU5071",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 1
    },
    {
        "InterviewId": "2b74c090-9e3d-43ab-b525-3518a139aa7b",
        "InterviewEndDate": "2023-04-16 15:10:38",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9350fb9a-ec61-4c65-af0d-60cc7ea0eee7",
        "InterviewEndDate": "2023-04-16 16:08:22",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "5164008f-939a-4f6c-9d31-5f0d0843b383",
        "InterviewEndDate": "2023-04-16 16:06:49",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4e720516-edab-498f-be7b-53b101e2ded1",
        "InterviewEndDate": "2023-04-16 16:26:46",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b8e3b7e4-6f4d-4d80-ba77-05a483ee82a1",
        "InterviewEndDate": "2023-04-16 16:43:27",
        "InterviewState": "Completed",
        "Flight": "EZY2934",
        "Dest": "Bristol (BRS)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "c4ceb7f6-834f-4e92-a29c-153c25b61cc9",
        "InterviewEndDate": "2023-04-16 16:47:57",
        "InterviewState": "Completed",
        "Flight": "EZY2934",
        "Dest": "Bristol (BRS)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "505eb235-a0c2-4c12-89ff-672daaf056bb",
        "InterviewEndDate": "2023-04-17 07:50:29",
        "InterviewState": "Completed",
        "Flight": "FR  216",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "3597f72c-2973-4973-a196-149b3d44271e",
        "InterviewEndDate": "2023-04-17 08:12:33",
        "InterviewState": "Completed",
        "Flight": "FR  216",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2508217b-ef9d-4fea-96fc-440bbfa61dd2",
        "InterviewEndDate": "2023-04-17 08:55:55",
        "InterviewState": "Completed",
        "Flight": "FR 2377",
        "Dest": "Edinburgh (EDI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "58acf438-e86c-446e-a452-5f261b042a6d",
        "InterviewEndDate": "2023-04-17 09:05:13",
        "InterviewState": "Completed",
        "Flight": "FR 2377",
        "Dest": "Edinburgh (EDI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "08952216-91fe-416e-a025-6dfafd863ce4",
        "InterviewEndDate": "2023-04-17 08:54:38",
        "InterviewState": "Completed",
        "Flight": "FR 2377",
        "Dest": "Edinburgh (EDI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "37cfcb1b-d1e4-4102-ae92-679c83a293a1",
        "InterviewEndDate": "2023-04-17 09:17:02",
        "InterviewState": "Completed",
        "Flight": "FR 2377",
        "Dest": "Edinburgh (EDI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "4696e319-be40-47ad-978b-5687a90d2aab",
        "InterviewEndDate": "2023-04-17 09:13:44",
        "InterviewState": "Completed",
        "Flight": "FR 2377",
        "Dest": "Edinburgh (EDI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "9c388129-1b9f-47a1-a499-69d54a17e44d",
        "InterviewEndDate": "2023-04-17 09:48:22",
        "InterviewState": "Completed",
        "Flight": "FR  144",
        "Dest": "London (STN)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "3276e34b-20af-4cb6-8282-0bf721696a6a",
        "InterviewEndDate": "2023-04-17 10:01:01",
        "InterviewState": "Completed",
        "Flight": "FR  144",
        "Dest": "London (STN)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "dabfe5b5-7b49-48a8-b977-053c86a8b9f2",
        "InterviewEndDate": "2023-04-17 11:22:04",
        "InterviewState": "Completed",
        "Flight": "OS  226",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f4e6e4a3-9bc9-40c5-be57-20cc300698a7",
        "InterviewEndDate": "2023-04-17 12:07:41",
        "InterviewState": "Completed",
        "Flight": "KL 1824",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "0af36072-ea56-4a3a-8478-2e54b600ec08",
        "InterviewEndDate": "2023-04-17 12:21:39",
        "InterviewState": "Completed",
        "Flight": "KL 1824",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "6efb8c14-f6bb-49c4-9335-05d9be75dd3f",
        "InterviewEndDate": "2023-04-17 13:23:18",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "08ccd3e4-093d-4f3d-b025-6fe1721bb25b",
        "InterviewEndDate": "2023-04-17 13:21:57",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b50ed0ef-2b3f-4f52-ab4f-0f726f2e3aab",
        "InterviewEndDate": "2023-04-17 14:21:26",
        "InterviewState": "Completed",
        "Flight": "EJU5071",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2a8ca169-5353-4864-99df-37bf146aac7b",
        "InterviewEndDate": "2023-04-17 14:07:43",
        "InterviewState": "Completed",
        "Flight": "EJU5071",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "e30fe18f-7883-426e-bd68-5d565839b525",
        "InterviewEndDate": "2023-04-18 06:51:25",
        "InterviewState": "Completed",
        "Flight": "EJU5261",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ab997c81-27b1-4a62-9e8e-053a1d68aec4",
        "InterviewEndDate": "2023-04-18 07:57:17",
        "InterviewState": "Completed",
        "Flight": "EJU5191",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "a183c95e-b809-4d3b-abdd-2a1b50f9bb87",
        "InterviewEndDate": "2023-04-18 08:04:43",
        "InterviewState": "Completed",
        "Flight": "EJU5191",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d941ab08-9b36-4eb9-a2c0-6cf648751eff",
        "InterviewEndDate": "2023-04-18 09:01:46",
        "InterviewState": "Completed",
        "Flight": "KL 1822",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "4a7d44be-b448-4ab8-8d4c-3b5439585eeb",
        "InterviewEndDate": "2023-04-18 08:15:35",
        "InterviewState": "Completed",
        "Flight": "EJU5191",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "e92b6666-c4ee-4dfd-b42e-1f9e72311f8c",
        "InterviewEndDate": "2023-04-18 08:51:26",
        "InterviewState": "Completed",
        "Flight": "KL 1822",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "7e975677-cc50-44dd-ae3c-18f266e53fbd",
        "InterviewEndDate": "2023-04-18 08:57:00",
        "InterviewState": "Completed",
        "Flight": "KL 1822",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "860842d5-f659-4e56-9492-5449b496d605",
        "InterviewEndDate": "2023-04-18 09:05:37",
        "InterviewState": "Completed",
        "Flight": "KL 1822",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "1b2125da-98a0-4db2-84d5-19db0a89aa8c",
        "InterviewEndDate": "2023-04-18 12:04:35",
        "InterviewState": "Completed",
        "Flight": "FR 3311",
        "Dest": "Mailand (BGY)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ba09d8e1-2a50-4624-a74d-3fb9613033f9",
        "InterviewEndDate": "2023-04-18 09:38:08",
        "InterviewState": "Completed",
        "Flight": "LH  181",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "5244dac2-4b11-4c80-b57b-19a652b536b4",
        "InterviewEndDate": "2023-04-18 09:41:44",
        "InterviewState": "Completed",
        "Flight": "LH  181",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "a2dd4523-4408-4c65-8b85-21a7937871af",
        "InterviewEndDate": "2023-04-18 11:45:38",
        "InterviewState": "Completed",
        "Flight": "FR 3309",
        "Dest": "Bari (BRI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "88bf257f-e428-41bf-b9d9-16163c73f04e",
        "InterviewEndDate": "2023-04-18 11:30:15",
        "InterviewState": "Completed",
        "Flight": "FR 3309",
        "Dest": "Bari (BRI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8d82e2e8-9d1a-4f74-87c6-2dae7942d378",
        "InterviewEndDate": "2023-04-18 11:53:32",
        "InterviewState": "Completed",
        "Flight": "FR 3309",
        "Dest": "Bari (BRI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "3810a43c-1c38-4218-9b0f-03586c6599f2",
        "InterviewEndDate": "2023-04-18 12:32:39",
        "InterviewState": "Completed",
        "Flight": "FR 3311",
        "Dest": "Mailand (BGY)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "eeb6a5e1-7311-4d2d-82b3-58847f9ed4df",
        "InterviewEndDate": "2023-04-18 12:25:48",
        "InterviewState": "Completed",
        "Flight": "FR 3311",
        "Dest": "Mailand (BGY)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c98da8ea-ceb9-4d97-bdec-275c76e71719",
        "InterviewEndDate": "2023-04-18 12:27:05",
        "InterviewState": "Completed",
        "Flight": "FR 3311",
        "Dest": "Mailand (BGY)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "efdaeb1e-e85a-4e2e-881b-5691320946d0",
        "InterviewEndDate": "2023-04-19 09:51:16",
        "InterviewState": "Completed",
        "Flight": "EJU4266",
        "Dest": "Neapel (NAP)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "49415ed5-b08b-4a9b-8c32-4b94828a5ffe",
        "InterviewEndDate": "2023-04-19 10:03:44",
        "InterviewState": "Completed",
        "Flight": "EJU4266",
        "Dest": "Neapel (NAP)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8b737cce-05a9-43d8-a33a-6d4b18812f3b",
        "InterviewEndDate": "2023-04-19 10:09:37",
        "InterviewState": "Completed",
        "Flight": "EJU4266",
        "Dest": "Neapel (NAP)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "7f9d1c17-87ba-4219-b13e-6723b6ab23fe",
        "InterviewEndDate": "2023-04-19 10:00:15",
        "InterviewState": "Completed",
        "Flight": "EJU4266",
        "Dest": "Neapel (NAP)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "a35ab791-9802-4286-9a25-2f696f7be513",
        "InterviewEndDate": "2023-04-19 10:07:56",
        "InterviewState": "Completed",
        "Flight": "EJU4266",
        "Dest": "Neapel (NAP)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "a774426f-063b-46c6-a5d7-5762acbcb57e",
        "InterviewEndDate": "2023-04-19 10:07:13",
        "InterviewState": "Completed",
        "Flight": "EJU4266",
        "Dest": "Neapel (NAP)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "77b5d86e-1d50-4af9-a32f-345e6b9ac9c8",
        "InterviewEndDate": "2023-04-19 11:12:33",
        "InterviewState": "Completed",
        "Flight": "A3  821",
        "Dest": "Athen (ATH)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "24eec58f-f929-4d1f-9f59-1b7b0527c319",
        "InterviewEndDate": "2023-04-19 11:00:15",
        "InterviewState": "Completed",
        "Flight": "A3  821",
        "Dest": "Athen (ATH)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "dc993864-37f8-4ef1-9b16-1a142f983ed8",
        "InterviewEndDate": "2023-04-19 10:23:12",
        "InterviewState": "Completed",
        "Flight": "EJU4266",
        "Dest": "Neapel (NAP)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f08b6159-308a-448f-bd57-3930b45e57cf",
        "InterviewEndDate": "2023-04-19 11:19:49",
        "InterviewState": "Completed",
        "Flight": "A3  821",
        "Dest": "Athen (ATH)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "0b5cfd09-32bd-4489-8b60-15d53030ba89",
        "InterviewEndDate": "2023-04-19 10:55:21",
        "InterviewState": "Completed",
        "Flight": "A3  821",
        "Dest": "Athen (ATH)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8053a269-90ce-44fb-93e0-690eca4a8b8d",
        "InterviewEndDate": "2023-04-19 13:22:11",
        "InterviewState": "Completed",
        "Flight": "EW 9047",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8328860d-5bc7-4ec7-888d-16381cc6551c",
        "InterviewEndDate": "2023-04-19 12:05:05",
        "InterviewState": "Completed",
        "Flight": "EJU5283",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "fe22140d-206b-4d57-9d7c-6bc2d7126fd6",
        "InterviewEndDate": "2023-04-19 12:21:01",
        "InterviewState": "Completed",
        "Flight": "EJU5283",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f4fc24db-1597-4c8d-9ee0-2840ba941ef1",
        "InterviewEndDate": "2023-04-19 13:18:59",
        "InterviewState": "Completed",
        "Flight": "EW 9047",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "1691c695-a5b1-4ceb-b5da-0c9995795a22",
        "InterviewEndDate": "2023-04-19 13:26:02",
        "InterviewState": "Completed",
        "Flight": "EW 9047",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "bd61b403-ec67-4f7e-ad08-54b3ff1748ae",
        "InterviewEndDate": "2023-04-19 13:27:33",
        "InterviewState": "Completed",
        "Flight": "EW 9047",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "bff8f210-fd3f-4ba2-b627-2f6e0a5a45a8",
        "InterviewEndDate": "2023-04-19 13:57:07",
        "InterviewState": "Completed",
        "Flight": "FI  529",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "Icelandair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "1261c2e1-2b42-4ac1-82a3-3a09c91b6d7b",
        "InterviewEndDate": "2023-04-19 14:00:03",
        "InterviewState": "Completed",
        "Flight": "FI  529",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "Icelandair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2f5c6245-de96-4271-ac4b-40af8e0ca9f0",
        "InterviewEndDate": "2023-04-19 15:23:30",
        "InterviewState": "Completed",
        "Flight": "EW  051",
        "Dest": "K\u00f6ln (CGN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "0fe0952b-c844-46bd-a57f-6311f078f2ed",
        "InterviewEndDate": "2023-04-19 14:04:38",
        "InterviewState": "Completed",
        "Flight": "FI  529",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "Icelandair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8ea22bbf-a6d4-4e61-b03b-3de65d3431cc",
        "InterviewEndDate": "2023-04-19 14:09:13",
        "InterviewState": "Completed",
        "Flight": "FI  529",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "Icelandair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "fd6ef318-993f-4c73-9a29-04785ee436c2",
        "InterviewEndDate": "2023-04-19 14:54:57",
        "InterviewState": "Completed",
        "Flight": "EW  051",
        "Dest": "K\u00f6ln (CGN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ff9d994a-11f4-4810-ae02-3de93de6e38b",
        "InterviewEndDate": "2023-04-19 15:00:47",
        "InterviewState": "Completed",
        "Flight": "EW  051",
        "Dest": "K\u00f6ln (CGN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2616c57a-d633-451d-91be-53ea0db51d8c",
        "InterviewEndDate": "2023-04-19 16:44:11",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "b975a692-f500-49ac-97e1-5fc28008589f",
        "InterviewEndDate": "2023-04-19 16:41:19",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "60f6a863-8177-4299-afc6-4c5bc44189ca",
        "InterviewEndDate": "2023-04-19 16:39:24",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "a32ac42a-0a2e-4699-a036-3a0f205ea02b",
        "InterviewEndDate": "2023-04-19 16:46:52",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "5b5ce09b-b70e-4f31-83fd-055a61df4fb7",
        "InterviewEndDate": "2023-04-19 17:07:53",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "9ef52b7f-62d0-4c15-8805-1c47c77621b2",
        "InterviewEndDate": "2023-04-19 17:08:41",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "b49a8005-a346-4f68-a33a-0d97638176ff",
        "InterviewEndDate": "2023-04-19 17:55:30",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "cecc1219-bd75-4e29-a1ac-2948c617df61",
        "InterviewEndDate": "2023-04-19 18:42:55",
        "InterviewState": "Completed",
        "Flight": "LH 1947",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 12
    },
    {
        "InterviewId": "3c57e989-ce3a-4df9-ab22-11e1b7c591fc",
        "InterviewEndDate": "2023-04-19 19:26:42",
        "InterviewState": "Completed",
        "Flight": "LH 1947",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 12
    },
    {
        "InterviewId": "eb258067-1043-41d5-84af-352cf02719c0",
        "InterviewEndDate": "2023-04-19 19:57:30",
        "InterviewState": "Completed",
        "Flight": "SN 2588",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "4d493cf9-7a27-4f65-a3ba-1aaf0b0e7b86",
        "InterviewEndDate": "2023-04-19 19:30:52",
        "InterviewState": "Completed",
        "Flight": "N0  601",
        "Dest": "New York (JFK)",
        "AirlineCode": "Norse Atlantic Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "eb82ca04-46a9-40d0-ba06-3e55bc82698b",
        "InterviewEndDate": "2023-04-19 19:17:43",
        "InterviewState": "Completed",
        "Flight": "N0  601",
        "Dest": "New York (JFK)",
        "AirlineCode": "Norse Atlantic Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "3116dd28-4c3f-4713-859a-23f3d1d36a7c",
        "InterviewEndDate": "2023-04-19 19:58:20",
        "InterviewState": "Completed",
        "Flight": "SN 2588",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "38c8f4bc-5677-4fb4-ba2d-08f50805297c",
        "InterviewEndDate": "2023-04-19 20:23:12",
        "InterviewState": "Completed",
        "Flight": "SN 2588",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "30686769-e744-4144-9d9d-12bb3d903555",
        "InterviewEndDate": "2023-04-19 20:15:40",
        "InterviewState": "Completed",
        "Flight": "SN 2588",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "f039e651-2767-4200-800b-405e4e5758bf",
        "InterviewEndDate": "2023-04-19 20:37:19",
        "InterviewState": "Completed",
        "Flight": "SN 2588",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "da2a2b96-9152-4ce4-9022-4f70c595717c",
        "InterviewEndDate": "2023-04-19 20:30:04",
        "InterviewState": "Completed",
        "Flight": "OS  236",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "e9a7f3b5-7968-43ea-a1d3-697893f724e5",
        "InterviewEndDate": "2023-04-19 20:44:03",
        "InterviewState": "Completed",
        "Flight": "OS  236",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "9d656ece-79cc-4967-ae9d-01b428f9cb15",
        "InterviewEndDate": "2023-04-19 21:10:08",
        "InterviewState": "Completed",
        "Flight": "OS  236",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "abbcfdf1-ae75-4504-89b2-68fcfb424d95",
        "InterviewEndDate": "2023-04-19 21:54:38",
        "InterviewState": "Completed",
        "Flight": "BA  995",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "45d07487-fe22-48c3-9118-1967df9e921a",
        "InterviewEndDate": "2023-04-19 21:44:36",
        "InterviewState": "Completed",
        "Flight": "BA  995",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "1e1cafbe-295c-49cb-88c9-5219aef877b6",
        "InterviewEndDate": "2023-04-19 21:48:56",
        "InterviewState": "Completed",
        "Flight": "BA  995",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "ca23c8f4-e344-47c0-924a-32ec98ed6ada",
        "InterviewEndDate": "2023-04-19 21:49:54",
        "InterviewState": "Completed",
        "Flight": "BA  995",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "309a3540-12fd-48b5-8016-06fd0dbbc733",
        "InterviewEndDate": "2023-04-19 21:54:29",
        "InterviewState": "Completed",
        "Flight": "BA  995",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "8a77a174-a2c1-4a88-b33e-2b51ec6c7e12",
        "InterviewEndDate": "2023-04-19 22:11:02",
        "InterviewState": "Completed",
        "Flight": "BA  995",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "0da6d10b-a29c-4500-a040-0feae8de3ac7",
        "InterviewEndDate": "2023-04-19 22:27:04",
        "InterviewState": "Completed",
        "Flight": "EI  337",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 12
    },
    {
        "InterviewId": "a92bb8a9-ca3e-4853-8c23-040a6f19a294",
        "InterviewEndDate": "2023-04-19 22:33:13",
        "InterviewState": "Completed",
        "Flight": "EI  337",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 12
    },
    {
        "InterviewId": "7b7c3e8d-ee5d-46fa-b681-4eb4df9ce225",
        "InterviewEndDate": "2023-04-19 22:55:35",
        "InterviewState": "Completed",
        "Flight": "EI  337",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 12
    },
    {
        "InterviewId": "720300f0-a86b-4a8f-9cbc-3c1cced7b060",
        "InterviewEndDate": "2023-04-19 23:07:49",
        "InterviewState": "Completed",
        "Flight": "EI  337",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 12
    },
    {
        "InterviewId": "b71a9e56-d100-4dc4-bdd4-51cfeaaebf37",
        "InterviewEndDate": "2023-04-21 15:25:22",
        "InterviewState": "Completed",
        "Flight": "LX  967",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 12
    },
    {
        "InterviewId": "4333cf4d-7617-4ce1-abbe-21266e627391",
        "InterviewEndDate": "2023-04-21 15:38:26",
        "InterviewState": "Completed",
        "Flight": "LX  967",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 12
    },
    {
        "InterviewId": "b4d99d95-6665-4285-89f1-27dc82178161",
        "InterviewEndDate": "2023-04-21 16:05:58",
        "InterviewState": "Completed",
        "Flight": "LX  967",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 12
    },
    {
        "InterviewId": "9381ea26-0da3-4d2f-90e1-5000e0655b1b",
        "InterviewEndDate": "2023-04-21 16:04:36",
        "InterviewState": "Completed",
        "Flight": "LX  967",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 12
    },
    {
        "InterviewId": "6a2a810d-d9ed-49a5-b557-50c1e92af48c",
        "InterviewEndDate": "2023-04-21 17:01:44",
        "InterviewState": "Completed",
        "Flight": "EJU5121",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "35e7e269-35e2-49d1-99fa-01844efd76b5",
        "InterviewEndDate": "2023-04-21 17:04:27",
        "InterviewState": "Completed",
        "Flight": "EJU5121",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "7f0f3d12-d700-43b4-8cf7-3078af5986f4",
        "InterviewEndDate": "2023-04-21 17:04:43",
        "InterviewState": "Completed",
        "Flight": "EJU5121",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "631dfbe3-15d5-410c-8ea7-4660dee29b77",
        "InterviewEndDate": "2023-04-21 17:18:19",
        "InterviewState": "Completed",
        "Flight": "EJU5121",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "07759906-da30-4d3d-afba-26314c5202fd",
        "InterviewEndDate": "2023-04-21 17:33:59",
        "InterviewState": "Completed",
        "Flight": "EJU5121",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "f85b1592-da55-4a55-a807-2d902c7cc3cb",
        "InterviewEndDate": "2023-04-21 18:14:13",
        "InterviewState": "Completed",
        "Flight": "EJU5153",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "1ef9569a-9bd5-4282-a880-6d024e3735b4",
        "InterviewEndDate": "2023-04-21 18:11:07",
        "InterviewState": "Completed",
        "Flight": "EJU5153",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "9b3439af-7ad2-48fd-9498-331cdf01230c",
        "InterviewEndDate": "2023-04-21 17:55:12",
        "InterviewState": "Completed",
        "Flight": "EJU5153",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "ffc6ebc9-3046-473e-aaa9-6d32990f3557",
        "InterviewEndDate": "2023-04-21 17:55:00",
        "InterviewState": "Completed",
        "Flight": "EJU5153",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "d5755ec0-1e42-480b-93fa-350f8de0931d",
        "InterviewEndDate": "2023-04-21 18:14:49",
        "InterviewState": "Completed",
        "Flight": "EJU5153",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "180c1fea-e172-4856-8ea2-073f7a38eb0e",
        "InterviewEndDate": "2023-04-21 18:38:37",
        "InterviewState": "Completed",
        "Flight": "EW 8230",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "8d3b10dc-3bd8-4897-8172-53ff7661ae41",
        "InterviewEndDate": "2023-04-21 18:38:24",
        "InterviewState": "Completed",
        "Flight": "EW 8230",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "f0ff3e45-287e-48c8-86f2-44a0e4083378",
        "InterviewEndDate": "2023-04-21 18:48:05",
        "InterviewState": "Completed",
        "Flight": "EJU5153",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "de86e173-3d32-46ed-8591-11aa1f6a2766",
        "InterviewEndDate": "2023-04-21 18:45:30",
        "InterviewState": "Completed",
        "Flight": "EW 8230",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "2998a433-3877-4365-a521-373460bce5ae",
        "InterviewEndDate": "2023-04-21 18:49:31",
        "InterviewState": "Completed",
        "Flight": "EJU5153",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "086e0842-ff5a-4075-86b7-182acdb2b5d9",
        "InterviewEndDate": "2023-04-21 19:15:31",
        "InterviewState": "Completed",
        "Flight": "EW 2019",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "43fd651f-9918-4312-868f-71be388f05af",
        "InterviewEndDate": "2023-04-21 19:38:40",
        "InterviewState": "Completed",
        "Flight": "EW 2019",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "7b596dd4-3d9c-446b-92b4-1f4bf15b913a",
        "InterviewEndDate": "2023-04-21 21:03:11",
        "InterviewState": "Completed",
        "Flight": "EW 8046",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "9832dc5f-0010-4613-902a-0d100d85395d",
        "InterviewEndDate": "2023-04-21 20:55:04",
        "InterviewState": "Completed",
        "Flight": "EW 8046",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "8e4f8445-9337-42e2-b868-4b1e73617440",
        "InterviewEndDate": "2023-04-21 21:13:54",
        "InterviewState": "Completed",
        "Flight": "EW 8046",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "07a9243d-3b8a-4abf-8895-12083a90b165",
        "InterviewEndDate": "2023-04-21 21:27:20",
        "InterviewState": "Completed",
        "Flight": "EZS1190",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 12
    },
    {
        "InterviewId": "f93a864a-806b-42b4-9ea2-3fe198d5423a",
        "InterviewEndDate": "2023-04-21 21:43:01",
        "InterviewState": "Completed",
        "Flight": "EZS1190",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 12
    },
    {
        "InterviewId": "0f87ff12-367b-4ee7-8cc5-70c8d59cf186",
        "InterviewEndDate": "2023-04-21 21:47:51",
        "InterviewState": "Completed",
        "Flight": "EZS1190",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 12
    },
    {
        "InterviewId": "60dc1667-1571-474d-a29d-673946dad2c6",
        "InterviewEndDate": "2023-04-21 22:07:40",
        "InterviewState": "Completed",
        "Flight": "EZS1190",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 12
    },
    {
        "InterviewId": "2a2bcfed-526d-438c-a5d9-3664cb47e399",
        "InterviewEndDate": "2023-04-25 15:04:08",
        "InterviewState": "Completed",
        "Flight": "LH  191",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "0dc3cc6e-bfb2-453f-966e-4629ef5d08fb",
        "InterviewEndDate": "2023-04-25 17:09:00",
        "InterviewState": "Completed",
        "Flight": "TP  535",
        "Dest": "Lissabon (LIS)",
        "AirlineCode": "TAP Air Portugal",
        "InterviewerID": 11
    },
    {
        "InterviewId": "852461bd-315e-4e5f-863c-0b340791d262",
        "InterviewEndDate": "2023-04-25 17:11:50",
        "InterviewState": "Completed",
        "Flight": "TP  535",
        "Dest": "Lissabon (LIS)",
        "AirlineCode": "TAP Air Portugal",
        "InterviewerID": 11
    },
    {
        "InterviewId": "48c44593-8838-4e47-9906-38a688c4f2c1",
        "InterviewEndDate": "2023-04-25 18:42:00",
        "InterviewState": "Completed",
        "Flight": "SN 2588",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "fa4071be-7296-4f11-b41e-252814a61b6c",
        "InterviewEndDate": "2023-04-25 16:28:58",
        "InterviewState": "Completed",
        "Flight": "EJU5247",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "6a56e208-6bdf-45f4-acc0-00f306d1ac21",
        "InterviewEndDate": "2023-04-25 18:32:33",
        "InterviewState": "Completed",
        "Flight": "SN 2588",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ddd026ad-5262-4c32-a515-1ff606ea2328",
        "InterviewEndDate": "2023-04-25 17:25:27",
        "InterviewState": "Completed",
        "Flight": "KL 1830",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "26722341-aebc-4f2f-bca6-677f369fea80",
        "InterviewEndDate": "2023-04-25 17:35:45",
        "InterviewState": "Completed",
        "Flight": "KL 1830",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "902a9db6-d905-4cd3-8e83-6d68e2119494",
        "InterviewEndDate": "2023-04-25 18:46:28",
        "InterviewState": "Completed",
        "Flight": "SN 2588",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c8d05f09-06df-44fe-96dc-5c5d5aaf51c2",
        "InterviewEndDate": "2023-04-25 18:39:46",
        "InterviewState": "Completed",
        "Flight": "SN 2588",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "548257d8-6683-4456-bdbf-0bbd14675a7f",
        "InterviewEndDate": "2023-04-25 20:09:24",
        "InterviewState": "Completed",
        "Flight": "EW 2021",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8f6f56e5-83d9-47d5-bcc2-225c27ca2d9b",
        "InterviewEndDate": "2023-04-25 19:27:31",
        "InterviewState": "Completed",
        "Flight": "AY 1436",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2e9fd3ef-0c30-44c7-8336-126c998f477c",
        "InterviewEndDate": "2023-04-25 21:05:55",
        "InterviewState": "Completed",
        "Flight": "BA  999",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 11
    },
    {
        "InterviewId": "10057cd5-54fd-445a-ac61-102b737e2636",
        "InterviewEndDate": "2023-04-26 16:00:09",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "25115033-453d-4382-87d3-5fa66697f43f",
        "InterviewEndDate": "2023-04-26 17:11:47",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "5d2b7751-8f14-4bb8-bd44-2cbf4dd28b4c",
        "InterviewEndDate": "2023-04-26 17:42:37",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "62f1e3ae-c7f2-4a94-b038-453cfdc6a841",
        "InterviewEndDate": "2023-04-26 18:26:05",
        "InterviewState": "Completed",
        "Flight": "BA  985",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "82b1efb7-5167-4799-b09a-3080b6bc30a4",
        "InterviewEndDate": "2023-04-26 18:39:50",
        "InterviewState": "Completed",
        "Flight": "KL 1830",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "d314b5fd-3b19-4570-b921-1328e6787eea",
        "InterviewEndDate": "2023-04-26 18:39:47",
        "InterviewState": "Completed",
        "Flight": "KL 1830",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "b93a2954-ee8b-44cf-ab3f-3f2bb2dffef7",
        "InterviewEndDate": "2023-04-26 19:25:21",
        "InterviewState": "Completed",
        "Flight": "EJU5153",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "b6a8210b-752d-47fe-b9ad-1aef9fabb0a5",
        "InterviewEndDate": "2023-04-26 20:03:30",
        "InterviewState": "Completed",
        "Flight": "LO  390",
        "Dest": "Warschau (WAW)",
        "AirlineCode": "LOT Polish Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "8eff3b2f-f985-4ecb-aed4-630ffaa52a24",
        "InterviewEndDate": "2023-04-26 20:45:57",
        "InterviewState": "Completed",
        "Flight": "EW 8212",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "2361a834-2301-4f9c-8a14-57c4bb47122a",
        "InterviewEndDate": "2023-04-26 20:51:23",
        "InterviewState": "Completed",
        "Flight": "EW 8212",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "1937cd20-8347-48c6-b7ee-1cdda0120b08",
        "InterviewEndDate": "2023-04-26 21:15:00",
        "InterviewState": "Completed",
        "Flight": "EW 8212",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "e35de411-8a7e-4f7f-92f3-710b4fe59f24",
        "InterviewEndDate": "2023-04-26 20:59:20",
        "InterviewState": "Completed",
        "Flight": "EW 8212",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "d6f0c23c-ee3b-4a49-985c-0b3098eca669",
        "InterviewEndDate": "2023-04-26 21:58:41",
        "InterviewState": "Completed",
        "Flight": "EJU4078",
        "Dest": "Venedig (VCE)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "3c210bea-ece5-43bb-836a-1871e52643c1",
        "InterviewEndDate": "2023-04-26 22:02:39",
        "InterviewState": "Completed",
        "Flight": "EJU4078",
        "Dest": "Venedig (VCE)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "ff0281a2-b8a5-41e6-a34c-567e74905259",
        "InterviewEndDate": "2023-04-26 22:07:07",
        "InterviewState": "Completed",
        "Flight": "EJU4078",
        "Dest": "Venedig (VCE)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "143877b1-98cb-49d5-9436-233399e93c44",
        "InterviewEndDate": "2023-04-26 22:44:00",
        "InterviewState": "Completed",
        "Flight": "EZY2202",
        "Dest": "Manchester (MAN)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 12
    },
    {
        "InterviewId": "945ff5ab-90e4-4d28-bd25-499fc0cad6ad",
        "InterviewEndDate": "2023-04-26 22:16:43",
        "InterviewState": "Completed",
        "Flight": "EJU4078",
        "Dest": "Venedig (VCE)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "8e81b611-4369-4e66-a6da-627ba7f0e106",
        "InterviewEndDate": "2023-04-26 22:47:03",
        "InterviewState": "Completed",
        "Flight": "EZY2202",
        "Dest": "Manchester (MAN)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 12
    },
    {
        "InterviewId": "6fb75a66-9341-4935-a849-0e651a67c9d3",
        "InterviewEndDate": "2023-04-26 22:36:27",
        "InterviewState": "Completed",
        "Flight": "EZY2202",
        "Dest": "Manchester (MAN)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 12
    },
    {
        "InterviewId": "5ffb62c9-b0e3-4028-81f5-5c99932fbeac",
        "InterviewEndDate": "2023-04-29 08:47:34",
        "InterviewState": "Completed",
        "Flight": "LH  177",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "da70f94d-2ce3-49e3-a69d-4bdfbfa556ca",
        "InterviewEndDate": "2023-04-29 08:55:01",
        "InterviewState": "Completed",
        "Flight": "LH  177",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "011b2b9a-dfd4-40ab-883c-2f9cbc76b8e7",
        "InterviewEndDate": "2023-04-29 09:50:07",
        "InterviewState": "Completed",
        "Flight": "FR 1144",
        "Dest": "Manchester (MAN)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "e2c9771e-ea9a-4417-9a43-4ae92a368900",
        "InterviewEndDate": "2023-04-29 10:40:03",
        "InterviewState": "Completed",
        "Flight": "VY 1883",
        "Dest": "Barcelona (BCN)",
        "AirlineCode": "Vueling Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "12fca74a-5e6f-48d8-8271-4e08a27cb2f3",
        "InterviewEndDate": "2023-04-29 10:42:58",
        "InterviewState": "Completed",
        "Flight": "VY 1883",
        "Dest": "Barcelona (BCN)",
        "AirlineCode": "Vueling Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "7c77d47f-ee19-4249-9195-5dcbbfdca405",
        "InterviewEndDate": "2023-04-29 10:32:11",
        "InterviewState": "Completed",
        "Flight": "VY 1883",
        "Dest": "Barcelona (BCN)",
        "AirlineCode": "Vueling Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "fe203339-6591-4dfa-86aa-387426ea8b39",
        "InterviewEndDate": "2023-04-29 10:36:04",
        "InterviewState": "Completed",
        "Flight": "VY 1883",
        "Dest": "Barcelona (BCN)",
        "AirlineCode": "Vueling Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "46a675e1-7a84-4eb0-b395-6786c54ce20b",
        "InterviewEndDate": "2023-04-29 10:49:55",
        "InterviewState": "Completed",
        "Flight": "VY 1883",
        "Dest": "Barcelona (BCN)",
        "AirlineCode": "Vueling Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "85ee779e-1676-4965-a79a-0bcf6cc134ce",
        "InterviewEndDate": "2023-04-29 11:38:36",
        "InterviewState": "Completed",
        "Flight": "FR 3388",
        "Dest": "Marseille (MRS)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "71da909f-0075-442e-ba6e-255d34f339c6",
        "InterviewEndDate": "2023-04-29 11:36:19",
        "InterviewState": "Completed",
        "Flight": "FR 3388",
        "Dest": "Marseille (MRS)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "26ec2dbb-5760-467f-8e20-5f6b601a78a0",
        "InterviewEndDate": "2023-04-29 12:22:19",
        "InterviewState": "Completed",
        "Flight": "FR 3388",
        "Dest": "Marseille (MRS)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ebdc6838-e0d0-45bb-ab0b-3ca128f86d85",
        "InterviewEndDate": "2023-04-29 11:37:48",
        "InterviewState": "Completed",
        "Flight": "FR 3388",
        "Dest": "Marseille (MRS)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "6c3fbfd1-4956-4fcb-8c16-6823e136f665",
        "InterviewEndDate": "2023-04-29 12:22:30",
        "InterviewState": "Completed",
        "Flight": "EJU5333",
        "Dest": "Funchal (FNC)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 1
    },
    {
        "InterviewId": "1234a47c-684d-4cab-803c-558d6dd96615",
        "InterviewEndDate": "2023-04-29 12:23:42",
        "InterviewState": "Completed",
        "Flight": "EJU5333",
        "Dest": "Funchal (FNC)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4d1b5fa9-56bd-4a45-8ba7-5759e3ea0504",
        "InterviewEndDate": "2023-04-29 12:25:59",
        "InterviewState": "Completed",
        "Flight": "EJU5333",
        "Dest": "Funchal (FNC)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3b05dbd8-55b3-4e41-bf67-38f053a37789",
        "InterviewEndDate": "2023-04-29 12:26:27",
        "InterviewState": "Completed",
        "Flight": "EW 8592",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 2
    },
    {
        "InterviewId": "0fdbb24b-a07e-43ff-99ed-059b40ff378d",
        "InterviewEndDate": "2023-04-29 12:26:23",
        "InterviewState": "Completed",
        "Flight": "EW 8592",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 2
    },
    {
        "InterviewId": "589e6126-c2a7-4a6b-9843-134337251379",
        "InterviewEndDate": "2023-04-29 12:51:48",
        "InterviewState": "Completed",
        "Flight": "BA  983",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 2
    },
    {
        "InterviewId": "69160adf-e1ad-4fb2-8c12-163995a27adb",
        "InterviewEndDate": "2023-04-29 12:35:48",
        "InterviewState": "Completed",
        "Flight": "SK 1674",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "SAS-Scandinavian Airlines System",
        "InterviewerID": 11
    },
    {
        "InterviewId": "1931470e-6547-4f54-bddc-437d60b2cfab",
        "InterviewEndDate": "2023-04-29 12:35:04",
        "InterviewState": "Completed",
        "Flight": "SK 1674",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "SAS-Scandinavian Airlines System",
        "InterviewerID": 11
    },
    {
        "InterviewId": "23195e73-55a6-4ddb-a056-0e3e5cbc47c4",
        "InterviewEndDate": "2023-04-29 12:39:24",
        "InterviewState": "Completed",
        "Flight": "SK 1674",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "SAS-Scandinavian Airlines System",
        "InterviewerID": 11
    },
    {
        "InterviewId": "4fcea32c-d9bc-4a9f-867b-14a792cc1897",
        "InterviewEndDate": "2023-04-29 12:56:56",
        "InterviewState": "Completed",
        "Flight": "BA  983",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3685d9d3-854e-4f38-a03a-6c232c79fbb4",
        "InterviewEndDate": "2023-04-29 12:52:57",
        "InterviewState": "Completed",
        "Flight": "BA  983",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "00d459d6-f457-486a-82a8-7225d33a43fd",
        "InterviewEndDate": "2023-04-29 12:52:15",
        "InterviewState": "Completed",
        "Flight": "BA  983",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "997c893c-ba89-42eb-ab70-647039770cab",
        "InterviewEndDate": "2023-04-29 12:49:55",
        "InterviewState": "Completed",
        "Flight": "BA  983",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 2
    },
    {
        "InterviewId": "75a5dd10-3243-4d11-9a7d-1997c674c32c",
        "InterviewEndDate": "2023-04-29 12:55:36",
        "InterviewState": "Completed",
        "Flight": "BA  983",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "a5f3938c-d50c-475f-b4e1-0698b547c650",
        "InterviewEndDate": "2023-04-29 13:37:56",
        "InterviewState": "Completed",
        "Flight": "LH  189",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "6e1b8216-cfb7-49ff-b70b-4984eb624f54",
        "InterviewEndDate": "2023-04-29 13:06:26",
        "InterviewState": "Completed",
        "Flight": "BA  983",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 2
    },
    {
        "InterviewId": "01a926f4-6294-4ed2-b481-5ea3b08f1317",
        "InterviewEndDate": "2023-04-29 13:12:23",
        "InterviewState": "Completed",
        "Flight": "BA  983",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "7ae96c46-0719-4b4a-8c34-1f577571f0ec",
        "InterviewEndDate": "2023-04-29 13:06:20",
        "InterviewState": "Completed",
        "Flight": "BA  983",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 2
    },
    {
        "InterviewId": "728504bf-eea2-4ceb-bdb3-0d8c8630da53",
        "InterviewEndDate": "2023-04-29 13:37:29",
        "InterviewState": "Completed",
        "Flight": "PC  980",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "aa5e520a-9727-4fde-adec-5482ca0c10c1",
        "InterviewEndDate": "2023-04-29 13:29:44",
        "InterviewState": "Completed",
        "Flight": "PC  980",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "ef510349-0a9d-45d2-a371-5287c540535c",
        "InterviewEndDate": "2023-04-29 13:41:35",
        "InterviewState": "Completed",
        "Flight": "PC  980",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "822d3db0-99d3-4a92-9f93-26d58ce1b4f3",
        "InterviewEndDate": "2023-04-29 13:44:02",
        "InterviewState": "Completed",
        "Flight": "PC  980",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3a015ccd-53b7-4bda-9d9f-2bfcb9d38202",
        "InterviewEndDate": "2023-04-29 14:49:43",
        "InterviewState": "Completed",
        "Flight": "EZS1188",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 1
    },
    {
        "InterviewId": "58dffea4-ccae-490c-9eee-0b564b07e84b",
        "InterviewEndDate": "2023-04-29 14:22:47",
        "InterviewState": "Completed",
        "Flight": "FR  208",
        "Dest": "Ibiza (IBZ)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "cef8634f-3bd4-4e34-a72f-72586abdbddc",
        "InterviewEndDate": "2023-04-29 14:54:16",
        "InterviewState": "Completed",
        "Flight": "FR  226",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3d1726de-00c9-4fa2-aa62-55b5f73c283e",
        "InterviewEndDate": "2023-04-29 14:51:00",
        "InterviewState": "Completed",
        "Flight": "KL 1826",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "8335aa85-7a43-4d8f-9a75-60bfaca3af6a",
        "InterviewEndDate": "2023-04-29 14:38:39",
        "InterviewState": "Completed",
        "Flight": "SM 2961",
        "Dest": "Hurghada (HRG)",
        "AirlineCode": "Air Cairo",
        "InterviewerID": 2
    },
    {
        "InterviewId": "70785fc6-1db4-4d3d-96db-02ae52abb0f0",
        "InterviewEndDate": "2023-05-01 14:19:06",
        "InterviewState": "Completed",
        "Flight": "D8 4506",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Norwegian Air Sweden AOC",
        "InterviewerID": 11
    },
    {
        "InterviewId": "738886bc-747a-49e9-bfc3-0c9816675400",
        "InterviewEndDate": "2023-04-29 14:33:19",
        "InterviewState": "Completed",
        "Flight": "SM 2961",
        "Dest": "Hurghada (HRG)",
        "AirlineCode": "Air Cairo",
        "InterviewerID": 2
    },
    {
        "InterviewId": "2b8b81a9-3e51-461d-aff6-440eca6dbaf1",
        "InterviewEndDate": "2023-04-29 14:45:24",
        "InterviewState": "Completed",
        "Flight": "SM 2961",
        "Dest": "Hurghada (HRG)",
        "AirlineCode": "Air Cairo",
        "InterviewerID": 2
    },
    {
        "InterviewId": "0d7e7711-2798-440c-bd49-1f1a52bec93a",
        "InterviewEndDate": "2023-04-29 15:13:10",
        "InterviewState": "Completed",
        "Flight": "XQ  947",
        "Dest": "Izmir (ADB)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 2
    },
    {
        "InterviewId": "7f4125ab-263a-4340-9b4c-15bcd665c59a",
        "InterviewEndDate": "2023-04-29 15:16:22",
        "InterviewState": "Completed",
        "Flight": "XQ  947",
        "Dest": "Izmir (ADB)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 2
    },
    {
        "InterviewId": "0f7ed4b2-64c0-4ec4-8544-5dcedae608b2",
        "InterviewEndDate": "2023-04-29 15:05:05",
        "InterviewState": "Completed",
        "Flight": "LH 1943",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3dafc9b7-877a-44ea-a6be-470bd2038a72",
        "InterviewEndDate": "2023-04-29 15:05:31",
        "InterviewState": "Completed",
        "Flight": "KL 1826",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "7f7e72bd-5b6d-4a1f-9c1c-4fbd8494912a",
        "InterviewEndDate": "2023-04-29 15:14:12",
        "InterviewState": "Completed",
        "Flight": "OS  230",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "6ea022dd-02b3-4265-9c04-0db107c3bcdd",
        "InterviewEndDate": "2023-04-29 15:12:27",
        "InterviewState": "Completed",
        "Flight": "OS  230",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d62ca3f1-d3dc-4f5e-91da-6a86b0c5fbad",
        "InterviewEndDate": "2023-04-29 15:06:32",
        "InterviewState": "Completed",
        "Flight": "EW 8594",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 1
    },
    {
        "InterviewId": "c739210b-ec3a-4d3c-b319-1f74a1e228bb",
        "InterviewEndDate": "2023-04-29 15:09:54",
        "InterviewState": "Completed",
        "Flight": "OS  230",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "439f5740-ae4c-4e6c-8def-543f0c875dff",
        "InterviewEndDate": "2023-04-29 15:25:00",
        "InterviewState": "Completed",
        "Flight": "EW 8678",
        "Dest": "Heraklion (HER)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b5a7af9f-ab12-4e23-a83d-070eba7eedc0",
        "InterviewEndDate": "2023-04-29 15:24:10",
        "InterviewState": "Completed",
        "Flight": "EW 8678",
        "Dest": "Heraklion (HER)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 1
    },
    {
        "InterviewId": "0ea8a1b8-9aae-4755-888d-3fb687be49e7",
        "InterviewEndDate": "2023-04-29 15:32:35",
        "InterviewState": "Completed",
        "Flight": "EW 8678",
        "Dest": "Heraklion (HER)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 1
    },
    {
        "InterviewId": "76a1f38c-3764-4764-ba97-20d045f4afff",
        "InterviewEndDate": "2023-04-29 15:42:06",
        "InterviewState": "Completed",
        "Flight": "AF 1235",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 2
    },
    {
        "InterviewId": "a0b80117-3760-45ab-b4b0-48362872c288",
        "InterviewEndDate": "2023-05-01 14:15:22",
        "InterviewState": "Completed",
        "Flight": "D8 4506",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Norwegian Air Sweden AOC",
        "InterviewerID": 11
    },
    {
        "InterviewId": "0b86b9ee-f615-4988-8c20-427490b91f09",
        "InterviewEndDate": "2023-04-29 15:45:37",
        "InterviewState": "Completed",
        "Flight": "AF 1235",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 2
    },
    {
        "InterviewId": "dab85b14-131e-4e40-a912-6782cf42c2b4",
        "InterviewEndDate": "2023-04-29 15:48:00",
        "InterviewState": "Completed",
        "Flight": "AF 1235",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 1
    },
    {
        "InterviewId": "be417362-1973-4558-827c-499a133ee6e2",
        "InterviewEndDate": "2023-04-30 11:31:44",
        "InterviewState": "Completed",
        "Flight": "A3  821",
        "Dest": "Athen (ATH)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 2
    },
    {
        "InterviewId": "8b025215-b920-42c4-b640-4c1831f5ad34",
        "InterviewEndDate": "2023-04-30 11:50:02",
        "InterviewState": "Completed",
        "Flight": "A3  821",
        "Dest": "Athen (ATH)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 2
    },
    {
        "InterviewId": "6291342c-8f22-4d01-8ea9-008191d1a574",
        "InterviewEndDate": "2023-04-30 12:20:39",
        "InterviewState": "Completed",
        "Flight": "EZY8630",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 2
    },
    {
        "InterviewId": "bcb7d50a-ed10-4132-85a0-27d5197714a5",
        "InterviewEndDate": "2023-04-30 12:20:34",
        "InterviewState": "Completed",
        "Flight": "EZY8630",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 2
    },
    {
        "InterviewId": "99f19545-3f47-4df8-93d5-6c2ab788c735",
        "InterviewEndDate": "2023-04-30 12:30:43",
        "InterviewState": "Completed",
        "Flight": "EZY8630",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 2
    },
    {
        "InterviewId": "2ace428a-9dd8-44ae-9a85-0fedd8b2aec3",
        "InterviewEndDate": "2023-04-30 13:10:18",
        "InterviewState": "Completed",
        "Flight": "SR 6472",
        "Dest": "Hurghada (HRG)",
        "AirlineCode": "SUNDAIR",
        "InterviewerID": 2
    },
    {
        "InterviewId": "305d22d5-ff58-45fb-9615-6b46e6fcd652",
        "InterviewEndDate": "2023-04-30 13:15:37",
        "InterviewState": "Completed",
        "Flight": "SR 6472",
        "Dest": "Hurghada (HRG)",
        "AirlineCode": "SUNDAIR",
        "InterviewerID": 2
    },
    {
        "InterviewId": "1d1a8806-7d35-4747-ae8f-5045ad386e52",
        "InterviewEndDate": "2023-04-30 13:08:58",
        "InterviewState": "Completed",
        "Flight": "SR 6472",
        "Dest": "Hurghada (HRG)",
        "AirlineCode": "SUNDAIR",
        "InterviewerID": 2
    },
    {
        "InterviewId": "04652374-4193-4902-9e9b-0678603574b6",
        "InterviewEndDate": "2023-04-30 13:09:05",
        "InterviewState": "Completed",
        "Flight": "SR 6472",
        "Dest": "Hurghada (HRG)",
        "AirlineCode": "SUNDAIR",
        "InterviewerID": 2
    },
    {
        "InterviewId": "0e12fb27-d275-47ef-8f98-0237cccb96fd",
        "InterviewEndDate": "2023-04-30 13:14:19",
        "InterviewState": "Completed",
        "Flight": "SR 6472",
        "Dest": "Hurghada (HRG)",
        "AirlineCode": "SUNDAIR",
        "InterviewerID": 2
    },
    {
        "InterviewId": "2eebc929-d8c8-405f-885c-6bc70599ba43",
        "InterviewEndDate": "2023-04-30 13:22:00",
        "InterviewState": "Completed",
        "Flight": "SR 6472",
        "Dest": "Hurghada (HRG)",
        "AirlineCode": "SUNDAIR",
        "InterviewerID": 2
    },
    {
        "InterviewId": "427f3901-12d7-4050-92f7-284022d1bb60",
        "InterviewEndDate": "2023-04-30 13:53:13",
        "InterviewState": "Completed",
        "Flight": "PC  980",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 2
    },
    {
        "InterviewId": "721e2bbc-b4dc-4379-8688-1b8aff922dc3",
        "InterviewEndDate": "2023-04-30 14:27:25",
        "InterviewState": "Completed",
        "Flight": "BA  993",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 2
    },
    {
        "InterviewId": "d5f7c6c4-b508-4351-9737-17610460a2f7",
        "InterviewEndDate": "2023-04-30 14:26:26",
        "InterviewState": "Completed",
        "Flight": "BA  993",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 2
    },
    {
        "InterviewId": "0055b311-d180-40c4-ab21-238237541929",
        "InterviewEndDate": "2023-04-30 14:44:12",
        "InterviewState": "Completed",
        "Flight": "BA  993",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 2
    },
    {
        "InterviewId": "90b8e854-7fe2-4b28-9fb7-0d40c15dfed1",
        "InterviewEndDate": "2023-04-30 15:06:33",
        "InterviewState": "Completed",
        "Flight": "XQ  947",
        "Dest": "Izmir (ADB)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 2
    },
    {
        "InterviewId": "08159544-3a2d-476f-89c3-0c07cbf5f8c0",
        "InterviewEndDate": "2023-04-30 15:10:04",
        "InterviewState": "Completed",
        "Flight": "XQ  947",
        "Dest": "Izmir (ADB)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 2
    },
    {
        "InterviewId": "acf4c153-aea7-47d7-b862-5b544537ef69",
        "InterviewEndDate": "2023-04-30 15:54:32",
        "InterviewState": "Completed",
        "Flight": "AF 1235",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 2
    },
    {
        "InterviewId": "fb4b9520-f024-4986-bbdd-137dca39fe90",
        "InterviewEndDate": "2023-04-30 16:24:29",
        "InterviewState": "Completed",
        "Flight": "EJU5081",
        "Dest": "Rom (FCO)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 2
    },
    {
        "InterviewId": "2b7cbcc4-d80c-4c7a-9108-467a89631e34",
        "InterviewEndDate": "2023-04-30 16:27:57",
        "InterviewState": "Completed",
        "Flight": "EJU5081",
        "Dest": "Rom (FCO)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 2
    },
    {
        "InterviewId": "bfce0628-9861-4921-93c3-4a42887e85e9",
        "InterviewEndDate": "2023-04-30 16:30:40",
        "InterviewState": "Completed",
        "Flight": "EJU5081",
        "Dest": "Rom (FCO)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 2
    },
    {
        "InterviewId": "2fbf8c91-475d-4de6-9ca5-4971b46bf0d3",
        "InterviewEndDate": "2023-04-30 16:35:40",
        "InterviewState": "Completed",
        "Flight": "EJU5081",
        "Dest": "Rom (FCO)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 2
    },
    {
        "InterviewId": "eb7ab7c7-3765-450c-b642-0bd8f0402f89",
        "InterviewEndDate": "2023-05-01 14:17:24",
        "InterviewState": "Completed",
        "Flight": "EJU5071",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 2
    },
    {
        "InterviewId": "4ffc174a-17a9-400d-938e-1a147e818a66",
        "InterviewEndDate": "2023-05-01 14:45:01",
        "InterviewState": "Completed",
        "Flight": "EW 8070",
        "Dest": "K\u00f6ln (CGN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 2
    },
    {
        "InterviewId": "62f4e033-e5d0-4c3e-9624-17c396d5c9d1",
        "InterviewEndDate": "2023-05-01 14:45:44",
        "InterviewState": "Completed",
        "Flight": "W6 2316",
        "Dest": "Budapest (BUD)",
        "AirlineCode": "Wizz Air",
        "InterviewerID": 11
    },
    {
        "InterviewId": "99d9a51f-0a0e-4364-a805-51c1ddc34786",
        "InterviewEndDate": "2023-05-01 14:39:24",
        "InterviewState": "Completed",
        "Flight": "W6 2316",
        "Dest": "Budapest (BUD)",
        "AirlineCode": "Wizz Air",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8b8a9260-8fe6-4b48-9291-559d2cd92a0a",
        "InterviewEndDate": "2023-05-01 14:40:20",
        "InterviewState": "Completed",
        "Flight": "W6 2316",
        "Dest": "Budapest (BUD)",
        "AirlineCode": "Wizz Air",
        "InterviewerID": 11
    },
    {
        "InterviewId": "99959e4b-c56e-444c-934f-1bd96ea58be5",
        "InterviewEndDate": "2023-05-01 14:39:20",
        "InterviewState": "Completed",
        "Flight": "EW 8070",
        "Dest": "K\u00f6ln (CGN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 2
    },
    {
        "InterviewId": "1718d0d5-d503-429d-924e-2cc3816cbcd7",
        "InterviewEndDate": "2023-05-01 15:39:25",
        "InterviewState": "Completed",
        "Flight": "W6 4516",
        "Dest": "Varna (VAR)",
        "AirlineCode": "Wizz Air",
        "InterviewerID": 11
    },
    {
        "InterviewId": "9697a881-74f1-47fb-92d0-1aa855444727",
        "InterviewEndDate": "2023-05-01 14:53:34",
        "InterviewState": "Completed",
        "Flight": "W6 2316",
        "Dest": "Budapest (BUD)",
        "AirlineCode": "Wizz Air",
        "InterviewerID": 11
    },
    {
        "InterviewId": "34841f9a-4f3b-4b6d-83c9-42afd2155e9d",
        "InterviewEndDate": "2023-05-01 16:17:18",
        "InterviewState": "Completed",
        "Flight": "FR 5419",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "fcd6a40b-f565-4260-95a3-146c65762e5c",
        "InterviewEndDate": "2023-05-01 14:57:25",
        "InterviewState": "Completed",
        "Flight": "W6 2316",
        "Dest": "Budapest (BUD)",
        "AirlineCode": "Wizz Air",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d4213fc5-d947-48ce-805f-67adf4d51b16",
        "InterviewEndDate": "2023-05-01 14:56:38",
        "InterviewState": "Completed",
        "Flight": "EW 8070",
        "Dest": "K\u00f6ln (CGN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 2
    },
    {
        "InterviewId": "f7431115-a542-472f-b5e5-2651d91dc7b5",
        "InterviewEndDate": "2023-05-01 15:30:30",
        "InterviewState": "Completed",
        "Flight": "EJU5331",
        "Dest": "Porto (OPO)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 2
    },
    {
        "InterviewId": "6526400b-4a26-41da-ab53-6495354e8bb3",
        "InterviewEndDate": "2023-05-01 15:29:40",
        "InterviewState": "Completed",
        "Flight": "EJU5331",
        "Dest": "Porto (OPO)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 2
    },
    {
        "InterviewId": "04a3b250-3d09-4f09-a947-701f0fb52c79",
        "InterviewEndDate": "2023-05-01 15:54:14",
        "InterviewState": "Completed",
        "Flight": "W6 4516",
        "Dest": "Varna (VAR)",
        "AirlineCode": "Wizz Air",
        "InterviewerID": 11
    },
    {
        "InterviewId": "aca4d5e7-457b-438d-82c3-190c708316e9",
        "InterviewEndDate": "2023-05-01 16:11:34",
        "InterviewState": "Completed",
        "Flight": "EJU7173",
        "Dest": "Barcelona (BCN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 2
    },
    {
        "InterviewId": "d02d6297-6750-45e1-8ae4-22474dd73d0a",
        "InterviewEndDate": "2023-05-01 16:10:45",
        "InterviewState": "Completed",
        "Flight": "EJU7173",
        "Dest": "Barcelona (BCN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 2
    },
    {
        "InterviewId": "3d3de4ee-8de3-43e1-86b0-48a492f04723",
        "InterviewEndDate": "2023-05-01 16:09:29",
        "InterviewState": "Completed",
        "Flight": "EJU7173",
        "Dest": "Barcelona (BCN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 2
    },
    {
        "InterviewId": "e5d71f22-b2f1-4d7a-9b0a-0173b1b9a4b3",
        "InterviewEndDate": "2023-05-01 16:17:23",
        "InterviewState": "Completed",
        "Flight": "FR 5419",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "5e3b598d-aa62-4967-b5cc-5c00566c9fe3",
        "InterviewEndDate": "2023-05-01 16:19:43",
        "InterviewState": "Completed",
        "Flight": "FR 5419",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ecb2ef44-43d9-4cc7-96f6-1b96a1ead194",
        "InterviewEndDate": "2023-05-01 16:13:35",
        "InterviewState": "Completed",
        "Flight": "FR 5419",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f59276ba-4e3e-47c8-970c-2a97f89c186d",
        "InterviewEndDate": "2023-05-01 16:24:44",
        "InterviewState": "Completed",
        "Flight": "EJU7173",
        "Dest": "Barcelona (BCN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 2
    },
    {
        "InterviewId": "42c07afe-64de-4436-ae3b-222805899693",
        "InterviewEndDate": "2023-05-01 16:25:07",
        "InterviewState": "Completed",
        "Flight": "EJU7173",
        "Dest": "Barcelona (BCN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 2
    },
    {
        "InterviewId": "50db6c52-e37d-4a77-8fb2-2ff87b922749",
        "InterviewEndDate": "2023-05-01 16:22:12",
        "InterviewState": "Completed",
        "Flight": "EJU7173",
        "Dest": "Barcelona (BCN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 2
    },
    {
        "InterviewId": "be5e3d18-cc34-4f62-90c4-6883e4cb0054",
        "InterviewEndDate": "2023-05-01 16:26:30",
        "InterviewState": "Completed",
        "Flight": "FR 3670",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "88b3114d-93b3-45fe-9721-415851ce6ba6",
        "InterviewEndDate": "2023-05-01 18:21:01",
        "InterviewState": "Completed",
        "Flight": "LH  197",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "1191309b-fc1f-4fe0-a6b5-54c1c2e70145",
        "InterviewEndDate": "2023-05-01 17:59:08",
        "InterviewState": "Completed",
        "Flight": "LH  197",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "a9666a45-66c6-4971-bb02-667f6d4a66c3",
        "InterviewEndDate": "2023-05-01 17:09:13",
        "InterviewState": "Completed",
        "Flight": "EW 2005",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 2
    },
    {
        "InterviewId": "7b613593-02ef-43a6-a15e-1c6dad834398",
        "InterviewEndDate": "2023-05-01 18:22:27",
        "InterviewState": "Completed",
        "Flight": "LH  197",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "37768550-7917-4f5b-aaff-243b3f67a148",
        "InterviewEndDate": "2023-05-01 17:12:40",
        "InterviewState": "Completed",
        "Flight": "EW 2005",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 2
    },
    {
        "InterviewId": "12228f1c-c962-44c6-855a-536d72e61087",
        "InterviewEndDate": "2023-05-01 17:05:25",
        "InterviewState": "Completed",
        "Flight": "EW 2005",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 2
    },
    {
        "InterviewId": "6582f8b1-91da-4a39-83cc-50cc1e8b049e",
        "InterviewEndDate": "2023-05-01 17:05:38",
        "InterviewState": "Completed",
        "Flight": "EW 2005",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 2
    },
    {
        "InterviewId": "0a5494d2-57d9-47b7-ad1d-1735e06f2975",
        "InterviewEndDate": "2023-05-01 17:30:12",
        "InterviewState": "Completed",
        "Flight": "EW 8594",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 2
    },
    {
        "InterviewId": "df940eaf-0e7b-4031-859d-362d0c551077",
        "InterviewEndDate": "2023-05-01 17:36:00",
        "InterviewState": "Completed",
        "Flight": "EW 8594",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 2
    },
    {
        "InterviewId": "7e58c6f2-ce64-4c2a-9e31-5343880e0958",
        "InterviewEndDate": "2023-05-01 18:00:55",
        "InterviewState": "Completed",
        "Flight": "EJU5053",
        "Dest": "Neapel (NAP)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 2
    },
    {
        "InterviewId": "b18b6bb8-f162-4ed4-b02c-02476bc4521c",
        "InterviewEndDate": "2023-05-01 18:13:50",
        "InterviewState": "Completed",
        "Flight": "LH  197",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "5183a15d-a56f-4341-91db-0ef1409c336a",
        "InterviewEndDate": "2023-05-01 18:45:19",
        "InterviewState": "Completed",
        "Flight": "EW 8006",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 2
    },
    {
        "InterviewId": "78121780-29b1-43ad-8653-5bd84ecf3a36",
        "InterviewEndDate": "2023-05-01 18:40:23",
        "InterviewState": "Completed",
        "Flight": "EW 8006",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 2
    },
    {
        "InterviewId": "9bfd5362-6d8f-448c-bd8c-205e2ad956e0",
        "InterviewEndDate": "2023-05-01 18:44:17",
        "InterviewState": "Completed",
        "Flight": "OS  236",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "cfe82c01-b8dc-46e7-a9a6-2c5d6d217fa3",
        "InterviewEndDate": "2023-05-01 18:36:22",
        "InterviewState": "Completed",
        "Flight": "OS  234",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "a713cd89-b565-4ce1-be73-51347d52594f",
        "InterviewEndDate": "2023-05-01 19:03:36",
        "InterviewState": "Completed",
        "Flight": "EJU5247",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 2
    },
    {
        "InterviewId": "cdc948de-9174-40fb-9652-18d42a848eb3",
        "InterviewEndDate": "2023-05-01 19:12:57",
        "InterviewState": "Completed",
        "Flight": "EJU5247",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 2
    },
    {
        "InterviewId": "8de9524c-56bb-4687-9246-152ce54efd06",
        "InterviewEndDate": "2023-05-01 19:09:23",
        "InterviewState": "Completed",
        "Flight": "FR  177",
        "Dest": "London (STN)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "461e838e-5c47-4900-a10c-5b282d931b72",
        "InterviewEndDate": "2023-05-01 19:12:58",
        "InterviewState": "Completed",
        "Flight": "FR  177",
        "Dest": "London (STN)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f2f2c0b6-580c-4553-bbc2-5dd68a629fc3",
        "InterviewEndDate": "2023-05-01 19:37:38",
        "InterviewState": "Completed",
        "Flight": "AY 1436",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 2
    },
    {
        "InterviewId": "47c9d935-cc2e-47cf-b7be-5e42ae883f08",
        "InterviewEndDate": "2023-05-01 19:40:32",
        "InterviewState": "Completed",
        "Flight": "AY 1436",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 2
    },
    {
        "InterviewId": "77198f9a-f14e-40ec-bf26-4138fb23459c",
        "InterviewEndDate": "2023-05-01 19:49:57",
        "InterviewState": "Completed",
        "Flight": "LX  983",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 11
    },
    {
        "InterviewId": "89b36907-83e6-4af7-9441-4e75435ec0ee",
        "InterviewEndDate": "2023-05-01 20:02:36",
        "InterviewState": "Completed",
        "Flight": "EJU5267",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 2
    },
    {
        "InterviewId": "8d385a22-b53d-4193-873c-40a6993d9724",
        "InterviewEndDate": "2023-05-01 20:06:15",
        "InterviewState": "Completed",
        "Flight": "EJU5267",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 2
    },
    {
        "InterviewId": "d75f62c2-4c30-4227-84f5-5aaa0ed09838",
        "InterviewEndDate": "2023-05-01 20:36:18",
        "InterviewState": "Completed",
        "Flight": "EW 8212",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 2
    },
    {
        "InterviewId": "911c116b-6855-4e15-83ce-7021d0d2080a",
        "InterviewEndDate": "2023-05-01 20:38:43",
        "InterviewState": "Completed",
        "Flight": "EW 8212",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 2
    },
    {
        "InterviewId": "e59e9ed8-762f-459a-a05c-6d153539817c",
        "InterviewEndDate": "2023-05-02 13:38:49",
        "InterviewState": "Completed",
        "Flight": "EJU5213",
        "Dest": "Split (SPU)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "81df34d5-3361-41a5-b90c-19bb734ecc66",
        "InterviewEndDate": "2023-05-02 13:43:49",
        "InterviewState": "Completed",
        "Flight": "EJU5213",
        "Dest": "Split (SPU)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2be6fac0-8d2e-448d-9815-4c11256b21fd",
        "InterviewEndDate": "2023-05-02 13:35:21",
        "InterviewState": "Completed",
        "Flight": "EJU5213",
        "Dest": "Split (SPU)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "a392c8e1-d80d-43c4-8073-05480eeed0ff",
        "InterviewEndDate": "2023-05-02 13:37:10",
        "InterviewState": "Completed",
        "Flight": "EJU5213",
        "Dest": "Split (SPU)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "df9fd0c6-6da4-489f-9d96-2b5bd3de3b45",
        "InterviewEndDate": "2023-05-02 13:31:33",
        "InterviewState": "Completed",
        "Flight": "EJU5213",
        "Dest": "Split (SPU)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "0b6c748a-1062-447d-ae72-153140c71a07",
        "InterviewEndDate": "2023-05-02 13:48:20",
        "InterviewState": "Completed",
        "Flight": "EJU5213",
        "Dest": "Split (SPU)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "564d210d-e095-4349-a692-4112197bd667",
        "InterviewEndDate": "2023-05-02 14:24:22",
        "InterviewState": "Completed",
        "Flight": "KL 1826",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "4ef1e1be-d0b6-42c6-91d4-3d6d25f619f0",
        "InterviewEndDate": "2023-05-02 14:37:55",
        "InterviewState": "Completed",
        "Flight": "KL 1826",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "e4a2f6a6-eeec-4207-8ca9-1d56d9c90d8d",
        "InterviewEndDate": "2023-05-02 15:44:04",
        "InterviewState": "Completed",
        "Flight": "EW 9043",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "62cb02e2-bf8f-4c88-9f2a-0b500758f670",
        "InterviewEndDate": "2023-05-02 15:53:02",
        "InterviewState": "Completed",
        "Flight": "EW 9043",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "412557e5-32fb-45a0-8729-430d30ed53d8",
        "InterviewEndDate": "2023-05-02 15:51:13",
        "InterviewState": "Completed",
        "Flight": "EW 9043",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "3646b07b-ee5e-46fc-9703-2ab6a700a81f",
        "InterviewEndDate": "2023-05-02 16:37:08",
        "InterviewState": "Completed",
        "Flight": "EJU5247",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f25e8d60-bdcf-44c6-80a4-6af170158d4f",
        "InterviewEndDate": "2023-05-02 16:35:18",
        "InterviewState": "Completed",
        "Flight": "EJU5247",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8a3be505-009b-4bbc-8fdc-16b217f16817",
        "InterviewEndDate": "2023-05-02 16:38:01",
        "InterviewState": "Completed",
        "Flight": "EJU5247",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "df7b230b-a23c-48a7-b6cb-30b1a7cf43db",
        "InterviewEndDate": "2023-05-02 17:41:41",
        "InterviewState": "Completed",
        "Flight": "KL 1830",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "31b82173-142b-434f-8867-654995a5f5a6",
        "InterviewEndDate": "2023-05-02 17:22:56",
        "InterviewState": "Completed",
        "Flight": "KL 1830",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "3aa62c07-84d3-4c71-9b82-4f57ebefc4bd",
        "InterviewEndDate": "2023-05-02 17:26:03",
        "InterviewState": "Completed",
        "Flight": "KL 1830",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "e71a2ffc-3457-43fc-a92d-2c8c132b3959",
        "InterviewEndDate": "2023-05-02 18:18:44",
        "InterviewState": "Completed",
        "Flight": "EW 8054",
        "Dest": "K\u00f6ln (CGN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "547e8473-07a4-4e53-935b-36b5104cfabe",
        "InterviewEndDate": "2023-05-02 18:15:09",
        "InterviewState": "Completed",
        "Flight": "EW 8054",
        "Dest": "K\u00f6ln (CGN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "76a7417f-10a9-4502-8b6e-49daabf2a161",
        "InterviewEndDate": "2023-05-02 19:25:15",
        "InterviewState": "Completed",
        "Flight": "EJU4632",
        "Dest": "Paris (CDG)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "0bd49625-817e-457b-b958-3898643e6003",
        "InterviewEndDate": "2023-05-02 19:19:06",
        "InterviewState": "Completed",
        "Flight": "EJU4632",
        "Dest": "Paris (CDG)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "278af05d-87e1-440e-9535-4f896aec5ae2",
        "InterviewEndDate": "2023-05-02 19:54:56",
        "InterviewState": "Completed",
        "Flight": "EJU4632",
        "Dest": "Paris (CDG)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "0dc88a69-50fd-419b-96d1-4b8d7bce5987",
        "InterviewEndDate": "2023-05-06 11:12:46",
        "InterviewState": "Completed",
        "Flight": "LH 1935",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 998
    },
    {
        "InterviewId": "098cae99-944e-473d-9688-1f3715ad566b",
        "InterviewEndDate": "2023-05-06 11:07:11",
        "InterviewState": "Completed",
        "Flight": "LH 1935",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b87359ce-544a-458b-9ce6-483f97971aec",
        "InterviewEndDate": "2023-05-06 11:19:35",
        "InterviewState": "Completed",
        "Flight": "LH 1935",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 998
    },
    {
        "InterviewId": "f2d500a5-169c-4481-8fb7-1fbbed541784",
        "InterviewEndDate": "2023-05-06 12:32:24",
        "InterviewState": "Completed",
        "Flight": "TK 7729",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "7378620c-53a2-42cd-ac9c-574e41a23fe2",
        "InterviewEndDate": "2023-05-06 12:00:35",
        "InterviewState": "Completed",
        "Flight": "SN 2582",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "1c58a453-583d-40a3-a7d4-06676c68fe25",
        "InterviewEndDate": "2023-05-06 12:26:05",
        "InterviewState": "Completed",
        "Flight": "TK 7729",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "2eb18496-0205-4123-b2dc-1dcdf40bb748",
        "InterviewEndDate": "2023-05-12 15:35:48",
        "InterviewState": "Completed",
        "Flight": "XQ  947",
        "Dest": "Izmir (ADB)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 12
    },
    {
        "InterviewId": "e5ea21b0-1d61-440b-a388-08af51f99b94",
        "InterviewEndDate": "2023-05-12 15:20:24",
        "InterviewState": "Completed",
        "Flight": "XQ  947",
        "Dest": "Izmir (ADB)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 12
    },
    {
        "InterviewId": "29ee657d-8730-4621-9f49-31e8da216c64",
        "InterviewEndDate": "2023-05-08 06:41:08",
        "InterviewState": "Completed",
        "Flight": "EW 8040",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "e6512987-5d89-49d3-aa33-4dd3addf34e6",
        "InterviewEndDate": "2023-05-08 06:51:07",
        "InterviewState": "Completed",
        "Flight": "EW 8040",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "5130036b-3cbb-4c97-8fa7-39bf2b372c03",
        "InterviewEndDate": "2023-05-08 06:50:12",
        "InterviewState": "Completed",
        "Flight": "EW 8040",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "0c818ac7-8e64-4b0a-859c-6f47c78160e1",
        "InterviewEndDate": "2023-05-08 06:44:46",
        "InterviewState": "Completed",
        "Flight": "EW 8040",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2eecafc5-1caf-43a6-b770-70c081254da3",
        "InterviewEndDate": "2023-05-08 06:50:49",
        "InterviewState": "Completed",
        "Flight": "EW 8040",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8707a176-66b3-4486-a707-2bbe3605d643",
        "InterviewEndDate": "2023-05-08 07:22:29",
        "InterviewState": "Completed",
        "Flight": "EJU5147",
        "Dest": "Paris (CDG)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c683312b-c00c-4893-8737-35d8428aed36",
        "InterviewEndDate": "2023-05-08 07:28:23",
        "InterviewState": "Completed",
        "Flight": "EJU5147",
        "Dest": "Paris (CDG)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "3392dce4-a25f-472e-a557-15c0d5c88ea9",
        "InterviewEndDate": "2023-05-08 07:33:13",
        "InterviewState": "Completed",
        "Flight": "EJU5147",
        "Dest": "Paris (CDG)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ca66155c-9a09-4602-98d6-575756741dba",
        "InterviewEndDate": "2023-05-08 08:21:06",
        "InterviewState": "Completed",
        "Flight": "EW 2003",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "7e783fea-f80e-45cb-a758-3b63449192e5",
        "InterviewEndDate": "2023-05-08 08:26:24",
        "InterviewState": "Completed",
        "Flight": "EW 2003",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "9a456dcf-602b-4acb-912b-6ea0748b77ac",
        "InterviewEndDate": "2023-05-08 09:23:30",
        "InterviewState": "Completed",
        "Flight": "EJU5145",
        "Dest": "Nizza (NCE)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2668f726-6d0b-4f66-adb4-44e853325ab3",
        "InterviewEndDate": "2023-05-08 10:18:25",
        "InterviewState": "Completed",
        "Flight": "EJU5145",
        "Dest": "Nizza (NCE)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "3722bfeb-2f37-49f3-8d02-15179df274f8",
        "InterviewEndDate": "2023-05-08 11:37:38",
        "InterviewState": "Completed",
        "Flight": "I2 3677",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 11
    },
    {
        "InterviewId": "adc19257-6ff9-44de-825a-12c8f175bcba",
        "InterviewEndDate": "2023-05-08 12:17:23",
        "InterviewState": "Completed",
        "Flight": "OG  701",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "PLAY",
        "InterviewerID": 11
    },
    {
        "InterviewId": "3d71c117-91b9-4b40-a455-389ea2ece587",
        "InterviewEndDate": "2023-05-08 12:10:08",
        "InterviewState": "Completed",
        "Flight": "OG  701",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "PLAY",
        "InterviewerID": 11
    },
    {
        "InterviewId": "192ee6d5-f21a-4549-93d2-1a29b1d2b723",
        "InterviewEndDate": "2023-05-08 12:13:21",
        "InterviewState": "Completed",
        "Flight": "OG  701",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "PLAY",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ff20f88f-9dc7-4e02-bd67-3a024fc85021",
        "InterviewEndDate": "2023-05-09 07:05:19",
        "InterviewState": "Completed",
        "Flight": "EJU5261",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d4261de9-b2bb-458e-b63e-44080cc77d6f",
        "InterviewEndDate": "2023-05-08 13:03:28",
        "InterviewState": "Completed",
        "Flight": "LH 1937",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "bea4e63d-3eed-4380-8556-453a91092096",
        "InterviewEndDate": "2023-05-08 12:54:40",
        "InterviewState": "Completed",
        "Flight": "LH 1937",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "1af938eb-a872-4f46-a803-09278cfc6952",
        "InterviewEndDate": "2023-05-09 07:04:06",
        "InterviewState": "Completed",
        "Flight": "EJU5261",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "549a6725-662d-4b00-b371-2dd9bfcf7dea",
        "InterviewEndDate": "2023-05-08 20:20:55",
        "InterviewState": "Completed",
        "Flight": "EJU7336",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "4d8c87da-a479-4e7c-82d6-6f251d4b18e2",
        "InterviewEndDate": "2023-05-09 07:09:41",
        "InterviewState": "Completed",
        "Flight": "EJU5261",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "0487f5dc-bcff-462c-b938-43bc228be052",
        "InterviewEndDate": "2023-05-09 08:02:06",
        "InterviewState": "Completed",
        "Flight": "EJU5005",
        "Dest": "Korfu (CFU)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "6e1719b6-85a8-4650-b001-0a033e490217",
        "InterviewEndDate": "2023-05-09 07:54:40",
        "InterviewState": "Completed",
        "Flight": "EJU5005",
        "Dest": "Korfu (CFU)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d07141c6-818e-4ce3-b4b8-10fe285729c2",
        "InterviewEndDate": "2023-05-09 07:58:07",
        "InterviewState": "Completed",
        "Flight": "EJU5005",
        "Dest": "Korfu (CFU)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "41584cb9-5035-4c8c-998f-54ab95bb3d45",
        "InterviewEndDate": "2023-05-09 07:22:59",
        "InterviewState": "Completed",
        "Flight": "EJU5079",
        "Dest": "Rom (FCO)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "a9e94f6e-8184-41e4-b562-1d2df6b9f23c",
        "InterviewEndDate": "2023-05-09 08:00:38",
        "InterviewState": "Completed",
        "Flight": "EJU5005",
        "Dest": "Korfu (CFU)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "1ea952ff-3d9d-48ec-bc04-3436d026274d",
        "InterviewEndDate": "2023-05-09 08:46:08",
        "InterviewState": "Completed",
        "Flight": "EW 8342",
        "Dest": "Salzburg (SZG)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "4ed2d7d6-94c8-4f0a-9dc3-3d303327130d",
        "InterviewEndDate": "2023-05-09 11:31:12",
        "InterviewState": "Completed",
        "Flight": "I2 3677",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 11
    },
    {
        "InterviewId": "7ac279a9-4d22-4f41-8c2f-44030dd1046b",
        "InterviewEndDate": "2023-05-09 11:29:08",
        "InterviewState": "Completed",
        "Flight": "I2 3677",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c2caa03c-a7f0-4b93-adac-0a5203fcfc26",
        "InterviewEndDate": "2023-05-09 09:19:57",
        "InterviewState": "Completed",
        "Flight": "KL 1822",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "9997539d-887e-422a-9a32-68a9e2a225de",
        "InterviewEndDate": "2023-05-09 12:36:21",
        "InterviewState": "Completed",
        "Flight": "DY 1123",
        "Dest": "Bergen (BGO)",
        "AirlineCode": "Norwegian Air Shuttle AOC",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2fe752af-0d1e-4cd1-afa2-35ccd1620c4a",
        "InterviewEndDate": "2023-05-09 12:46:17",
        "InterviewState": "Completed",
        "Flight": "DY 1123",
        "Dest": "Bergen (BGO)",
        "AirlineCode": "Norwegian Air Shuttle AOC",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f69d5c1d-b1ef-48b6-95a0-1f0669e03026",
        "InterviewEndDate": "2023-05-09 12:36:01",
        "InterviewState": "Completed",
        "Flight": "DY 1123",
        "Dest": "Bergen (BGO)",
        "AirlineCode": "Norwegian Air Shuttle AOC",
        "InterviewerID": 11
    },
    {
        "InterviewId": "28f254cf-c4d1-4b51-abd2-3cb6c381b25a",
        "InterviewEndDate": "2023-05-10 15:55:05",
        "InterviewState": "Completed",
        "Flight": "EW 8046",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "6fc179ac-2fad-43ea-9d07-1df5e4084ee4",
        "InterviewEndDate": "2023-05-10 16:30:25",
        "InterviewState": "Completed",
        "Flight": "EW 2019",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "9e671945-a716-4127-b81d-0eea619725bf",
        "InterviewEndDate": "2023-05-10 16:45:52",
        "InterviewState": "Completed",
        "Flight": "EW 2019",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f94845ef-ef69-4ad3-adf3-1732ad120095",
        "InterviewEndDate": "2023-05-10 17:36:34",
        "InterviewState": "Completed",
        "Flight": "KL 1830",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "363872fd-c5e0-4608-8792-2e7522cf42cc",
        "InterviewEndDate": "2023-05-10 17:21:18",
        "InterviewState": "Completed",
        "Flight": "KL 1830",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "a7877f82-1abc-4d11-9bab-5da85f7259d5",
        "InterviewEndDate": "2023-05-10 18:30:37",
        "InterviewState": "Completed",
        "Flight": "OS  234",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "26ba3d4f-26dd-413f-a031-2bfca3cd25dd",
        "InterviewEndDate": "2023-05-10 19:46:00",
        "InterviewState": "Completed",
        "Flight": "I2 3671",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 11
    },
    {
        "InterviewId": "841ebf1d-6362-4c7a-a93d-282ef117d7ae",
        "InterviewEndDate": "2023-05-10 18:30:40",
        "InterviewState": "Completed",
        "Flight": "OS  234",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "38cefdfd-29fd-4e21-9b18-550b0b64f3ff",
        "InterviewEndDate": "2023-05-10 19:43:50",
        "InterviewState": "Completed",
        "Flight": "I2 3671",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c6971bb6-5b43-4654-8295-571c8fa4cc04",
        "InterviewEndDate": "2023-05-10 19:47:32",
        "InterviewState": "Completed",
        "Flight": "I2 3671",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 11
    },
    {
        "InterviewId": "e8624ed9-ef5d-4c6d-b618-5ef4f6b15692",
        "InterviewEndDate": "2023-05-10 20:27:09",
        "InterviewState": "Completed",
        "Flight": "EW 8212",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "fa36b664-338e-4631-9975-08c72436392c",
        "InterviewEndDate": "2023-05-10 20:33:25",
        "InterviewState": "Completed",
        "Flight": "EW 8212",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ce42c50b-2335-42e0-8af4-65f295091fa5",
        "InterviewEndDate": "2023-05-10 21:05:45",
        "InterviewState": "Completed",
        "Flight": "EZS1190",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d2cd3249-71c1-478a-b171-46cb55e69be7",
        "InterviewEndDate": "2023-05-10 20:39:38",
        "InterviewState": "Completed",
        "Flight": "EW 8212",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "3269360e-5a86-4721-b1f2-61ec1d2dccde",
        "InterviewEndDate": "2023-05-10 20:40:15",
        "InterviewState": "Completed",
        "Flight": "EW 8212",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "722f1ba4-10fd-4d08-a8c6-29d150e12684",
        "InterviewEndDate": "2023-05-10 22:18:11",
        "InterviewState": "Completed",
        "Flight": "EJU7338",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f9451d36-6619-482c-ad74-3478e28d55f9",
        "InterviewEndDate": "2023-05-10 21:04:45",
        "InterviewState": "Completed",
        "Flight": "EZS1190",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 11
    },
    {
        "InterviewId": "1c4a59a3-7354-4a8f-b868-0b66e60a8dfd",
        "InterviewEndDate": "2023-05-10 21:01:02",
        "InterviewState": "Completed",
        "Flight": "EZS1190",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 11
    },
    {
        "InterviewId": "07ef3e45-feac-446b-8e29-198a1a0e48a6",
        "InterviewEndDate": "2023-05-10 22:23:37",
        "InterviewState": "Completed",
        "Flight": "EJU7338",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "caa2be1e-9092-4a6e-80cc-436803277742",
        "InterviewEndDate": "2023-05-12 14:42:55",
        "InterviewState": "Completed",
        "Flight": "EJU5265",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "802523ef-c336-49f6-b84a-0f44888d9b2d",
        "InterviewEndDate": "2023-05-11 15:24:15",
        "InterviewState": "Completed",
        "Flight": "BA  993",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 2
    },
    {
        "InterviewId": "8eb4b2eb-b558-4fbd-9346-48a1c193aaa6",
        "InterviewEndDate": "2023-05-11 15:23:17",
        "InterviewState": "Completed",
        "Flight": "BA  993",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 2
    },
    {
        "InterviewId": "9a6d4aa2-052d-4323-9fdd-72177e10a623",
        "InterviewEndDate": "2023-05-11 15:27:32",
        "InterviewState": "Completed",
        "Flight": "BA  993",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 2
    },
    {
        "InterviewId": "79f284c4-ce8d-41ff-b245-0564ea92bae8",
        "InterviewEndDate": "2023-05-11 15:52:58",
        "InterviewState": "Completed",
        "Flight": "MS  732",
        "Dest": "Kairo (CAI)",
        "AirlineCode": "Egypt Air",
        "InterviewerID": 2
    },
    {
        "InterviewId": "a27175f4-8abf-4e5b-9c98-2e4a7c2b7fe5",
        "InterviewEndDate": "2023-05-11 16:46:18",
        "InterviewState": "Completed",
        "Flight": "EZY3262",
        "Dest": "Edinburgh (EDI)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 2
    },
    {
        "InterviewId": "0a48163b-b319-43d5-a9f4-5e1da37c0b28",
        "InterviewEndDate": "2023-05-11 17:31:11",
        "InterviewState": "Completed",
        "Flight": "EJU5079",
        "Dest": "Rom (FCO)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 2
    },
    {
        "InterviewId": "d4c6006e-f25b-4975-8005-5321fc06352b",
        "InterviewEndDate": "2023-05-11 17:27:53",
        "InterviewState": "Completed",
        "Flight": "EJU5079",
        "Dest": "Rom (FCO)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 2
    },
    {
        "InterviewId": "7e1fca1c-5a4b-49cd-b7e8-4addb0e58705",
        "InterviewEndDate": "2023-05-11 19:24:40",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 2
    },
    {
        "InterviewId": "5ee48ee6-8c4f-4922-80be-689799280eed",
        "InterviewEndDate": "2023-05-11 19:22:04",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 2
    },
    {
        "InterviewId": "098910c1-5e5f-4a27-855e-69063907d59a",
        "InterviewEndDate": "2023-05-11 20:05:01",
        "InterviewState": "Completed",
        "Flight": "EJU5267",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 2
    },
    {
        "InterviewId": "ba345ba7-14f4-4c60-9a06-2786691d1979",
        "InterviewEndDate": "2023-05-11 19:59:32",
        "InterviewState": "Completed",
        "Flight": "EJU5267",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 2
    },
    {
        "InterviewId": "71d02b87-ef1c-4179-9d5c-4a3b8cff4856",
        "InterviewEndDate": "2023-05-11 20:03:09",
        "InterviewState": "Completed",
        "Flight": "EJU5267",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 2
    },
    {
        "InterviewId": "43e44c70-174b-4d77-85d6-02b53e473c80",
        "InterviewEndDate": "2023-05-11 20:22:09",
        "InterviewState": "Completed",
        "Flight": "EW 2005",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 2
    },
    {
        "InterviewId": "3e7a7544-ba10-4a4e-ad95-61a27191f9c4",
        "InterviewEndDate": "2023-05-11 20:22:19",
        "InterviewState": "Completed",
        "Flight": "EW 2005",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 2
    },
    {
        "InterviewId": "140b61ac-30d9-4b59-83dd-5ae1bdc1f60d",
        "InterviewEndDate": "2023-05-11 20:25:03",
        "InterviewState": "Completed",
        "Flight": "EW 2005",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 2
    },
    {
        "InterviewId": "a5423f0e-52e5-416e-babb-5146fac7e433",
        "InterviewEndDate": "2023-05-11 21:09:28",
        "InterviewState": "Completed",
        "Flight": "JU  355",
        "Dest": "Belgrad (BEG)",
        "AirlineCode": "Air Serbia",
        "InterviewerID": 2
    },
    {
        "InterviewId": "784fc7b1-66d0-40a2-9e51-5a9f0d3e9194",
        "InterviewEndDate": "2023-05-11 21:10:42",
        "InterviewState": "Completed",
        "Flight": "JU  355",
        "Dest": "Belgrad (BEG)",
        "AirlineCode": "Air Serbia",
        "InterviewerID": 2
    },
    {
        "InterviewId": "fa511469-4cc2-4626-92ec-4f6a4fae3b90",
        "InterviewEndDate": "2023-05-11 21:38:53",
        "InterviewState": "Completed",
        "Flight": "EI  337",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 2
    },
    {
        "InterviewId": "80d11620-502d-427a-86f3-04b283b58e3e",
        "InterviewEndDate": "2023-05-11 21:41:27",
        "InterviewState": "Completed",
        "Flight": "EI  337",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 2
    },
    {
        "InterviewId": "53a2caad-40d6-43b4-85c5-71613e74293c",
        "InterviewEndDate": "2023-05-12 14:52:42",
        "InterviewState": "Completed",
        "Flight": "EJU5265",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 1
    },
    {
        "InterviewId": "f668257e-9944-4691-a1f7-6d7cb456d652",
        "InterviewEndDate": "2023-05-12 15:28:24",
        "InterviewState": "Completed",
        "Flight": "EJU5053",
        "Dest": "Neapel (NAP)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "4e926d92-4e13-4a27-82ab-36b498320895",
        "InterviewEndDate": "2023-05-12 15:33:02",
        "InterviewState": "Completed",
        "Flight": "EJU5053",
        "Dest": "Neapel (NAP)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "1205888e-3cda-4fee-8b32-31fd1e1b8c31",
        "InterviewEndDate": "2023-05-12 15:33:10",
        "InterviewState": "Completed",
        "Flight": "EJU5053",
        "Dest": "Neapel (NAP)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c0ac66a0-4b47-4361-bd73-589c6df4b791",
        "InterviewEndDate": "2023-05-12 15:21:20",
        "InterviewState": "Completed",
        "Flight": "XQ  947",
        "Dest": "Izmir (ADB)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 12
    },
    {
        "InterviewId": "46824263-8bf8-41ca-ab45-415770f7563d",
        "InterviewEndDate": "2023-05-12 16:16:20",
        "InterviewState": "Completed",
        "Flight": "BT  922",
        "Dest": "Vilnius (VNO)",
        "AirlineCode": "Air Baltic",
        "InterviewerID": 12
    },
    {
        "InterviewId": "aa7faaaa-d8fb-4127-9686-0d7196afa275",
        "InterviewEndDate": "2023-05-12 16:06:27",
        "InterviewState": "Completed",
        "Flight": "BT  922",
        "Dest": "Vilnius (VNO)",
        "AirlineCode": "Air Baltic",
        "InterviewerID": 12
    },
    {
        "InterviewId": "f005f85a-6667-4fd4-ae94-039f30304e65",
        "InterviewEndDate": "2023-05-12 16:08:58",
        "InterviewState": "Completed",
        "Flight": "BT  922",
        "Dest": "Vilnius (VNO)",
        "AirlineCode": "Air Baltic",
        "InterviewerID": 12
    },
    {
        "InterviewId": "468bc558-c7d0-47bc-bb5f-2dd3aa32b9a7",
        "InterviewEndDate": "2023-05-12 16:26:12",
        "InterviewState": "Completed",
        "Flight": "EW 8044",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "a33ac4cc-4c71-4c3e-8e28-2c55a645a717",
        "InterviewEndDate": "2023-05-12 16:24:52",
        "InterviewState": "Completed",
        "Flight": "EW 8044",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2169ad2d-6f37-44a5-80a9-214d3665cf1a",
        "InterviewEndDate": "2023-05-12 16:54:48",
        "InterviewState": "Completed",
        "Flight": "A3  513",
        "Dest": "Thessaloniki (SKG)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "6aed36ad-5635-4752-ae9b-264398110fc6",
        "InterviewEndDate": "2023-05-12 16:36:42",
        "InterviewState": "Completed",
        "Flight": "EW 8044",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "238f4a23-31b7-43ba-b63a-0f77237466db",
        "InterviewEndDate": "2023-05-12 17:19:54",
        "InterviewState": "Completed",
        "Flight": "EJU5153",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "6ee78f97-f93a-4278-bc1b-05389b19ee7f",
        "InterviewEndDate": "2023-05-12 17:19:59",
        "InterviewState": "Completed",
        "Flight": "EJU5153",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "84777540-5b4f-44d5-adc2-0e9c4531d309",
        "InterviewEndDate": "2023-05-12 17:23:53",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "7a76a630-9ec5-4795-b511-1a7f1970afea",
        "InterviewEndDate": "2023-05-12 17:33:38",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "2f411b2c-f3b1-4178-9cff-48c75f4e56a9",
        "InterviewEndDate": "2023-05-12 18:08:46",
        "InterviewState": "Completed",
        "Flight": "AY 1438",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "fa9c8582-3bf4-48d2-adc6-5fa73cc8ce27",
        "InterviewEndDate": "2023-05-12 18:41:43",
        "InterviewState": "Completed",
        "Flight": "EZY3262",
        "Dest": "Edinburgh (EDI)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 12
    },
    {
        "InterviewId": "c15439c6-6884-4a68-889e-147e8ed9cb91",
        "InterviewEndDate": "2023-05-12 18:06:35",
        "InterviewState": "Completed",
        "Flight": "AY 1438",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "dc3854cf-4ba3-4637-b2e4-560cb81aa887",
        "InterviewEndDate": "2023-05-12 18:58:58",
        "InterviewState": "Completed",
        "Flight": "XQ  661",
        "Dest": "Antalya (AYT)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 12
    },
    {
        "InterviewId": "57f6dfca-0e9e-479e-b21d-1a7338e708a3",
        "InterviewEndDate": "2023-05-12 19:32:44",
        "InterviewState": "Completed",
        "Flight": "EJU5287",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "09843f1b-8f47-4d93-b1b3-65c852da1ba7",
        "InterviewEndDate": "2023-05-12 18:23:57",
        "InterviewState": "Completed",
        "Flight": "EZY3262",
        "Dest": "Edinburgh (EDI)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 12
    },
    {
        "InterviewId": "9abeb281-50fb-47d7-961e-47d24df1d2a0",
        "InterviewEndDate": "2023-05-12 18:59:40",
        "InterviewState": "Completed",
        "Flight": "XQ  661",
        "Dest": "Antalya (AYT)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 12
    },
    {
        "InterviewId": "94f9250a-dd54-4eee-878c-2465a737bcf3",
        "InterviewEndDate": "2023-05-12 19:59:07",
        "InterviewState": "Completed",
        "Flight": "LH 1949",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 12
    },
    {
        "InterviewId": "cdbbef44-76f8-46b0-8350-50094f942333",
        "InterviewEndDate": "2023-05-12 20:53:36",
        "InterviewState": "Completed",
        "Flight": "LH 1949",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 12
    },
    {
        "InterviewId": "4d17717b-bc02-42cd-8935-00ea23e02c98",
        "InterviewEndDate": "2023-05-12 20:03:50",
        "InterviewState": "Completed",
        "Flight": "LH  201",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 12
    },
    {
        "InterviewId": "a4a6f230-68a0-4de4-8f44-546a41f7024d",
        "InterviewEndDate": "2023-05-12 20:39:57",
        "InterviewState": "Completed",
        "Flight": "LH 1949",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 12
    },
    {
        "InterviewId": "d09133bb-35f7-45ba-8680-117887d476af",
        "InterviewEndDate": "2023-05-12 20:22:41",
        "InterviewState": "Completed",
        "Flight": "EW 2021",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2b38ce89-742c-4af3-84f5-3a323775f539",
        "InterviewEndDate": "2023-05-12 20:35:51",
        "InterviewState": "Completed",
        "Flight": "EW 2021",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "4a446c58-aa48-4ad1-ba19-4c3eb766cc64",
        "InterviewEndDate": "2023-05-12 20:07:23",
        "InterviewState": "Completed",
        "Flight": "LH  201",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 12
    },
    {
        "InterviewId": "568a0fad-ff7c-4124-8271-0de4b250756c",
        "InterviewEndDate": "2023-05-12 20:17:51",
        "InterviewState": "Completed",
        "Flight": "LH  201",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 12
    },
    {
        "InterviewId": "e1bd33be-21af-4182-9fab-055978b40315",
        "InterviewEndDate": "2023-05-12 21:30:11",
        "InterviewState": "Completed",
        "Flight": "LH  201",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 12
    },
    {
        "InterviewId": "601de114-d1b8-42d3-81ce-59c99d838d57",
        "InterviewEndDate": "2023-05-12 21:07:50",
        "InterviewState": "Completed",
        "Flight": "LH  201",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 12
    },
    {
        "InterviewId": "19eca2ad-6296-4f5e-828f-4b3b2719c0fa",
        "InterviewEndDate": "2023-05-12 21:05:27",
        "InterviewState": "Completed",
        "Flight": "EZS1190",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2fc33aca-939b-47c2-b1e3-60d3f626c508",
        "InterviewEndDate": "2023-05-12 21:21:00",
        "InterviewState": "Completed",
        "Flight": "LH  201",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 12
    },
    {
        "InterviewId": "84237e94-1073-4e3a-939f-3d0f86031669",
        "InterviewEndDate": "2023-05-12 21:52:47",
        "InterviewState": "Completed",
        "Flight": "SN 2590",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "f3a975c2-2c53-4ab8-9fbe-3525be2bc6a4",
        "InterviewEndDate": "2023-05-12 22:08:18",
        "InterviewState": "Completed",
        "Flight": "SN 2590",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "c30d8cf7-a7e4-4e1c-a694-5abe60611798",
        "InterviewEndDate": "2023-05-12 21:45:34",
        "InterviewState": "Completed",
        "Flight": "SN 2590",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "c96af385-b3d0-43cd-bc59-4d5348c2a64e",
        "InterviewEndDate": "2023-05-13 14:03:39",
        "InterviewState": "Completed",
        "Flight": "FI  529",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "Icelandair",
        "InterviewerID": 998
    },
    {
        "InterviewId": "f8d623bb-ec65-4604-bc87-000416a936cb",
        "InterviewEndDate": "2023-05-13 14:08:02",
        "InterviewState": "Completed",
        "Flight": "FI  529",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "Icelandair",
        "InterviewerID": 998
    },
    {
        "InterviewId": "0e259e15-7755-4056-b317-630ac824af64",
        "InterviewEndDate": "2023-05-13 14:07:33",
        "InterviewState": "Completed",
        "Flight": "FI  529",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "Icelandair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d0712354-5137-4fb9-bb9c-2c9e8e8507e6",
        "InterviewEndDate": "2023-05-13 14:02:22",
        "InterviewState": "Completed",
        "Flight": "FI  529",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "Icelandair",
        "InterviewerID": 998
    },
    {
        "InterviewId": "1767a77c-948e-4e64-bc26-4dc28f5394a2",
        "InterviewEndDate": "2023-05-13 14:08:22",
        "InterviewState": "Completed",
        "Flight": "FI  529",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "Icelandair",
        "InterviewerID": 998
    },
    {
        "InterviewId": "a282f877-964d-4507-ab59-300f7a4c24f3",
        "InterviewEndDate": "2023-05-13 14:43:57",
        "InterviewState": "Completed",
        "Flight": "EW 8594",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "dd1fd546-4220-493a-a449-16e33cbecfbe",
        "InterviewEndDate": "2023-05-13 14:48:06",
        "InterviewState": "Completed",
        "Flight": "EW 8594",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ae5fafef-b36d-4c7a-af99-2623b2fc7428",
        "InterviewEndDate": "2023-05-13 14:41:07",
        "InterviewState": "Completed",
        "Flight": "EJU5121",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "0fd51060-7175-4647-af32-33550d049b16",
        "InterviewEndDate": "2023-05-13 14:46:54",
        "InterviewState": "Completed",
        "Flight": "EW 8594",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "fdf40262-2e3f-45a0-b17f-15a7205fdbc5",
        "InterviewEndDate": "2023-05-13 14:44:13",
        "InterviewState": "Completed",
        "Flight": "EW 8594",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c1c749c1-9434-4cc1-9c7e-3c193c54be23",
        "InterviewEndDate": "2023-05-13 14:38:59",
        "InterviewState": "Completed",
        "Flight": "EJU5121",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "fd855667-a725-4c96-845d-4e533b6aea48",
        "InterviewEndDate": "2023-05-13 14:46:45",
        "InterviewState": "Completed",
        "Flight": "EJU5121",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "a86e53c8-15a2-4e7f-bf2f-1b849cea20ec",
        "InterviewEndDate": "2023-05-13 14:53:45",
        "InterviewState": "Completed",
        "Flight": "EW 8594",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 998
    },
    {
        "InterviewId": "b79e79ba-04be-4223-b461-00146c3fa572",
        "InterviewEndDate": "2023-05-13 14:54:31",
        "InterviewState": "Completed",
        "Flight": "EW 8594",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "fe5ab953-392a-4e87-8421-3eea1a1a913e",
        "InterviewEndDate": "2023-05-13 15:44:55",
        "InterviewState": "Completed",
        "Flight": "EJU5055",
        "Dest": "Olbia (OLB)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "4241c79b-5000-42ec-b5ba-04235e7cc62a",
        "InterviewEndDate": "2023-05-13 15:26:03",
        "InterviewState": "Completed",
        "Flight": "EJU5055",
        "Dest": "Olbia (OLB)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "de032560-3c9e-481a-99e9-1094d531752a",
        "InterviewEndDate": "2023-05-13 16:34:35",
        "InterviewState": "Completed",
        "Flight": "LH  195",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 998
    },
    {
        "InterviewId": "3b80de75-c19d-400a-85ad-2cc635c55675",
        "InterviewEndDate": "2023-05-13 16:30:39",
        "InterviewState": "Completed",
        "Flight": "LH  195",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 998
    },
    {
        "InterviewId": "364a6a1f-b82c-451b-a7c5-3a62d4ad52ec",
        "InterviewEndDate": "2023-05-13 16:39:05",
        "InterviewState": "Completed",
        "Flight": "LH  195",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "4d52a403-4ef1-42b0-830e-2ab97ba24d42",
        "InterviewEndDate": "2023-05-13 16:36:38",
        "InterviewState": "Completed",
        "Flight": "LH  195",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 998
    },
    {
        "InterviewId": "f291b7f7-f3a7-4598-9ca4-019e5ca55d43",
        "InterviewEndDate": "2023-05-13 16:49:17",
        "InterviewState": "Completed",
        "Flight": "LH  195",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "9e7dfbd3-1ef2-438a-b71f-36f09e76341b",
        "InterviewEndDate": "2023-05-13 17:58:14",
        "InterviewState": "Completed",
        "Flight": "LH 1947",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "171806e0-cd03-446d-8d37-2b930f3b7af1",
        "InterviewEndDate": "2023-05-13 18:07:05",
        "InterviewState": "Completed",
        "Flight": "LH 1947",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 998
    },
    {
        "InterviewId": "e36979c9-3dd4-4699-bcb2-69c994ba7048",
        "InterviewEndDate": "2023-05-13 18:05:35",
        "InterviewState": "Completed",
        "Flight": "LH 1947",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "7dc12dbe-06ff-4ada-8e0a-4e8aa6bc14a6",
        "InterviewEndDate": "2023-05-13 18:48:13",
        "InterviewState": "Completed",
        "Flight": "LH  199",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "e4025638-5aa5-4553-b812-0b0da697dc72",
        "InterviewEndDate": "2023-05-13 18:41:45",
        "InterviewState": "Completed",
        "Flight": "LH  199",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 998
    },
    {
        "InterviewId": "ab4595a3-49e6-44ea-bce2-2f4ad7e9a142",
        "InterviewEndDate": "2023-05-13 18:44:06",
        "InterviewState": "Completed",
        "Flight": "LX  971",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 11
    },
    {
        "InterviewId": "3c12eb79-19e2-4722-b7af-30b08a656608",
        "InterviewEndDate": "2023-05-13 18:39:45",
        "InterviewState": "Completed",
        "Flight": "LH  199",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "80abda0d-a396-47cc-a8ad-60cf05280e50",
        "InterviewEndDate": "2023-05-13 18:36:51",
        "InterviewState": "Completed",
        "Flight": "LH  199",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 998
    },
    {
        "InterviewId": "bf248f2c-1d47-42b9-9cdf-696ebb6bac03",
        "InterviewEndDate": "2023-05-13 18:43:21",
        "InterviewState": "Completed",
        "Flight": "LH  199",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 998
    },
    {
        "InterviewId": "c07be796-a723-479c-a7f2-25b5e058b450",
        "InterviewEndDate": "2023-05-13 18:53:10",
        "InterviewState": "Completed",
        "Flight": "LH  199",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 998
    },
    {
        "InterviewId": "e1ff7d1d-adf6-4dfe-a86e-155f7ea5836e",
        "InterviewEndDate": "2023-05-13 19:45:55",
        "InterviewState": "Completed",
        "Flight": "EJU5267",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d0432852-4d1f-4e98-9135-40c4ef4197c0",
        "InterviewEndDate": "2023-05-13 19:35:09",
        "InterviewState": "Completed",
        "Flight": "EJU5267",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "97cff0a9-40b5-49d1-8867-6dba496ccbca",
        "InterviewEndDate": "2023-05-14 09:43:43",
        "InterviewState": "Completed",
        "Flight": "AF 1535",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 11
    },
    {
        "InterviewId": "3daf2434-5816-474b-a7c8-5e48e0fd67cc",
        "InterviewEndDate": "2023-05-13 20:19:16",
        "InterviewState": "Completed",
        "Flight": "AF 1535",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 11
    },
    {
        "InterviewId": "379c6875-b4a3-46e7-bcb1-0fb96a1830b9",
        "InterviewEndDate": "2023-05-13 20:28:33",
        "InterviewState": "Completed",
        "Flight": "AF 1535",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 998
    },
    {
        "InterviewId": "ed1031fd-f200-4e3d-b6ee-1320d2ac80e3",
        "InterviewEndDate": "2023-05-13 20:20:25",
        "InterviewState": "Completed",
        "Flight": "AF 1535",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 11
    },
    {
        "InterviewId": "36ff3539-dce8-4547-a115-1733c89aeac9",
        "InterviewEndDate": "2023-05-13 20:19:03",
        "InterviewState": "Completed",
        "Flight": "AF 1535",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 998
    },
    {
        "InterviewId": "23e282fa-a708-47c9-8ff5-1e726fc534e0",
        "InterviewEndDate": "2023-05-13 20:20:05",
        "InterviewState": "Completed",
        "Flight": "AF 1535",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 998
    },
    {
        "InterviewId": "f7994fde-b6f4-4949-ac51-12de75bd3276",
        "InterviewEndDate": "2023-05-14 09:54:42",
        "InterviewState": "Completed",
        "Flight": "EJU4632",
        "Dest": "Paris (CDG)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "b7ac0cf0-dcce-4565-b1a0-0601013691c3",
        "InterviewEndDate": "2023-05-14 10:38:15",
        "InterviewState": "Completed",
        "Flight": "AF 1435",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 998
    },
    {
        "InterviewId": "2c7587da-4535-4305-9220-41e37af0af17",
        "InterviewEndDate": "2023-05-14 12:00:22",
        "InterviewState": "Completed",
        "Flight": "SN 2582",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "2318f3fb-29bd-401a-8618-4734b8b5ef11",
        "InterviewEndDate": "2023-05-14 11:00:02",
        "InterviewState": "Completed",
        "Flight": "KL 1820",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "7d8ce388-b4e5-49c2-ad66-506846afbadf",
        "InterviewEndDate": "2023-05-14 11:04:48",
        "InterviewState": "Completed",
        "Flight": "KL 1820",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "d4de94db-e4dc-4cb0-9b82-6ce78631d59f",
        "InterviewEndDate": "2023-05-14 11:07:59",
        "InterviewState": "Completed",
        "Flight": "KL 1820",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "330e31a0-4f31-4a57-839c-09b37465dac5",
        "InterviewEndDate": "2023-05-14 11:44:31",
        "InterviewState": "Completed",
        "Flight": "LH  183",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 998
    },
    {
        "InterviewId": "ccde572b-c4f6-48a0-b91c-559e95f3a943",
        "InterviewEndDate": "2023-05-14 11:36:07",
        "InterviewState": "Completed",
        "Flight": "LH  183",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 998
    },
    {
        "InterviewId": "3abf6689-21ed-4d23-82a5-65cb1f8a7ccb",
        "InterviewEndDate": "2023-05-14 12:00:27",
        "InterviewState": "Completed",
        "Flight": "SN 2582",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "d5766597-cc22-4351-b560-6bbab8d0dabf",
        "InterviewEndDate": "2023-05-14 12:29:54",
        "InterviewState": "Completed",
        "Flight": "TK 7729",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "4fd64543-fcce-43f0-ad33-2c5562aa7e4f",
        "InterviewEndDate": "2023-05-14 12:26:47",
        "InterviewState": "Completed",
        "Flight": "TK 7729",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "05c609f5-8f5b-46e8-93e8-2e2c6063f92a",
        "InterviewEndDate": "2023-05-14 12:19:25",
        "InterviewState": "Completed",
        "Flight": "TK 7729",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "e5071f34-e52a-42a4-8796-643d7dd930ac",
        "InterviewEndDate": "2023-05-14 12:47:29",
        "InterviewState": "Completed",
        "Flight": "EJU8622",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "c8681dad-ab9a-47f6-835c-2dc3f11761ff",
        "InterviewEndDate": "2023-05-16 17:00:37",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 20
    },
    {
        "InterviewId": "d01dec9c-ef43-4238-ac35-29afaa9e15f9",
        "InterviewEndDate": "2023-05-16 16:20:28",
        "InterviewState": "Completed",
        "Flight": "EW 9043",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 17
    },
    {
        "InterviewId": "60a8d688-4e25-4b03-bc73-5d48d09b27d5",
        "InterviewEndDate": "2023-05-16 16:19:06",
        "InterviewState": "Completed",
        "Flight": "EW 9043",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 19
    },
    {
        "InterviewId": "5dc55a53-bae6-4b78-ba69-66fc236cdd4d",
        "InterviewEndDate": "2023-05-16 16:25:13",
        "InterviewState": "Completed",
        "Flight": "EW 9043",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 17
    },
    {
        "InterviewId": "ce1fb455-67e1-42e2-bb77-5f7ab8a7c289",
        "InterviewEndDate": "2023-05-16 17:01:08",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 19
    },
    {
        "InterviewId": "f3b66b55-f7d7-4fc3-add9-065ad4aae935",
        "InterviewEndDate": "2023-05-16 16:34:36",
        "InterviewState": "Completed",
        "Flight": "EW 9043",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 19
    },
    {
        "InterviewId": "a18504f3-bdfc-4bf9-bf10-5c7495a49faf",
        "InterviewEndDate": "2023-05-16 16:50:22",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "cf4ceaa7-c1a8-404e-b206-647e409a1dde",
        "InterviewEndDate": "2023-05-16 17:38:05",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "30fec130-fee0-4ba8-a41e-179e8f1a2b98",
        "InterviewEndDate": "2023-05-16 17:01:13",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 17
    },
    {
        "InterviewId": "9d5c7974-2c3b-4734-a580-01f767d8a115",
        "InterviewEndDate": "2023-05-16 17:25:14",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 17
    },
    {
        "InterviewId": "d3701100-a60f-4898-917e-172b9451d7ae",
        "InterviewEndDate": "2023-05-16 17:22:49",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 17
    },
    {
        "InterviewId": "7a35f293-5389-40b6-a6d2-3decdd406372",
        "InterviewEndDate": "2023-05-16 17:23:23",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "8b96b4dd-c282-4036-910a-6d92eb941047",
        "InterviewEndDate": "2023-05-16 18:15:55",
        "InterviewState": "Completed",
        "Flight": "BA  985",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 17
    },
    {
        "InterviewId": "c957299c-00f6-4c6c-b81f-3ea92d1e2349",
        "InterviewEndDate": "2023-05-16 18:26:53",
        "InterviewState": "Completed",
        "Flight": "BA  985",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "76497a78-0c2c-45be-a956-0a29a6a6e312",
        "InterviewEndDate": "2023-05-16 18:43:20",
        "InterviewState": "Completed",
        "Flight": "XQ  661",
        "Dest": "Antalya (AYT)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 12
    },
    {
        "InterviewId": "541589a6-36cf-4963-a549-308a1775fb6c",
        "InterviewEndDate": "2023-05-16 18:21:37",
        "InterviewState": "Completed",
        "Flight": "BA  985",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "6e218432-df43-4e60-bd85-4800bfc77868",
        "InterviewEndDate": "2023-05-16 18:34:14",
        "InterviewState": "Completed",
        "Flight": "BA  985",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "123c8151-bc71-4320-8849-6260fdd70b83",
        "InterviewEndDate": "2023-05-16 19:04:24",
        "InterviewState": "Completed",
        "Flight": "BA  985",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "d6cadbdc-cd8a-4c5d-86ad-59eef748560a",
        "InterviewEndDate": "2023-05-16 19:50:54",
        "InterviewState": "Completed",
        "Flight": "SM 2961",
        "Dest": "Hurghada (HRG)",
        "AirlineCode": "Air Cairo",
        "InterviewerID": 19
    },
    {
        "InterviewId": "2fc0c7f4-c77a-4e53-a01c-54de863cfea1",
        "InterviewEndDate": "2023-05-16 20:38:34",
        "InterviewState": "Completed",
        "Flight": "EW 8212",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 19
    },
    {
        "InterviewId": "33d01002-879a-46a8-8118-5f966a921dcf",
        "InterviewEndDate": "2023-05-16 19:45:37",
        "InterviewState": "Completed",
        "Flight": "SM 2961",
        "Dest": "Hurghada (HRG)",
        "AirlineCode": "Air Cairo",
        "InterviewerID": 12
    },
    {
        "InterviewId": "7947885b-4a63-4517-983c-6fa402abdcf4",
        "InterviewEndDate": "2023-05-16 20:38:30",
        "InterviewState": "Completed",
        "Flight": "EW 8212",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 19
    },
    {
        "InterviewId": "85e5407f-4ebc-4b85-b48c-1996848c675b",
        "InterviewEndDate": "2023-05-16 21:43:57",
        "InterviewState": "Completed",
        "Flight": "BA  999",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "470452ee-edf4-4a4d-abc2-27a6202cad4b",
        "InterviewEndDate": "2023-05-16 20:27:30",
        "InterviewState": "Completed",
        "Flight": "EW 8212",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "08cc37ed-30b5-49ee-ba87-339d0331b49c",
        "InterviewEndDate": "2023-05-16 20:40:15",
        "InterviewState": "Completed",
        "Flight": "EW 8212",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 17
    },
    {
        "InterviewId": "d08b7f87-8438-4a4b-98c7-55d09f06efbd",
        "InterviewEndDate": "2023-05-16 20:15:25",
        "InterviewState": "Completed",
        "Flight": "OS  236",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 17
    },
    {
        "InterviewId": "6c45e6e4-b4ea-4b3c-8aa6-6002b87958fa",
        "InterviewEndDate": "2023-05-16 20:13:36",
        "InterviewState": "Completed",
        "Flight": "OS  236",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "883be799-f2e7-4a93-a4fa-630a69f04523",
        "InterviewEndDate": "2023-05-16 20:32:52",
        "InterviewState": "Completed",
        "Flight": "EW 8212",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 19
    },
    {
        "InterviewId": "55f4480c-5067-458c-ad6b-042ca5814c1f",
        "InterviewEndDate": "2023-05-16 20:41:54",
        "InterviewState": "Completed",
        "Flight": "EW 8212",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 17
    },
    {
        "InterviewId": "f2478b45-1e7e-43c3-98f5-3597af7fd558",
        "InterviewEndDate": "2023-05-16 20:46:18",
        "InterviewState": "Completed",
        "Flight": "EW 8212",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 17
    },
    {
        "InterviewId": "b40f4715-6160-4b90-a364-21c643fee52e",
        "InterviewEndDate": "2023-05-16 21:27:20",
        "InterviewState": "Completed",
        "Flight": "BA  999",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 17
    },
    {
        "InterviewId": "c6f1265e-4753-4b78-a109-33dd15ed2277",
        "InterviewEndDate": "2023-05-16 20:41:12",
        "InterviewState": "Completed",
        "Flight": "EW 8212",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 19
    },
    {
        "InterviewId": "c6f1a1bb-196a-41d9-8ccc-005850faad8c",
        "InterviewEndDate": "2023-05-16 21:26:32",
        "InterviewState": "Completed",
        "Flight": "BA  999",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "bc824089-6aeb-4775-b350-3a86e04b5d74",
        "InterviewEndDate": "2023-05-16 20:42:52",
        "InterviewState": "Completed",
        "Flight": "OS  236",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "9327fff7-7df6-4337-9ae8-6c157e208e50",
        "InterviewEndDate": "2023-05-16 21:24:04",
        "InterviewState": "Completed",
        "Flight": "BA  999",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 19
    },
    {
        "InterviewId": "8233e2e7-117b-44da-bbdf-2e129ad20941",
        "InterviewEndDate": "2023-05-16 21:19:01",
        "InterviewState": "Completed",
        "Flight": "BA  999",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 19
    },
    {
        "InterviewId": "01dea84e-2513-4e5e-8724-25606672d4fc",
        "InterviewEndDate": "2023-05-16 21:24:26",
        "InterviewState": "Completed",
        "Flight": "BA  999",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 17
    },
    {
        "InterviewId": "2500d042-274f-4929-863a-4ef2cdb6ebc6",
        "InterviewEndDate": "2023-05-16 21:22:28",
        "InterviewState": "Completed",
        "Flight": "BA  999",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 19
    },
    {
        "InterviewId": "7d37140a-42ea-4727-bea5-6fb93b247bc0",
        "InterviewEndDate": "2023-05-16 21:39:01",
        "InterviewState": "Completed",
        "Flight": "BA  999",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "d945af1c-4ce4-4875-9951-1a223d64dcff",
        "InterviewEndDate": "2023-05-16 22:05:03",
        "InterviewState": "Completed",
        "Flight": "BA  999",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "07b7cc40-cead-43d1-bebc-424752e2c670",
        "InterviewEndDate": "2023-05-17 17:09:55",
        "InterviewState": "Completed",
        "Flight": "TP  535",
        "Dest": "Lissabon (LIS)",
        "AirlineCode": "TAP Air Portugal",
        "InterviewerID": 11
    },
    {
        "InterviewId": "88b622c8-49fe-4544-86e5-3a494359dfb7",
        "InterviewEndDate": "2023-05-17 17:17:41",
        "InterviewState": "Completed",
        "Flight": "TP  535",
        "Dest": "Lissabon (LIS)",
        "AirlineCode": "TAP Air Portugal",
        "InterviewerID": 11
    },
    {
        "InterviewId": "479abb13-f6d5-4d00-9611-66738cde62f4",
        "InterviewEndDate": "2023-05-17 17:44:12",
        "InterviewState": "Completed",
        "Flight": "KL 1830",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "fa96c537-45cc-4daa-ba5b-1215fd8a3a2d",
        "InterviewEndDate": "2023-05-17 17:46:44",
        "InterviewState": "Completed",
        "Flight": "KL 1830",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "e02f4303-8500-4536-abfd-1f36d268af46",
        "InterviewEndDate": "2023-05-17 18:14:54",
        "InterviewState": "Completed",
        "Flight": "EJU5267",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "4d26513f-c4dd-42e2-8113-350133d4b8d3",
        "InterviewEndDate": "2023-05-17 18:10:45",
        "InterviewState": "Completed",
        "Flight": "EJU5267",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "42595fdc-d911-47c6-8ef9-253e5d5cf293",
        "InterviewEndDate": "2023-05-17 19:15:13",
        "InterviewState": "Completed",
        "Flight": "AY 1436",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "033abcb4-45ea-40b6-a925-561202643ced",
        "InterviewEndDate": "2023-05-17 19:20:03",
        "InterviewState": "Completed",
        "Flight": "AY 1436",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "eb09ed02-1ff3-4a76-8699-6ae5cce374c3",
        "InterviewEndDate": "2023-05-17 20:25:11",
        "InterviewState": "Completed",
        "Flight": "AF 1535",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 11
    },
    {
        "InterviewId": "11bdcaa4-719b-4d2b-92e1-250012228f06",
        "InterviewEndDate": "2023-05-17 21:28:15",
        "InterviewState": "Completed",
        "Flight": "EI  337",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f8d2b4ee-6b43-4210-9dac-3a50210ea8c3",
        "InterviewEndDate": "2023-05-18 12:57:49",
        "InterviewState": "Completed",
        "Flight": "FH 1282",
        "Dest": "Antalya (AYT)",
        "AirlineCode": "Freebird Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "cdfd8f24-dad7-4f44-8a6c-19e84c09c24a",
        "InterviewEndDate": "2023-05-18 10:36:27",
        "InterviewState": "Completed",
        "Flight": "EZY8630",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "2d9d0a95-eb0a-4711-9cf9-2f29055dd279",
        "InterviewEndDate": "2023-05-18 10:44:48",
        "InterviewState": "Completed",
        "Flight": "EI  333",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 1
    },
    {
        "InterviewId": "ce32e03c-1246-4f8f-94bd-1a7a9212e411",
        "InterviewEndDate": "2023-05-18 11:17:15",
        "InterviewState": "Completed",
        "Flight": "LX  977",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 1
    },
    {
        "InterviewId": "095be29c-22ef-42d9-a6fe-6ac97871900f",
        "InterviewEndDate": "2023-05-18 11:14:41",
        "InterviewState": "Completed",
        "Flight": "LX  977",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 1
    },
    {
        "InterviewId": "ea8ffaa4-f164-4289-b6fb-2a14c3fb2cb9",
        "InterviewEndDate": "2023-05-18 11:21:09",
        "InterviewState": "Completed",
        "Flight": "LX  977",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 1
    },
    {
        "InterviewId": "a0fbf6de-7df0-4edc-ba8a-004c0e101e78",
        "InterviewEndDate": "2023-05-18 11:30:46",
        "InterviewState": "Completed",
        "Flight": "LX  977",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 1
    },
    {
        "InterviewId": "1569c497-4c80-47ea-8bb5-32830560fb8c",
        "InterviewEndDate": "2023-05-18 12:07:20",
        "InterviewState": "Completed",
        "Flight": "LH  185",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 1
    },
    {
        "InterviewId": "8120b13a-c334-41a4-8bb8-130a1df49e74",
        "InterviewEndDate": "2023-05-18 12:13:09",
        "InterviewState": "Completed",
        "Flight": "LH  185",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 1
    },
    {
        "InterviewId": "c71929a3-a448-459a-92da-4fc8779ae4eb",
        "InterviewEndDate": "2023-05-18 14:20:15",
        "InterviewState": "Completed",
        "Flight": "BA  983",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "89803a1c-2bb3-445e-80a7-0f35ea48f101",
        "InterviewEndDate": "2023-05-18 12:48:29",
        "InterviewState": "Completed",
        "Flight": "FH 1282",
        "Dest": "Antalya (AYT)",
        "AirlineCode": "Freebird Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "47720c0f-2f83-4bee-a759-389b2e31dccb",
        "InterviewEndDate": "2023-05-18 12:47:20",
        "InterviewState": "Completed",
        "Flight": "FR 6472",
        "Dest": "Tel Aviv (TLV)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 1
    },
    {
        "InterviewId": "47beddd6-a753-4d50-bdc8-3692fd575181",
        "InterviewEndDate": "2023-05-18 13:00:48",
        "InterviewState": "Completed",
        "Flight": "BA  983",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "85b458b3-13dc-47ae-acc6-40941156f00b",
        "InterviewEndDate": "2023-05-18 13:21:51",
        "InterviewState": "Completed",
        "Flight": "EJU5187",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 1
    },
    {
        "InterviewId": "23235a31-cf92-49ae-97fe-20fb6969cc8b",
        "InterviewEndDate": "2023-05-18 13:28:28",
        "InterviewState": "Completed",
        "Flight": "SR 4244",
        "Dest": "Kos (KGS)",
        "AirlineCode": "SUNDAIR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d348ab0a-b95a-4b4a-89c5-0df90738fa70",
        "InterviewEndDate": "2023-05-18 13:22:45",
        "InterviewState": "Completed",
        "Flight": "SK 2678",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "SAS-Scandinavian Airlines System",
        "InterviewerID": 1
    },
    {
        "InterviewId": "36a91352-012e-49cf-ade5-19a52d681758",
        "InterviewEndDate": "2023-05-18 14:13:58",
        "InterviewState": "Completed",
        "Flight": "FR 1142",
        "Dest": "Lissabon (LIS)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "e26c3033-b46d-4760-a5d3-11e4a027982a",
        "InterviewEndDate": "2023-05-20 10:46:19",
        "InterviewState": "Completed",
        "Flight": "EW 8002",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 21
    },
    {
        "InterviewId": "d11499cf-c27c-45e5-a2c9-1bbd7657f357",
        "InterviewEndDate": "2023-05-18 14:51:29",
        "InterviewState": "Completed",
        "Flight": "FR 1142",
        "Dest": "Lissabon (LIS)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "cdcbc1a0-29df-41d7-9bc7-6a7d59f66fa1",
        "InterviewEndDate": "2023-05-18 15:01:44",
        "InterviewState": "Completed",
        "Flight": "FR  234",
        "Dest": "Malaga (AGP)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "370dab0b-6cfa-4b1a-9241-3656f9e8773c",
        "InterviewEndDate": "2023-05-18 15:21:19",
        "InterviewState": "Completed",
        "Flight": "FR  234",
        "Dest": "Malaga (AGP)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "33761c72-588a-47e7-8229-6a65ffdb5a41",
        "InterviewEndDate": "2023-05-18 15:52:19",
        "InterviewState": "Completed",
        "Flight": "FR 2527",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "35b798b5-fe2f-4ac5-bb7f-5bb220168c04",
        "InterviewEndDate": "2023-05-18 16:47:18",
        "InterviewState": "Completed",
        "Flight": "FR 3388",
        "Dest": "Marseille (MRS)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "b413bc39-4b74-4641-aa40-3f62c6a61bdf",
        "InterviewEndDate": "2023-05-18 17:08:09",
        "InterviewState": "Completed",
        "Flight": "FR 3388",
        "Dest": "Marseille (MRS)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "b0741096-19b1-4fc5-824b-29fff5992340",
        "InterviewEndDate": "2023-05-18 17:33:49",
        "InterviewState": "Completed",
        "Flight": "FR  132",
        "Dest": "Barcelona (BCN)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "1c5e1249-f8e8-4d9a-84e9-3238fe70d0e9",
        "InterviewEndDate": "2023-05-18 17:54:06",
        "InterviewState": "Completed",
        "Flight": "FR  132",
        "Dest": "Barcelona (BCN)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "b7cfae63-b450-4b28-a6bc-46bd16aab6a5",
        "InterviewEndDate": "2023-05-18 18:05:36",
        "InterviewState": "Completed",
        "Flight": "FR  132",
        "Dest": "Barcelona (BCN)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "27bdbbea-bdbf-410e-8e04-0b41a46346be",
        "InterviewEndDate": "2023-05-19 13:35:43",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b46855f1-b0df-40db-b1f4-48a42652b2e9",
        "InterviewEndDate": "2023-05-19 13:29:25",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "e164fc85-aa5d-4827-b0fa-28dfecfb4a3e",
        "InterviewEndDate": "2023-05-19 13:32:39",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "1d10827b-740e-46da-a8c7-052ed7313021",
        "InterviewEndDate": "2023-05-19 14:12:32",
        "InterviewState": "Completed",
        "Flight": "EJU5071",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "e0fa8339-a977-4757-bf11-1119c9c5093a",
        "InterviewEndDate": "2023-05-19 14:14:01",
        "InterviewState": "Completed",
        "Flight": "EJU5071",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "59445c19-dc92-472b-8467-5451fe54ecfc",
        "InterviewEndDate": "2023-05-19 15:02:40",
        "InterviewState": "Completed",
        "Flight": "FI  529",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "Icelandair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8b447a0b-d642-4ba5-950f-5f62990756ba",
        "InterviewEndDate": "2023-05-19 14:54:19",
        "InterviewState": "Completed",
        "Flight": "FI  529",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "Icelandair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "870f2d1d-9ded-4f4a-b7e6-55531e08818c",
        "InterviewEndDate": "2023-05-19 15:32:30",
        "InterviewState": "Completed",
        "Flight": "EJU5053",
        "Dest": "Neapel (NAP)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "fa3446f6-bbc4-4337-8a26-3bfc1cd7d4b7",
        "InterviewEndDate": "2023-05-19 15:31:05",
        "InterviewState": "Completed",
        "Flight": "EJU5053",
        "Dest": "Neapel (NAP)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f314203a-fe9c-4d15-adaf-0b233eb28457",
        "InterviewEndDate": "2023-05-19 17:17:55",
        "InterviewState": "Completed",
        "Flight": "EZS1188",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 11
    },
    {
        "InterviewId": "4f606680-73d9-4c61-8346-2f71f56f9aa6",
        "InterviewEndDate": "2023-05-19 17:21:29",
        "InterviewState": "Completed",
        "Flight": "KL 1830",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b94985ab-176f-46ca-9ed1-35d690843735",
        "InterviewEndDate": "2023-05-19 16:38:54",
        "InterviewState": "Completed",
        "Flight": "EW 8044",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "956cdce0-10d5-45c2-9d53-599de07ebc92",
        "InterviewEndDate": "2023-05-19 16:41:52",
        "InterviewState": "Completed",
        "Flight": "EW 8044",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d157fa4c-5124-443c-b001-54cfa11d20c6",
        "InterviewEndDate": "2023-05-19 17:20:43",
        "InterviewState": "Completed",
        "Flight": "EZS1188",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 11
    },
    {
        "InterviewId": "fb50f251-5280-4d51-aad3-19c0f2139c65",
        "InterviewEndDate": "2023-05-19 17:28:12",
        "InterviewState": "Completed",
        "Flight": "EZS1188",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d013c358-518b-473b-a6db-45b7a3e94729",
        "InterviewEndDate": "2023-05-19 18:36:22",
        "InterviewState": "Completed",
        "Flight": "EW 2019",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b6c74ad6-253f-4cc6-9cfa-0812d4274ba1",
        "InterviewEndDate": "2023-05-19 18:27:55",
        "InterviewState": "Completed",
        "Flight": "EW 2019",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b49c53d5-6c66-44fe-b408-416d67f44517",
        "InterviewEndDate": "2023-05-19 18:30:26",
        "InterviewState": "Completed",
        "Flight": "EW 2019",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "314b1bca-9fa4-4096-9b3a-4dd566c1069d",
        "InterviewEndDate": "2023-05-19 19:14:37",
        "InterviewState": "Completed",
        "Flight": "AY 1436",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "7342162f-a7e9-4bce-b4e4-0d7ceabdac12",
        "InterviewEndDate": "2023-05-19 19:49:34",
        "InterviewState": "Completed",
        "Flight": "EJU7338",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "7c85abb5-9338-45d3-8353-2fd62edeefe4",
        "InterviewEndDate": "2023-05-19 19:21:45",
        "InterviewState": "Completed",
        "Flight": "AY 1436",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "5382e369-93da-470b-af62-38ea69c817fa",
        "InterviewEndDate": "2023-05-19 19:46:44",
        "InterviewState": "Completed",
        "Flight": "EJU7338",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "95c2079c-85ba-456e-be55-6e95e0cae2c5",
        "InterviewEndDate": "2023-05-20 10:46:37",
        "InterviewState": "Completed",
        "Flight": "EW 8002",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 20
    },
    {
        "InterviewId": "534b4b31-ec4c-4659-9b51-485f39201c48",
        "InterviewEndDate": "2023-05-20 10:55:33",
        "InterviewState": "Completed",
        "Flight": "EW 8002",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 21
    },
    {
        "InterviewId": "89e3c9e8-253c-4eba-99e3-6ee9e8eac330",
        "InterviewEndDate": "2023-05-20 10:05:38",
        "InterviewState": "Completed",
        "Flight": "LH  181",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "143752c2-2345-42fc-a6fe-3059b38db06a",
        "InterviewEndDate": "2023-05-20 10:52:36",
        "InterviewState": "Completed",
        "Flight": "EW 8002",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "cab173bd-f361-4525-95c0-372e29ce89c1",
        "InterviewEndDate": "2023-05-20 10:12:55",
        "InterviewState": "Completed",
        "Flight": "LH  181",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 20
    },
    {
        "InterviewId": "74856c59-263a-422b-b9c5-5706f11cf96c",
        "InterviewEndDate": "2023-05-20 10:45:40",
        "InterviewState": "Completed",
        "Flight": "EW 8002",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "9bf017ac-fe5a-455a-8fb5-082f2b719f05",
        "InterviewEndDate": "2023-05-20 10:09:27",
        "InterviewState": "Completed",
        "Flight": "LH  181",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 21
    },
    {
        "InterviewId": "881f12c6-9522-4d4b-8d1d-690aeafd54f7",
        "InterviewEndDate": "2023-05-20 10:13:00",
        "InterviewState": "Completed",
        "Flight": "LH  181",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 20
    },
    {
        "InterviewId": "f22c9d63-0075-4893-a948-30716a535f1c",
        "InterviewEndDate": "2023-05-20 10:48:28",
        "InterviewState": "Completed",
        "Flight": "EW 8002",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 21
    },
    {
        "InterviewId": "977b9d54-a005-4107-8912-3c5b8957605e",
        "InterviewEndDate": "2023-05-20 10:43:16",
        "InterviewState": "Completed",
        "Flight": "EW 8002",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 20
    },
    {
        "InterviewId": "6508feb4-72d7-475f-8ed1-462e5d2f9979",
        "InterviewEndDate": "2023-05-20 10:50:58",
        "InterviewState": "Completed",
        "Flight": "EW 8002",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 21
    },
    {
        "InterviewId": "2e2bcee5-d4c7-4f1d-9b39-005154d883d0",
        "InterviewEndDate": "2023-05-20 10:49:32",
        "InterviewState": "Completed",
        "Flight": "EW 8002",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 20
    },
    {
        "InterviewId": "5bb759d6-8a18-4077-bf37-636d10e3b1a1",
        "InterviewEndDate": "2023-05-20 11:29:35",
        "InterviewState": "Completed",
        "Flight": "I2 3677",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 21
    },
    {
        "InterviewId": "7eeabfd7-471e-4b5c-a6c7-011c9d3587cc",
        "InterviewEndDate": "2023-05-20 11:29:54",
        "InterviewState": "Completed",
        "Flight": "I2 3677",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c7141682-ac68-4a9b-b6cd-3679cd278f4b",
        "InterviewEndDate": "2023-05-20 11:24:43",
        "InterviewState": "Completed",
        "Flight": "I2 3677",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 21
    },
    {
        "InterviewId": "6b300e9f-3b72-459c-a1a8-115100fb8e2d",
        "InterviewEndDate": "2023-05-20 11:26:18",
        "InterviewState": "Completed",
        "Flight": "I2 3677",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 21
    },
    {
        "InterviewId": "bbf988e6-149e-45e4-b81d-34053ee698e1",
        "InterviewEndDate": "2023-05-20 11:34:43",
        "InterviewState": "Completed",
        "Flight": "I2 3677",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 20
    },
    {
        "InterviewId": "07abfb11-6324-4fca-9870-20186f6cdb0f",
        "InterviewEndDate": "2023-05-20 11:24:15",
        "InterviewState": "Completed",
        "Flight": "I2 3677",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 11
    },
    {
        "InterviewId": "bbe16be7-2661-4a55-9770-6f8215e28552",
        "InterviewEndDate": "2023-05-20 11:28:43",
        "InterviewState": "Completed",
        "Flight": "I2 3677",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b379b001-9f1d-4661-9188-57c2c10fbd91",
        "InterviewEndDate": "2023-05-20 12:11:51",
        "InterviewState": "Completed",
        "Flight": "AF 1735",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 20
    },
    {
        "InterviewId": "cf395ea5-5b28-4d2f-8f4f-7173cef03107",
        "InterviewEndDate": "2023-05-20 12:14:53",
        "InterviewState": "Completed",
        "Flight": "AF 1735",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 11
    },
    {
        "InterviewId": "9cef693f-cc7e-41af-9825-1df04c52d34c",
        "InterviewEndDate": "2023-05-20 12:13:28",
        "InterviewState": "Completed",
        "Flight": "AF 1735",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 11
    },
    {
        "InterviewId": "7fb2af93-ff4e-426d-98ee-214270caaebe",
        "InterviewEndDate": "2023-05-20 12:18:33",
        "InterviewState": "Completed",
        "Flight": "AF 1735",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 20
    },
    {
        "InterviewId": "ac02b306-5b52-4c53-a0a8-223a48473862",
        "InterviewEndDate": "2023-05-20 13:25:32",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "bb647ca3-27dd-4269-b639-3b723f966bac",
        "InterviewEndDate": "2023-05-20 13:16:31",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2b70862e-f5aa-4f04-8c2e-1874d2d6146c",
        "InterviewEndDate": "2023-05-20 13:30:15",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 20
    },
    {
        "InterviewId": "621bddec-c263-464b-8813-5906419a6c10",
        "InterviewEndDate": "2023-05-20 13:28:07",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "7538bf39-ddcb-4bee-b4b4-2d5cbbeb7db2",
        "InterviewEndDate": "2023-05-20 13:32:51",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 21
    },
    {
        "InterviewId": "20958c5a-88af-4f29-9dc1-495ba2423a5b",
        "InterviewEndDate": "2023-05-20 13:18:08",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 21
    },
    {
        "InterviewId": "a4b717ad-9bde-4ea8-aeed-5e63335b12f8",
        "InterviewEndDate": "2023-05-20 13:42:50",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 20
    },
    {
        "InterviewId": "eec42749-af2c-44da-9073-3e882affad94",
        "InterviewEndDate": "2023-05-20 14:13:12",
        "InterviewState": "Completed",
        "Flight": "EJU5121",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 20
    },
    {
        "InterviewId": "f9c67d59-4258-4382-bead-3510b077bd89",
        "InterviewEndDate": "2023-05-20 14:15:56",
        "InterviewState": "Completed",
        "Flight": "EJU5121",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 20
    },
    {
        "InterviewId": "3b69ad9e-6751-4aa0-a581-3ee3dbd62990",
        "InterviewEndDate": "2023-05-20 15:37:22",
        "InterviewState": "Completed",
        "Flight": "EW 8590",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 21
    },
    {
        "InterviewId": "2fb80d95-0061-48cd-a2f3-3f5be8479271",
        "InterviewEndDate": "2023-05-20 14:40:22",
        "InterviewState": "Completed",
        "Flight": "EJU5071",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 21
    },
    {
        "InterviewId": "f886995d-3184-482e-b15f-5217fba11aec",
        "InterviewEndDate": "2023-05-20 14:13:46",
        "InterviewState": "Completed",
        "Flight": "EW  007",
        "Dest": "K\u00f6ln (CGN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 21
    },
    {
        "InterviewId": "b18d9753-d5bb-4c82-831c-4e9a03977618",
        "InterviewEndDate": "2023-05-20 14:16:38",
        "InterviewState": "Completed",
        "Flight": "EW  007",
        "Dest": "K\u00f6ln (CGN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "18be8c08-0f36-441e-94d1-154fcb6b4588",
        "InterviewEndDate": "2023-05-20 14:13:16",
        "InterviewState": "Completed",
        "Flight": "EW  007",
        "Dest": "K\u00f6ln (CGN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "4ba5bfd3-ff03-4131-bbfd-359a36c14632",
        "InterviewEndDate": "2023-05-20 14:44:36",
        "InterviewState": "Completed",
        "Flight": "EJU5071",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 20
    },
    {
        "InterviewId": "789d9089-11ee-4bca-b774-70180b2dd074",
        "InterviewEndDate": "2023-05-20 15:17:52",
        "InterviewState": "Completed",
        "Flight": "EW 8590",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "fa0a08c0-4794-4a42-87f2-0ef96397fbfa",
        "InterviewEndDate": "2023-05-20 15:25:45",
        "InterviewState": "Completed",
        "Flight": "EW 8590",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 21
    },
    {
        "InterviewId": "e20f2a64-d24e-48b1-b76a-3e888cc1d8f7",
        "InterviewEndDate": "2023-05-20 15:24:29",
        "InterviewState": "Completed",
        "Flight": "EW 8590",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "5237b2c3-ebe8-4d53-abe2-09369a1a8435",
        "InterviewEndDate": "2023-05-20 15:24:34",
        "InterviewState": "Completed",
        "Flight": "EW 8590",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "38f7636c-2cde-429f-bb5d-24908b355958",
        "InterviewEndDate": "2023-05-20 15:29:53",
        "InterviewState": "Completed",
        "Flight": "EW 8590",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 21
    },
    {
        "InterviewId": "1a406c63-b939-451e-8e51-3c0755ac0af7",
        "InterviewEndDate": "2023-05-20 15:29:05",
        "InterviewState": "Completed",
        "Flight": "EW 8590",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 20
    },
    {
        "InterviewId": "ec3557a9-7b77-4d26-8ead-2847f63955ce",
        "InterviewEndDate": "2023-05-20 16:08:40",
        "InterviewState": "Completed",
        "Flight": "TK 7729",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "98452e0e-d916-4e84-bbdc-6096fd6f1a51",
        "InterviewEndDate": "2023-05-21 09:46:00",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 15
    },
    {
        "InterviewId": "413d0e78-577a-41c7-85a5-084df4e7a492",
        "InterviewEndDate": "2023-05-21 09:37:29",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 16
    },
    {
        "InterviewId": "41c00d29-089d-4d16-b022-55e9e14f6d14",
        "InterviewEndDate": "2023-05-21 09:46:48",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 15
    },
    {
        "InterviewId": "55735fc3-4fe2-4ee3-b5cf-63a6d2d42365",
        "InterviewEndDate": "2023-05-21 09:44:36",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 15
    },
    {
        "InterviewId": "f6f7f804-3196-4c86-b398-20e75d558cf6",
        "InterviewEndDate": "2023-05-21 09:44:29",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 16
    },
    {
        "InterviewId": "3b2e15ed-6d53-4577-870b-521a404566f5",
        "InterviewEndDate": "2023-05-21 09:53:04",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 16
    },
    {
        "InterviewId": "06a200e6-babc-4064-8ae0-1ff4e5313c95",
        "InterviewEndDate": "2023-05-21 10:04:20",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 16
    },
    {
        "InterviewId": "d77d40f2-e443-4507-bc0d-648ce50cafda",
        "InterviewEndDate": "2023-05-21 09:59:17",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 15
    },
    {
        "InterviewId": "0d5c9fc1-860a-49b2-b8ef-39eb022f659d",
        "InterviewEndDate": "2023-05-21 09:57:21",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 15
    },
    {
        "InterviewId": "24fc276f-f904-41d6-81f2-16ada7c00a67",
        "InterviewEndDate": "2023-05-21 10:50:53",
        "InterviewState": "Completed",
        "Flight": "TK 1722",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 16
    },
    {
        "InterviewId": "86d90111-98f7-41a4-9545-5279f6974d2c",
        "InterviewEndDate": "2023-05-21 10:51:10",
        "InterviewState": "Completed",
        "Flight": "TK 1722",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 16
    },
    {
        "InterviewId": "2fb53edb-46f0-4afa-9ebc-22b5d8b5baef",
        "InterviewEndDate": "2023-05-21 10:48:01",
        "InterviewState": "Completed",
        "Flight": "TK 1722",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 16
    },
    {
        "InterviewId": "2b81fe87-f6bb-4e39-bd34-041533c38cc1",
        "InterviewEndDate": "2023-05-21 10:28:49",
        "InterviewState": "Completed",
        "Flight": "EI  333",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 15
    },
    {
        "InterviewId": "556c6ed1-e3fe-4937-bbf9-29505a56749d",
        "InterviewEndDate": "2023-05-21 10:50:57",
        "InterviewState": "Completed",
        "Flight": "TK 1722",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 15
    },
    {
        "InterviewId": "6866fae6-6993-42d9-8138-3903a4db7810",
        "InterviewEndDate": "2023-05-21 10:49:20",
        "InterviewState": "Completed",
        "Flight": "TK 1722",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 15
    },
    {
        "InterviewId": "bb7d5d0b-b69a-4e41-a5f7-5f570a7a5e11",
        "InterviewEndDate": "2023-05-21 10:54:13",
        "InterviewState": "Completed",
        "Flight": "TK 1722",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 15
    },
    {
        "InterviewId": "3557c32b-204d-4772-97d2-6bb535fc10be",
        "InterviewEndDate": "2023-05-21 10:51:41",
        "InterviewState": "Completed",
        "Flight": "TK 1722",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 15
    },
    {
        "InterviewId": "760e0436-3b3f-49d3-9dde-5830e5ff1148",
        "InterviewEndDate": "2023-05-21 10:50:52",
        "InterviewState": "Completed",
        "Flight": "TK 1722",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "340621fa-f6aa-4d0a-ad7d-314cd90ded18",
        "InterviewEndDate": "2023-05-21 10:49:19",
        "InterviewState": "Completed",
        "Flight": "TK 1722",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 15
    },
    {
        "InterviewId": "dd364814-d8c3-4cd9-9e6f-0124f25ff9b6",
        "InterviewEndDate": "2023-05-21 11:26:39",
        "InterviewState": "Completed",
        "Flight": "OS  226",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "1826d18e-f8a1-4e07-88cf-0c08a6df82ab",
        "InterviewEndDate": "2023-05-21 11:29:09",
        "InterviewState": "Completed",
        "Flight": "OS  226",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 16
    },
    {
        "InterviewId": "f34bc7c1-4bd2-45f3-956a-55b7f18974d7",
        "InterviewEndDate": "2023-05-21 11:38:52",
        "InterviewState": "Completed",
        "Flight": "OS  226",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "cde5496e-0989-44db-9baa-5c0ffd9917e5",
        "InterviewEndDate": "2023-05-21 11:33:46",
        "InterviewState": "Completed",
        "Flight": "OS  226",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 16
    },
    {
        "InterviewId": "af0a90fd-a4b9-4ae5-9daa-059ef080003d",
        "InterviewEndDate": "2023-05-21 11:24:30",
        "InterviewState": "Completed",
        "Flight": "OS  226",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "e48b4763-ade7-4e8a-a034-66a70494ac5d",
        "InterviewEndDate": "2023-05-21 11:30:49",
        "InterviewState": "Completed",
        "Flight": "OS  226",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 15
    },
    {
        "InterviewId": "443e3721-440e-4dc5-a678-13239bcbb5b4",
        "InterviewEndDate": "2023-05-21 11:37:41",
        "InterviewState": "Completed",
        "Flight": "OS  226",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 15
    },
    {
        "InterviewId": "98041cf7-e4de-4bbe-8b6d-48277062e931",
        "InterviewEndDate": "2023-05-21 11:38:32",
        "InterviewState": "Completed",
        "Flight": "OS  226",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "423bcb15-34cb-413d-99e9-286441fe0185",
        "InterviewEndDate": "2023-05-21 12:18:20",
        "InterviewState": "Completed",
        "Flight": "LH  185",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 1
    },
    {
        "InterviewId": "cdc6b007-e6fe-4958-9066-0e31e6026831",
        "InterviewEndDate": "2023-05-21 12:12:45",
        "InterviewState": "Completed",
        "Flight": "LH  185",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 1
    },
    {
        "InterviewId": "495cce5c-01a6-4a66-a064-6c5fac8874e7",
        "InterviewEndDate": "2023-05-21 12:21:51",
        "InterviewState": "Completed",
        "Flight": "LH  185",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 15
    },
    {
        "InterviewId": "ff553fa3-e92c-4aa2-930b-061a6c98617e",
        "InterviewEndDate": "2023-05-21 12:18:12",
        "InterviewState": "Completed",
        "Flight": "LH  185",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 16
    },
    {
        "InterviewId": "dc94236e-c274-4fee-a32f-0b28c07c30e1",
        "InterviewEndDate": "2023-05-21 12:23:45",
        "InterviewState": "Completed",
        "Flight": "LH  185",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 15
    },
    {
        "InterviewId": "ffe30daf-7022-4596-ab26-338b9719f83d",
        "InterviewEndDate": "2023-05-21 12:18:12",
        "InterviewState": "Completed",
        "Flight": "LH  185",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 16
    },
    {
        "InterviewId": "8d6d630d-8604-4dea-83e5-49a743d98e8a",
        "InterviewEndDate": "2023-05-21 12:11:51",
        "InterviewState": "Completed",
        "Flight": "LH  185",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 15
    },
    {
        "InterviewId": "bded6a4c-576f-4a47-a070-100a0ee6da6f",
        "InterviewEndDate": "2023-05-21 12:18:11",
        "InterviewState": "Completed",
        "Flight": "LH  185",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 15
    },
    {
        "InterviewId": "e602c32a-0303-4a88-9892-47648b24672e",
        "InterviewEndDate": "2023-05-21 13:02:09",
        "InterviewState": "Completed",
        "Flight": "SR 6472",
        "Dest": "Hurghada (HRG)",
        "AirlineCode": "SUNDAIR",
        "InterviewerID": 16
    },
    {
        "InterviewId": "45430757-db58-4783-a990-1989bb2eb65b",
        "InterviewEndDate": "2023-05-21 13:01:21",
        "InterviewState": "Completed",
        "Flight": "SR 6472",
        "Dest": "Hurghada (HRG)",
        "AirlineCode": "SUNDAIR",
        "InterviewerID": 15
    },
    {
        "InterviewId": "dd20180a-6867-4e61-9762-34ef53d8c666",
        "InterviewEndDate": "2023-05-21 12:59:33",
        "InterviewState": "Completed",
        "Flight": "SR 6472",
        "Dest": "Hurghada (HRG)",
        "AirlineCode": "SUNDAIR",
        "InterviewerID": 15
    },
    {
        "InterviewId": "27a04ae0-6051-4aa5-b470-62d6ff68537f",
        "InterviewEndDate": "2023-05-21 12:56:25",
        "InterviewState": "Completed",
        "Flight": "SR 6472",
        "Dest": "Hurghada (HRG)",
        "AirlineCode": "SUNDAIR",
        "InterviewerID": 16
    },
    {
        "InterviewId": "155cc632-23df-4cd3-a6bc-0729ae11866d",
        "InterviewEndDate": "2023-05-21 13:01:12",
        "InterviewState": "Completed",
        "Flight": "SR 6472",
        "Dest": "Hurghada (HRG)",
        "AirlineCode": "SUNDAIR",
        "InterviewerID": 15
    },
    {
        "InterviewId": "ed890d14-7310-41b2-9164-6bcba70cb10b",
        "InterviewEndDate": "2023-05-21 14:10:20",
        "InterviewState": "Completed",
        "Flight": "LH  189",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 1
    },
    {
        "InterviewId": "f48840bb-c304-4df8-823b-3f250cd4b04c",
        "InterviewEndDate": "2023-05-21 14:11:20",
        "InterviewState": "Completed",
        "Flight": "LH  189",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 1
    },
    {
        "InterviewId": "5b20f5c7-04aa-489c-b19b-6ba76e218781",
        "InterviewEndDate": "2023-05-21 13:11:34",
        "InterviewState": "Completed",
        "Flight": "SR 6472",
        "Dest": "Hurghada (HRG)",
        "AirlineCode": "SUNDAIR",
        "InterviewerID": 15
    },
    {
        "InterviewId": "e3a0dbd9-d003-4c06-9f58-5007953ef822",
        "InterviewEndDate": "2023-05-21 15:07:20",
        "InterviewState": "Completed",
        "Flight": "LX  967",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 15
    },
    {
        "InterviewId": "c29aa24c-ddd0-4921-b914-1c1b9aebde73",
        "InterviewEndDate": "2023-05-21 15:29:51",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 16
    },
    {
        "InterviewId": "fd4bf9c3-0d2c-4104-99ac-297ad9f3de0f",
        "InterviewEndDate": "2023-05-21 14:12:54",
        "InterviewState": "Completed",
        "Flight": "LH  189",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 16
    },
    {
        "InterviewId": "1eb5472b-8194-4d99-a43e-0a28566f3d71",
        "InterviewEndDate": "2023-05-21 15:04:15",
        "InterviewState": "Completed",
        "Flight": "LX  967",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 15
    },
    {
        "InterviewId": "f6dd1985-07d4-4a97-9e6c-6486f68f2431",
        "InterviewEndDate": "2023-05-21 14:41:35",
        "InterviewState": "Completed",
        "Flight": "SR 4590",
        "Dest": "Heraklion (HER)",
        "AirlineCode": "SUNDAIR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b89af860-2467-4f6e-8ee8-112b36604d0f",
        "InterviewEndDate": "2023-05-21 15:34:14",
        "InterviewState": "Completed",
        "Flight": "EJU5103",
        "Dest": "Valencia (VLC)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 15
    },
    {
        "InterviewId": "a7557957-9c00-4dbf-b83b-1a1c0df23db1",
        "InterviewEndDate": "2023-05-21 15:30:47",
        "InterviewState": "Completed",
        "Flight": "EJU5081",
        "Dest": "Rom (FCO)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 15
    },
    {
        "InterviewId": "65eec941-b5ca-4a81-a746-18ca672e13f9",
        "InterviewEndDate": "2023-05-21 14:46:39",
        "InterviewState": "Completed",
        "Flight": "SR 4590",
        "Dest": "Heraklion (HER)",
        "AirlineCode": "SUNDAIR",
        "InterviewerID": 16
    },
    {
        "InterviewId": "e9e41d70-cd1c-49cf-bc4e-605ddad84fe7",
        "InterviewEndDate": "2023-05-21 15:03:18",
        "InterviewState": "Completed",
        "Flight": "LX  967",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 16
    },
    {
        "InterviewId": "11a6d1db-35bb-4b8f-8cc7-5dba93ed8099",
        "InterviewEndDate": "2023-05-21 15:45:19",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 15
    },
    {
        "InterviewId": "4c2d9572-a9a7-493c-9fa7-1789384eb888",
        "InterviewEndDate": "2023-05-21 15:36:08",
        "InterviewState": "Completed",
        "Flight": "SK 2680",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "SAS-Scandinavian Airlines System",
        "InterviewerID": 15
    },
    {
        "InterviewId": "35e568b5-4f06-40cb-bbf4-1d54bf411ed2",
        "InterviewEndDate": "2023-05-23 16:19:41",
        "InterviewState": "Completed",
        "Flight": "AF 1235",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 22
    },
    {
        "InterviewId": "298a6816-c591-4e20-9d11-1e2d61913bfe",
        "InterviewEndDate": "2023-05-23 16:15:07",
        "InterviewState": "Completed",
        "Flight": "AF 1235",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 22
    },
    {
        "InterviewId": "e9f4ef56-02df-4ff8-b6df-0926a25d7b61",
        "InterviewEndDate": "2023-05-23 16:24:29",
        "InterviewState": "Completed",
        "Flight": "AF 1235",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 22
    },
    {
        "InterviewId": "ed2c387d-acb7-4c48-8157-27c05bf43477",
        "InterviewEndDate": "2023-05-23 16:19:18",
        "InterviewState": "Completed",
        "Flight": "AF 1235",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 22
    },
    {
        "InterviewId": "29a3d247-b676-4ba1-8447-3742aa9478b2",
        "InterviewEndDate": "2023-05-23 16:11:06",
        "InterviewState": "Completed",
        "Flight": "AF 1235",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 22
    },
    {
        "InterviewId": "89eeaf86-1e5d-4393-ac26-0069eced07c6",
        "InterviewEndDate": "2023-05-23 16:10:17",
        "InterviewState": "Completed",
        "Flight": "AF 1235",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 12
    },
    {
        "InterviewId": "f7c11c6e-e7cd-4c18-8d7b-70940c563a36",
        "InterviewEndDate": "2023-05-23 17:03:09",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "6e2fe64f-14c5-4078-9464-26cc83e61018",
        "InterviewEndDate": "2023-05-23 16:35:59",
        "InterviewState": "Completed",
        "Flight": "AF 1235",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 12
    },
    {
        "InterviewId": "3562150b-4fe6-41a2-8d62-2e150057639d",
        "InterviewEndDate": "2023-05-23 17:14:18",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 22
    },
    {
        "InterviewId": "bfd41d82-8cba-4c9b-bcbc-2fe6245a5916",
        "InterviewEndDate": "2023-05-23 17:06:31",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "f5a6683e-30dc-435d-a165-5f8d6f69558e",
        "InterviewEndDate": "2023-05-23 17:40:34",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "ead6fc67-5e04-4a62-9461-328f688d454c",
        "InterviewEndDate": "2023-05-23 18:28:53",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 22
    },
    {
        "InterviewId": "0a3c8d59-6ba4-4d47-9399-26872bad97e5",
        "InterviewEndDate": "2023-05-23 17:38:16",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 22
    },
    {
        "InterviewId": "7a46c1e1-6238-482f-9004-4915890e6600",
        "InterviewEndDate": "2023-05-23 17:36:34",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 22
    },
    {
        "InterviewId": "c119b6f2-6224-4979-93f6-5613a20aed4b",
        "InterviewEndDate": "2023-05-23 17:45:17",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 22
    },
    {
        "InterviewId": "9763370b-b33e-4132-883a-56e161e8cdf0",
        "InterviewEndDate": "2023-05-23 19:51:04",
        "InterviewState": "Completed",
        "Flight": "AY 1436",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 22
    },
    {
        "InterviewId": "5c7ebc44-e7a2-4390-94e2-664110fa63c8",
        "InterviewEndDate": "2023-05-23 17:52:19",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "ba15241f-93eb-4a8d-9ef8-57efeae4d0b1",
        "InterviewEndDate": "2023-05-23 17:49:43",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "64a3f43b-2802-4a45-ab3b-5d0af3f2d113",
        "InterviewEndDate": "2023-05-23 18:43:59",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "9f517ebe-a165-4026-afa8-44bfe2feab96",
        "InterviewEndDate": "2023-05-23 18:29:38",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "0fb218da-045e-47d1-beb1-6c7ce238c09f",
        "InterviewEndDate": "2023-05-23 18:59:21",
        "InterviewState": "Completed",
        "Flight": "EJU5153",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 22
    },
    {
        "InterviewId": "bb4a0d42-76e7-4474-815a-5da1d90855ba",
        "InterviewEndDate": "2023-05-23 19:03:02",
        "InterviewState": "Completed",
        "Flight": "EJU5153",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 22
    },
    {
        "InterviewId": "c6382185-85a3-4358-86ef-22d7fad1b90e",
        "InterviewEndDate": "2023-05-23 18:57:20",
        "InterviewState": "Completed",
        "Flight": "EJU5153",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "0303cd4f-1a2f-4250-b50d-324de32ae3b8",
        "InterviewEndDate": "2023-05-23 20:18:18",
        "InterviewState": "Completed",
        "Flight": "I2 3671",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 12
    },
    {
        "InterviewId": "9cbd08a7-dc68-4fce-82c4-13368584dcfb",
        "InterviewEndDate": "2023-05-23 20:34:04",
        "InterviewState": "Completed",
        "Flight": "I2 3671",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 12
    },
    {
        "InterviewId": "7232dfde-ba6d-434e-a65b-71cb2350177b",
        "InterviewEndDate": "2023-05-23 20:15:49",
        "InterviewState": "Completed",
        "Flight": "I2 3671",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 22
    },
    {
        "InterviewId": "437a52ea-64b5-4547-a775-5beff6f50f35",
        "InterviewEndDate": "2023-05-23 20:23:00",
        "InterviewState": "Completed",
        "Flight": "I2 3671",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 12
    },
    {
        "InterviewId": "f7553428-68ad-4d35-a6ea-4f46fa8df5e4",
        "InterviewEndDate": "2023-05-23 20:33:53",
        "InterviewState": "Completed",
        "Flight": "I2 3671",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 12
    },
    {
        "InterviewId": "184ac98f-c118-4d8d-8f5d-314b76eaf713",
        "InterviewEndDate": "2023-05-23 21:15:30",
        "InterviewState": "Completed",
        "Flight": "KL 1834",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 22
    },
    {
        "InterviewId": "9fbee9ff-d4db-45ae-943b-349ecfb8b5e0",
        "InterviewEndDate": "2023-05-23 21:20:24",
        "InterviewState": "Completed",
        "Flight": "KL 1834",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "243c9386-22dc-432e-bfdc-0c78bc1efd62",
        "InterviewEndDate": "2023-05-23 21:15:52",
        "InterviewState": "Completed",
        "Flight": "KL 1834",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "5ac8e589-ff96-41ef-8789-1a81fd37c793",
        "InterviewEndDate": "2023-05-23 20:47:38",
        "InterviewState": "Completed",
        "Flight": "I2 3671",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 12
    },
    {
        "InterviewId": "09f9e5cd-b83e-4311-a679-635fc72ce7f1",
        "InterviewEndDate": "2023-05-23 21:10:21",
        "InterviewState": "Completed",
        "Flight": "KL 1834",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "1337c273-5dd2-4419-8c24-57a4a11cd6d0",
        "InterviewEndDate": "2023-05-23 21:28:13",
        "InterviewState": "Completed",
        "Flight": "KL 1834",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 22
    },
    {
        "InterviewId": "a15d5a21-4e2b-4634-8f8d-16f7fb2ede89",
        "InterviewEndDate": "2023-05-23 21:46:28",
        "InterviewState": "Completed",
        "Flight": "KL 1834",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "36bf9c9d-bd6f-44ee-8c1e-5a72253bba7e",
        "InterviewEndDate": "2023-05-23 21:56:39",
        "InterviewState": "Completed",
        "Flight": "KL 1834",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "ec16034e-2e4f-4e37-a6cc-3cd0961ca6c1",
        "InterviewEndDate": "2023-05-24 07:50:28",
        "InterviewState": "Completed",
        "Flight": "EJU5009",
        "Dest": "Souda (CHQ)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c643e529-737a-4c8e-a3e1-270457f5a1d0",
        "InterviewEndDate": "2023-05-24 09:34:41",
        "InterviewState": "Completed",
        "Flight": "KL 1822",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 19
    },
    {
        "InterviewId": "98df7af6-a0d4-49fb-8f60-6ceb2905b41f",
        "InterviewEndDate": "2023-05-24 08:40:24",
        "InterviewState": "Completed",
        "Flight": "EJU4632",
        "Dest": "Paris (CDG)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "239937c7-d4ab-47d8-a5ae-4b2a241d9359",
        "InterviewEndDate": "2023-05-24 08:14:42",
        "InterviewState": "Completed",
        "Flight": "EW 4343",
        "Dest": "Salzburg (SZG)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 19
    },
    {
        "InterviewId": "a6c11249-d344-4bb7-85c3-6e359cc6e943",
        "InterviewEndDate": "2023-05-24 08:39:52",
        "InterviewState": "Completed",
        "Flight": "EJU4632",
        "Dest": "Paris (CDG)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 19
    },
    {
        "InterviewId": "c8287351-e441-408d-8373-5eb27c3a3883",
        "InterviewEndDate": "2023-05-24 08:43:31",
        "InterviewState": "Completed",
        "Flight": "EJU4632",
        "Dest": "Paris (CDG)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 19
    },
    {
        "InterviewId": "b238d4c4-2270-4757-b25a-197ed42d2a3a",
        "InterviewEndDate": "2023-05-24 08:39:51",
        "InterviewState": "Completed",
        "Flight": "EJU4632",
        "Dest": "Paris (CDG)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 19
    },
    {
        "InterviewId": "28bfce6d-e043-4cb6-8ac1-3fbc5af5491b",
        "InterviewEndDate": "2023-05-24 08:40:12",
        "InterviewState": "Completed",
        "Flight": "EJU4632",
        "Dest": "Paris (CDG)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "53e375d6-719c-4d2e-a990-0bd5bed0789c",
        "InterviewEndDate": "2023-05-24 09:32:37",
        "InterviewState": "Completed",
        "Flight": "KL 1822",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b82eca05-c0b5-48e4-a362-58c54ffb4e22",
        "InterviewEndDate": "2023-05-24 08:59:09",
        "InterviewState": "Completed",
        "Flight": "AY 1432",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 19
    },
    {
        "InterviewId": "bde58cb4-3f95-4537-8256-53892deeedbf",
        "InterviewEndDate": "2023-05-24 09:34:03",
        "InterviewState": "Completed",
        "Flight": "KL 1822",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "163da49e-386b-476c-a989-57856b3db470",
        "InterviewEndDate": "2023-05-24 09:07:40",
        "InterviewState": "Completed",
        "Flight": "AY 1432",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 19
    },
    {
        "InterviewId": "01f5b15b-14fb-48aa-8d15-69e9d735bb3d",
        "InterviewEndDate": "2023-05-24 08:59:27",
        "InterviewState": "Completed",
        "Flight": "AY 1432",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 19
    },
    {
        "InterviewId": "b86cdf38-3ad9-4f94-9fe4-17bedd0df4e7",
        "InterviewEndDate": "2023-05-24 09:27:30",
        "InterviewState": "Completed",
        "Flight": "KL 1822",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 19
    },
    {
        "InterviewId": "4eab7762-91cf-4684-bbc7-288cc1f49de4",
        "InterviewEndDate": "2023-05-24 09:19:03",
        "InterviewState": "Completed",
        "Flight": "KL 1822",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 19
    },
    {
        "InterviewId": "5a953fa0-75e4-4bc6-8e49-0d1fed2f0869",
        "InterviewEndDate": "2023-05-24 10:20:53",
        "InterviewState": "Completed",
        "Flight": "EW 8002",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 19
    },
    {
        "InterviewId": "73a01c96-d8f7-488e-a310-4adb493329c2",
        "InterviewEndDate": "2023-05-24 10:14:21",
        "InterviewState": "Completed",
        "Flight": "EW 8002",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 19
    },
    {
        "InterviewId": "b582e991-74ed-415f-83e6-6960570e6270",
        "InterviewEndDate": "2023-05-24 10:12:47",
        "InterviewState": "Completed",
        "Flight": "EW 8002",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "075b2de1-94dc-4f47-a6c4-661d5e03a318",
        "InterviewEndDate": "2023-05-24 10:19:31",
        "InterviewState": "Completed",
        "Flight": "EW 8002",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "5290452d-353e-4aa3-81a5-26ab66628dc8",
        "InterviewEndDate": "2023-05-24 10:44:30",
        "InterviewState": "Completed",
        "Flight": "EJU7334",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2ff2a27a-a515-48ab-b044-1b4497d263b9",
        "InterviewEndDate": "2023-05-24 10:44:53",
        "InterviewState": "Completed",
        "Flight": "EJU7334",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c9054087-32fa-43e6-9e2a-b10932c2b2a9",
        "InterviewEndDate": "2023-04-05 18:46:54",
        "InterviewState": "Completed",
        "Flight": "N0  601",
        "Dest": "New York (JFK)",
        "AirlineCode": "Norse Atlantic Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "4cbd0758-20cc-4d77-b765-7355624dedd9",
        "InterviewEndDate": "2023-03-31 09:42:53",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b7c1da1a-073a-4e91-a701-b510bb9bcfe5",
        "InterviewEndDate": "2023-03-31 09:46:06",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "390c21c0-deb1-4af4-ab53-7cd5222884cb",
        "InterviewEndDate": "2023-03-31 09:37:59",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9c72836b-e203-41a8-bab4-a5e948ee350d",
        "InterviewEndDate": "2023-03-31 09:50:34",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 14
    },
    {
        "InterviewId": "0dcf4c07-6e3c-49b6-b9a7-8c794314b55a",
        "InterviewEndDate": "2023-03-31 09:46:54",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "7b13fd2a-59a0-4a26-ad2d-d96d9eed774d",
        "InterviewEndDate": "2023-03-31 09:54:53",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "8277310c-fc06-439d-b8e3-780b1c444daf",
        "InterviewEndDate": "2023-03-31 09:50:49",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "ec54f2a1-6841-4d46-9618-9acb66d64a2f",
        "InterviewEndDate": "2023-03-31 10:21:57",
        "InterviewState": "Completed",
        "Flight": "TK 1722",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "fc61e28d-d3d0-4e9f-8395-ac83730e798d",
        "InterviewEndDate": "2023-03-31 10:27:34",
        "InterviewState": "Completed",
        "Flight": "TK 1722",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 14
    },
    {
        "InterviewId": "ffeb7d34-64a1-4b5c-a673-befafc36ff62",
        "InterviewEndDate": "2023-03-31 10:28:45",
        "InterviewState": "Completed",
        "Flight": "TK 1722",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "8b106bf1-fba8-4ac8-944c-8091dc294a8b",
        "InterviewEndDate": "2023-03-31 10:18:09",
        "InterviewState": "Completed",
        "Flight": "TK 1722",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 14
    },
    {
        "InterviewId": "b2ce8907-a320-4749-8a6c-9d7801b3e504",
        "InterviewEndDate": "2023-03-31 10:30:04",
        "InterviewState": "Completed",
        "Flight": "TK 1722",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "76e4360a-e933-46cd-9e59-8e53bd7eb7c4",
        "InterviewEndDate": "2023-03-31 10:36:25",
        "InterviewState": "Completed",
        "Flight": "TK 1722",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "5d5bee34-0c1b-4cba-b0cd-e14e06486932",
        "InterviewEndDate": "2023-03-31 10:56:24",
        "InterviewState": "Completed",
        "Flight": "TK 1722",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 14
    },
    {
        "InterviewId": "ad6c1cef-4c0d-4a6c-9d89-9b57aa8ddcac",
        "InterviewEndDate": "2023-03-31 11:21:40",
        "InterviewState": "Completed",
        "Flight": "LX  977",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 1
    },
    {
        "InterviewId": "1c09a0ac-395b-4942-8689-c914e133affa",
        "InterviewEndDate": "2023-03-31 11:13:46",
        "InterviewState": "Completed",
        "Flight": "LX  977",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 1
    },
    {
        "InterviewId": "c41b0d45-c54c-4600-8415-bbe6590e333c",
        "InterviewEndDate": "2023-03-31 11:13:28",
        "InterviewState": "Completed",
        "Flight": "LX  977",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 1
    },
    {
        "InterviewId": "47c3a04a-6a55-4e39-ba56-82cd8cd47a9f",
        "InterviewEndDate": "2023-03-31 11:14:51",
        "InterviewState": "Completed",
        "Flight": "LX  977",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 14
    },
    {
        "InterviewId": "3e260ef1-e2c1-4ea7-b371-748ae3c4f270",
        "InterviewEndDate": "2023-03-31 11:15:29",
        "InterviewState": "Completed",
        "Flight": "LX  977",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 14
    },
    {
        "InterviewId": "84e9fb14-fecc-497d-9065-a578a206973e",
        "InterviewEndDate": "2023-03-31 11:54:34",
        "InterviewState": "Completed",
        "Flight": "BA 8492",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 14
    },
    {
        "InterviewId": "408de04f-5d31-42e7-919d-ad442a8d063d",
        "InterviewEndDate": "2023-03-31 11:55:05",
        "InterviewState": "Completed",
        "Flight": "BA 8492",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 14
    },
    {
        "InterviewId": "c6b70be8-c6a4-46fa-a06d-a20d5a431f68",
        "InterviewEndDate": "2023-03-31 11:54:01",
        "InterviewState": "Completed",
        "Flight": "BA 8492",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 14
    },
    {
        "InterviewId": "068146d5-931e-4bc0-bc0b-b3d877b4c2a3",
        "InterviewEndDate": "2023-03-31 12:09:06",
        "InterviewState": "Completed",
        "Flight": "BA 8492",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b1e84045-b49b-4018-9baa-77bd8af8e109",
        "InterviewEndDate": "2023-03-31 11:53:37",
        "InterviewState": "Completed",
        "Flight": "BA 8492",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 14
    },
    {
        "InterviewId": "7b405477-924a-4899-9050-9d586d33169e",
        "InterviewEndDate": "2023-03-31 12:09:05",
        "InterviewState": "Completed",
        "Flight": "BA 8492",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 14
    },
    {
        "InterviewId": "042e46c3-e1a3-450b-af95-cff7d7f2dfae",
        "InterviewEndDate": "2023-03-31 12:20:45",
        "InterviewState": "Completed",
        "Flight": "BA 8492",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 14
    },
    {
        "InterviewId": "6278d001-d6f8-4c21-83db-846c2d9c4597",
        "InterviewEndDate": "2023-03-31 12:18:49",
        "InterviewState": "Completed",
        "Flight": "BA 8492",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "95c7b9fa-8e06-475f-a3e4-736fcd7fb670",
        "InterviewEndDate": "2023-03-31 12:24:22",
        "InterviewState": "Completed",
        "Flight": "BA 8492",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "2abc48f0-0d89-47ba-aae7-95faa36c5b03",
        "InterviewEndDate": "2023-03-31 12:19:28",
        "InterviewState": "Completed",
        "Flight": "BA 8492",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 14
    },
    {
        "InterviewId": "c9bcd97f-db50-4971-9950-b309e77bad32",
        "InterviewEndDate": "2023-03-31 13:19:51",
        "InterviewState": "Completed",
        "Flight": "LH 1937",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 1
    },
    {
        "InterviewId": "c93b2382-c765-4010-a14a-c557d2bd4c6d",
        "InterviewEndDate": "2023-03-31 13:16:43",
        "InterviewState": "Completed",
        "Flight": "LH  189",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 14
    },
    {
        "InterviewId": "2875e7df-e065-42af-8633-d6762fa61d6e",
        "InterviewEndDate": "2023-03-31 13:17:31",
        "InterviewState": "Completed",
        "Flight": "LH 1937",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 14
    },
    {
        "InterviewId": "072e33dc-ed77-481b-8bf5-74280d9b8189",
        "InterviewEndDate": "2023-03-31 13:35:20",
        "InterviewState": "Completed",
        "Flight": "LH 1937",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 14
    },
    {
        "InterviewId": "2244bf42-7b94-4684-8c4e-b28de18e22e6",
        "InterviewEndDate": "2023-03-31 14:01:05",
        "InterviewState": "Completed",
        "Flight": "LH 1939",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 14
    },
    {
        "InterviewId": "6455c8ca-780d-4c8f-b406-ced5c8fd1f74",
        "InterviewEndDate": "2023-03-31 14:00:04",
        "InterviewState": "Completed",
        "Flight": "LH 1939",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 1
    },
    {
        "InterviewId": "c39f2ed3-f781-4819-b785-ca29a8eb1fd1",
        "InterviewEndDate": "2023-03-31 14:32:53",
        "InterviewState": "Completed",
        "Flight": "EZY3162",
        "Dest": "Glasgow (GLA)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "7300fb5c-8a5d-454a-9c4b-dbff38304b14",
        "InterviewEndDate": "2023-03-31 14:29:51",
        "InterviewState": "Completed",
        "Flight": "EZY3162",
        "Dest": "Glasgow (GLA)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9bbdcdb2-079a-4308-a6b7-a832efc64dd9",
        "InterviewEndDate": "2023-03-31 14:30:19",
        "InterviewState": "Completed",
        "Flight": "EZY3162",
        "Dest": "Glasgow (GLA)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "0efe69b7-5d0a-49f2-8a3e-747f063e1c91",
        "InterviewEndDate": "2023-03-31 14:30:32",
        "InterviewState": "Completed",
        "Flight": "EZY3162",
        "Dest": "Glasgow (GLA)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 14
    },
    {
        "InterviewId": "427f749c-75df-46b8-9a3e-d2b38efddc61",
        "InterviewEndDate": "2023-03-31 15:01:14",
        "InterviewState": "Completed",
        "Flight": "XQ  947",
        "Dest": "Izmir (ADB)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 1
    },
    {
        "InterviewId": "82ee64c3-13d7-4f53-aa93-c1252d9763d4",
        "InterviewEndDate": "2023-03-31 14:59:10",
        "InterviewState": "Completed",
        "Flight": "XQ  947",
        "Dest": "Izmir (ADB)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 1
    },
    {
        "InterviewId": "a9f3938e-ccde-420d-89b3-c3b253ed45a6",
        "InterviewEndDate": "2023-03-31 14:50:40",
        "InterviewState": "Completed",
        "Flight": "EZY3162",
        "Dest": "Glasgow (GLA)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "748ae1ab-d166-444a-bf38-873ab7d6c86f",
        "InterviewEndDate": "2023-03-31 14:50:57",
        "InterviewState": "Completed",
        "Flight": "EZY3162",
        "Dest": "Glasgow (GLA)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 14
    },
    {
        "InterviewId": "e3e86d63-7659-4800-af62-c361d0c81c17",
        "InterviewEndDate": "2023-03-31 14:59:36",
        "InterviewState": "Completed",
        "Flight": "EZY3162",
        "Dest": "Glasgow (GLA)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 14
    },
    {
        "InterviewId": "26ac0440-1a2f-49dd-be19-bea428057dfe",
        "InterviewEndDate": "2023-03-31 15:04:34",
        "InterviewState": "Completed",
        "Flight": "XQ  947",
        "Dest": "Izmir (ADB)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 14
    },
    {
        "InterviewId": "2a5cef16-7068-4d81-94e9-b010c8ef4a88",
        "InterviewEndDate": "2023-03-31 15:31:05",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "5ef72cd7-bb78-4591-825c-c59a51569ce2",
        "InterviewEndDate": "2023-03-31 15:38:08",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 14
    },
    {
        "InterviewId": "faf14dd4-4b73-4f5e-9ad5-9659d2c154c1",
        "InterviewEndDate": "2023-03-31 15:28:07",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3352978f-04d6-4a1a-a1bf-a113a67a8de3",
        "InterviewEndDate": "2023-03-31 15:25:41",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 14
    },
    {
        "InterviewId": "64df373f-c40a-4fc7-adc9-a051eff58fa0",
        "InterviewEndDate": "2023-03-31 15:24:12",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 14
    },
    {
        "InterviewId": "2d0d8126-efdd-4f46-ad5f-83049c4ba208",
        "InterviewEndDate": "2023-04-01 15:09:52",
        "InterviewState": "Completed",
        "Flight": "LH  191",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "e1468681-cad8-496b-9381-d86ab1f4554e",
        "InterviewEndDate": "2023-04-01 15:06:13",
        "InterviewState": "Completed",
        "Flight": "LH  191",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "074c486b-391e-4d91-b9f0-b9be22086147",
        "InterviewEndDate": "2023-04-01 15:32:04",
        "InterviewState": "Completed",
        "Flight": "MS  732",
        "Dest": "Kairo (CAI)",
        "AirlineCode": "Egypt Air",
        "InterviewerID": 11
    },
    {
        "InterviewId": "1d12e781-c3d7-4b7d-9370-a6841a981a68",
        "InterviewEndDate": "2023-04-01 16:25:49",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f63f8ee1-567e-46c2-a9b3-91cfc1a8c9e1",
        "InterviewEndDate": "2023-04-01 16:24:36",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2bfd1b65-f6a1-453e-8849-78c65c2fd2e2",
        "InterviewEndDate": "2023-04-01 16:22:31",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "88900ebc-da50-438e-af5b-dbd03675b5d3",
        "InterviewEndDate": "2023-04-01 17:28:15",
        "InterviewState": "Completed",
        "Flight": "A3  823",
        "Dest": "Athen (ATH)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2f0003b4-7c57-46ab-8aea-926ea4559f90",
        "InterviewEndDate": "2023-04-01 17:18:46",
        "InterviewState": "Completed",
        "Flight": "SK 2680",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "SAS-Scandinavian Airlines System",
        "InterviewerID": 11
    },
    {
        "InterviewId": "3aad95d7-693d-44ac-aaf4-dce78f0e05a7",
        "InterviewEndDate": "2023-04-01 17:34:21",
        "InterviewState": "Completed",
        "Flight": "A3  823",
        "Dest": "Athen (ATH)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "91fa17ee-c65b-4467-ba7f-9a9aeffa28c0",
        "InterviewEndDate": "2023-04-01 18:47:10",
        "InterviewState": "Completed",
        "Flight": "SN 2588",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "708e35fa-b78d-44aa-8262-762fad2eeb29",
        "InterviewEndDate": "2023-04-01 19:03:19",
        "InterviewState": "Completed",
        "Flight": "SN 2588",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "71b99405-ae13-4315-81b6-c17c845d493f",
        "InterviewEndDate": "2023-04-01 19:25:23",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "10f1e5d3-4533-471b-bec8-bd9c7d619607",
        "InterviewEndDate": "2023-04-01 19:24:25",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "97b0dc7e-90e4-4dac-badd-d06254819360",
        "InterviewEndDate": "2023-04-01 19:20:25",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2e60ee2c-8181-4401-81e6-be09e360b526",
        "InterviewEndDate": "2023-04-01 19:46:42",
        "InterviewState": "Completed",
        "Flight": "I2 3671",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 11
    },
    {
        "InterviewId": "29f9425b-5486-4186-a7a4-97bd59e553dd",
        "InterviewEndDate": "2023-04-01 19:46:44",
        "InterviewState": "Completed",
        "Flight": "I2 3671",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 11
    },
    {
        "InterviewId": "cb2202c2-3295-4e1c-bd24-9149df26d877",
        "InterviewEndDate": "2023-04-01 19:49:21",
        "InterviewState": "Completed",
        "Flight": "I2 3671",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8f6b2e59-bd7f-49c7-b210-af964034b420",
        "InterviewEndDate": "2023-04-01 21:29:42",
        "InterviewState": "Completed",
        "Flight": "EI  337",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d0dd7fc7-0bdd-478b-9037-95ba610fce8b",
        "InterviewEndDate": "2023-04-01 21:24:59",
        "InterviewState": "Completed",
        "Flight": "EI  337",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 11
    },
    {
        "InterviewId": "90974854-7390-47cb-a5f1-c37b5cd90821",
        "InterviewEndDate": "2023-04-04 08:30:29",
        "InterviewState": "Completed",
        "Flight": "EW  013",
        "Dest": "K\u00f6ln (CGN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "99779b9d-8230-49b4-abec-c147b6662546",
        "InterviewEndDate": "2023-04-04 08:12:37",
        "InterviewState": "Completed",
        "Flight": "EJU5063",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b2fbf1e1-9507-43b1-b254-b61fc1cc7605",
        "InterviewEndDate": "2023-04-04 08:21:41",
        "InterviewState": "Completed",
        "Flight": "EW  013",
        "Dest": "K\u00f6ln (CGN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "5704e6b8-f18a-4854-8735-9e60107bf816",
        "InterviewEndDate": "2023-04-04 08:34:26",
        "InterviewState": "Completed",
        "Flight": "EW 8342",
        "Dest": "Salzburg (SZG)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "918bda0a-a811-42b0-9e55-a546f22f0999",
        "InterviewEndDate": "2023-04-04 08:38:54",
        "InterviewState": "Completed",
        "Flight": "EW 8342",
        "Dest": "Salzburg (SZG)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "90df1dfd-131f-409c-a5fb-b8d29b450cc1",
        "InterviewEndDate": "2023-04-04 08:57:58",
        "InterviewState": "Completed",
        "Flight": "EW 8342",
        "Dest": "Salzburg (SZG)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ee826190-7780-4aca-a5f1-b3a1da1a592d",
        "InterviewEndDate": "2023-04-04 09:17:53",
        "InterviewState": "Completed",
        "Flight": "KL 1822",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "599f98c7-7003-4c6b-b78c-adfb741a5df2",
        "InterviewEndDate": "2023-04-04 09:32:10",
        "InterviewState": "Completed",
        "Flight": "KL 1822",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "1d436590-7c3b-4789-9885-a49c7a8edad7",
        "InterviewEndDate": "2023-04-04 10:14:48",
        "InterviewState": "Completed",
        "Flight": "AF 1435",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 11
    },
    {
        "InterviewId": "eafb0999-992d-4b10-b7b4-c32505f8a31e",
        "InterviewEndDate": "2023-04-04 10:18:07",
        "InterviewState": "Completed",
        "Flight": "AF 1435",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 11
    },
    {
        "InterviewId": "95e3e125-342f-4b66-994b-cd273f653596",
        "InterviewEndDate": "2023-04-04 10:24:19",
        "InterviewState": "Completed",
        "Flight": "AF 1435",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 11
    },
    {
        "InterviewId": "7a6ad852-a4b6-440c-87af-b4f6ac32f482",
        "InterviewEndDate": "2023-04-04 10:30:13",
        "InterviewState": "Completed",
        "Flight": "AF 1435",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f7ea86bc-76de-4521-909e-871905f183fe",
        "InterviewEndDate": "2023-04-04 10:56:23",
        "InterviewState": "Completed",
        "Flight": "EW 8370",
        "Dest": "Lanzarote (ACE)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ba0feafa-f5d0-4e02-ac94-b37c9d2ab15e",
        "InterviewEndDate": "2023-04-04 10:58:37",
        "InterviewState": "Completed",
        "Flight": "EW 8370",
        "Dest": "Lanzarote (ACE)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b9c52431-f962-4895-9225-7bd87d7fe8ad",
        "InterviewEndDate": "2023-04-04 13:04:24",
        "InterviewState": "Completed",
        "Flight": "EJU5263",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "05ce8947-8ec4-4253-8c3d-e16785942c2a",
        "InterviewEndDate": "2023-04-04 13:14:54",
        "InterviewState": "Completed",
        "Flight": "SK 1674",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "SAS-Scandinavian Airlines System",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8d4e7512-45fb-4571-a473-b15e8e692c29",
        "InterviewEndDate": "2023-04-04 13:24:32",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "1bf9aa10-a2ed-4970-acd8-9529aac73621",
        "InterviewEndDate": "2023-04-04 14:09:15",
        "InterviewState": "Completed",
        "Flight": "FI  529",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "Icelandair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "e09322ec-8194-43b2-b72c-95a8b5c19d45",
        "InterviewEndDate": "2023-04-04 14:03:24",
        "InterviewState": "Completed",
        "Flight": "FI  529",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "Icelandair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "1b9ce9b3-0e30-4fdf-b2e7-88f0ff681acf",
        "InterviewEndDate": "2023-04-04 14:07:48",
        "InterviewState": "Completed",
        "Flight": "FI  529",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "Icelandair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "67d67982-5765-4bf5-9818-789c4406455b",
        "InterviewEndDate": "2023-04-04 14:11:44",
        "InterviewState": "Completed",
        "Flight": "FI  529",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "Icelandair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ca460a7e-8e08-4036-8bd3-bd14e5127c1d",
        "InterviewEndDate": "2023-04-05 07:49:19",
        "InterviewState": "Completed",
        "Flight": "EJU5247",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "a1924198-7b57-40c8-8870-8520d69637c4",
        "InterviewEndDate": "2023-04-05 08:17:28",
        "InterviewState": "Completed",
        "Flight": "EJU5063",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ae92b150-a2c0-4640-9d96-be0a0f0008f0",
        "InterviewEndDate": "2023-04-05 09:05:04",
        "InterviewState": "Completed",
        "Flight": "AY 1432",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "7991081b-0344-43f4-9010-9e3b24744d77",
        "InterviewEndDate": "2023-04-05 08:13:28",
        "InterviewState": "Completed",
        "Flight": "EJU5063",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "6fa49f5c-f8eb-40f9-a90d-9c880d92b29b",
        "InterviewEndDate": "2023-04-05 09:12:42",
        "InterviewState": "Completed",
        "Flight": "AY 1432",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ae7d0bac-3c74-4b30-a532-d82931d20ff8",
        "InterviewEndDate": "2023-04-05 09:34:24",
        "InterviewState": "Completed",
        "Flight": "EJU5261",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "6925d17e-18b6-49b5-9ad4-9cb80ca917c6",
        "InterviewEndDate": "2023-04-05 10:33:25",
        "InterviewState": "Completed",
        "Flight": "I2 3673",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 11
    },
    {
        "InterviewId": "5df81810-0927-45d9-8ad6-83d4362e9d45",
        "InterviewEndDate": "2023-04-05 11:45:48",
        "InterviewState": "Completed",
        "Flight": "LH  185",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d298b2f6-99c2-4144-8207-a3c96f5e0ead",
        "InterviewEndDate": "2023-04-05 10:34:01",
        "InterviewState": "Completed",
        "Flight": "EJU4898",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d9640cb2-6439-4ac1-afbf-c292ff15f13f",
        "InterviewEndDate": "2023-04-05 11:47:31",
        "InterviewState": "Completed",
        "Flight": "LH  185",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "1beb7466-3db0-4be0-a0ec-cecdfff96e59",
        "InterviewEndDate": "2023-04-05 11:51:44",
        "InterviewState": "Completed",
        "Flight": "LH  185",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ced989fe-d840-483a-a54d-95a7b553d9c2",
        "InterviewEndDate": "2023-04-05 11:53:33",
        "InterviewState": "Completed",
        "Flight": "LH  185",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b0548952-0057-4c22-bf66-b4835612c055",
        "InterviewEndDate": "2023-04-05 11:54:45",
        "InterviewState": "Completed",
        "Flight": "LH  185",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "30ef9a4c-8057-45af-a3e4-e17b1a6a4d69",
        "InterviewEndDate": "2023-04-05 12:22:09",
        "InterviewState": "Completed",
        "Flight": "FR 2599",
        "Dest": "Riga (RIX)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "98f803e4-c3f7-4c35-a42e-d54430e5cb2d",
        "InterviewEndDate": "2023-04-05 12:23:38",
        "InterviewState": "Completed",
        "Flight": "BT  212",
        "Dest": "Riga (RIX)",
        "AirlineCode": "Air Baltic",
        "InterviewerID": 11
    },
    {
        "InterviewId": "9f651233-b3a5-4db0-a7e0-a5b6dad6bc8b",
        "InterviewEndDate": "2023-04-05 12:25:52",
        "InterviewState": "Completed",
        "Flight": "FR 2599",
        "Dest": "Riga (RIX)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "38ff4ffa-7e21-42d2-bc04-c7ea4e492827",
        "InterviewEndDate": "2023-04-05 13:32:35",
        "InterviewState": "Completed",
        "Flight": "FR  216",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c403b4e4-4002-4c52-ba54-ab0cfad337fe",
        "InterviewEndDate": "2023-04-05 13:11:26",
        "InterviewState": "Completed",
        "Flight": "FR  216",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "969d0448-5d59-42f2-aa88-a0d4806e2a5c",
        "InterviewEndDate": "2023-04-05 13:02:20",
        "InterviewState": "Completed",
        "Flight": "FR  216",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "e451091f-82a0-4c0b-adf5-c6663b73c949",
        "InterviewEndDate": "2023-04-05 14:00:18",
        "InterviewState": "Completed",
        "Flight": "LH  189",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "0fb33998-4886-41d6-a1d5-d63b603a83c4",
        "InterviewEndDate": "2023-04-05 13:53:52",
        "InterviewState": "Completed",
        "Flight": "LH  189",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "16e12f08-75d2-491d-a852-cec041d141c0",
        "InterviewEndDate": "2023-04-05 16:11:16",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "53d97716-f4bf-4f4d-b726-b01316513f1d",
        "InterviewEndDate": "2023-04-05 16:07:11",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "84fa52eb-8b26-4517-9d88-93e563b0aeb1",
        "InterviewEndDate": "2023-04-05 16:17:28",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "0995ab59-7ac7-4908-aeb8-7b76f680e38e",
        "InterviewEndDate": "2023-04-05 16:18:38",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "54fb9d81-cec3-470d-90ca-d236cd4abab9",
        "InterviewEndDate": "2023-04-05 16:16:38",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b1e0472f-f0a0-4ffb-8d7f-b3f7b6a0f066",
        "InterviewEndDate": "2023-04-05 16:25:23",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "e03c5f80-6ded-4802-9b87-cf6306bfe55c",
        "InterviewEndDate": "2023-04-05 16:38:39",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "5e3e1a01-ad3a-436e-971c-99eccd18bde5",
        "InterviewEndDate": "2023-04-05 16:29:03",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "47209eba-3c89-435e-a5de-a31c9bff9ab0",
        "InterviewEndDate": "2023-04-05 16:27:28",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "fa62529d-85a8-475d-9869-b32d87368d9b",
        "InterviewEndDate": "2023-04-05 16:46:15",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "ab77f850-fdb9-4771-ac46-b372af81e383",
        "InterviewEndDate": "2023-04-05 17:12:30",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "542830ee-2069-497b-9e97-e0685379d996",
        "InterviewEndDate": "2023-04-05 18:00:13",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4ed681f9-0b03-4c78-b691-96c056a47f58",
        "InterviewEndDate": "2023-04-05 18:08:11",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9cc4c177-fdf3-4cb8-97c0-940b9bf62e63",
        "InterviewEndDate": "2023-04-05 18:08:39",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 1
    },
    {
        "InterviewId": "0a3213b4-934b-4a4a-b20a-7be1c6221089",
        "InterviewEndDate": "2023-04-05 18:49:41",
        "InterviewState": "Completed",
        "Flight": "N0  601",
        "Dest": "New York (JFK)",
        "AirlineCode": "Norse Atlantic Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "c7faa241-836b-45fe-a78b-d9ed1446dc10",
        "InterviewEndDate": "2023-04-05 18:52:54",
        "InterviewState": "Completed",
        "Flight": "N0  601",
        "Dest": "New York (JFK)",
        "AirlineCode": "Norse Atlantic Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "66a4272d-9366-4204-96df-73c0530995dc",
        "InterviewEndDate": "2023-04-07 16:14:39",
        "InterviewState": "Completed",
        "Flight": "D8 4506",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Norwegian Air Sweden AOC",
        "InterviewerID": 998
    },
    {
        "InterviewId": "29b152d5-cb83-4570-ba54-7d86d75fb0ff",
        "InterviewEndDate": "2023-04-07 15:40:13",
        "InterviewState": "Completed",
        "Flight": "FR 2599",
        "Dest": "Riga (RIX)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 998
    },
    {
        "InterviewId": "2ee91aab-e418-4d23-a057-956550c7173e",
        "InterviewEndDate": "2023-04-07 16:16:31",
        "InterviewState": "Completed",
        "Flight": "D8 4506",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Norwegian Air Sweden AOC",
        "InterviewerID": 998
    },
    {
        "InterviewId": "1c39dfa0-6450-4fb7-8ffb-b7d75ba53d68",
        "InterviewEndDate": "2023-04-07 16:02:20",
        "InterviewState": "Completed",
        "Flight": "D8 4506",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Norwegian Air Sweden AOC",
        "InterviewerID": 998
    },
    {
        "InterviewId": "9c456e96-5868-47b9-a98e-c1b392e1f014",
        "InterviewEndDate": "2023-04-07 17:10:15",
        "InterviewState": "Completed",
        "Flight": "EZY2934",
        "Dest": "Bristol (BRS)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 998
    },
    {
        "InterviewId": "c99c4caf-ecea-449a-aaac-b310f75b9bc5",
        "InterviewEndDate": "2023-04-07 16:58:09",
        "InterviewState": "Completed",
        "Flight": "EZY2934",
        "Dest": "Bristol (BRS)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 998
    },
    {
        "InterviewId": "5dd7967a-eb7d-4956-be8c-a56d0636fb44",
        "InterviewEndDate": "2023-04-07 17:41:29",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "269a41bb-fa8d-46e2-b2a7-d573bfea4333",
        "InterviewEndDate": "2023-04-07 17:44:38",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "3683220c-83ee-438a-aa51-b0c2f0fa5945",
        "InterviewEndDate": "2023-04-07 18:44:38",
        "InterviewState": "Completed",
        "Flight": "SN 2588",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "8c0b0ecc-62c9-4cb8-b2d8-ab99d8f05af9",
        "InterviewEndDate": "2023-04-07 18:37:42",
        "InterviewState": "Completed",
        "Flight": "TO 3407",
        "Dest": "Paris (ORY)",
        "AirlineCode": "Transavia France",
        "InterviewerID": 1
    },
    {
        "InterviewId": "5946d162-c5bb-4a69-866b-c8b51484b28a",
        "InterviewEndDate": "2023-04-07 18:46:52",
        "InterviewState": "Completed",
        "Flight": "LO  390",
        "Dest": "Warschau (WAW)",
        "AirlineCode": "LOT Polish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "ef6ecc2a-824a-4c2e-872e-b9179085bda6",
        "InterviewEndDate": "2023-04-07 19:10:56",
        "InterviewState": "Completed",
        "Flight": "EW 8048",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 998
    },
    {
        "InterviewId": "6d00f7ba-3b92-4ba4-8fa9-b0a3abef906d",
        "InterviewEndDate": "2023-04-07 19:31:36",
        "InterviewState": "Completed",
        "Flight": "TK 1724",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "f075099b-4e68-4e04-a48c-890fefb38069",
        "InterviewEndDate": "2023-04-07 19:36:54",
        "InterviewState": "Completed",
        "Flight": "TK 1724",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "23967a43-7a2c-40db-a450-bc09697d2383",
        "InterviewEndDate": "2023-04-07 19:39:08",
        "InterviewState": "Completed",
        "Flight": "TK 1724",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4f541e1f-bfe1-4bb7-a988-dc6f2baef541",
        "InterviewEndDate": "2023-04-07 19:43:47",
        "InterviewState": "Completed",
        "Flight": "TK 1724",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "db1caca3-b2f2-423e-9429-d38d60056f16",
        "InterviewEndDate": "2023-04-07 19:45:50",
        "InterviewState": "Completed",
        "Flight": "TK 1724",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "babcd41e-b578-4441-ae95-8e2e434510a2",
        "InterviewEndDate": "2023-04-07 19:50:21",
        "InterviewState": "Completed",
        "Flight": "TK 1724",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "fb9afdfe-bb83-4696-bc5f-79a4e4413c75",
        "InterviewEndDate": "2023-04-11 16:59:13",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "23689b5e-dd7e-4c50-b432-dfc2cb08dfb5",
        "InterviewEndDate": "2023-04-11 16:58:55",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "d23a9dc7-eae8-465e-b8d8-d066f374bae2",
        "InterviewEndDate": "2023-04-14 15:58:48",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "25ba548f-2818-4f53-b1fe-96984bdc8e1a",
        "InterviewEndDate": "2023-04-10 07:33:30",
        "InterviewState": "Completed",
        "Flight": "EJU5147",
        "Dest": "Paris (CDG)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "4eeec6e6-f8fc-4cb4-84ef-7528b85c9a74",
        "InterviewEndDate": "2023-04-10 08:22:29",
        "InterviewState": "Completed",
        "Flight": "EZS1186",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 11
    },
    {
        "InterviewId": "9def63fe-8657-454a-a4b1-a84da578d523",
        "InterviewEndDate": "2023-04-10 08:21:55",
        "InterviewState": "Completed",
        "Flight": "EZS1186",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 11
    },
    {
        "InterviewId": "5a830617-56e6-4273-989a-98dbf9b66390",
        "InterviewEndDate": "2023-04-10 08:21:20",
        "InterviewState": "Completed",
        "Flight": "EZS1186",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 11
    },
    {
        "InterviewId": "6876da1a-0d85-4df2-b71f-cbd8a9af6c86",
        "InterviewEndDate": "2023-04-10 08:38:42",
        "InterviewState": "Completed",
        "Flight": "EW 4601",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "9fd22267-a092-4d3b-a5a4-daa7196e45e2",
        "InterviewEndDate": "2023-04-10 09:31:34",
        "InterviewState": "Completed",
        "Flight": "EJU5145",
        "Dest": "Nizza (NCE)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c267cbdd-f635-4bdc-8904-8c6dc0d6f496",
        "InterviewEndDate": "2023-04-10 12:33:21",
        "InterviewState": "Completed",
        "Flight": "KL 1824",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c7ed3077-042f-4fc7-ab52-aea26b61f203",
        "InterviewEndDate": "2023-04-10 13:14:03",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d0019cb2-4a66-4626-93d8-8f51a647304d",
        "InterviewEndDate": "2023-04-10 10:22:08",
        "InterviewState": "Completed",
        "Flight": "EJU5103",
        "Dest": "Valencia (VLC)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8d42e074-caf5-4d41-88dd-df3e6f0cd5bb",
        "InterviewEndDate": "2023-04-10 10:15:49",
        "InterviewState": "Completed",
        "Flight": "EJU5103",
        "Dest": "Valencia (VLC)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "61b31978-4c54-491b-ba97-d96cfb73a043",
        "InterviewEndDate": "2023-04-10 12:06:09",
        "InterviewState": "Completed",
        "Flight": "KL 1824",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ecdd08b0-e0aa-4754-b929-a12f3dbe9db7",
        "InterviewEndDate": "2023-04-10 13:15:26",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "9f44c9cf-4440-49a7-9218-b871e725fc6e",
        "InterviewEndDate": "2023-04-10 13:20:33",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "746b3f93-befb-417b-b4e6-98c662154282",
        "InterviewEndDate": "2023-04-10 14:19:00",
        "InterviewState": "Completed",
        "Flight": "EJU5071",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "25e6a1fe-b657-4bc6-8836-c372932836b8",
        "InterviewEndDate": "2023-04-11 07:51:54",
        "InterviewState": "Completed",
        "Flight": "LH  175",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "1efa3d99-5d87-44f3-ad10-79eae1c5d2a3",
        "InterviewEndDate": "2023-04-11 07:55:31",
        "InterviewState": "Completed",
        "Flight": "LH  175",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "cbb35f04-c4d5-40b3-967f-d0a935661e09",
        "InterviewEndDate": "2023-04-11 07:55:38",
        "InterviewState": "Completed",
        "Flight": "LH  175",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "3d013500-ffdf-4653-83de-bceaa19cf821",
        "InterviewEndDate": "2023-04-11 08:26:23",
        "InterviewState": "Completed",
        "Flight": "SN 2580",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "9cd800ea-bdad-4595-b114-c1c3822321ce",
        "InterviewEndDate": "2023-04-11 08:21:50",
        "InterviewState": "Completed",
        "Flight": "SN 2580",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "35d6f3ba-c4db-458c-bc8f-72e28311dbb7",
        "InterviewEndDate": "2023-04-11 09:15:00",
        "InterviewState": "Completed",
        "Flight": "FR  110",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b5b9eb76-1581-4927-9224-c53b25592265",
        "InterviewEndDate": "2023-04-11 10:06:13",
        "InterviewState": "Completed",
        "Flight": "FR  234",
        "Dest": "Malaga (AGP)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "6583f116-f0e8-4004-b733-ad50225f23bb",
        "InterviewEndDate": "2023-04-11 10:19:32",
        "InterviewState": "Completed",
        "Flight": "FR  234",
        "Dest": "Malaga (AGP)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c84eff8d-3270-4399-97e6-a58ea807420c",
        "InterviewEndDate": "2023-04-11 10:32:12",
        "InterviewState": "Completed",
        "Flight": "FR  234",
        "Dest": "Malaga (AGP)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "9659d726-23dd-4b7b-bf70-dd44c3b223fe",
        "InterviewEndDate": "2023-04-11 11:37:25",
        "InterviewState": "Completed",
        "Flight": "LH  185",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "5952386c-4d3d-4f63-bacf-bd5e68daddfd",
        "InterviewEndDate": "2023-04-11 10:28:43",
        "InterviewState": "Completed",
        "Flight": "FR  234",
        "Dest": "Malaga (AGP)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b6ddfeff-9558-4534-9515-7ab57059a958",
        "InterviewEndDate": "2023-04-11 11:48:54",
        "InterviewState": "Completed",
        "Flight": "LH  185",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "53a036e3-63e3-4ed5-9bee-8ab180e69211",
        "InterviewEndDate": "2023-04-11 12:48:52",
        "InterviewState": "Completed",
        "Flight": "FR  134",
        "Dest": "Rom (FCO)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "e1654cde-7c30-408e-b2c7-c5b59fffc8f9",
        "InterviewEndDate": "2023-04-11 12:45:26",
        "InterviewState": "Completed",
        "Flight": "FR  134",
        "Dest": "Rom (FCO)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "99087239-f073-4167-ab9a-75af184bcbbe",
        "InterviewEndDate": "2023-04-11 13:49:36",
        "InterviewState": "Completed",
        "Flight": "FR 1146",
        "Dest": "Thessaloniki (SKG)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "946f559b-3908-4434-a7c0-de9baf9d70ad",
        "InterviewEndDate": "2023-04-11 12:52:57",
        "InterviewState": "Completed",
        "Flight": "FR  134",
        "Dest": "Rom (FCO)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "16fd3cc0-f99a-4e88-8b2d-98559aaecd21",
        "InterviewEndDate": "2023-04-11 12:52:49",
        "InterviewState": "Completed",
        "Flight": "FR  134",
        "Dest": "Rom (FCO)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "7c822da3-be4f-4948-b413-8e7805ad3b5d",
        "InterviewEndDate": "2023-04-11 13:52:04",
        "InterviewState": "Completed",
        "Flight": "FR 1146",
        "Dest": "Thessaloniki (SKG)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "fb95c683-ea44-4c21-abfb-a3fa906599ba",
        "InterviewEndDate": "2023-04-11 13:42:21",
        "InterviewState": "Completed",
        "Flight": "FR 1146",
        "Dest": "Thessaloniki (SKG)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f026c969-59c6-4f80-a7a2-87e16f7bbddd",
        "InterviewEndDate": "2023-04-11 13:44:22",
        "InterviewState": "Completed",
        "Flight": "FR 1146",
        "Dest": "Thessaloniki (SKG)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c6f5d150-d3eb-4416-bf67-893863d5d8c4",
        "InterviewEndDate": "2023-04-11 18:00:02",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "905be60b-121d-4e42-bd88-c1c663921a39",
        "InterviewEndDate": "2023-04-11 17:43:17",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "76ca3999-43a7-43bd-9f43-bbd0bdb7c72a",
        "InterviewEndDate": "2023-04-11 18:00:53",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "75199fca-0dcd-4d79-9728-973a3f76a61b",
        "InterviewEndDate": "2023-04-11 17:30:56",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "0132e040-32d4-4c6d-a54a-827db2609667",
        "InterviewEndDate": "2023-04-11 18:12:51",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "3930cf11-5897-439a-babc-d8824b5491e5",
        "InterviewEndDate": "2023-04-11 18:01:44",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "0c4eb743-27be-4483-a712-a1f4d24d72e3",
        "InterviewEndDate": "2023-04-11 18:08:37",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "0dbcb87e-fcbf-44fd-907e-743b9273d84c",
        "InterviewEndDate": "2023-04-11 18:07:45",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "9e0c71cc-6b1c-4ad1-9cc9-98e92d8a1b4e",
        "InterviewEndDate": "2023-04-11 18:13:04",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "62e43414-2665-4471-b20f-9a969c8f4fec",
        "InterviewEndDate": "2023-04-11 18:14:33",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "69cb08bb-0b61-414f-8b70-996e3f3128f4",
        "InterviewEndDate": "2023-04-11 18:21:34",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "1c23f408-cc34-4a69-a03d-9c7cc2368389",
        "InterviewEndDate": "2023-04-11 19:02:22",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "d71eb227-0914-43bc-aedf-c37de4a576e2",
        "InterviewEndDate": "2023-04-11 18:35:07",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "a0ac94bc-f2dc-4f90-b420-c5895a2102b6",
        "InterviewEndDate": "2023-04-11 19:04:01",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "93072494-c9ad-4117-b3bd-8339e08ba3a4",
        "InterviewEndDate": "2023-04-11 19:09:49",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "5124fae0-a86b-4198-916c-b47534702c99",
        "InterviewEndDate": "2023-04-11 19:00:45",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "ca4dab96-d75d-4c0f-b810-d5158d068a04",
        "InterviewEndDate": "2023-04-11 20:07:20",
        "InterviewState": "Completed",
        "Flight": "LX  983",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 998
    },
    {
        "InterviewId": "e7d8a637-56c5-49b0-8fc1-a3ee31195067",
        "InterviewEndDate": "2023-04-11 19:18:09",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "31ade0a6-12f6-4900-bdfc-b4fb52080f18",
        "InterviewEndDate": "2023-04-11 19:23:04",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "f1bf1c03-7b74-4e7e-a1f7-d50cc5d6774a",
        "InterviewEndDate": "2023-04-11 19:28:57",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "de7d2d5d-6828-4a08-838a-924a526a8c19",
        "InterviewEndDate": "2023-04-11 19:35:00",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "5736376e-c338-48ed-9b6a-dab331b7e998",
        "InterviewEndDate": "2023-04-11 20:08:13",
        "InterviewState": "Completed",
        "Flight": "LX  983",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 998
    },
    {
        "InterviewId": "750f48b1-f5c0-4a89-9d22-d6a55bcf7f6e",
        "InterviewEndDate": "2023-04-11 20:00:35",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "c6642b60-2458-4055-8400-a3bf819cea80",
        "InterviewEndDate": "2023-04-11 20:10:10",
        "InterviewState": "Completed",
        "Flight": "LX  983",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 998
    },
    {
        "InterviewId": "432b607c-93ab-4f6a-bda1-dae93dafb9ff",
        "InterviewEndDate": "2023-04-11 20:31:08",
        "InterviewState": "Completed",
        "Flight": "LX  983",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 12
    },
    {
        "InterviewId": "9bfb5921-e1c7-4398-b4cd-9c5277784fbf",
        "InterviewEndDate": "2023-04-11 22:05:31",
        "InterviewState": "Completed",
        "Flight": "BA  999",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 998
    },
    {
        "InterviewId": "be0687a5-c9e8-44f1-b692-b6e1da003de2",
        "InterviewEndDate": "2023-04-11 20:55:13",
        "InterviewState": "Completed",
        "Flight": "LX  983",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 12
    },
    {
        "InterviewId": "ad04f637-4058-4f77-b516-bb134a5976bb",
        "InterviewEndDate": "2023-04-11 21:39:46",
        "InterviewState": "Completed",
        "Flight": "BA  999",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "e4a55dd0-265a-4d82-88db-a3d33f530cf2",
        "InterviewEndDate": "2023-04-11 21:39:04",
        "InterviewState": "Completed",
        "Flight": "BA  999",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "240267a3-8589-4bcf-a8bd-96f4a84ff971",
        "InterviewEndDate": "2023-04-11 21:41:11",
        "InterviewState": "Completed",
        "Flight": "BA  999",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "6a1f527d-c1b7-40fc-9f9e-9225053a93ee",
        "InterviewEndDate": "2023-04-11 21:46:56",
        "InterviewState": "Completed",
        "Flight": "BA  999",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 998
    },
    {
        "InterviewId": "bbe9a3a6-6423-429c-b663-d5e935a0fab2",
        "InterviewEndDate": "2023-04-11 22:08:15",
        "InterviewState": "Completed",
        "Flight": "XM  211",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Zimex Aviation",
        "InterviewerID": 998
    },
    {
        "InterviewId": "b4b25003-2e4c-413d-a69e-89da4e488817",
        "InterviewEndDate": "2023-04-11 22:06:57",
        "InterviewState": "Completed",
        "Flight": "XM  211",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Zimex Aviation",
        "InterviewerID": 998
    },
    {
        "InterviewId": "da0293e4-f398-4217-878c-9b290b6f4c2b",
        "InterviewEndDate": "2023-04-11 22:15:22",
        "InterviewState": "Completed",
        "Flight": "BA  999",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "2ee0d024-3652-4f09-8674-bfb03e95f68c",
        "InterviewEndDate": "2023-04-11 22:03:22",
        "InterviewState": "Completed",
        "Flight": "XM  211",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Zimex Aviation",
        "InterviewerID": 998
    },
    {
        "InterviewId": "df4c1e70-150f-493d-8d35-8ce0bb91eae9",
        "InterviewEndDate": "2023-04-11 22:13:53",
        "InterviewState": "Completed",
        "Flight": "EI  337",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 998
    },
    {
        "InterviewId": "719269f1-91c1-4fb3-b77f-bd874f1c02ce",
        "InterviewEndDate": "2023-04-11 22:27:11",
        "InterviewState": "Completed",
        "Flight": "EI  337",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 998
    },
    {
        "InterviewId": "a671c557-818e-49c9-b300-89464a96f835",
        "InterviewEndDate": "2023-04-11 22:30:18",
        "InterviewState": "Completed",
        "Flight": "XM  211",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Zimex Aviation",
        "InterviewerID": 12
    },
    {
        "InterviewId": "b7a5a429-ffac-407a-b0cd-a3d9d6920e32",
        "InterviewEndDate": "2023-04-11 22:33:16",
        "InterviewState": "Completed",
        "Flight": "XM  211",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Zimex Aviation",
        "InterviewerID": 12
    },
    {
        "InterviewId": "a60002bb-9a91-45a6-b661-9c7cbd2a0931",
        "InterviewEndDate": "2023-04-14 15:51:51",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "7276cf37-aca7-4ed7-9ed7-c60b8ba72c64",
        "InterviewEndDate": "2023-04-14 16:25:59",
        "InterviewState": "Completed",
        "Flight": "LX  969",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 12
    },
    {
        "InterviewId": "14049155-5130-48f4-9cae-b1c55d41e36e",
        "InterviewEndDate": "2023-04-14 16:48:25",
        "InterviewState": "Completed",
        "Flight": "LX  969",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 12
    },
    {
        "InterviewId": "eb5dc311-bc2c-400a-813b-b9a927db4708",
        "InterviewEndDate": "2023-04-14 17:32:29",
        "InterviewState": "Completed",
        "Flight": "XQ  967",
        "Dest": "Izmir (ADB)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 12
    },
    {
        "InterviewId": "12affa3d-19b5-459e-87c0-9c0db4134f85",
        "InterviewEndDate": "2023-04-14 18:32:34",
        "InterviewState": "Completed",
        "Flight": "XQ  967",
        "Dest": "Izmir (ADB)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 12
    },
    {
        "InterviewId": "e40a1868-9106-4a3e-9ce6-ab9009bec60f",
        "InterviewEndDate": "2023-04-14 18:14:12",
        "InterviewState": "Completed",
        "Flight": "XQ  967",
        "Dest": "Izmir (ADB)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 12
    },
    {
        "InterviewId": "38d01a64-a52b-4fa4-a726-b843acc1f302",
        "InterviewEndDate": "2023-04-14 18:49:56",
        "InterviewState": "Completed",
        "Flight": "XQ  661",
        "Dest": "Antalya (AYT)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 12
    },
    {
        "InterviewId": "8a324a10-94ee-4cc7-878a-908b32bd43de",
        "InterviewEndDate": "2023-04-14 19:25:13",
        "InterviewState": "Completed",
        "Flight": "FR  140",
        "Dest": "Rom (FCO)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "5a7dbc20-3fc7-4f98-9ccb-73c52521312b",
        "InterviewEndDate": "2023-04-14 18:47:27",
        "InterviewState": "Completed",
        "Flight": "XQ  661",
        "Dest": "Antalya (AYT)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 12
    },
    {
        "InterviewId": "cbf43012-4b1d-4cd4-9f4c-dcd2fc9f52fb",
        "InterviewEndDate": "2023-04-14 20:15:15",
        "InterviewState": "Completed",
        "Flight": "FR  162",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "e288727b-f8ee-499c-a420-85bfef6a95a0",
        "InterviewEndDate": "2023-04-14 19:42:23",
        "InterviewState": "Completed",
        "Flight": "FR  140",
        "Dest": "Rom (FCO)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "72e06990-d472-4d8d-9f4b-ddd1de22164f",
        "InterviewEndDate": "2023-04-14 19:24:46",
        "InterviewState": "Completed",
        "Flight": "FR  140",
        "Dest": "Rom (FCO)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "f5c022da-1da4-43b8-9afe-a5fb1dd29068",
        "InterviewEndDate": "2023-04-14 20:41:53",
        "InterviewState": "Completed",
        "Flight": "FR  162",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "60ddbc0f-c046-4802-a775-ae14e4b19d6d",
        "InterviewEndDate": "2023-04-14 20:38:05",
        "InterviewState": "Completed",
        "Flight": "FR  162",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "cb96eaad-3538-4c47-90a6-74223b1270cb",
        "InterviewEndDate": "2023-04-14 20:53:17",
        "InterviewState": "Completed",
        "Flight": "FR  162",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "31e76768-6490-4011-bcdd-85e1eb4a464a",
        "InterviewEndDate": "2023-04-14 21:21:55",
        "InterviewState": "Completed",
        "Flight": "DY 1109",
        "Dest": "Oslo (OSL)",
        "AirlineCode": "Norwegian Air Shuttle AOC",
        "InterviewerID": 12
    },
    {
        "InterviewId": "2bf8e81e-cc34-4063-8b67-ba76b7b53ffd",
        "InterviewEndDate": "2023-04-14 21:39:20",
        "InterviewState": "Completed",
        "Flight": "DY 1109",
        "Dest": "Oslo (OSL)",
        "AirlineCode": "Norwegian Air Shuttle AOC",
        "InterviewerID": 12
    },
    {
        "InterviewId": "f00498b7-9996-4efc-87ed-bf116501b7a9",
        "InterviewEndDate": "2023-04-14 22:23:00",
        "InterviewState": "Completed",
        "Flight": "XR  592",
        "Dest": "Hurghada (HRG)",
        "AirlineCode": "Corendon Airlines Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "d1ace828-2021-4211-b39a-96fc04b81aaf",
        "InterviewEndDate": "2023-04-16 12:27:34",
        "InterviewState": "Completed",
        "Flight": "OG  701",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "PLAY",
        "InterviewerID": 1
    },
    {
        "InterviewId": "5bcf1981-8791-4627-952a-d84226ccce74",
        "InterviewEndDate": "2023-04-16 12:21:51",
        "InterviewState": "Completed",
        "Flight": "OG  701",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "PLAY",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d0ddab7c-f4de-4c27-a9d1-d8459601354c",
        "InterviewEndDate": "2023-04-16 13:10:18",
        "InterviewState": "Completed",
        "Flight": "EJU5187",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 1
    },
    {
        "InterviewId": "94851399-68cc-46a7-bd66-dcbbe406a05d",
        "InterviewEndDate": "2023-04-16 13:10:22",
        "InterviewState": "Completed",
        "Flight": "EJU5187",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 1
    },
    {
        "InterviewId": "50f47889-cd6e-437d-ab6f-bc66f9cff6b4",
        "InterviewEndDate": "2023-04-16 13:03:32",
        "InterviewState": "Completed",
        "Flight": "EJU5187",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 1
    },
    {
        "InterviewId": "606a9653-f25d-4959-bf75-83b7ed09994a",
        "InterviewEndDate": "2023-04-16 13:43:20",
        "InterviewState": "Completed",
        "Flight": "TP  533",
        "Dest": "Lissabon (LIS)",
        "AirlineCode": "TAP Air Portugal",
        "InterviewerID": 1
    },
    {
        "InterviewId": "611eb066-2a7a-438e-aec2-d98bd752e2dd",
        "InterviewEndDate": "2023-04-16 13:52:22",
        "InterviewState": "Completed",
        "Flight": "TP  533",
        "Dest": "Lissabon (LIS)",
        "AirlineCode": "TAP Air Portugal",
        "InterviewerID": 1
    },
    {
        "InterviewId": "e82470e2-6a81-4545-b85c-c5ab6872e53e",
        "InterviewEndDate": "2023-04-16 16:08:22",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "565ac1f2-0e04-47c5-8052-81b6dc270596",
        "InterviewEndDate": "2023-04-16 16:43:25",
        "InterviewState": "Completed",
        "Flight": "EZY2934",
        "Dest": "Bristol (BRS)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "17db2c98-64ec-4327-881e-9e6557ea8a0f",
        "InterviewEndDate": "2023-04-16 15:13:19",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "e3d8936a-5027-48db-846f-d6af44bd3ee1",
        "InterviewEndDate": "2023-04-16 15:19:45",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "65b4cbf6-88a8-430e-a620-964e53a0cc89",
        "InterviewEndDate": "2023-04-16 15:24:50",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "652a3d9f-4fe6-4cdf-9b5d-96ab27602561",
        "InterviewEndDate": "2023-04-16 16:03:48",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "552341c6-c453-480b-aa05-86fc3f9c1c69",
        "InterviewEndDate": "2023-04-16 16:03:05",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "1527bd57-96a9-40af-aa88-78cb763ab728",
        "InterviewEndDate": "2023-04-16 16:27:31",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "04c27be4-2bc1-4e35-ac4d-89a5e3093fc6",
        "InterviewEndDate": "2023-04-16 16:21:43",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "ffed5673-b648-4a95-80af-d8765d2292d1",
        "InterviewEndDate": "2023-04-16 16:49:11",
        "InterviewState": "Completed",
        "Flight": "EZY2934",
        "Dest": "Bristol (BRS)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "eab23727-d3a1-4612-9a38-7b301846700c",
        "InterviewEndDate": "2023-04-16 16:42:18",
        "InterviewState": "Completed",
        "Flight": "EZY2934",
        "Dest": "Bristol (BRS)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "fde4d46b-2e83-43fb-99fb-8952f1df68d8",
        "InterviewEndDate": "2023-04-17 07:58:10",
        "InterviewState": "Completed",
        "Flight": "FR  216",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "4f44f8ab-ee45-42d9-bed1-bf75f9456e9d",
        "InterviewEndDate": "2023-04-17 07:57:39",
        "InterviewState": "Completed",
        "Flight": "FR  216",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "899907cf-c486-41b4-8807-bbddc32b9df1",
        "InterviewEndDate": "2023-04-17 08:06:26",
        "InterviewState": "Completed",
        "Flight": "FR  216",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "96686872-6e6d-49f6-8fd3-9308b90a9531",
        "InterviewEndDate": "2023-04-17 08:22:27",
        "InterviewState": "Completed",
        "Flight": "W6 4276",
        "Dest": "Tuzla (TZL)",
        "AirlineCode": "Wizz Air",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b904c9a9-ad6e-4489-9fa8-8cdbf8c51682",
        "InterviewEndDate": "2023-04-17 08:35:37",
        "InterviewState": "Completed",
        "Flight": "W6 4276",
        "Dest": "Tuzla (TZL)",
        "AirlineCode": "Wizz Air",
        "InterviewerID": 11
    },
    {
        "InterviewId": "a82f87c6-924e-421d-995e-cd8266f94008",
        "InterviewEndDate": "2023-04-17 08:30:48",
        "InterviewState": "Completed",
        "Flight": "W6 4276",
        "Dest": "Tuzla (TZL)",
        "AirlineCode": "Wizz Air",
        "InterviewerID": 11
    },
    {
        "InterviewId": "32d1b32a-15dc-45f5-8739-9d1ca2c50b6f",
        "InterviewEndDate": "2023-04-17 08:21:49",
        "InterviewState": "Completed",
        "Flight": "W6 4276",
        "Dest": "Tuzla (TZL)",
        "AirlineCode": "Wizz Air",
        "InterviewerID": 11
    },
    {
        "InterviewId": "aed56a9b-0ef4-44a7-853d-7d06759bd12b",
        "InterviewEndDate": "2023-04-17 09:02:28",
        "InterviewState": "Completed",
        "Flight": "FR 2377",
        "Dest": "Edinburgh (EDI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d2e57517-a846-417f-b5cd-d1b5adaa2c6f",
        "InterviewEndDate": "2023-04-17 08:59:10",
        "InterviewState": "Completed",
        "Flight": "FR 2377",
        "Dest": "Edinburgh (EDI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "4ce5b12f-8643-4470-a1b8-bbc43e94e469",
        "InterviewEndDate": "2023-04-17 09:16:49",
        "InterviewState": "Completed",
        "Flight": "FR 2377",
        "Dest": "Edinburgh (EDI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "4fef1271-cb6a-4030-8d33-b8e82ff5bb21",
        "InterviewEndDate": "2023-04-17 09:58:23",
        "InterviewState": "Completed",
        "Flight": "FR  144",
        "Dest": "London (STN)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "513db8e2-0b42-4035-93a6-92ac321ffe78",
        "InterviewEndDate": "2023-04-17 10:00:55",
        "InterviewState": "Completed",
        "Flight": "FR  144",
        "Dest": "London (STN)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b9389abc-4bd5-4973-9dd5-a2f91ab87fc2",
        "InterviewEndDate": "2023-04-17 11:15:14",
        "InterviewState": "Completed",
        "Flight": "OS  226",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "dadd4655-cfe9-4d08-aee9-9b4df060f04f",
        "InterviewEndDate": "2023-04-17 11:13:24",
        "InterviewState": "Completed",
        "Flight": "OS  226",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ca7664e1-e8e8-4778-a5a5-76195f8504aa",
        "InterviewEndDate": "2023-04-17 11:11:32",
        "InterviewState": "Completed",
        "Flight": "OS  226",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ac5f91a8-3e04-4fdd-b7bb-c0826bbe9619",
        "InterviewEndDate": "2023-04-17 11:12:46",
        "InterviewState": "Completed",
        "Flight": "OS  226",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2242ff52-a65e-4f36-bbb4-9cb62b1370ac",
        "InterviewEndDate": "2023-04-17 12:12:43",
        "InterviewState": "Completed",
        "Flight": "KL 1824",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2ca74b33-9cf7-4f66-964d-753f5f1e51f6",
        "InterviewEndDate": "2023-04-17 12:14:26",
        "InterviewState": "Completed",
        "Flight": "KL 1824",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d103398a-e083-43db-aa62-943cdf6a12a1",
        "InterviewEndDate": "2023-04-17 12:17:14",
        "InterviewState": "Completed",
        "Flight": "KL 1824",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "6562d67d-4362-413f-8932-cdd6117e9f08",
        "InterviewEndDate": "2023-04-17 12:14:28",
        "InterviewState": "Completed",
        "Flight": "KL 1824",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "33008a81-2ea9-4bed-ab06-a7ab3cba7d05",
        "InterviewEndDate": "2023-04-17 12:27:27",
        "InterviewState": "Completed",
        "Flight": "KL 1824",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b17038f6-117e-430b-9d47-8f580241bf7a",
        "InterviewEndDate": "2023-04-17 13:17:48",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "40f23616-95f8-41dc-bb72-af68788a6253",
        "InterviewEndDate": "2023-04-17 13:27:39",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "9da8de1d-5e18-41c3-9a89-9ef6431981a7",
        "InterviewEndDate": "2023-04-17 13:23:40",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2a41c863-3f98-49aa-a1ac-b4eb6dbec6d3",
        "InterviewEndDate": "2023-04-17 14:17:55",
        "InterviewState": "Completed",
        "Flight": "EJU5071",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "35fa7380-5f3e-4304-a952-d96495b285c2",
        "InterviewEndDate": "2023-04-18 07:14:29",
        "InterviewState": "Completed",
        "Flight": "EJU5261",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c02c81dc-c306-4eb5-a473-b7fb8e59031b",
        "InterviewEndDate": "2023-04-18 07:14:19",
        "InterviewState": "Completed",
        "Flight": "EJU5261",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "023590cc-1c0a-4269-95d3-99f022b45ea7",
        "InterviewEndDate": "2023-04-18 07:04:34",
        "InterviewState": "Completed",
        "Flight": "EJU5261",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2fb0db46-10c3-4488-9d79-b8490c781c81",
        "InterviewEndDate": "2023-04-18 07:59:21",
        "InterviewState": "Completed",
        "Flight": "EJU5191",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "44744b51-922a-466e-9343-cc408e009262",
        "InterviewEndDate": "2023-04-18 07:59:25",
        "InterviewState": "Completed",
        "Flight": "EJU5191",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2674647c-1376-479b-9c93-87cb0b715a20",
        "InterviewEndDate": "2023-04-18 08:02:31",
        "InterviewState": "Completed",
        "Flight": "EJU5191",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "037b4369-7369-4537-bb46-7523c5ba45b9",
        "InterviewEndDate": "2023-04-18 08:11:07",
        "InterviewState": "Completed",
        "Flight": "EJU5191",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "140dcc14-137b-468f-981f-a778efa9c806",
        "InterviewEndDate": "2023-04-18 08:13:40",
        "InterviewState": "Completed",
        "Flight": "EJU5191",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "5e8f0437-504c-470a-9e73-dce046b362c5",
        "InterviewEndDate": "2023-04-18 08:10:38",
        "InterviewState": "Completed",
        "Flight": "EJU5191",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "79ddf137-4c27-4638-9e19-734830e6aff4",
        "InterviewEndDate": "2023-04-18 09:15:58",
        "InterviewState": "Completed",
        "Flight": "KL 1822",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ae7a6da6-9b8f-4c4e-9823-7f54da637de8",
        "InterviewEndDate": "2023-04-18 11:30:45",
        "InterviewState": "Completed",
        "Flight": "FR 3309",
        "Dest": "Bari (BRI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "65b4b659-18ec-4536-aa21-be71ee310b08",
        "InterviewEndDate": "2023-04-18 12:17:39",
        "InterviewState": "Completed",
        "Flight": "FR 3311",
        "Dest": "Mailand (BGY)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "6db1f93a-a193-45b8-ad22-a1f1fe53a675",
        "InterviewEndDate": "2023-04-18 12:09:54",
        "InterviewState": "Completed",
        "Flight": "FR 3311",
        "Dest": "Mailand (BGY)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "08450782-7331-47ce-aee4-7970224ca3e6",
        "InterviewEndDate": "2023-04-19 09:32:48",
        "InterviewState": "Completed",
        "Flight": "LH 1929",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f02128ab-e0b6-4522-8a79-b8d617ba1c71",
        "InterviewEndDate": "2023-04-19 09:25:56",
        "InterviewState": "Completed",
        "Flight": "LH 1929",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "82d8bb57-c3ea-4532-b39d-c118c1980db7",
        "InterviewEndDate": "2023-04-19 08:58:40",
        "InterviewState": "Completed",
        "Flight": "LH 1929",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "dcdd582a-df4e-4d39-89ff-76b1ea935d2c",
        "InterviewEndDate": "2023-04-19 08:57:38",
        "InterviewState": "Completed",
        "Flight": "LH 1929",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "3a7bf0ea-ed88-45b2-9698-a6e2de0fb93b",
        "InterviewEndDate": "2023-04-19 09:50:28",
        "InterviewState": "Completed",
        "Flight": "EJU4266",
        "Dest": "Neapel (NAP)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "64611224-7733-49e5-b336-a63412b478d3",
        "InterviewEndDate": "2023-04-19 09:56:33",
        "InterviewState": "Completed",
        "Flight": "EJU4266",
        "Dest": "Neapel (NAP)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "3b3ddb9c-f6ca-411f-be53-85f4ac35773a",
        "InterviewEndDate": "2023-04-19 11:10:38",
        "InterviewState": "Completed",
        "Flight": "A3  821",
        "Dest": "Athen (ATH)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c45e0f8b-debd-4246-a789-a85f0a7d6106",
        "InterviewEndDate": "2023-04-19 11:16:09",
        "InterviewState": "Completed",
        "Flight": "A3  821",
        "Dest": "Athen (ATH)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "9c6a0a6e-756e-4c73-bb2e-7f8be373ff13",
        "InterviewEndDate": "2023-04-19 11:16:03",
        "InterviewState": "Completed",
        "Flight": "A3  821",
        "Dest": "Athen (ATH)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "1cc88971-9e56-4885-9f64-aa3f16b9b9a5",
        "InterviewEndDate": "2023-04-19 11:13:22",
        "InterviewState": "Completed",
        "Flight": "A3  821",
        "Dest": "Athen (ATH)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c9534b35-9fb0-4022-b919-9e3662126c82",
        "InterviewEndDate": "2023-04-19 11:20:18",
        "InterviewState": "Completed",
        "Flight": "A3  821",
        "Dest": "Athen (ATH)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "a90a2adb-1ad6-4e3c-9624-a0a10124e7fc",
        "InterviewEndDate": "2023-04-19 13:09:35",
        "InterviewState": "Completed",
        "Flight": "EW 9047",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "af763581-08f4-4b09-be27-aa989e685951",
        "InterviewEndDate": "2023-04-19 12:03:28",
        "InterviewState": "Completed",
        "Flight": "EJU5283",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ee88bb32-dc14-4562-9177-881163600991",
        "InterviewEndDate": "2023-04-19 12:05:48",
        "InterviewState": "Completed",
        "Flight": "EJU5283",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "7a53299f-a1a2-4c22-8356-d8d3d672dc3b",
        "InterviewEndDate": "2023-04-19 13:53:03",
        "InterviewState": "Completed",
        "Flight": "EW 9047",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "df4cd318-5939-40aa-b381-e1a26c9f31d7",
        "InterviewEndDate": "2023-04-19 14:07:49",
        "InterviewState": "Completed",
        "Flight": "FI  529",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "Icelandair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "6126fb7a-e25b-46f1-b719-bc40c077575e",
        "InterviewEndDate": "2023-04-19 14:19:37",
        "InterviewState": "Completed",
        "Flight": "EJU5071",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "25454198-68b6-4369-8c3a-86d422b8dbe1",
        "InterviewEndDate": "2023-04-19 14:24:19",
        "InterviewState": "Completed",
        "Flight": "EJU5071",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "3c18e70d-cc21-472c-b54d-b70e86544bb4",
        "InterviewEndDate": "2023-04-19 14:30:50",
        "InterviewState": "Completed",
        "Flight": "EJU5071",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "dfd2b07b-9395-416a-95a9-ae10fb9d8df8",
        "InterviewEndDate": "2023-04-19 15:11:03",
        "InterviewState": "Completed",
        "Flight": "EW  051",
        "Dest": "K\u00f6ln (CGN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "0405da19-3781-4c5a-8cc1-a458ad805e60",
        "InterviewEndDate": "2023-04-19 15:20:28",
        "InterviewState": "Completed",
        "Flight": "EW  051",
        "Dest": "K\u00f6ln (CGN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c7e4121e-18de-43eb-b679-d3567b94fac8",
        "InterviewEndDate": "2023-04-25 14:54:15",
        "InterviewState": "Completed",
        "Flight": "LH  191",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "4a8c024b-56a5-41cb-a334-90aad980f648",
        "InterviewEndDate": "2023-04-19 16:51:11",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "405d9b1b-1578-4d49-891f-d61679cc0ab9",
        "InterviewEndDate": "2023-04-19 17:17:47",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "629f96ec-9729-4504-a90f-9bcaffb29ade",
        "InterviewEndDate": "2023-04-19 18:35:10",
        "InterviewState": "Completed",
        "Flight": "LH 1947",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 12
    },
    {
        "InterviewId": "e61cc991-50ea-42c1-9e14-aeee6b91a1a6",
        "InterviewEndDate": "2023-04-19 17:43:16",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "c620fedd-8bd9-4fd1-b3b5-942ec4fecbd4",
        "InterviewEndDate": "2023-04-19 17:47:48",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "379faa77-6eb0-44ad-86d9-86d276dfb479",
        "InterviewEndDate": "2023-04-19 18:02:13",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "7ffdbf30-73fb-4fe9-9bcd-beec6ad7d18b",
        "InterviewEndDate": "2023-04-19 18:40:18",
        "InterviewState": "Completed",
        "Flight": "LH 1947",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 12
    },
    {
        "InterviewId": "9a17d508-7e90-4713-8e8b-963158821d91",
        "InterviewEndDate": "2023-04-19 18:35:23",
        "InterviewState": "Completed",
        "Flight": "LH 1947",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 12
    },
    {
        "InterviewId": "cf1700b3-1c81-408e-96d3-b9e307d20b22",
        "InterviewEndDate": "2023-04-19 19:11:14",
        "InterviewState": "Completed",
        "Flight": "LH 1947",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 12
    },
    {
        "InterviewId": "fbe34fe4-29cd-436c-9678-88c81a769741",
        "InterviewEndDate": "2023-04-19 19:34:54",
        "InterviewState": "Completed",
        "Flight": "N0  601",
        "Dest": "New York (JFK)",
        "AirlineCode": "Norse Atlantic Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "a3febe6f-2b3c-4a1f-a213-8d528f0ad235",
        "InterviewEndDate": "2023-04-19 20:09:38",
        "InterviewState": "Completed",
        "Flight": "SN 2588",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "3775ac19-e17b-4e79-97a4-c3288b44813d",
        "InterviewEndDate": "2023-04-19 20:05:40",
        "InterviewState": "Completed",
        "Flight": "SN 2588",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "fd1981b1-d4e5-464e-96e8-a7a6809a940e",
        "InterviewEndDate": "2023-04-19 20:27:20",
        "InterviewState": "Completed",
        "Flight": "FR  162",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "6901cb80-7462-49ff-89ad-7bcbd125a6a1",
        "InterviewEndDate": "2023-04-19 20:42:50",
        "InterviewState": "Completed",
        "Flight": "OS  236",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "5c5b6f46-f0db-4b75-ab6b-d2fb7c89868a",
        "InterviewEndDate": "2023-04-19 21:16:38",
        "InterviewState": "Completed",
        "Flight": "OS  236",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "aad8358f-8f4f-47bc-93bb-dc71eecd2419",
        "InterviewEndDate": "2023-04-19 21:14:53",
        "InterviewState": "Completed",
        "Flight": "OS  236",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "bad99eee-5105-4cba-a545-bc22436b988b",
        "InterviewEndDate": "2023-04-19 21:07:51",
        "InterviewState": "Completed",
        "Flight": "OS  236",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "95550b95-0a74-4075-a6f6-e148bf2849e6",
        "InterviewEndDate": "2023-04-19 21:02:16",
        "InterviewState": "Completed",
        "Flight": "OS  236",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "679fcc79-8ba3-470f-9bf4-b0efd3833a4d",
        "InterviewEndDate": "2023-04-19 21:38:07",
        "InterviewState": "Completed",
        "Flight": "BA  995",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "945b95b2-83c0-4ec7-b5fe-a30826b069f2",
        "InterviewEndDate": "2023-04-19 21:42:55",
        "InterviewState": "Completed",
        "Flight": "BA  995",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "431aa532-dafc-466a-b912-ce68621ab080",
        "InterviewEndDate": "2023-04-19 22:10:10",
        "InterviewState": "Completed",
        "Flight": "BA  995",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "07d67b87-194d-445d-b128-9c43c0dc3754",
        "InterviewEndDate": "2023-04-19 22:05:36",
        "InterviewState": "Completed",
        "Flight": "BA  995",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "20280767-4cd3-4a73-8b6c-c3e257f62fd2",
        "InterviewEndDate": "2023-04-19 22:28:32",
        "InterviewState": "Completed",
        "Flight": "XM  211",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Zimex Aviation",
        "InterviewerID": 12
    },
    {
        "InterviewId": "a30ef969-6769-41d7-88e0-bb568fdb0f04",
        "InterviewEndDate": "2023-04-19 22:47:05",
        "InterviewState": "Completed",
        "Flight": "EI  337",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 12
    },
    {
        "InterviewId": "32127cfa-954f-48f5-8e9d-c97e57090943",
        "InterviewEndDate": "2023-04-19 22:40:17",
        "InterviewState": "Completed",
        "Flight": "EI  337",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 12
    },
    {
        "InterviewId": "15ba6aac-0406-4fc4-867b-c3b3a60756e5",
        "InterviewEndDate": "2023-04-19 22:45:10",
        "InterviewState": "Completed",
        "Flight": "EI  337",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 12
    },
    {
        "InterviewId": "fdd7c035-f920-45fe-aac6-cfdfc8c89e24",
        "InterviewEndDate": "2023-04-25 14:47:50",
        "InterviewState": "Completed",
        "Flight": "LH  191",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "1816e730-2073-4cee-a51b-81c7651b4522",
        "InterviewEndDate": "2023-04-21 15:24:17",
        "InterviewState": "Completed",
        "Flight": "LX  967",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 12
    },
    {
        "InterviewId": "d456f325-e0cf-4946-bfda-84da94b0b0cb",
        "InterviewEndDate": "2023-04-21 15:37:49",
        "InterviewState": "Completed",
        "Flight": "LX  967",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 12
    },
    {
        "InterviewId": "6a5b9347-ea34-4e46-9297-c51e3fedc7c7",
        "InterviewEndDate": "2023-04-21 15:55:32",
        "InterviewState": "Completed",
        "Flight": "LX  967",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 12
    },
    {
        "InterviewId": "bf792b98-47ac-4d54-a3fa-d3f86170c243",
        "InterviewEndDate": "2023-04-21 15:57:17",
        "InterviewState": "Completed",
        "Flight": "LX  967",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 12
    },
    {
        "InterviewId": "34349ec1-0db5-48d6-a284-dab386d579b8",
        "InterviewEndDate": "2023-04-21 16:13:09",
        "InterviewState": "Completed",
        "Flight": "LX  967",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 12
    },
    {
        "InterviewId": "913ddabb-e4ed-4a20-ac5a-a85faeecb358",
        "InterviewEndDate": "2023-04-21 15:50:23",
        "InterviewState": "Completed",
        "Flight": "LX  967",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 12
    },
    {
        "InterviewId": "911997b3-7800-4e17-8092-cd1d677b5934",
        "InterviewEndDate": "2023-04-21 16:15:17",
        "InterviewState": "Completed",
        "Flight": "LX  967",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 12
    },
    {
        "InterviewId": "f172d6ff-3818-4b47-9860-ca3addc6249d",
        "InterviewEndDate": "2023-04-21 16:35:30",
        "InterviewState": "Completed",
        "Flight": "A3  513",
        "Dest": "Thessaloniki (SKG)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "275c96b2-7be4-4312-b27b-b803032edd5d",
        "InterviewEndDate": "2023-04-21 16:43:18",
        "InterviewState": "Completed",
        "Flight": "A3  513",
        "Dest": "Thessaloniki (SKG)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "a66dd750-84ef-4973-9d12-bfb325bae005",
        "InterviewEndDate": "2023-04-21 16:39:01",
        "InterviewState": "Completed",
        "Flight": "A3  513",
        "Dest": "Thessaloniki (SKG)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "22de4b24-137a-4c6e-8814-bf11133a7f94",
        "InterviewEndDate": "2023-04-21 16:36:34",
        "InterviewState": "Completed",
        "Flight": "A3  513",
        "Dest": "Thessaloniki (SKG)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "4d1a4092-0518-487a-8fed-882e02208e45",
        "InterviewEndDate": "2023-04-21 17:06:03",
        "InterviewState": "Completed",
        "Flight": "EJU5121",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "2a6eed42-8c96-4034-8f90-c19563653727",
        "InterviewEndDate": "2023-04-21 17:39:24",
        "InterviewState": "Completed",
        "Flight": "EJU5121",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "2119f4c7-ad4b-4037-b92b-785aa5a04a10",
        "InterviewEndDate": "2023-04-21 18:04:31",
        "InterviewState": "Completed",
        "Flight": "EJU5153",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "44bacb2c-8ce6-47a4-9218-ca4b7539e59a",
        "InterviewEndDate": "2023-04-21 18:29:01",
        "InterviewState": "Completed",
        "Flight": "EJU5153",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "e3aa091d-6df8-4d0b-b2e6-a1505bbf8d3c",
        "InterviewEndDate": "2023-04-21 18:27:58",
        "InterviewState": "Completed",
        "Flight": "EW 8230",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "4570f3f5-06f5-48b5-b79c-ddff6eb1707b",
        "InterviewEndDate": "2023-04-21 18:53:28",
        "InterviewState": "Completed",
        "Flight": "EJU5153",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "a89b6094-ca3e-40ae-88c3-be8d272d1756",
        "InterviewEndDate": "2023-04-21 19:40:24",
        "InterviewState": "Completed",
        "Flight": "EW 2019",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "04601c4a-867c-4ccc-95e3-ba5d8bd2e725",
        "InterviewEndDate": "2023-04-21 19:29:10",
        "InterviewState": "Completed",
        "Flight": "EW 2019",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "96e59495-37a5-4bba-ba4a-9a5d32655a5e",
        "InterviewEndDate": "2023-04-21 20:36:19",
        "InterviewState": "Completed",
        "Flight": "EW 8046",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "39e4f470-a516-42f7-a9a6-ae3fca4bdaff",
        "InterviewEndDate": "2023-04-21 21:02:11",
        "InterviewState": "Completed",
        "Flight": "EW 8046",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "b33f8a2e-f270-431f-bf0f-c4c8156713ed",
        "InterviewEndDate": "2023-04-21 20:51:51",
        "InterviewState": "Completed",
        "Flight": "EW 8046",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "b4695bf8-fe30-4bd6-a4c7-881933f95de1",
        "InterviewEndDate": "2023-04-21 19:59:46",
        "InterviewState": "Completed",
        "Flight": "EJU5267",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "5e73f932-df30-465c-9f56-c3b4c2ea4877",
        "InterviewEndDate": "2023-04-21 20:05:11",
        "InterviewState": "Completed",
        "Flight": "EJU5267",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "af51fb19-16c4-4fe0-a80a-c612c02aca9d",
        "InterviewEndDate": "2023-04-21 20:07:49",
        "InterviewState": "Completed",
        "Flight": "EJU5267",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "cf0a0531-484a-454a-b717-c346f6fdbda3",
        "InterviewEndDate": "2023-04-21 21:39:35",
        "InterviewState": "Completed",
        "Flight": "EZS1190",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 12
    },
    {
        "InterviewId": "8f102b03-e006-4118-88c9-9321585baa4f",
        "InterviewEndDate": "2023-04-21 21:39:36",
        "InterviewState": "Completed",
        "Flight": "EZS1190",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 12
    },
    {
        "InterviewId": "deaa6028-497b-41d9-a115-b8f05d98f7cc",
        "InterviewEndDate": "2023-04-21 21:33:05",
        "InterviewState": "Completed",
        "Flight": "EZS1190",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 12
    },
    {
        "InterviewId": "29fe96ff-3ea5-45a9-9326-b8f5f61333de",
        "InterviewEndDate": "2023-04-25 15:56:56",
        "InterviewState": "Completed",
        "Flight": "EJU7173",
        "Dest": "Barcelona (BCN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "034ca601-a80c-4012-b615-8975c1ab5777",
        "InterviewEndDate": "2023-04-25 16:38:12",
        "InterviewState": "Completed",
        "Flight": "EJU5247",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2530f1da-20dc-4be6-986e-c6676db75dc6",
        "InterviewEndDate": "2023-04-25 16:18:04",
        "InterviewState": "Completed",
        "Flight": "EJU7173",
        "Dest": "Barcelona (BCN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f9f9a9b0-1fdc-46e7-8953-8bc323ab0302",
        "InterviewEndDate": "2023-04-25 18:42:48",
        "InterviewState": "Completed",
        "Flight": "SN 2588",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f1a58969-7391-4758-ad52-e149b1e3f926",
        "InterviewEndDate": "2023-04-25 17:10:39",
        "InterviewState": "Completed",
        "Flight": "TP  535",
        "Dest": "Lissabon (LIS)",
        "AirlineCode": "TAP Air Portugal",
        "InterviewerID": 11
    },
    {
        "InterviewId": "a441a9da-23ab-462a-bbbc-a5ce89c013f9",
        "InterviewEndDate": "2023-04-25 17:26:52",
        "InterviewState": "Completed",
        "Flight": "KL 1830",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b84efeea-76a2-47f5-8fae-bfe835cc8299",
        "InterviewEndDate": "2023-04-25 18:35:28",
        "InterviewState": "Completed",
        "Flight": "SN 2588",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2bf2104a-9422-4598-ba36-8a27cd05c767",
        "InterviewEndDate": "2023-04-25 18:54:18",
        "InterviewState": "Completed",
        "Flight": "SN 2588",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "252b3b0c-2df6-40cb-8d2b-a6cee24b3732",
        "InterviewEndDate": "2023-04-25 19:25:51",
        "InterviewState": "Completed",
        "Flight": "AY 1436",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c1eff124-0031-4ff7-89f7-b8b6e879f15e",
        "InterviewEndDate": "2023-04-26 16:14:48",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "5c3fd288-0780-4e1d-80c7-a3cb2917987f",
        "InterviewEndDate": "2023-04-25 19:22:06",
        "InterviewState": "Completed",
        "Flight": "AY 1436",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c4d56601-f30e-4436-8bc8-b9ca30a7ded0",
        "InterviewEndDate": "2023-04-25 19:44:43",
        "InterviewState": "Completed",
        "Flight": "I2 3671",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 11
    },
    {
        "InterviewId": "30ddf52f-3583-40f0-a502-a48f5bc37379",
        "InterviewEndDate": "2023-04-25 19:41:41",
        "InterviewState": "Completed",
        "Flight": "I2 3671",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 11
    },
    {
        "InterviewId": "311f985a-90f1-4289-aee9-af403b32f36d",
        "InterviewEndDate": "2023-04-25 19:44:31",
        "InterviewState": "Completed",
        "Flight": "I2 3671",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 11
    },
    {
        "InterviewId": "77e0437c-503e-4242-810b-a85d5328d71b",
        "InterviewEndDate": "2023-04-25 20:43:43",
        "InterviewState": "Completed",
        "Flight": "EW 2021",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2c02e076-82ce-4b0a-b7ed-7a378e45e2f8",
        "InterviewEndDate": "2023-04-25 20:31:59",
        "InterviewState": "Completed",
        "Flight": "EW 2021",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "21e83c8e-8119-4b0d-a4d9-da2c0d2c3bd3",
        "InterviewEndDate": "2023-04-26 15:58:46",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "86f789e4-2121-4bc3-abc0-82e5b3f84d16",
        "InterviewEndDate": "2023-04-26 16:11:03",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "14b5ff28-1170-48ef-ae25-b7f53d0b9cf7",
        "InterviewEndDate": "2023-04-26 15:53:17",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "2ae66ada-6311-4f20-9b69-b5c3552d9cd4",
        "InterviewEndDate": "2023-04-26 16:36:35",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "89d53d67-e107-419e-ab29-c67eb905d68c",
        "InterviewEndDate": "2023-04-26 16:57:18",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "c010d95b-2f89-4b3d-a7d9-9aa5fd2b1b61",
        "InterviewEndDate": "2023-04-26 16:58:49",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "3359e35c-7208-4cc0-8096-75cbe887e1c8",
        "InterviewEndDate": "2023-04-26 19:01:52",
        "InterviewState": "Completed",
        "Flight": "KL 1830",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "168bcf54-8847-4c30-b80e-7e05dd2210da",
        "InterviewEndDate": "2023-04-26 17:20:12",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "9c7be9ae-cae9-45c7-a170-d3c12a66777d",
        "InterviewEndDate": "2023-04-26 17:14:06",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "a70eeebf-a248-474b-8acc-81c5fc167cbc",
        "InterviewEndDate": "2023-04-26 17:23:18",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "b1b3de4d-577d-45db-bb1e-bd82e251e779",
        "InterviewEndDate": "2023-04-26 17:27:46",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "98ae4cd0-48be-4573-aa16-9a440000d5c8",
        "InterviewEndDate": "2023-04-26 19:01:45",
        "InterviewState": "Completed",
        "Flight": "KL 1830",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "70e34615-3e6b-4221-9034-82e67a5810af",
        "InterviewEndDate": "2023-04-26 19:02:29",
        "InterviewState": "Completed",
        "Flight": "EJU5153",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "2e80a1e9-31a7-46d7-88e3-a612702d5350",
        "InterviewEndDate": "2023-04-26 19:02:14",
        "InterviewState": "Completed",
        "Flight": "EJU5153",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "1674ff95-ba09-4bd2-a458-cf88944703fd",
        "InterviewEndDate": "2023-04-26 19:10:09",
        "InterviewState": "Completed",
        "Flight": "EJU5153",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "f6dc2c07-46b6-4350-884c-9139ab2ed7cd",
        "InterviewEndDate": "2023-04-26 19:26:21",
        "InterviewState": "Completed",
        "Flight": "EJU5153",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "28208332-3768-4a79-af3e-8087a68b133f",
        "InterviewEndDate": "2023-04-26 19:27:33",
        "InterviewState": "Completed",
        "Flight": "EJU5153",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "77f0ac6c-db29-4d2d-b7e7-7da804133777",
        "InterviewEndDate": "2023-04-26 20:05:44",
        "InterviewState": "Completed",
        "Flight": "LO  390",
        "Dest": "Warschau (WAW)",
        "AirlineCode": "LOT Polish Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "0ddd2505-d7a8-43ab-a8d9-d4d72bc27b7d",
        "InterviewEndDate": "2023-04-26 20:06:49",
        "InterviewState": "Completed",
        "Flight": "LO  390",
        "Dest": "Warschau (WAW)",
        "AirlineCode": "LOT Polish Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "0c0dc8bf-43e9-4f1c-bab5-bf999c9a7bb0",
        "InterviewEndDate": "2023-04-26 20:20:02",
        "InterviewState": "Completed",
        "Flight": "LO  390",
        "Dest": "Warschau (WAW)",
        "AirlineCode": "LOT Polish Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "eb24409e-a6aa-423b-8a2d-99cc6f587bd5",
        "InterviewEndDate": "2023-04-26 20:41:32",
        "InterviewState": "Completed",
        "Flight": "LO  390",
        "Dest": "Warschau (WAW)",
        "AirlineCode": "LOT Polish Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "798ced8f-f14c-437b-8057-93ad6a4a5800",
        "InterviewEndDate": "2023-04-26 20:34:29",
        "InterviewState": "Completed",
        "Flight": "LO  390",
        "Dest": "Warschau (WAW)",
        "AirlineCode": "LOT Polish Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "c1a37c24-7ee2-4595-a0ea-9cc07987d7d6",
        "InterviewEndDate": "2023-04-26 20:46:44",
        "InterviewState": "Completed",
        "Flight": "EW 8212",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "88821825-42cd-477d-b2e2-9d04bf0728c7",
        "InterviewEndDate": "2023-04-26 20:55:25",
        "InterviewState": "Completed",
        "Flight": "EW 8212",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "8ef47e88-8e98-4b99-aed5-7abf41563805",
        "InterviewEndDate": "2023-04-26 21:19:29",
        "InterviewState": "Completed",
        "Flight": "EW 8212",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "6fc26f14-c94a-4db8-98bd-af24f54d8d82",
        "InterviewEndDate": "2023-04-26 21:16:55",
        "InterviewState": "Completed",
        "Flight": "EW 8212",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "90ed7dc1-482f-45f6-a67e-ad14aeb43ece",
        "InterviewEndDate": "2023-04-26 21:16:53",
        "InterviewState": "Completed",
        "Flight": "EW 8212",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "9a740c68-dcfc-4175-8ae1-c71c88fd92f3",
        "InterviewEndDate": "2023-04-26 21:21:32",
        "InterviewState": "Completed",
        "Flight": "EW 8212",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "21edd73d-fdf6-4a8e-a8ec-76fddd06e2c9",
        "InterviewEndDate": "2023-04-26 21:49:44",
        "InterviewState": "Completed",
        "Flight": "EJU4078",
        "Dest": "Venedig (VCE)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "b051016f-278b-43ab-aca0-b6ee01bd7b77",
        "InterviewEndDate": "2023-04-26 21:36:45",
        "InterviewState": "Completed",
        "Flight": "EJU4078",
        "Dest": "Venedig (VCE)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "4563d97a-b62f-430c-9277-99041e0c92d4",
        "InterviewEndDate": "2023-04-26 22:02:44",
        "InterviewState": "Completed",
        "Flight": "EJU4078",
        "Dest": "Venedig (VCE)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "b1ad348c-0d82-4833-9275-c5081e91e37b",
        "InterviewEndDate": "2023-04-26 22:09:19",
        "InterviewState": "Completed",
        "Flight": "EJU4078",
        "Dest": "Venedig (VCE)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "0984ee2b-803b-40fa-840e-ad452437355a",
        "InterviewEndDate": "2023-04-26 22:39:21",
        "InterviewState": "Completed",
        "Flight": "EZY2202",
        "Dest": "Manchester (MAN)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 12
    },
    {
        "InterviewId": "49e2a710-a8f5-400c-a097-757f9fd1b62f",
        "InterviewEndDate": "2023-04-29 08:47:46",
        "InterviewState": "Completed",
        "Flight": "LH  177",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "dedc0e10-197e-4a69-a774-93f75f131469",
        "InterviewEndDate": "2023-04-29 08:49:57",
        "InterviewState": "Completed",
        "Flight": "LH  177",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "bdc2efd8-a4d2-4d32-af9e-8df824eb8a37",
        "InterviewEndDate": "2023-04-29 08:49:29",
        "InterviewState": "Completed",
        "Flight": "LH  177",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "45100999-fde4-4a0a-a8d9-bbd400844035",
        "InterviewEndDate": "2023-04-29 08:51:37",
        "InterviewState": "Completed",
        "Flight": "LH  181",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "84b3e353-fdde-4faf-ab64-c33a9ae974da",
        "InterviewEndDate": "2023-04-29 09:45:46",
        "InterviewState": "Completed",
        "Flight": "FR 1144",
        "Dest": "Manchester (MAN)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "3ad7ad35-f1c6-4e5f-a00a-91023677c720",
        "InterviewEndDate": "2023-04-29 09:34:40",
        "InterviewState": "Completed",
        "Flight": "FR 1144",
        "Dest": "Manchester (MAN)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b66f8a53-0dd7-4d1e-9869-b752b1c69a0f",
        "InterviewEndDate": "2023-04-29 09:33:36",
        "InterviewState": "Completed",
        "Flight": "FR 1144",
        "Dest": "Manchester (MAN)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "3b059f40-f2ad-437c-b8c5-b495dbcf7a4c",
        "InterviewEndDate": "2023-04-29 09:46:20",
        "InterviewState": "Completed",
        "Flight": "FR 1144",
        "Dest": "Manchester (MAN)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "171290ce-d53e-4668-ac60-abf5f942098a",
        "InterviewEndDate": "2023-04-29 09:48:49",
        "InterviewState": "Completed",
        "Flight": "FR 1144",
        "Dest": "Manchester (MAN)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "5665b9fe-9b1c-4f64-82b3-878bfafbc9f0",
        "InterviewEndDate": "2023-04-29 10:52:34",
        "InterviewState": "Completed",
        "Flight": "VY 1883",
        "Dest": "Barcelona (BCN)",
        "AirlineCode": "Vueling Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "6ab7ea05-316c-4011-9215-b203373ee09c",
        "InterviewEndDate": "2023-04-29 10:52:00",
        "InterviewState": "Completed",
        "Flight": "VY 1883",
        "Dest": "Barcelona (BCN)",
        "AirlineCode": "Vueling Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "038cde36-bd28-4b84-8cfd-aa07d3c3e6b0",
        "InterviewEndDate": "2023-04-29 11:42:58",
        "InterviewState": "Completed",
        "Flight": "FR 3388",
        "Dest": "Marseille (MRS)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2dfa3146-d39a-45af-b052-bc4e1ce6e7cc",
        "InterviewEndDate": "2023-04-29 11:13:24",
        "InterviewState": "Completed",
        "Flight": "FR 2599",
        "Dest": "Riga (RIX)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f1a2f6e3-2f01-4ef3-b2c1-a10771e318cf",
        "InterviewEndDate": "2023-04-29 11:31:44",
        "InterviewState": "Completed",
        "Flight": "FR 3388",
        "Dest": "Marseille (MRS)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "e610b1c0-b96e-4f92-a5ee-93a3444fae84",
        "InterviewEndDate": "2023-04-29 12:11:46",
        "InterviewState": "Completed",
        "Flight": "EW 8592",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 2
    },
    {
        "InterviewId": "3f2e054f-5784-4ee4-b1d3-e09468727195",
        "InterviewEndDate": "2023-04-29 12:28:00",
        "InterviewState": "Completed",
        "Flight": "EJU5333",
        "Dest": "Funchal (FNC)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 1
    },
    {
        "InterviewId": "50220285-0055-45c0-a543-d3e38a97ad09",
        "InterviewEndDate": "2023-04-29 12:09:21",
        "InterviewState": "Completed",
        "Flight": "EW 8592",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 2
    },
    {
        "InterviewId": "1d366a46-d06f-4855-8c7c-dfa9a03abb3b",
        "InterviewEndDate": "2023-04-29 12:49:16",
        "InterviewState": "Completed",
        "Flight": "BA  983",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 2
    },
    {
        "InterviewId": "118b51ce-5cc7-44a0-b8e7-939057ec4b7a",
        "InterviewEndDate": "2023-04-29 12:54:43",
        "InterviewState": "Completed",
        "Flight": "BA  983",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 2
    },
    {
        "InterviewId": "09943105-9bc4-460f-85ba-8e7b2b5c514d",
        "InterviewEndDate": "2023-04-29 13:00:20",
        "InterviewState": "Completed",
        "Flight": "BA  983",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 2
    },
    {
        "InterviewId": "409da551-53a5-4357-9983-c20bfae4cde4",
        "InterviewEndDate": "2023-04-29 13:11:34",
        "InterviewState": "Completed",
        "Flight": "BA  983",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 2
    },
    {
        "InterviewId": "3fdef8b7-a34e-4fd3-847c-83363eb9a7c6",
        "InterviewEndDate": "2023-04-29 13:04:53",
        "InterviewState": "Completed",
        "Flight": "BA  983",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9d242f1c-7b8f-4282-a831-8bb8ec583e87",
        "InterviewEndDate": "2023-04-29 13:10:07",
        "InterviewState": "Completed",
        "Flight": "BA  983",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "e022d1dc-c1ed-4d5f-aeef-a69eaff68863",
        "InterviewEndDate": "2023-04-29 13:31:56",
        "InterviewState": "Completed",
        "Flight": "PC  980",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d5b15d73-20ce-4e28-9f15-8b677e68e087",
        "InterviewEndDate": "2023-04-29 14:04:49",
        "InterviewState": "Completed",
        "Flight": "SM 2961",
        "Dest": "Hurghada (HRG)",
        "AirlineCode": "Air Cairo",
        "InterviewerID": 2
    },
    {
        "InterviewId": "73014522-aac6-40d5-909e-8586ec3710cf",
        "InterviewEndDate": "2023-04-29 14:03:25",
        "InterviewState": "Completed",
        "Flight": "SM 2961",
        "Dest": "Hurghada (HRG)",
        "AirlineCode": "Air Cairo",
        "InterviewerID": 2
    },
    {
        "InterviewId": "1dbc875c-16d9-4167-a54b-a40f0d61e6d4",
        "InterviewEndDate": "2023-04-29 13:29:52",
        "InterviewState": "Completed",
        "Flight": "PC  980",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "c94cc24c-527a-41fa-b958-86a55d1326e8",
        "InterviewEndDate": "2023-04-29 13:34:43",
        "InterviewState": "Completed",
        "Flight": "PC  980",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 2
    },
    {
        "InterviewId": "37f3ccd8-719d-42c7-adae-c4fd509006de",
        "InterviewEndDate": "2023-04-29 13:49:52",
        "InterviewState": "Completed",
        "Flight": "LH  189",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "165ca29c-9b4c-4592-ac21-942bf1807197",
        "InterviewEndDate": "2023-04-29 13:43:58",
        "InterviewState": "Completed",
        "Flight": "LH  189",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b8062cc7-a70a-4bc8-a3f9-c6edd420b14b",
        "InterviewEndDate": "2023-04-29 13:44:57",
        "InterviewState": "Completed",
        "Flight": "PC  980",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "768b8422-a547-4080-8cf9-ab7fdb5d17d1",
        "InterviewEndDate": "2023-04-29 14:06:11",
        "InterviewState": "Completed",
        "Flight": "SM 2961",
        "Dest": "Hurghada (HRG)",
        "AirlineCode": "Air Cairo",
        "InterviewerID": 2
    },
    {
        "InterviewId": "2fb2d6c0-a29d-4398-877c-884d4736a4fa",
        "InterviewEndDate": "2023-04-29 14:23:59",
        "InterviewState": "Completed",
        "Flight": "FR  208",
        "Dest": "Ibiza (IBZ)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "79730f21-d3eb-4fb1-a61e-9e6257b9d38e",
        "InterviewEndDate": "2023-04-29 14:58:58",
        "InterviewState": "Completed",
        "Flight": "EW 8590",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 1
    },
    {
        "InterviewId": "5018713b-3e36-4d1a-a0fc-d1b370ceb7d8",
        "InterviewEndDate": "2023-04-29 14:00:13",
        "InterviewState": "Completed",
        "Flight": "LH  189",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "db7c7217-dd66-49df-afa1-cbf543252847",
        "InterviewEndDate": "2023-04-29 14:21:12",
        "InterviewState": "Completed",
        "Flight": "SM 2961",
        "Dest": "Hurghada (HRG)",
        "AirlineCode": "Air Cairo",
        "InterviewerID": 2
    },
    {
        "InterviewId": "e4030451-47d5-440e-893c-a31975be6394",
        "InterviewEndDate": "2023-04-29 14:29:08",
        "InterviewState": "Completed",
        "Flight": "SM 2961",
        "Dest": "Hurghada (HRG)",
        "AirlineCode": "Air Cairo",
        "InterviewerID": 2
    },
    {
        "InterviewId": "8e9afbc1-63b6-4aef-9602-d4b51bcf71e7",
        "InterviewEndDate": "2023-04-29 14:20:49",
        "InterviewState": "Completed",
        "Flight": "SM 2961",
        "Dest": "Hurghada (HRG)",
        "AirlineCode": "Air Cairo",
        "InterviewerID": 2
    },
    {
        "InterviewId": "db0925b2-dbc2-4b4f-afbf-bd252d71ba69",
        "InterviewEndDate": "2023-04-29 14:29:53",
        "InterviewState": "Completed",
        "Flight": "FR  208",
        "Dest": "Ibiza (IBZ)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "6d5d0e4f-5d67-459c-9888-789d994d0bad",
        "InterviewEndDate": "2023-04-29 14:27:07",
        "InterviewState": "Completed",
        "Flight": "FR  208",
        "Dest": "Ibiza (IBZ)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c66a43d2-2cdd-4604-a6ad-ad0361fd797a",
        "InterviewEndDate": "2023-05-01 14:14:10",
        "InterviewState": "Completed",
        "Flight": "D8 4506",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Norwegian Air Sweden AOC",
        "InterviewerID": 11
    },
    {
        "InterviewId": "6b416ef0-7bdf-4e1d-b5bb-d97fe0f73ab8",
        "InterviewEndDate": "2023-04-29 14:48:27",
        "InterviewState": "Completed",
        "Flight": "SM 2961",
        "Dest": "Hurghada (HRG)",
        "AirlineCode": "Air Cairo",
        "InterviewerID": 2
    },
    {
        "InterviewId": "03864be8-8b81-4e9b-be6f-96b0b602bb05",
        "InterviewEndDate": "2023-04-29 15:06:07",
        "InterviewState": "Completed",
        "Flight": "XQ  947",
        "Dest": "Izmir (ADB)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 2
    },
    {
        "InterviewId": "8a3eb91d-1afb-4f26-8b13-b94e18f94780",
        "InterviewEndDate": "2023-04-29 15:48:28",
        "InterviewState": "Completed",
        "Flight": "AF 1235",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 2
    },
    {
        "InterviewId": "436ac1b9-17f9-4ec3-854b-7c7ef3f79bcd",
        "InterviewEndDate": "2023-04-29 15:45:52",
        "InterviewState": "Completed",
        "Flight": "AF 1235",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 2
    },
    {
        "InterviewId": "9d70bad0-5918-431b-9c19-9c3e7e4081ad",
        "InterviewEndDate": "2023-04-29 15:47:23",
        "InterviewState": "Completed",
        "Flight": "AF 1235",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 1
    },
    {
        "InterviewId": "82ad075f-9542-4b01-9b79-a8c71accb81c",
        "InterviewEndDate": "2023-04-29 15:49:25",
        "InterviewState": "Completed",
        "Flight": "AF 1235",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 1
    },
    {
        "InterviewId": "63395335-0572-4bea-a61c-7ab76ad33a19",
        "InterviewEndDate": "2023-04-29 15:53:02",
        "InterviewState": "Completed",
        "Flight": "AF 1235",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 2
    },
    {
        "InterviewId": "c2a70493-47ee-4483-ad5c-974fc56ca103",
        "InterviewEndDate": "2023-04-30 11:28:49",
        "InterviewState": "Completed",
        "Flight": "A3  821",
        "Dest": "Athen (ATH)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 2
    },
    {
        "InterviewId": "30e1c323-c1b2-432d-ab0d-9056e49865e0",
        "InterviewEndDate": "2023-04-30 11:30:03",
        "InterviewState": "Completed",
        "Flight": "A3  821",
        "Dest": "Athen (ATH)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 2
    },
    {
        "InterviewId": "c606bb6d-556f-42e1-b5cc-d711f5e7acbb",
        "InterviewEndDate": "2023-04-30 11:32:26",
        "InterviewState": "Completed",
        "Flight": "A3  821",
        "Dest": "Athen (ATH)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 2
    },
    {
        "InterviewId": "7ca8a218-d8b2-4a9b-b1a5-965d729dfa43",
        "InterviewEndDate": "2023-04-30 12:16:14",
        "InterviewState": "Completed",
        "Flight": "EZY8630",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 2
    },
    {
        "InterviewId": "1ff56fdc-646e-45e1-adf4-d8152ceca4e1",
        "InterviewEndDate": "2023-04-30 12:17:20",
        "InterviewState": "Completed",
        "Flight": "EZY8630",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 2
    },
    {
        "InterviewId": "df7fae80-a512-4315-bee7-cf53bfd683e0",
        "InterviewEndDate": "2023-04-30 12:27:53",
        "InterviewState": "Completed",
        "Flight": "EZY8630",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 2
    },
    {
        "InterviewId": "46a85ef5-9d98-4e1f-8522-af4385a5e475",
        "InterviewEndDate": "2023-04-30 12:39:39",
        "InterviewState": "Completed",
        "Flight": "EZY8630",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 2
    },
    {
        "InterviewId": "51c9710b-1d0f-40e9-aec0-c27b34ba6571",
        "InterviewEndDate": "2023-04-30 13:56:09",
        "InterviewState": "Completed",
        "Flight": "PC  980",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 2
    },
    {
        "InterviewId": "07ccc648-7b3c-4455-8e52-adf476cd3e85",
        "InterviewEndDate": "2023-04-30 13:55:15",
        "InterviewState": "Completed",
        "Flight": "PC  980",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 2
    },
    {
        "InterviewId": "c69b85d2-b934-4479-9986-d9836f0fad68",
        "InterviewEndDate": "2023-04-30 14:26:25",
        "InterviewState": "Completed",
        "Flight": "BA  993",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 2
    },
    {
        "InterviewId": "0e220cf2-0172-4053-91f2-b642b58532cb",
        "InterviewEndDate": "2023-04-30 14:29:28",
        "InterviewState": "Completed",
        "Flight": "BA  993",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 2
    },
    {
        "InterviewId": "aebd8447-5b8e-4a4d-8a56-77ffa3cbe5dd",
        "InterviewEndDate": "2023-04-30 14:26:13",
        "InterviewState": "Completed",
        "Flight": "BA  993",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 2
    },
    {
        "InterviewId": "3cfd6aa8-d458-4bd5-9c8b-d8299645c368",
        "InterviewEndDate": "2023-04-30 14:47:39",
        "InterviewState": "Completed",
        "Flight": "BA  993",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 2
    },
    {
        "InterviewId": "64848329-3c88-482a-8dd8-bfe77829fc90",
        "InterviewEndDate": "2023-04-30 14:44:15",
        "InterviewState": "Completed",
        "Flight": "BA  993",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 2
    },
    {
        "InterviewId": "3552290a-7fc3-4722-90a2-b9963da38687",
        "InterviewEndDate": "2023-04-30 14:45:46",
        "InterviewState": "Completed",
        "Flight": "BA  993",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 2
    },
    {
        "InterviewId": "71d243fd-b00f-4420-84ac-be87522eaa46",
        "InterviewEndDate": "2023-04-30 15:11:23",
        "InterviewState": "Completed",
        "Flight": "XQ  947",
        "Dest": "Izmir (ADB)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 2
    },
    {
        "InterviewId": "afcc12ad-dbb5-4409-8245-cdfceae15769",
        "InterviewEndDate": "2023-04-30 15:46:47",
        "InterviewState": "Completed",
        "Flight": "AF 1235",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 2
    },
    {
        "InterviewId": "393d5c6f-b412-4c94-8397-c571b2e7b58e",
        "InterviewEndDate": "2023-04-30 15:52:41",
        "InterviewState": "Completed",
        "Flight": "AF 1235",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 2
    },
    {
        "InterviewId": "3d4952d8-cdf7-44ea-b13f-cd0facd85c58",
        "InterviewEndDate": "2023-04-30 15:56:16",
        "InterviewState": "Completed",
        "Flight": "AF 1235",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 2
    },
    {
        "InterviewId": "fd2448f6-ba62-4841-b805-7966c0cee8a3",
        "InterviewEndDate": "2023-04-30 16:27:48",
        "InterviewState": "Completed",
        "Flight": "EJU5081",
        "Dest": "Rom (FCO)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 2
    },
    {
        "InterviewId": "1142539a-4bf8-4d88-98b4-d7977e7ed2ba",
        "InterviewEndDate": "2023-05-01 14:06:47",
        "InterviewState": "Completed",
        "Flight": "D8 4506",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Norwegian Air Sweden AOC",
        "InterviewerID": 11
    },
    {
        "InterviewId": "7b27ff56-6a49-4410-9d3c-bc3655b104df",
        "InterviewEndDate": "2023-05-01 14:12:33",
        "InterviewState": "Completed",
        "Flight": "D8 4506",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Norwegian Air Sweden AOC",
        "InterviewerID": 11
    },
    {
        "InterviewId": "5a3cfd7f-6aaf-47c5-9d50-ad2b065bc25e",
        "InterviewEndDate": "2023-05-01 14:17:20",
        "InterviewState": "Completed",
        "Flight": "EJU5071",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 2
    },
    {
        "InterviewId": "d8046654-6d3b-41c3-aafb-b54d4c01c78d",
        "InterviewEndDate": "2023-05-01 14:44:41",
        "InterviewState": "Completed",
        "Flight": "EW 8070",
        "Dest": "K\u00f6ln (CGN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 2
    },
    {
        "InterviewId": "644dfcfc-b39f-43ab-a83f-a7266ab6a0da",
        "InterviewEndDate": "2023-05-01 14:44:45",
        "InterviewState": "Completed",
        "Flight": "EW 8070",
        "Dest": "K\u00f6ln (CGN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 2
    },
    {
        "InterviewId": "0d12ec4d-d127-4fa8-a752-79c2331a9976",
        "InterviewEndDate": "2023-05-01 14:40:49",
        "InterviewState": "Completed",
        "Flight": "W6 2316",
        "Dest": "Budapest (BUD)",
        "AirlineCode": "Wizz Air",
        "InterviewerID": 11
    },
    {
        "InterviewId": "fcf888df-f6b9-4a1a-8cd0-8dd6ea19ae63",
        "InterviewEndDate": "2023-05-01 14:47:10",
        "InterviewState": "Completed",
        "Flight": "EW 8070",
        "Dest": "K\u00f6ln (CGN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 2
    },
    {
        "InterviewId": "11ad0c9e-081a-4e6c-9d24-cc4654ddd55e",
        "InterviewEndDate": "2023-05-01 14:38:24",
        "InterviewState": "Completed",
        "Flight": "W6 2316",
        "Dest": "Budapest (BUD)",
        "AirlineCode": "Wizz Air",
        "InterviewerID": 11
    },
    {
        "InterviewId": "23614223-1d60-462b-9626-cd292dbb50fe",
        "InterviewEndDate": "2023-05-01 15:01:15",
        "InterviewState": "Completed",
        "Flight": "EW 8070",
        "Dest": "K\u00f6ln (CGN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 2
    },
    {
        "InterviewId": "1314a1ce-f8b6-4e20-ba20-c88f0ff142ca",
        "InterviewEndDate": "2023-05-01 15:04:08",
        "InterviewState": "Completed",
        "Flight": "EW 8070",
        "Dest": "K\u00f6ln (CGN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 2
    },
    {
        "InterviewId": "38fe5a86-b82a-4704-a53e-8505702239b1",
        "InterviewEndDate": "2023-05-01 14:59:46",
        "InterviewState": "Completed",
        "Flight": "EW 8070",
        "Dest": "K\u00f6ln (CGN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 2
    },
    {
        "InterviewId": "f30bd370-c28d-4af1-af03-a4ba2491e489",
        "InterviewEndDate": "2023-05-01 15:21:55",
        "InterviewState": "Completed",
        "Flight": "EJU5331",
        "Dest": "Porto (OPO)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 2
    },
    {
        "InterviewId": "a1abab0c-ce6c-41ce-bf6c-a195ea011676",
        "InterviewEndDate": "2023-05-01 15:54:23",
        "InterviewState": "Completed",
        "Flight": "W6 4516",
        "Dest": "Varna (VAR)",
        "AirlineCode": "Wizz Air",
        "InterviewerID": 11
    },
    {
        "InterviewId": "e4ddd61a-5731-46a3-9a32-d8f75d81d7f3",
        "InterviewEndDate": "2023-05-01 15:25:37",
        "InterviewState": "Completed",
        "Flight": "EJU5331",
        "Dest": "Porto (OPO)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 2
    },
    {
        "InterviewId": "995b6588-7a3e-498c-84c1-8535d31f538c",
        "InterviewEndDate": "2023-05-01 15:52:12",
        "InterviewState": "Completed",
        "Flight": "W6 4516",
        "Dest": "Varna (VAR)",
        "AirlineCode": "Wizz Air",
        "InterviewerID": 11
    },
    {
        "InterviewId": "700cf99d-8c2c-4c55-87a4-81748382fd26",
        "InterviewEndDate": "2023-05-01 16:12:39",
        "InterviewState": "Completed",
        "Flight": "FR 5419",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d1e0f9a9-403e-4cd6-98a5-b1e2ee0a233d",
        "InterviewEndDate": "2023-05-01 16:26:50",
        "InterviewState": "Completed",
        "Flight": "EJU7173",
        "Dest": "Barcelona (BCN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 2
    },
    {
        "InterviewId": "3334c46c-1828-429f-99b9-bdf7fb2c9b60",
        "InterviewEndDate": "2023-05-01 16:23:28",
        "InterviewState": "Completed",
        "Flight": "EJU7173",
        "Dest": "Barcelona (BCN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 2
    },
    {
        "InterviewId": "afe1627b-eda8-4882-ba08-b2914901cfbd",
        "InterviewEndDate": "2023-05-01 16:39:54",
        "InterviewState": "Completed",
        "Flight": "FR 5419",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "35586051-2261-4a27-91db-c760f0d6332c",
        "InterviewEndDate": "2023-05-01 16:26:44",
        "InterviewState": "Completed",
        "Flight": "FR 5419",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "3e82990c-529b-4c48-bdce-89041fbae247",
        "InterviewEndDate": "2023-05-01 17:53:35",
        "InterviewState": "Completed",
        "Flight": "LH  197",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "1ba108fb-c3be-49ae-857b-be8dd2ed733d",
        "InterviewEndDate": "2023-05-01 17:06:28",
        "InterviewState": "Completed",
        "Flight": "EW 2005",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 2
    },
    {
        "InterviewId": "19c51f13-f786-4162-af14-d1fc58d57260",
        "InterviewEndDate": "2023-05-01 18:19:13",
        "InterviewState": "Completed",
        "Flight": "LH  197",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8d69f8df-7e57-4343-ba78-d64f96358faf",
        "InterviewEndDate": "2023-05-01 17:31:34",
        "InterviewState": "Completed",
        "Flight": "EW 8594",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 2
    },
    {
        "InterviewId": "88ffeb48-39cb-465f-8eec-81555e13996c",
        "InterviewEndDate": "2023-05-01 18:02:02",
        "InterviewState": "Completed",
        "Flight": "EJU5053",
        "Dest": "Neapel (NAP)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 2
    },
    {
        "InterviewId": "851420ed-25ed-4f52-b420-8e162ddd125c",
        "InterviewEndDate": "2023-05-01 17:59:23",
        "InterviewState": "Completed",
        "Flight": "EJU5053",
        "Dest": "Neapel (NAP)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 2
    },
    {
        "InterviewId": "bb0b9ba9-fe5f-4de6-8340-812b89ca82fe",
        "InterviewEndDate": "2023-05-01 18:00:35",
        "InterviewState": "Completed",
        "Flight": "EJU5053",
        "Dest": "Neapel (NAP)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 2
    },
    {
        "InterviewId": "95774264-1ab2-4f30-99cc-7525b915eb4f",
        "InterviewEndDate": "2023-05-01 18:43:51",
        "InterviewState": "Completed",
        "Flight": "EW 8006",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 2
    },
    {
        "InterviewId": "e2bba6f7-fb2f-41f2-8ace-cd50dba01fea",
        "InterviewEndDate": "2023-05-01 18:44:54",
        "InterviewState": "Completed",
        "Flight": "EW 8006",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 2
    },
    {
        "InterviewId": "9153788b-54df-4e0c-bb06-7933aabc9394",
        "InterviewEndDate": "2023-05-01 19:11:07",
        "InterviewState": "Completed",
        "Flight": "FR  177",
        "Dest": "London (STN)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "7cc65f6d-de1a-4d76-a269-938293526ecd",
        "InterviewEndDate": "2023-05-01 18:35:57",
        "InterviewState": "Completed",
        "Flight": "OS  234",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d7eea964-184b-4d49-95fc-899310f3a311",
        "InterviewEndDate": "2023-05-01 18:35:31",
        "InterviewState": "Completed",
        "Flight": "OS  234",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2cef7768-42f2-4af7-9333-a38f50f48552",
        "InterviewEndDate": "2023-05-01 19:08:06",
        "InterviewState": "Completed",
        "Flight": "FR  177",
        "Dest": "London (STN)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "6cce3fcc-eb36-4c10-89b5-dd0cc51e8636",
        "InterviewEndDate": "2023-05-01 19:10:15",
        "InterviewState": "Completed",
        "Flight": "EJU5247",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 2
    },
    {
        "InterviewId": "68c4ddfc-ad6c-414a-b78c-aaed6e4f9256",
        "InterviewEndDate": "2023-05-01 19:09:56",
        "InterviewState": "Completed",
        "Flight": "FR  177",
        "Dest": "London (STN)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "fc65aea0-2f8c-4b8b-9efe-d27f964c61a1",
        "InterviewEndDate": "2023-05-01 19:08:28",
        "InterviewState": "Completed",
        "Flight": "EJU5247",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 2
    },
    {
        "InterviewId": "be313db5-adc9-42ff-af08-af90966a710d",
        "InterviewEndDate": "2023-05-01 19:51:46",
        "InterviewState": "Completed",
        "Flight": "LX  983",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 11
    },
    {
        "InterviewId": "23c85784-e510-4fc9-8dfb-8ede89d7598d",
        "InterviewEndDate": "2023-05-01 19:34:29",
        "InterviewState": "Completed",
        "Flight": "AY 1436",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 2
    },
    {
        "InterviewId": "996c0c62-06f7-4ef4-8485-a9e53ab362ec",
        "InterviewEndDate": "2023-05-01 19:37:44",
        "InterviewState": "Completed",
        "Flight": "AY 1436",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 2
    },
    {
        "InterviewId": "453792a5-0b36-4f04-a8bf-b1e25c94ca80",
        "InterviewEndDate": "2023-05-01 19:33:53",
        "InterviewState": "Completed",
        "Flight": "AY 1436",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 2
    },
    {
        "InterviewId": "db01f9ea-6635-4158-be1a-e1e9f9465e00",
        "InterviewEndDate": "2023-05-01 20:05:53",
        "InterviewState": "Completed",
        "Flight": "EJU5267",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 2
    },
    {
        "InterviewId": "3a67972c-63e3-4acf-be87-a53b55b5aa3a",
        "InterviewEndDate": "2023-05-01 19:52:31",
        "InterviewState": "Completed",
        "Flight": "LX  983",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 11
    },
    {
        "InterviewId": "65eead9d-9ce2-4ff1-a8d3-bbfb6abf6cdd",
        "InterviewEndDate": "2023-05-01 20:05:56",
        "InterviewState": "Completed",
        "Flight": "EJU5267",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 2
    },
    {
        "InterviewId": "cd7bc7d3-7941-4f22-a995-db50065d456c",
        "InterviewEndDate": "2023-05-01 20:40:48",
        "InterviewState": "Completed",
        "Flight": "EW 8212",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 2
    },
    {
        "InterviewId": "d58aaf0e-c7a0-4603-ae6e-a16a11c1dfbe",
        "InterviewEndDate": "2023-05-01 20:39:54",
        "InterviewState": "Completed",
        "Flight": "EW 8212",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 2
    },
    {
        "InterviewId": "88302190-d626-4d06-8066-ca42564fa3ff",
        "InterviewEndDate": "2023-05-02 13:30:08",
        "InterviewState": "Completed",
        "Flight": "EJU5213",
        "Dest": "Split (SPU)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "7f281099-1ae7-45da-be37-94fb9e9fb681",
        "InterviewEndDate": "2023-05-02 13:50:33",
        "InterviewState": "Completed",
        "Flight": "EJU5213",
        "Dest": "Split (SPU)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "da990ee2-9775-4b83-970d-b753a49651ae",
        "InterviewEndDate": "2023-05-02 13:51:00",
        "InterviewState": "Completed",
        "Flight": "EJU5213",
        "Dest": "Split (SPU)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c0c4c5bc-eac0-4dbf-bcd1-d1fc0dae1f0a",
        "InterviewEndDate": "2023-05-02 14:17:44",
        "InterviewState": "Completed",
        "Flight": "KL 1826",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d40df383-367e-4ca8-b7b8-a9c30a53f708",
        "InterviewEndDate": "2023-05-02 14:19:27",
        "InterviewState": "Completed",
        "Flight": "KL 1826",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "0e558971-7094-4bb6-b887-b00b5ea4e069",
        "InterviewEndDate": "2023-05-02 14:20:40",
        "InterviewState": "Completed",
        "Flight": "KL 1826",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f34ca47a-3937-4e93-857c-818d7586daed",
        "InterviewEndDate": "2023-05-02 14:25:37",
        "InterviewState": "Completed",
        "Flight": "KL 1826",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b3ad7e3c-e483-4320-ac7c-bc0f479b71b2",
        "InterviewEndDate": "2023-05-02 14:25:26",
        "InterviewState": "Completed",
        "Flight": "KL 1826",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 10
    },
    {
        "InterviewId": "be6fbd1f-8037-4d9d-a7b9-b2a15febc357",
        "InterviewEndDate": "2023-05-02 14:31:06",
        "InterviewState": "Completed",
        "Flight": "KL 1826",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "77be60b7-2ac2-4102-b74b-81bb3755e0b3",
        "InterviewEndDate": "2023-05-02 16:40:55",
        "InterviewState": "Completed",
        "Flight": "EJU5247",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "5870e371-b37a-4b78-9179-b0e5c40bb377",
        "InterviewEndDate": "2023-05-02 16:38:37",
        "InterviewState": "Completed",
        "Flight": "EJU5247",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "3eba2e05-8ce1-4fa3-896a-d94a823da89c",
        "InterviewEndDate": "2023-05-02 16:39:18",
        "InterviewState": "Completed",
        "Flight": "EJU5247",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "7a580857-e300-4d56-8627-9ee39fbcb6ec",
        "InterviewEndDate": "2023-05-02 16:10:31",
        "InterviewState": "Completed",
        "Flight": "EW 9043",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b9df2ba2-a630-4ba9-8dd5-c4c086072580",
        "InterviewEndDate": "2023-05-02 17:20:12",
        "InterviewState": "Completed",
        "Flight": "KL 1830",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d0cb2f30-27b2-4072-87d2-b47818fa84c3",
        "InterviewEndDate": "2023-05-02 17:31:49",
        "InterviewState": "Completed",
        "Flight": "KL 1830",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2a3317d8-636c-43bd-a5ae-d69e78730f94",
        "InterviewEndDate": "2023-05-02 17:30:52",
        "InterviewState": "Completed",
        "Flight": "KL 1830",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8979c61c-9b0c-4ee9-9f5d-bf81f83eda2a",
        "InterviewEndDate": "2023-05-02 17:44:01",
        "InterviewState": "Completed",
        "Flight": "KL 1830",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "fecc6e42-45e2-48cf-a087-c1bde86fd716",
        "InterviewEndDate": "2023-05-02 19:20:06",
        "InterviewState": "Completed",
        "Flight": "EJU4632",
        "Dest": "Paris (CDG)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "a8a9df37-c0d0-4e02-b79d-b49bd71c1b62",
        "InterviewEndDate": "2023-05-02 18:09:15",
        "InterviewState": "Completed",
        "Flight": "EW 8054",
        "Dest": "K\u00f6ln (CGN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "124e8efd-379c-4bd7-bd64-8d130fa14597",
        "InterviewEndDate": "2023-05-02 19:19:16",
        "InterviewState": "Completed",
        "Flight": "EJU4632",
        "Dest": "Paris (CDG)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "04f5a1f5-f46a-4009-bb03-a279774a46ed",
        "InterviewEndDate": "2023-05-02 19:16:15",
        "InterviewState": "Completed",
        "Flight": "EJU4632",
        "Dest": "Paris (CDG)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "7172428a-e65b-4092-946b-c4686adbe17d",
        "InterviewEndDate": "2023-05-02 19:43:19",
        "InterviewState": "Completed",
        "Flight": "EJU4632",
        "Dest": "Paris (CDG)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "80eb3e39-8189-46a3-8ba3-aafc1549e2e7",
        "InterviewEndDate": "2023-05-02 19:48:56",
        "InterviewState": "Completed",
        "Flight": "EJU4632",
        "Dest": "Paris (CDG)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f85f9707-9875-4e1c-ba09-d032c0ed7fce",
        "InterviewEndDate": "2023-05-06 11:50:38",
        "InterviewState": "Completed",
        "Flight": "SN 2582",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "8bc6b9b9-d0df-4abc-90c0-9235ea53e2ef",
        "InterviewEndDate": "2023-05-06 11:47:06",
        "InterviewState": "Completed",
        "Flight": "SN 2582",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "11742753-490a-4e3b-8bc9-7799d4588e9c",
        "InterviewEndDate": "2023-05-06 11:47:56",
        "InterviewState": "Completed",
        "Flight": "SN 2582",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "5a0b3864-17cb-46f6-a3b8-c50be61e6f4a",
        "InterviewEndDate": "2023-05-06 11:50:36",
        "InterviewState": "Completed",
        "Flight": "SN 2582",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "0bcddf8e-184e-4548-9dd0-b0943e9718e2",
        "InterviewEndDate": "2023-05-06 12:11:46",
        "InterviewState": "Completed",
        "Flight": "SN 2582",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "844f82f0-548e-4803-9eac-88eed28b2cd8",
        "InterviewEndDate": "2023-05-06 12:29:56",
        "InterviewState": "Completed",
        "Flight": "TK 7729",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "26e8b8eb-8046-4667-b623-e0a47867e9fd",
        "InterviewEndDate": "2023-05-06 12:35:00",
        "InterviewState": "Completed",
        "Flight": "TK 7729",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "6e32debb-3be0-4163-ae8b-bd26f130f44b",
        "InterviewEndDate": "2023-05-06 12:32:55",
        "InterviewState": "Completed",
        "Flight": "TK 7729",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b975e1c1-3946-44b7-85cb-ccfd3983ca89",
        "InterviewEndDate": "2023-05-12 15:31:58",
        "InterviewState": "Completed",
        "Flight": "XQ  947",
        "Dest": "Izmir (ADB)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 1
    },
    {
        "InterviewId": "14192300-28a6-4e93-822a-cf1f08333f7c",
        "InterviewEndDate": "2023-05-08 06:51:19",
        "InterviewState": "Completed",
        "Flight": "EW 8040",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8fdabc02-1a9a-45a3-90d9-7e06d6ec9b50",
        "InterviewEndDate": "2023-05-08 07:28:43",
        "InterviewState": "Completed",
        "Flight": "EJU5147",
        "Dest": "Paris (CDG)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "35b17cfe-5f46-434e-bc9a-a0d06924facc",
        "InterviewEndDate": "2023-05-08 07:26:45",
        "InterviewState": "Completed",
        "Flight": "EJU5147",
        "Dest": "Paris (CDG)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "1c67e91b-29e4-4db2-9464-cc615312d8c4",
        "InterviewEndDate": "2023-05-08 07:24:37",
        "InterviewState": "Completed",
        "Flight": "EJU5147",
        "Dest": "Paris (CDG)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "fe1cb79c-5902-4573-987e-88b11a9676f0",
        "InterviewEndDate": "2023-05-08 07:18:58",
        "InterviewState": "Completed",
        "Flight": "EJU5147",
        "Dest": "Paris (CDG)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c23f5516-5cb3-445f-a26e-a91e6484ba60",
        "InterviewEndDate": "2023-05-08 07:18:07",
        "InterviewState": "Completed",
        "Flight": "EJU5147",
        "Dest": "Paris (CDG)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c19a1684-5464-4609-beff-d2509e553a35",
        "InterviewEndDate": "2023-05-08 08:15:26",
        "InterviewState": "Completed",
        "Flight": "EW 2003",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "3bc940af-5ff2-47a7-a196-dd2d0fa2e45d",
        "InterviewEndDate": "2023-05-08 08:28:21",
        "InterviewState": "Completed",
        "Flight": "EW 2003",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8780326c-78e2-40fd-bd36-ccb8fd964cac",
        "InterviewEndDate": "2023-05-08 09:29:56",
        "InterviewState": "Completed",
        "Flight": "EJU5145",
        "Dest": "Nizza (NCE)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "cca34ec3-0c50-4576-8bd9-d36aa1cb0478",
        "InterviewEndDate": "2023-05-08 09:30:19",
        "InterviewState": "Completed",
        "Flight": "EJU5145",
        "Dest": "Nizza (NCE)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d163ab49-b1a9-4026-9955-b42ced14f102",
        "InterviewEndDate": "2023-05-08 12:11:03",
        "InterviewState": "Completed",
        "Flight": "OG  701",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "PLAY",
        "InterviewerID": 11
    },
    {
        "InterviewId": "e0ccd1b8-c9a5-43e4-89e7-8d2f15227736",
        "InterviewEndDate": "2023-05-08 12:58:57",
        "InterviewState": "Completed",
        "Flight": "LH 1937",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b3f46035-c3dc-4423-b119-cf2da8172ccc",
        "InterviewEndDate": "2023-05-08 12:17:15",
        "InterviewState": "Completed",
        "Flight": "OG  701",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "PLAY",
        "InterviewerID": 11
    },
    {
        "InterviewId": "7e9cf482-799a-4daa-a2e9-7e11a85c7cc1",
        "InterviewEndDate": "2023-05-08 13:00:07",
        "InterviewState": "Completed",
        "Flight": "LH 1937",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ab330671-4be5-4ee0-9cdf-76cbf02ea963",
        "InterviewEndDate": "2023-05-08 12:22:34",
        "InterviewState": "Completed",
        "Flight": "OG  701",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "PLAY",
        "InterviewerID": 11
    },
    {
        "InterviewId": "67333579-3794-4d43-b2db-cf100981872c",
        "InterviewEndDate": "2023-05-08 12:54:59",
        "InterviewState": "Completed",
        "Flight": "LH 1937",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "1f4993f8-e0b3-41d4-bb12-da4f1dbac9e5",
        "InterviewEndDate": "2023-05-08 13:21:53",
        "InterviewState": "Completed",
        "Flight": "LH 1937",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ceeef8de-ab27-4364-b271-ad41825c1a15",
        "InterviewEndDate": "2023-05-09 06:57:44",
        "InterviewState": "Completed",
        "Flight": "EJU5261",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ba23a660-73fb-4e8a-9602-c69d659b0f56",
        "InterviewEndDate": "2023-05-09 07:04:26",
        "InterviewState": "Completed",
        "Flight": "EJU5261",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "173aa70b-8fb8-4a09-b9cf-913d5f2ac7ba",
        "InterviewEndDate": "2023-05-09 07:18:27",
        "InterviewState": "Completed",
        "Flight": "EJU5079",
        "Dest": "Rom (FCO)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "12e5cc6b-58f2-4694-8dae-90523070c272",
        "InterviewEndDate": "2023-05-09 07:24:09",
        "InterviewState": "Completed",
        "Flight": "EJU5079",
        "Dest": "Rom (FCO)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "e83298b7-95ce-45d0-a974-76cd8585220b",
        "InterviewEndDate": "2023-05-09 08:29:25",
        "InterviewState": "Completed",
        "Flight": "EW 8342",
        "Dest": "Salzburg (SZG)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ca5178f1-39b6-47bb-a4f4-a24958d5af25",
        "InterviewEndDate": "2023-05-09 08:34:16",
        "InterviewState": "Completed",
        "Flight": "EW 8342",
        "Dest": "Salzburg (SZG)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f6eac0b9-3639-4771-91fc-a19893c4316c",
        "InterviewEndDate": "2023-05-09 08:42:38",
        "InterviewState": "Completed",
        "Flight": "EW 8342",
        "Dest": "Salzburg (SZG)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "051235a0-b781-4a2f-a729-ce9ba5228426",
        "InterviewEndDate": "2023-05-09 09:13:25",
        "InterviewState": "Completed",
        "Flight": "KL 1822",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "26c9889b-8005-49f0-9dbf-a07804922ffc",
        "InterviewEndDate": "2023-05-09 08:28:12",
        "InterviewState": "Completed",
        "Flight": "EW 8342",
        "Dest": "Salzburg (SZG)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "143ed288-90c7-4571-8f87-ba5cd8cc507e",
        "InterviewEndDate": "2023-05-09 12:38:10",
        "InterviewState": "Completed",
        "Flight": "DY 1123",
        "Dest": "Bergen (BGO)",
        "AirlineCode": "Norwegian Air Shuttle AOC",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d0bfd208-5b01-4b40-b66a-c34daab16307",
        "InterviewEndDate": "2023-05-09 13:13:59",
        "InterviewState": "Completed",
        "Flight": "FR  351",
        "Dest": "Rhodos (RHO)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "3fb4bc83-5caa-430a-ad88-736b204a7ac9",
        "InterviewEndDate": "2023-05-09 13:14:17",
        "InterviewState": "Completed",
        "Flight": "FR  351",
        "Dest": "Rhodos (RHO)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ebdbe32e-ce37-4735-84e3-adf6681dc4e7",
        "InterviewEndDate": "2023-05-09 13:08:20",
        "InterviewState": "Completed",
        "Flight": "FR  351",
        "Dest": "Rhodos (RHO)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "a85f88a1-3910-4f79-abf1-a04fbdfd081f",
        "InterviewEndDate": "2023-05-09 13:13:58",
        "InterviewState": "Completed",
        "Flight": "FR  351",
        "Dest": "Rhodos (RHO)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b5fbd635-d3d8-43e0-9b79-b59ef3fa6970",
        "InterviewEndDate": "2023-05-09 13:17:09",
        "InterviewState": "Completed",
        "Flight": "FR  351",
        "Dest": "Rhodos (RHO)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "975dd8b4-1251-42a5-8f96-86a9185df9b7",
        "InterviewEndDate": "2023-05-09 13:05:48",
        "InterviewState": "Completed",
        "Flight": "FR  351",
        "Dest": "Rhodos (RHO)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "51188783-e643-4df9-8d2d-96c22ba75ee5",
        "InterviewEndDate": "2023-05-10 15:48:38",
        "InterviewState": "Completed",
        "Flight": "EW 8046",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "a750fd2f-f21d-4206-b9bc-8a4c87da1881",
        "InterviewEndDate": "2023-05-10 15:46:32",
        "InterviewState": "Completed",
        "Flight": "EW 8046",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "63fa8aa3-227e-41e6-81e6-8c42fa0787c1",
        "InterviewEndDate": "2023-05-10 15:59:33",
        "InterviewState": "Completed",
        "Flight": "EW 8046",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f765f89a-aa1a-4d89-92eb-9aa6a16cf764",
        "InterviewEndDate": "2023-05-10 15:44:15",
        "InterviewState": "Completed",
        "Flight": "EW 8046",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "49e5ab18-7ca2-48a3-94f9-ab544faec431",
        "InterviewEndDate": "2023-05-10 15:55:21",
        "InterviewState": "Completed",
        "Flight": "EW 8046",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "32931eaf-b7ed-4b55-93f0-72ce6d4ef8a6",
        "InterviewEndDate": "2023-05-10 16:17:34",
        "InterviewState": "Completed",
        "Flight": "EW 8046",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "57516b11-7ad0-4964-8a53-914408058085",
        "InterviewEndDate": "2023-05-10 16:36:43",
        "InterviewState": "Completed",
        "Flight": "EW 2019",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "a78cb6d3-db95-4f1b-aeed-7ca9923a2891",
        "InterviewEndDate": "2023-05-10 16:42:28",
        "InterviewState": "Completed",
        "Flight": "EW 2019",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "9101056f-cdc4-4c28-ad0b-8200a05e0204",
        "InterviewEndDate": "2023-05-10 16:34:37",
        "InterviewState": "Completed",
        "Flight": "EW 2019",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b9a55194-b8fe-4b1f-9ad3-8255aa15d991",
        "InterviewEndDate": "2023-05-10 16:31:30",
        "InterviewState": "Completed",
        "Flight": "EW 2019",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "defe8faf-2ba6-424e-83e3-d0d860421443",
        "InterviewEndDate": "2023-05-10 16:30:49",
        "InterviewState": "Completed",
        "Flight": "EW 2019",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8ea5fc0f-248f-45ed-b351-ca582d9d0d84",
        "InterviewEndDate": "2023-05-10 17:37:20",
        "InterviewState": "Completed",
        "Flight": "KL 1830",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "e92caae1-3e5c-4e72-9ffc-b0528bbba025",
        "InterviewEndDate": "2023-05-10 17:24:19",
        "InterviewState": "Completed",
        "Flight": "KL 1830",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d9bb1a1f-0c44-4891-9f44-9f7700dc0051",
        "InterviewEndDate": "2023-05-10 17:20:02",
        "InterviewState": "Completed",
        "Flight": "KL 1830",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "db3b93d5-0417-40b9-b9b2-c997b2d0d3f3",
        "InterviewEndDate": "2023-05-10 19:40:18",
        "InterviewState": "Completed",
        "Flight": "I2 3671",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8ca94bc0-4387-4a68-b6c9-b9c81c8affcf",
        "InterviewEndDate": "2023-05-10 18:29:07",
        "InterviewState": "Completed",
        "Flight": "OS  234",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "cfa02a4b-1f31-48ef-9346-cb6fa37867f1",
        "InterviewEndDate": "2023-05-10 18:46:20",
        "InterviewState": "Completed",
        "Flight": "OS  234",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "9d1db03f-d53b-46cc-8335-8faa8a270d84",
        "InterviewEndDate": "2023-05-10 19:44:21",
        "InterviewState": "Completed",
        "Flight": "I2 3671",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c26496fa-fc66-4632-af52-9f761edf2ce6",
        "InterviewEndDate": "2023-05-10 19:45:23",
        "InterviewState": "Completed",
        "Flight": "I2 3671",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 11
    },
    {
        "InterviewId": "40ae5231-acee-4065-b5e4-d68ce9a73ea7",
        "InterviewEndDate": "2023-05-10 19:47:06",
        "InterviewState": "Completed",
        "Flight": "I2 3671",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8fc62de1-c7fe-4d0c-adf9-d24bb29c085e",
        "InterviewEndDate": "2023-05-10 20:31:47",
        "InterviewState": "Completed",
        "Flight": "EW 8212",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2ffca692-24a7-42df-b7cd-db39b4726d1b",
        "InterviewEndDate": "2023-05-10 20:28:45",
        "InterviewState": "Completed",
        "Flight": "EW 8212",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8b11b369-633b-4f37-9374-756141b1abbb",
        "InterviewEndDate": "2023-05-10 20:30:58",
        "InterviewState": "Completed",
        "Flight": "EW 8212",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "007b1cda-a371-4ec4-9fe1-c348ce953f5e",
        "InterviewEndDate": "2023-05-10 22:17:15",
        "InterviewState": "Completed",
        "Flight": "EJU7338",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f252ab36-6b55-4796-8410-8c54817a61cb",
        "InterviewEndDate": "2023-05-10 21:02:35",
        "InterviewState": "Completed",
        "Flight": "EZS1190",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b3a5aba5-570b-4f4d-9ddd-d7a1a263367d",
        "InterviewEndDate": "2023-05-10 22:21:38",
        "InterviewState": "Completed",
        "Flight": "EJU7338",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "cc613da7-7018-4fda-a15d-8d58541901e3",
        "InterviewEndDate": "2023-05-10 22:16:03",
        "InterviewState": "Completed",
        "Flight": "EJU7338",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f3d9b312-dfd1-423c-8e21-daecb3722cbc",
        "InterviewEndDate": "2023-05-11 15:27:54",
        "InterviewState": "Completed",
        "Flight": "BA  993",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 2
    },
    {
        "InterviewId": "68c3052f-ecd1-41aa-9191-c36655957d96",
        "InterviewEndDate": "2023-05-11 15:25:38",
        "InterviewState": "Completed",
        "Flight": "BA  993",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 2
    },
    {
        "InterviewId": "fe8fa94b-8f37-4e32-8b10-9cc08ffbbf4a",
        "InterviewEndDate": "2023-05-11 15:55:47",
        "InterviewState": "Completed",
        "Flight": "MS  732",
        "Dest": "Kairo (CAI)",
        "AirlineCode": "Egypt Air",
        "InterviewerID": 2
    },
    {
        "InterviewId": "446f6e2c-1ae2-4c26-9f26-b346c2496f5d",
        "InterviewEndDate": "2023-05-11 15:58:18",
        "InterviewState": "Completed",
        "Flight": "MS  732",
        "Dest": "Kairo (CAI)",
        "AirlineCode": "Egypt Air",
        "InterviewerID": 2
    },
    {
        "InterviewId": "15533f55-697b-4396-b5a9-bead4a0e6242",
        "InterviewEndDate": "2023-05-11 16:08:38",
        "InterviewState": "Completed",
        "Flight": "MS  732",
        "Dest": "Kairo (CAI)",
        "AirlineCode": "Egypt Air",
        "InterviewerID": 2
    },
    {
        "InterviewId": "9ae2647b-a24d-4c8a-a7d2-9c783f4d1d81",
        "InterviewEndDate": "2023-05-11 15:55:24",
        "InterviewState": "Completed",
        "Flight": "MS  732",
        "Dest": "Kairo (CAI)",
        "AirlineCode": "Egypt Air",
        "InterviewerID": 2
    },
    {
        "InterviewId": "1516aba2-39af-497d-bf6f-b2a3171fc8e3",
        "InterviewEndDate": "2023-05-11 16:49:35",
        "InterviewState": "Completed",
        "Flight": "EZY3262",
        "Dest": "Edinburgh (EDI)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 2
    },
    {
        "InterviewId": "4b3d7a22-a264-4bf7-aa04-940edb30fefa",
        "InterviewEndDate": "2023-05-11 16:51:45",
        "InterviewState": "Completed",
        "Flight": "EZY3262",
        "Dest": "Edinburgh (EDI)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 2
    },
    {
        "InterviewId": "2d7169a6-6398-4511-a986-7fd921fc2260",
        "InterviewEndDate": "2023-05-11 16:43:09",
        "InterviewState": "Completed",
        "Flight": "EZY3262",
        "Dest": "Edinburgh (EDI)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 2
    },
    {
        "InterviewId": "7f19efa8-5e27-4ab9-b38d-894227afa43a",
        "InterviewEndDate": "2023-05-11 17:00:37",
        "InterviewState": "Completed",
        "Flight": "EZY3262",
        "Dest": "Edinburgh (EDI)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 2
    },
    {
        "InterviewId": "244b8921-e79b-4c09-9d13-a4e727654b2d",
        "InterviewEndDate": "2023-05-11 16:58:51",
        "InterviewState": "Completed",
        "Flight": "EZY3262",
        "Dest": "Edinburgh (EDI)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 2
    },
    {
        "InterviewId": "9427d95f-bde5-43d9-840d-a4282c358810",
        "InterviewEndDate": "2023-05-11 17:33:39",
        "InterviewState": "Completed",
        "Flight": "EJU5079",
        "Dest": "Rom (FCO)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 2
    },
    {
        "InterviewId": "6404c0ba-4f33-41b0-b6ec-dc7a9c0e96cd",
        "InterviewEndDate": "2023-05-11 17:26:44",
        "InterviewState": "Completed",
        "Flight": "EJU5079",
        "Dest": "Rom (FCO)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 2
    },
    {
        "InterviewId": "83ef06cb-77c4-4521-b0b7-ce8585d51094",
        "InterviewEndDate": "2023-05-11 17:27:10",
        "InterviewState": "Completed",
        "Flight": "EJU5079",
        "Dest": "Rom (FCO)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 2
    },
    {
        "InterviewId": "5bc22b17-8cb9-44ee-9b42-d004a9231623",
        "InterviewEndDate": "2023-05-11 18:40:03",
        "InterviewState": "Completed",
        "Flight": "AY 1438",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 2
    },
    {
        "InterviewId": "a6cd63a4-dfd5-474f-8a6f-9de00920a306",
        "InterviewEndDate": "2023-05-11 18:43:53",
        "InterviewState": "Completed",
        "Flight": "AY 1438",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 2
    },
    {
        "InterviewId": "8f04f265-ef7b-47ea-be04-c3d8114d019d",
        "InterviewEndDate": "2023-05-11 19:16:31",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 2
    },
    {
        "InterviewId": "55a62b45-d9c8-49a5-8cb8-ad32ab45d6d8",
        "InterviewEndDate": "2023-05-11 20:24:03",
        "InterviewState": "Completed",
        "Flight": "EW 2005",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 2
    },
    {
        "InterviewId": "73edf9cb-4ef4-4bcb-8bcc-7d824960e6a8",
        "InterviewEndDate": "2023-05-11 20:25:49",
        "InterviewState": "Completed",
        "Flight": "EW 2005",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 2
    },
    {
        "InterviewId": "fc6d4d33-4456-4a00-bb98-89af916465e3",
        "InterviewEndDate": "2023-05-11 21:15:15",
        "InterviewState": "Completed",
        "Flight": "JU  355",
        "Dest": "Belgrad (BEG)",
        "AirlineCode": "Air Serbia",
        "InterviewerID": 2
    },
    {
        "InterviewId": "d1bf3dff-8019-4e08-bc03-a793016b21a7",
        "InterviewEndDate": "2023-05-11 21:38:56",
        "InterviewState": "Completed",
        "Flight": "EI  337",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 2
    },
    {
        "InterviewId": "f0f563fb-24f2-4f7c-9a78-7953799e925c",
        "InterviewEndDate": "2023-05-11 21:40:25",
        "InterviewState": "Completed",
        "Flight": "EI  337",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 2
    },
    {
        "InterviewId": "6a1a96e4-3c70-401d-a4d6-81a02437ff74",
        "InterviewEndDate": "2023-05-12 14:46:00",
        "InterviewState": "Completed",
        "Flight": "EJU5265",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c8e0f7a2-7168-4f76-bf19-cea4e17f33fe",
        "InterviewEndDate": "2023-05-12 14:43:11",
        "InterviewState": "Completed",
        "Flight": "EJU5265",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2f4eec48-8223-481a-adf9-8dbcc524fee4",
        "InterviewEndDate": "2023-05-12 14:46:08",
        "InterviewState": "Completed",
        "Flight": "EJU5265",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "5e7b9caf-8874-4f6e-ac6b-9546ef23dd16",
        "InterviewEndDate": "2023-05-12 14:49:58",
        "InterviewState": "Completed",
        "Flight": "EJU5265",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "6c292b20-9dd4-4677-a7d8-bfba35353899",
        "InterviewEndDate": "2023-05-12 15:34:33",
        "InterviewState": "Completed",
        "Flight": "EJU5053",
        "Dest": "Neapel (NAP)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2eca01a5-0149-4516-8322-c783cd17ff5e",
        "InterviewEndDate": "2023-05-12 16:29:45",
        "InterviewState": "Completed",
        "Flight": "EW 8044",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "480c2c59-6e64-4485-9f78-78c09f5606ef",
        "InterviewEndDate": "2023-05-12 15:56:10",
        "InterviewState": "Completed",
        "Flight": "BT  922",
        "Dest": "Vilnius (VNO)",
        "AirlineCode": "Air Baltic",
        "InterviewerID": 12
    },
    {
        "InterviewId": "02ed29ea-e908-4b5a-b887-9986cf953765",
        "InterviewEndDate": "2023-05-12 16:33:10",
        "InterviewState": "Completed",
        "Flight": "EW 8044",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "4a5b6d3b-df9e-4ae7-bd12-cd5e7821d35f",
        "InterviewEndDate": "2023-05-12 16:04:47",
        "InterviewState": "Completed",
        "Flight": "BT  922",
        "Dest": "Vilnius (VNO)",
        "AirlineCode": "Air Baltic",
        "InterviewerID": 12
    },
    {
        "InterviewId": "3ac9b3aa-5a65-4aef-ab6e-c2128385fbdd",
        "InterviewEndDate": "2023-05-12 16:32:59",
        "InterviewState": "Completed",
        "Flight": "EW 8044",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "a39a41e3-5e07-449a-84ba-cfba6cf9489d",
        "InterviewEndDate": "2023-05-12 17:07:27",
        "InterviewState": "Completed",
        "Flight": "A3  513",
        "Dest": "Thessaloniki (SKG)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "cad8ebc1-197d-4a9e-b56e-98f40868f8b5",
        "InterviewEndDate": "2023-05-12 17:04:31",
        "InterviewState": "Completed",
        "Flight": "A3  513",
        "Dest": "Thessaloniki (SKG)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "cc38a6ca-1e69-4b6d-8108-9a94956b965b",
        "InterviewEndDate": "2023-05-12 17:56:39",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "ac505d02-7c27-4069-9c75-d60a7ccef2e6",
        "InterviewEndDate": "2023-05-12 16:41:26",
        "InterviewState": "Completed",
        "Flight": "A3  513",
        "Dest": "Thessaloniki (SKG)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "22260e7c-8423-4f48-a2f0-c76a7da2fb93",
        "InterviewEndDate": "2023-05-12 17:22:11",
        "InterviewState": "Completed",
        "Flight": "EJU5153",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "6d908994-2cea-4aff-bc32-da759cb685a7",
        "InterviewEndDate": "2023-05-12 17:20:39",
        "InterviewState": "Completed",
        "Flight": "EJU5153",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2c3cba12-a785-4fff-a604-bbb545e7c023",
        "InterviewEndDate": "2023-05-12 17:42:03",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "59ffb541-9846-4e21-a023-dab492f5baf4",
        "InterviewEndDate": "2023-05-12 17:23:37",
        "InterviewState": "Completed",
        "Flight": "EJU5153",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "6abe1930-4d84-4877-9404-cb346168384a",
        "InterviewEndDate": "2023-05-12 18:23:12",
        "InterviewState": "Completed",
        "Flight": "AY 1438",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "84ecaea9-e588-4070-9f06-85817a92f006",
        "InterviewEndDate": "2023-05-12 17:36:31",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "084e6f14-42ba-4561-88aa-884dcf3af081",
        "InterviewEndDate": "2023-05-12 18:11:14",
        "InterviewState": "Completed",
        "Flight": "AY 1438",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8e2368ac-5649-4b7f-ae66-bbac99687826",
        "InterviewEndDate": "2023-05-12 17:47:38",
        "InterviewState": "Completed",
        "Flight": "XQ  661",
        "Dest": "Antalya (AYT)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 12
    },
    {
        "InterviewId": "d117f4cb-ea41-46fe-b5c4-bc4f47c46998",
        "InterviewEndDate": "2023-05-12 18:20:23",
        "InterviewState": "Completed",
        "Flight": "XQ  661",
        "Dest": "Antalya (AYT)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 12
    },
    {
        "InterviewId": "ddbf4e64-757f-4cf1-9600-bd7dcbad473a",
        "InterviewEndDate": "2023-05-12 18:05:59",
        "InterviewState": "Completed",
        "Flight": "AY 1438",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "69f18627-4a9a-4f0e-8cce-827fc28f4e58",
        "InterviewEndDate": "2023-05-12 18:09:37",
        "InterviewState": "Completed",
        "Flight": "EZY3262",
        "Dest": "Edinburgh (EDI)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 12
    },
    {
        "InterviewId": "5cb871c1-37d5-4c1f-a6b3-8c1563f20281",
        "InterviewEndDate": "2023-05-12 19:30:50",
        "InterviewState": "Completed",
        "Flight": "EJU5287",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "79688496-350d-4d54-ba4d-b4c95e1de5d6",
        "InterviewEndDate": "2023-05-12 19:27:40",
        "InterviewState": "Completed",
        "Flight": "EJU5287",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "71d136e8-f634-4abf-b26d-97af9e7e94cb",
        "InterviewEndDate": "2023-05-12 19:35:22",
        "InterviewState": "Completed",
        "Flight": "EJU5287",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f7534b48-1161-4592-bb91-acbac6e183cb",
        "InterviewEndDate": "2023-05-12 19:25:59",
        "InterviewState": "Completed",
        "Flight": "EJU5287",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ae4cf662-5a9e-4d64-ba7f-828adab6ef10",
        "InterviewEndDate": "2023-05-12 18:36:04",
        "InterviewState": "Completed",
        "Flight": "XQ  661",
        "Dest": "Antalya (AYT)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 12
    },
    {
        "InterviewId": "28ef62c6-c1c6-4b8e-8cdc-c9b75279e1f4",
        "InterviewEndDate": "2023-05-12 20:40:47",
        "InterviewState": "Completed",
        "Flight": "LH 1949",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 12
    },
    {
        "InterviewId": "fe224aab-05fb-4986-9115-b76d8b1a151c",
        "InterviewEndDate": "2023-05-12 19:23:36",
        "InterviewState": "Completed",
        "Flight": "EJU5287",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "4d26e898-7e42-4d28-aa0e-dcb52e0d99d8",
        "InterviewEndDate": "2023-05-12 20:27:29",
        "InterviewState": "Completed",
        "Flight": "EW 2021",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "48a244f2-7731-40f9-9248-ca57999ca8dc",
        "InterviewEndDate": "2023-05-12 20:27:08",
        "InterviewState": "Completed",
        "Flight": "EW 2021",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "0e4ebb9e-6e6f-49af-b2f0-bf8230ca3492",
        "InterviewEndDate": "2023-05-12 20:26:49",
        "InterviewState": "Completed",
        "Flight": "EW 2021",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "72d842de-a110-4194-8d7b-c2eb625ea217",
        "InterviewEndDate": "2023-05-12 21:13:16",
        "InterviewState": "Completed",
        "Flight": "EZS1190",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8663b4b6-9312-4046-ab01-a31ad84f1816",
        "InterviewEndDate": "2023-05-12 21:15:40",
        "InterviewState": "Completed",
        "Flight": "LH  201",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 12
    },
    {
        "InterviewId": "2b830117-e22e-4105-99ae-c4cad16d634d",
        "InterviewEndDate": "2023-05-12 21:13:51",
        "InterviewState": "Completed",
        "Flight": "LH  201",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 12
    },
    {
        "InterviewId": "21c8c382-4545-4d63-8419-d2ff1b58c64b",
        "InterviewEndDate": "2023-05-12 21:05:52",
        "InterviewState": "Completed",
        "Flight": "EZS1190",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ae3fb79b-970f-40f9-a6e8-b1fbc6953e45",
        "InterviewEndDate": "2023-05-12 21:22:00",
        "InterviewState": "Completed",
        "Flight": "EZS1190",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d6e7f0ac-35b5-40ee-bd67-ae2b36750339",
        "InterviewEndDate": "2023-05-12 21:15:53",
        "InterviewState": "Completed",
        "Flight": "EZS1190",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 11
    },
    {
        "InterviewId": "7bbd75e4-dc24-49bd-9789-b9dbd4ef8628",
        "InterviewEndDate": "2023-05-13 14:06:04",
        "InterviewState": "Completed",
        "Flight": "FI  529",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "Icelandair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "5def1f3e-3087-4ebe-a58a-b6c346a8b652",
        "InterviewEndDate": "2023-05-12 22:02:21",
        "InterviewState": "Completed",
        "Flight": "SN 2590",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "85c94b5b-ed53-4917-9906-936f07ab13b4",
        "InterviewEndDate": "2023-05-12 21:46:48",
        "InterviewState": "Completed",
        "Flight": "SN 2590",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "e196835b-fda8-4087-8358-ad1cddece801",
        "InterviewEndDate": "2023-05-13 14:11:35",
        "InterviewState": "Completed",
        "Flight": "FI  529",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "Icelandair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "42cd0d13-d6f2-4770-b927-933e942eb6b1",
        "InterviewEndDate": "2023-05-13 14:10:15",
        "InterviewState": "Completed",
        "Flight": "FI  529",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "Icelandair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ae64127a-7657-4e73-a3af-81efe7b64f6b",
        "InterviewEndDate": "2023-05-13 14:04:28",
        "InterviewState": "Completed",
        "Flight": "FI  529",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "Icelandair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "136cd62c-d89a-473d-9472-79869efcc677",
        "InterviewEndDate": "2023-05-13 14:55:52",
        "InterviewState": "Completed",
        "Flight": "EJU5121",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "1aa4f8bd-d0c0-49ed-8f18-afea2fc20a4f",
        "InterviewEndDate": "2023-05-13 14:46:27",
        "InterviewState": "Completed",
        "Flight": "EJU5121",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "eab828cd-392b-49d4-a766-89c8ec1f8255",
        "InterviewEndDate": "2023-05-13 14:49:00",
        "InterviewState": "Completed",
        "Flight": "EW 8594",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f6beadd6-cd19-4f3a-98de-7fce20723e51",
        "InterviewEndDate": "2023-05-13 14:55:40",
        "InterviewState": "Completed",
        "Flight": "EW 8594",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 998
    },
    {
        "InterviewId": "5bafe446-8488-4afe-b967-d088d8434e6e",
        "InterviewEndDate": "2023-05-13 15:38:16",
        "InterviewState": "Completed",
        "Flight": "EJU5055",
        "Dest": "Olbia (OLB)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "84d765e8-e6ed-4a4e-a5cf-a8dd8c168a8b",
        "InterviewEndDate": "2023-05-13 15:27:16",
        "InterviewState": "Completed",
        "Flight": "EJU5055",
        "Dest": "Olbia (OLB)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "2732838e-5114-459d-88c8-82ae3a7f3a67",
        "InterviewEndDate": "2023-05-13 15:34:20",
        "InterviewState": "Completed",
        "Flight": "EJU5055",
        "Dest": "Olbia (OLB)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "8eb018db-ee40-409d-92bc-dbf2e17ed837",
        "InterviewEndDate": "2023-05-13 16:37:05",
        "InterviewState": "Completed",
        "Flight": "LH  195",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 998
    },
    {
        "InterviewId": "2cc24ea7-7566-4e72-a7e1-9dd7672a1f0a",
        "InterviewEndDate": "2023-05-13 15:46:07",
        "InterviewState": "Completed",
        "Flight": "EJU5055",
        "Dest": "Olbia (OLB)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b2b631d0-78d0-4633-9067-acec813b8a83",
        "InterviewEndDate": "2023-05-13 16:40:09",
        "InterviewState": "Completed",
        "Flight": "LH  195",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "7494f4ed-b995-42db-b469-76f75a11142e",
        "InterviewEndDate": "2023-05-13 16:34:54",
        "InterviewState": "Completed",
        "Flight": "LH  195",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "6194d338-e354-4309-bef3-be089ce1d09d",
        "InterviewEndDate": "2023-05-13 16:31:19",
        "InterviewState": "Completed",
        "Flight": "LH  195",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b38291d8-3356-4bfc-a519-77af0408acb3",
        "InterviewEndDate": "2023-05-13 16:35:37",
        "InterviewState": "Completed",
        "Flight": "LH  195",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 998
    },
    {
        "InterviewId": "0fbfdcf8-e1f0-460a-9d40-e1feac4b72d7",
        "InterviewEndDate": "2023-05-13 16:38:44",
        "InterviewState": "Completed",
        "Flight": "LH  195",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2f6c22d4-73d7-45ee-b4f7-9ab137717184",
        "InterviewEndDate": "2023-05-13 16:51:42",
        "InterviewState": "Completed",
        "Flight": "LH  195",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 998
    },
    {
        "InterviewId": "6b96dfc4-0a01-4c32-8165-81836d22fba4",
        "InterviewEndDate": "2023-05-13 17:55:19",
        "InterviewState": "Completed",
        "Flight": "LH 1953",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "5b43eb16-5e28-492f-8204-d2e38979430d",
        "InterviewEndDate": "2023-05-13 17:57:54",
        "InterviewState": "Completed",
        "Flight": "LH 1947",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8cac7fdd-f356-443d-a5ca-b128e9d16f99",
        "InterviewEndDate": "2023-05-13 18:01:13",
        "InterviewState": "Completed",
        "Flight": "LH 1947",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 998
    },
    {
        "InterviewId": "a1beec9e-e41a-40d6-b09a-c0c7e3259f2e",
        "InterviewEndDate": "2023-05-13 17:57:46",
        "InterviewState": "Completed",
        "Flight": "LH 1947",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "89c91512-c0f3-4a2c-ba1f-7d01b18046da",
        "InterviewEndDate": "2023-05-13 17:55:06",
        "InterviewState": "Completed",
        "Flight": "LH 1947",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "527b17b0-c9ac-4e62-bb7e-9062861af220",
        "InterviewEndDate": "2023-05-13 18:05:30",
        "InterviewState": "Completed",
        "Flight": "LH 1947",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 998
    },
    {
        "InterviewId": "a0c86fe8-83e8-45c7-b9b3-873c967ee0ae",
        "InterviewEndDate": "2023-05-13 18:16:19",
        "InterviewState": "Completed",
        "Flight": "LH 1947",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 998
    },
    {
        "InterviewId": "979638d0-ffbd-44e4-b1fb-96a09b102567",
        "InterviewEndDate": "2023-05-13 18:15:21",
        "InterviewState": "Completed",
        "Flight": "LH 1947",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 998
    },
    {
        "InterviewId": "a2a882ed-9a70-4051-a690-9520ed9dc317",
        "InterviewEndDate": "2023-05-13 18:49:39",
        "InterviewState": "Completed",
        "Flight": "LH  199",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c16256aa-4568-48d9-820d-80e8a50807d4",
        "InterviewEndDate": "2023-05-13 18:20:21",
        "InterviewState": "Completed",
        "Flight": "LH 1947",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 998
    },
    {
        "InterviewId": "d4f6cde2-082d-4dff-999c-e09c7637f4fc",
        "InterviewEndDate": "2023-05-13 18:19:26",
        "InterviewState": "Completed",
        "Flight": "LH 1947",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 998
    },
    {
        "InterviewId": "02dfb294-2375-40d6-8d2f-8a0687d08234",
        "InterviewEndDate": "2023-05-13 18:58:09",
        "InterviewState": "Completed",
        "Flight": "LH  199",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 998
    },
    {
        "InterviewId": "518b6e83-fe48-4302-9dae-a7f23c645b64",
        "InterviewEndDate": "2023-05-13 20:24:36",
        "InterviewState": "Completed",
        "Flight": "AF 1535",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 998
    },
    {
        "InterviewId": "01b25ee4-097b-448a-8ed3-c97a7bf425ab",
        "InterviewEndDate": "2023-05-13 19:56:04",
        "InterviewState": "Completed",
        "Flight": "EJU5267",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "d0d1e171-ff32-4ff5-a949-bb715d565227",
        "InterviewEndDate": "2023-05-13 19:38:06",
        "InterviewState": "Completed",
        "Flight": "EJU5267",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "9b6269de-2244-4b1b-877e-bca7fb16f016",
        "InterviewEndDate": "2023-05-13 19:35:04",
        "InterviewState": "Completed",
        "Flight": "EJU5267",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "4a2b6f98-928e-4595-9de2-74f29a3be84d",
        "InterviewEndDate": "2023-05-13 19:46:32",
        "InterviewState": "Completed",
        "Flight": "EJU5267",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "a73c7558-fc3a-4ec6-81c8-ccc4ccbccb34",
        "InterviewEndDate": "2023-05-13 20:18:50",
        "InterviewState": "Completed",
        "Flight": "AF 1535",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 11
    },
    {
        "InterviewId": "6e67f5be-a9dc-40f5-bb5d-df1980bb88d2",
        "InterviewEndDate": "2023-05-13 20:20:23",
        "InterviewState": "Completed",
        "Flight": "AF 1535",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 998
    },
    {
        "InterviewId": "343f5281-559f-4886-aece-de509a39fdec",
        "InterviewEndDate": "2023-05-13 20:16:37",
        "InterviewState": "Completed",
        "Flight": "AF 1535",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 11
    },
    {
        "InterviewId": "988670bf-e8d2-4ef4-aaf5-a1ef1138e0a4",
        "InterviewEndDate": "2023-05-14 10:35:55",
        "InterviewState": "Completed",
        "Flight": "AF 1435",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 998
    },
    {
        "InterviewId": "9eb1b85d-e22b-4cb2-8ebc-7b08bb097043",
        "InterviewEndDate": "2023-05-14 09:51:08",
        "InterviewState": "Completed",
        "Flight": "EJU4898",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "ba3fabd6-f008-454b-b95f-bfeec63f76fc",
        "InterviewEndDate": "2023-05-14 09:55:28",
        "InterviewState": "Completed",
        "Flight": "EJU4898",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "a07af571-a6fa-4f9f-b2c0-8a21fcbd369f",
        "InterviewEndDate": "2023-05-14 10:37:26",
        "InterviewState": "Completed",
        "Flight": "AF 1435",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 998
    },
    {
        "InterviewId": "aee366a4-2e6a-44de-87e3-8114594c3aa4",
        "InterviewEndDate": "2023-05-14 10:55:47",
        "InterviewState": "Completed",
        "Flight": "KL 1820",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "15d26bf3-5de4-483c-9c42-85960bfe092f",
        "InterviewEndDate": "2023-05-14 10:54:20",
        "InterviewState": "Completed",
        "Flight": "KL 1820",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "6ec28cc0-d28f-4b59-b911-7571406927b1",
        "InterviewEndDate": "2023-05-14 11:40:52",
        "InterviewState": "Completed",
        "Flight": "LH  181",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 998
    },
    {
        "InterviewId": "9140c0e7-78e0-454f-9e82-a1e589e7ebd5",
        "InterviewEndDate": "2023-05-14 11:35:49",
        "InterviewState": "Completed",
        "Flight": "LH  183",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 998
    },
    {
        "InterviewId": "21d60229-84d3-4040-8ca0-a26d8d598c91",
        "InterviewEndDate": "2023-05-14 11:37:34",
        "InterviewState": "Completed",
        "Flight": "LH  183",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 998
    },
    {
        "InterviewId": "6da64779-5a20-4966-b383-cd7d731f8521",
        "InterviewEndDate": "2023-05-14 11:59:09",
        "InterviewState": "Completed",
        "Flight": "SN 2582",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "a5c4baef-cfd7-46a7-af6f-c3f05dedace2",
        "InterviewEndDate": "2023-05-14 11:58:37",
        "InterviewState": "Completed",
        "Flight": "SN 2582",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "d3ab4099-12a0-4942-bb7f-c81f116e42ce",
        "InterviewEndDate": "2023-05-14 12:00:40",
        "InterviewState": "Completed",
        "Flight": "SN 2582",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "998de6bd-cb6f-4423-b8c0-7503d92d5049",
        "InterviewEndDate": "2023-05-14 12:22:34",
        "InterviewState": "Completed",
        "Flight": "TK 7729",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "cb990f46-c660-4497-82dc-c036e911fb45",
        "InterviewEndDate": "2023-05-14 12:48:59",
        "InterviewState": "Completed",
        "Flight": "EJU8622",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "acca7792-d2ba-4a28-9e73-74f6ce94e5d1",
        "InterviewEndDate": "2023-05-14 12:49:05",
        "InterviewState": "Completed",
        "Flight": "EJU8622",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "8817f6c3-169a-4538-a0cd-df2f8014bf8a",
        "InterviewEndDate": "2023-05-16 16:19:48",
        "InterviewState": "Completed",
        "Flight": "EW 9043",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "f7f4bbdd-ebb1-4182-a70e-c6f687933d58",
        "InterviewEndDate": "2023-05-16 16:18:15",
        "InterviewState": "Completed",
        "Flight": "EW 9043",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 17
    },
    {
        "InterviewId": "74516946-a46e-4f00-b013-de6818d8b1c7",
        "InterviewEndDate": "2023-05-16 16:55:04",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 19
    },
    {
        "InterviewId": "bea43785-43e5-41bc-a170-cb63fa5251ba",
        "InterviewEndDate": "2023-05-16 16:58:45",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 17
    },
    {
        "InterviewId": "34f6c70e-1855-46e8-b03d-d0987325b1aa",
        "InterviewEndDate": "2023-05-16 16:17:32",
        "InterviewState": "Completed",
        "Flight": "EW 9043",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "e6232abf-bdb0-4dce-af30-df3edc760e1c",
        "InterviewEndDate": "2023-05-16 17:02:47",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 17
    },
    {
        "InterviewId": "fc806d89-f2d5-447a-9178-749af7785bd3",
        "InterviewEndDate": "2023-05-16 16:23:09",
        "InterviewState": "Completed",
        "Flight": "EW 9043",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 19
    },
    {
        "InterviewId": "0ec9715d-f6ed-4ffa-add5-d200e0c36438",
        "InterviewEndDate": "2023-05-16 16:30:22",
        "InterviewState": "Completed",
        "Flight": "EW 9043",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "c8d86ec9-fac7-423a-b8c9-acc112c0d5fb",
        "InterviewEndDate": "2023-05-16 17:25:41",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "bdf30b22-8402-4305-9c07-b745c2fabcca",
        "InterviewEndDate": "2023-05-16 17:34:14",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "34e2c198-3821-4500-9fd5-9056bec77cb2",
        "InterviewEndDate": "2023-05-16 16:58:58",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 19
    },
    {
        "InterviewId": "274420d5-81ac-4b1e-b878-d2a2050795e6",
        "InterviewEndDate": "2023-05-16 17:05:39",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 17
    },
    {
        "InterviewId": "844ee040-54d6-4d8a-97ec-cbcf6c149c5b",
        "InterviewEndDate": "2023-05-16 17:27:22",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 19
    },
    {
        "InterviewId": "8fae3228-6354-4855-bc25-a6e2811a43fc",
        "InterviewEndDate": "2023-05-16 20:20:58",
        "InterviewState": "Completed",
        "Flight": "OS  236",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 19
    },
    {
        "InterviewId": "ce122ba1-3ebe-4070-b437-a4ddc7f98291",
        "InterviewEndDate": "2023-05-16 18:24:33",
        "InterviewState": "Completed",
        "Flight": "BA  985",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 19
    },
    {
        "InterviewId": "f18d3642-8b4c-4f5d-b1e3-8e74d0fa564e",
        "InterviewEndDate": "2023-05-16 18:43:07",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 17
    },
    {
        "InterviewId": "6093dd27-cf54-4949-ada2-d4ca4360c01a",
        "InterviewEndDate": "2023-05-16 18:28:30",
        "InterviewState": "Completed",
        "Flight": "BA  985",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 19
    },
    {
        "InterviewId": "580e1ce0-71f9-4c1c-aabe-b4abbabbed7e",
        "InterviewEndDate": "2023-05-16 18:27:47",
        "InterviewState": "Completed",
        "Flight": "XQ  661",
        "Dest": "Antalya (AYT)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 12
    },
    {
        "InterviewId": "3e5f7377-e371-4d0d-afe0-8c858c7930dd",
        "InterviewEndDate": "2023-05-16 18:39:30",
        "InterviewState": "Completed",
        "Flight": "BA  985",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 19
    },
    {
        "InterviewId": "61afcc43-008f-47e4-888b-a4f4a58b77a1",
        "InterviewEndDate": "2023-05-16 18:33:15",
        "InterviewState": "Completed",
        "Flight": "BA  985",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 17
    },
    {
        "InterviewId": "f50df285-de6b-4d0f-a645-d1bd2967c56f",
        "InterviewEndDate": "2023-05-16 18:22:59",
        "InterviewState": "Completed",
        "Flight": "BA  985",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 17
    },
    {
        "InterviewId": "b00d6f9b-f690-4607-b2ac-cceb019a2b99",
        "InterviewEndDate": "2023-05-16 19:53:56",
        "InterviewState": "Completed",
        "Flight": "SM 2961",
        "Dest": "Hurghada (HRG)",
        "AirlineCode": "Air Cairo",
        "InterviewerID": 17
    },
    {
        "InterviewId": "d176499f-1637-4400-a981-770e883eab1c",
        "InterviewEndDate": "2023-05-16 19:55:00",
        "InterviewState": "Completed",
        "Flight": "SM 2961",
        "Dest": "Hurghada (HRG)",
        "AirlineCode": "Air Cairo",
        "InterviewerID": 17
    },
    {
        "InterviewId": "0e99f9d9-6d2a-49bf-a95b-b96ea2e96134",
        "InterviewEndDate": "2023-05-16 19:02:31",
        "InterviewState": "Completed",
        "Flight": "BA  985",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "385f03aa-c39e-499b-ba18-c564b9743fd7",
        "InterviewEndDate": "2023-05-16 20:03:55",
        "InterviewState": "Completed",
        "Flight": "SM 2961",
        "Dest": "Hurghada (HRG)",
        "AirlineCode": "Air Cairo",
        "InterviewerID": 12
    },
    {
        "InterviewId": "9a832cb2-6b27-4b75-8726-8efce43a376e",
        "InterviewEndDate": "2023-05-16 20:16:22",
        "InterviewState": "Completed",
        "Flight": "OS  236",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 17
    },
    {
        "InterviewId": "e92079f4-2a4a-4bed-9496-e00abc0fe013",
        "InterviewEndDate": "2023-05-16 20:43:49",
        "InterviewState": "Completed",
        "Flight": "EW 8212",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 19
    },
    {
        "InterviewId": "4956b448-bba8-4d2e-95dd-78a4062cb7d7",
        "InterviewEndDate": "2023-05-16 20:15:43",
        "InterviewState": "Completed",
        "Flight": "OS  236",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 17
    },
    {
        "InterviewId": "af49c971-803e-4a96-ad31-9243f4e0d0ae",
        "InterviewEndDate": "2023-05-16 21:15:25",
        "InterviewState": "Completed",
        "Flight": "BA  999",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 17
    },
    {
        "InterviewId": "fef9ef84-464f-45dc-a777-99d2ebd4fb9d",
        "InterviewEndDate": "2023-05-16 21:20:44",
        "InterviewState": "Completed",
        "Flight": "EW 8212",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "d2dcb3fb-21ec-4663-b9b7-83c66eb0e487",
        "InterviewEndDate": "2023-05-16 21:28:44",
        "InterviewState": "Completed",
        "Flight": "BA  999",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 17
    },
    {
        "InterviewId": "ec8b04e2-bc1e-4839-819e-7b30c3283791",
        "InterviewEndDate": "2023-05-16 21:33:24",
        "InterviewState": "Completed",
        "Flight": "BA  999",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "8a8e6f65-962e-454e-b4c9-7bf77818e351",
        "InterviewEndDate": "2023-05-16 21:53:07",
        "InterviewState": "Completed",
        "Flight": "BA  999",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 17
    },
    {
        "InterviewId": "7492c5c5-20a0-4565-9bac-ce09299bce16",
        "InterviewEndDate": "2023-05-16 21:38:31",
        "InterviewState": "Completed",
        "Flight": "BA  999",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 19
    },
    {
        "InterviewId": "05d659a6-9046-4fce-892e-b38f44e4514b",
        "InterviewEndDate": "2023-05-16 21:42:02",
        "InterviewState": "Completed",
        "Flight": "BA  999",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "ac0a62b6-ee31-4c12-aa9a-8b5cfba71308",
        "InterviewEndDate": "2023-05-17 16:15:18",
        "InterviewState": "Completed",
        "Flight": "EJU5081",
        "Dest": "Rom (FCO)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "dce45a0d-447e-4e22-a979-a877bfc0f41e",
        "InterviewEndDate": "2023-05-16 21:51:30",
        "InterviewState": "Completed",
        "Flight": "BA  999",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "baf53a90-a4f4-4fd0-a0db-858523f718ae",
        "InterviewEndDate": "2023-05-17 16:11:19",
        "InterviewState": "Completed",
        "Flight": "EJU5081",
        "Dest": "Rom (FCO)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8b42f4cd-010c-43c7-81e7-b6bd4f629c67",
        "InterviewEndDate": "2023-05-17 17:09:03",
        "InterviewState": "Completed",
        "Flight": "TP  535",
        "Dest": "Lissabon (LIS)",
        "AirlineCode": "TAP Air Portugal",
        "InterviewerID": 11
    },
    {
        "InterviewId": "e3e2a4dd-7d96-409b-bb81-e0ae01f91c05",
        "InterviewEndDate": "2023-05-17 17:17:59",
        "InterviewState": "Completed",
        "Flight": "TP  535",
        "Dest": "Lissabon (LIS)",
        "AirlineCode": "TAP Air Portugal",
        "InterviewerID": 11
    },
    {
        "InterviewId": "331c9e4f-592d-4179-b01d-89a580842d7b",
        "InterviewEndDate": "2023-05-17 17:19:36",
        "InterviewState": "Completed",
        "Flight": "TP  535",
        "Dest": "Lissabon (LIS)",
        "AirlineCode": "TAP Air Portugal",
        "InterviewerID": 11
    },
    {
        "InterviewId": "9bb8dab3-3003-4766-aaf5-bad42dbf4209",
        "InterviewEndDate": "2023-05-17 19:15:29",
        "InterviewState": "Completed",
        "Flight": "AY 1436",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "0f12f8d7-e11e-415a-9911-93d91504baf7",
        "InterviewEndDate": "2023-05-17 19:29:46",
        "InterviewState": "Completed",
        "Flight": "AY 1436",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "67cce658-d40c-4fb9-8812-d538bbd4abe7",
        "InterviewEndDate": "2023-05-17 19:27:29",
        "InterviewState": "Completed",
        "Flight": "AY 1436",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "deb2042d-cf3d-473b-a312-8182e654bc37",
        "InterviewEndDate": "2023-05-17 20:20:48",
        "InterviewState": "Completed",
        "Flight": "AF 1535",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 11
    },
    {
        "InterviewId": "93e7595c-dcf9-4c12-9fab-c26b7d65a1bc",
        "InterviewEndDate": "2023-05-17 20:35:27",
        "InterviewState": "Completed",
        "Flight": "AF 1535",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ab6529f0-5b81-4fe8-be0b-78e89d04ee5b",
        "InterviewEndDate": "2023-05-17 20:28:24",
        "InterviewState": "Completed",
        "Flight": "AF 1535",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 11
    },
    {
        "InterviewId": "72d810e2-87e3-4e18-82a0-d91dc4bcd29e",
        "InterviewEndDate": "2023-05-17 21:10:53",
        "InterviewState": "Completed",
        "Flight": "EI  337",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ee065554-7b6d-4374-ae3f-928e1e3e82dc",
        "InterviewEndDate": "2023-05-17 21:20:55",
        "InterviewState": "Completed",
        "Flight": "EI  337",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 11
    },
    {
        "InterviewId": "7c65d3af-5a28-46d3-b1e5-8d25bb4ccad6",
        "InterviewEndDate": "2023-05-17 21:23:16",
        "InterviewState": "Completed",
        "Flight": "EI  337",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 11
    },
    {
        "InterviewId": "6305af22-45cd-4aaf-b36d-7a111d3b376d",
        "InterviewEndDate": "2023-05-18 10:23:42",
        "InterviewState": "Completed",
        "Flight": "EZY8630",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d12d43fc-231f-4557-ac64-910d25cd5742",
        "InterviewEndDate": "2023-05-18 13:21:33",
        "InterviewState": "Completed",
        "Flight": "BA  983",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "2f6717f0-b3e2-4cab-a8b5-bf489e5daa44",
        "InterviewEndDate": "2023-05-18 10:24:46",
        "InterviewState": "Completed",
        "Flight": "EZY8630",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "80d3a8de-9828-43af-b78a-75460c40e5f1",
        "InterviewEndDate": "2023-05-18 10:26:48",
        "InterviewState": "Completed",
        "Flight": "EZY8630",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3fe4bd4c-dae5-4553-b23e-941cde157360",
        "InterviewEndDate": "2023-05-18 10:25:27",
        "InterviewState": "Completed",
        "Flight": "EZY8630",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "330faac7-f917-4e7d-aae0-8090ed65a52c",
        "InterviewEndDate": "2023-05-18 10:23:38",
        "InterviewState": "Completed",
        "Flight": "EZY8630",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d7ab40a4-e4b8-456b-8d83-9ee6fc7807be",
        "InterviewEndDate": "2023-05-18 10:40:23",
        "InterviewState": "Completed",
        "Flight": "EI  333",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 1
    },
    {
        "InterviewId": "24c0b97d-93bc-42fb-897c-7ed332772de6",
        "InterviewEndDate": "2023-05-18 10:37:59",
        "InterviewState": "Completed",
        "Flight": "EZY8630",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "7512cd7b-2799-4aab-bea2-8875640b4569",
        "InterviewEndDate": "2023-05-18 11:13:25",
        "InterviewState": "Completed",
        "Flight": "LX  977",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 1
    },
    {
        "InterviewId": "8e33d4c0-520c-4c73-b59e-c94fd3f6353b",
        "InterviewEndDate": "2023-05-19 13:39:22",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "4d0f7c33-4b1b-4c0d-afc1-772733e14f56",
        "InterviewEndDate": "2023-05-18 11:54:41",
        "InterviewState": "Completed",
        "Flight": "LH  183",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 1
    },
    {
        "InterviewId": "ef3b266c-8d3a-4aa3-844f-a16ef8a613ba",
        "InterviewEndDate": "2023-05-18 12:51:41",
        "InterviewState": "Completed",
        "Flight": "FH 1282",
        "Dest": "Antalya (AYT)",
        "AirlineCode": "Freebird Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "94f27a92-da2f-4d66-9175-beefabcf42f7",
        "InterviewEndDate": "2023-05-18 13:54:06",
        "InterviewState": "Completed",
        "Flight": "BA  983",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "a02e4376-02a7-49d0-9140-966ed8050420",
        "InterviewEndDate": "2023-05-18 13:31:31",
        "InterviewState": "Completed",
        "Flight": "BA  983",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "a3f8404b-6c74-4389-90c4-8c40606ef1cd",
        "InterviewEndDate": "2023-05-18 14:18:05",
        "InterviewState": "Completed",
        "Flight": "TP  535",
        "Dest": "Lissabon (LIS)",
        "AirlineCode": "TAP Air Portugal",
        "InterviewerID": 12
    },
    {
        "InterviewId": "04f2fd3b-3d0c-4e9d-9115-7655528b29ba",
        "InterviewEndDate": "2023-05-19 13:30:54",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "485db6e3-2c9e-425f-8318-ba8ba785b0f9",
        "InterviewEndDate": "2023-05-18 14:10:01",
        "InterviewState": "Completed",
        "Flight": "TP  535",
        "Dest": "Lissabon (LIS)",
        "AirlineCode": "TAP Air Portugal",
        "InterviewerID": 12
    },
    {
        "InterviewId": "d83685aa-1c6c-4f24-82d5-823e2403f08e",
        "InterviewEndDate": "2023-05-18 14:37:39",
        "InterviewState": "Completed",
        "Flight": "FR  234",
        "Dest": "Malaga (AGP)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "f21180ba-d896-4504-bfb2-c92ab907f0bd",
        "InterviewEndDate": "2023-05-18 14:31:37",
        "InterviewState": "Completed",
        "Flight": "FR  234",
        "Dest": "Malaga (AGP)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "26256674-3749-41e0-a661-8eedfda7feff",
        "InterviewEndDate": "2023-05-18 15:41:55",
        "InterviewState": "Completed",
        "Flight": "FR  234",
        "Dest": "Malaga (AGP)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "1a3f6f4c-10e7-47d9-b630-ad9a9886f71b",
        "InterviewEndDate": "2023-05-18 15:18:31",
        "InterviewState": "Completed",
        "Flight": "FR  234",
        "Dest": "Malaga (AGP)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "23397824-cc95-4254-83f1-7ae6822e7ab0",
        "InterviewEndDate": "2023-05-18 15:28:46",
        "InterviewState": "Completed",
        "Flight": "FR 2527",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "5bda5d6a-019c-481c-9d5f-73e09c2ac09e",
        "InterviewEndDate": "2023-05-18 15:33:33",
        "InterviewState": "Completed",
        "Flight": "FR 2527",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "997b098c-9ef7-4580-a171-816a0e8445d3",
        "InterviewEndDate": "2023-05-18 15:35:19",
        "InterviewState": "Completed",
        "Flight": "FR 2527",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "32efefc4-b1e3-4e62-ac5f-73569b9d9768",
        "InterviewEndDate": "2023-05-18 17:04:28",
        "InterviewState": "Completed",
        "Flight": "FR 3388",
        "Dest": "Marseille (MRS)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "66d789a4-7f84-44af-b74a-da198d4fbb76",
        "InterviewEndDate": "2023-05-18 15:55:21",
        "InterviewState": "Completed",
        "Flight": "FR 2527",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "1094ce3b-9a28-4d72-9a9c-b629603e0c1c",
        "InterviewEndDate": "2023-05-18 16:19:05",
        "InterviewState": "Completed",
        "Flight": "FR 3388",
        "Dest": "Marseille (MRS)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "abe39898-5ad9-4af7-a365-808d1051ef99",
        "InterviewEndDate": "2023-05-18 17:54:41",
        "InterviewState": "Completed",
        "Flight": "FR  132",
        "Dest": "Barcelona (BCN)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "fde83670-a588-43bd-aef0-c030f48e818a",
        "InterviewEndDate": "2023-05-18 16:53:39",
        "InterviewState": "Completed",
        "Flight": "FR 3388",
        "Dest": "Marseille (MRS)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "b6926c9b-38bf-48f1-a459-943631cba69c",
        "InterviewEndDate": "2023-05-18 16:43:30",
        "InterviewState": "Completed",
        "Flight": "FR 3388",
        "Dest": "Marseille (MRS)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "36e8d3f1-8421-40b6-8aca-cb21d371170b",
        "InterviewEndDate": "2023-05-18 17:32:33",
        "InterviewState": "Completed",
        "Flight": "FR  132",
        "Dest": "Barcelona (BCN)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "b4996f77-95ae-47c5-8cb6-bd58ab357a73",
        "InterviewEndDate": "2023-05-18 17:37:39",
        "InterviewState": "Completed",
        "Flight": "FR  132",
        "Dest": "Barcelona (BCN)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "cda44b23-e671-43d5-9115-92300c59d283",
        "InterviewEndDate": "2023-05-18 17:45:02",
        "InterviewState": "Completed",
        "Flight": "FR  132",
        "Dest": "Barcelona (BCN)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "90767125-f914-4314-8ed1-bac8da9859d1",
        "InterviewEndDate": "2023-05-18 17:46:18",
        "InterviewState": "Completed",
        "Flight": "FR  132",
        "Dest": "Barcelona (BCN)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "09ad12fd-91c2-4bdd-9228-d723275cf349",
        "InterviewEndDate": "2023-05-18 17:54:28",
        "InterviewState": "Completed",
        "Flight": "FR  132",
        "Dest": "Barcelona (BCN)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "c59481eb-a05e-4d89-86a3-82e012c25cc2",
        "InterviewEndDate": "2023-05-19 13:30:40",
        "InterviewState": "Completed",
        "Flight": "AY 1438",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "be323573-76d2-4536-bd30-8ab90129285d",
        "InterviewEndDate": "2023-05-19 14:17:30",
        "InterviewState": "Completed",
        "Flight": "EJU5071",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "caed4d8f-40f0-46be-80fe-89bb191a13c3",
        "InterviewEndDate": "2023-05-19 14:15:23",
        "InterviewState": "Completed",
        "Flight": "EJU5071",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "0b887cf8-9f8b-4dd3-ac94-7d731afbcae9",
        "InterviewEndDate": "2023-05-19 14:23:24",
        "InterviewState": "Completed",
        "Flight": "EJU5071",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "959bb556-48de-4cbb-8408-d91a896be3b7",
        "InterviewEndDate": "2023-05-19 14:56:06",
        "InterviewState": "Completed",
        "Flight": "FI  529",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "Icelandair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "39bbea06-c6bd-4900-a6b5-8458175d0749",
        "InterviewEndDate": "2023-05-19 14:53:25",
        "InterviewState": "Completed",
        "Flight": "FI  529",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "Icelandair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "43821d76-e275-4d8f-8ea1-81dd9697d538",
        "InterviewEndDate": "2023-05-19 14:55:06",
        "InterviewState": "Completed",
        "Flight": "FI  529",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "Icelandair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "30df1fce-224e-4362-816f-95cc89699e47",
        "InterviewEndDate": "2023-05-19 15:00:51",
        "InterviewState": "Completed",
        "Flight": "FI  529",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "Icelandair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d3231863-2db4-43ce-b1de-c91853061176",
        "InterviewEndDate": "2023-05-19 15:28:50",
        "InterviewState": "Completed",
        "Flight": "EJU5053",
        "Dest": "Neapel (NAP)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "3017a27f-d892-49ed-8c65-d7e4f43c50ae",
        "InterviewEndDate": "2023-05-19 15:25:42",
        "InterviewState": "Completed",
        "Flight": "EJU5053",
        "Dest": "Neapel (NAP)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "572afac1-5005-4c0b-a6cf-d67d7342d67f",
        "InterviewEndDate": "2023-05-19 17:24:02",
        "InterviewState": "Completed",
        "Flight": "KL 1830",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "3e99af05-3b2b-43e3-818f-a0484012b9d5",
        "InterviewEndDate": "2023-05-19 18:37:27",
        "InterviewState": "Completed",
        "Flight": "EW 2019",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2ee6c126-37f7-49ec-af7a-b563022abc4c",
        "InterviewEndDate": "2023-05-19 18:39:10",
        "InterviewState": "Completed",
        "Flight": "EW 2019",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "456bb139-6c5e-4443-a90a-c6d7bdb861e7",
        "InterviewEndDate": "2023-05-19 18:43:26",
        "InterviewState": "Completed",
        "Flight": "EW 8006",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "1826d3db-4e5d-49e4-95b3-c4e88a670b5c",
        "InterviewEndDate": "2023-05-19 19:12:36",
        "InterviewState": "Completed",
        "Flight": "AY 1436",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "36ac33af-17e5-430e-9e1c-b4943966a689",
        "InterviewEndDate": "2023-05-19 19:23:14",
        "InterviewState": "Completed",
        "Flight": "AY 1436",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "9a91a067-b1a8-4401-8230-8eb288dda491",
        "InterviewEndDate": "2023-05-19 19:57:16",
        "InterviewState": "Completed",
        "Flight": "EJU7338",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "77ee425b-2edd-4343-9cb6-8baf36c73a99",
        "InterviewEndDate": "2023-05-19 19:53:42",
        "InterviewState": "Completed",
        "Flight": "EJU7338",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "1863b242-ca8f-42ec-92d2-8bdf0415dc3b",
        "InterviewEndDate": "2023-05-19 19:55:30",
        "InterviewState": "Completed",
        "Flight": "BT  214",
        "Dest": "Riga (RIX)",
        "AirlineCode": "Air Baltic",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d4699834-a836-466a-bebb-c11589dbb407",
        "InterviewEndDate": "2023-05-19 19:29:26",
        "InterviewState": "Completed",
        "Flight": "AY 1436",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "82b70bbd-b385-4dd9-a9d6-9afffb80c0bd",
        "InterviewEndDate": "2023-05-19 19:54:44",
        "InterviewState": "Completed",
        "Flight": "EJU7338",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "5c9caff4-b270-460d-96b8-9331c5cc23b9",
        "InterviewEndDate": "2023-05-20 10:17:51",
        "InterviewState": "Completed",
        "Flight": "LH  181",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 20
    },
    {
        "InterviewId": "a185b3df-046a-4423-849e-9d278c18d572",
        "InterviewEndDate": "2023-05-20 10:07:08",
        "InterviewState": "Completed",
        "Flight": "LH  181",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 20
    },
    {
        "InterviewId": "ca55d869-395d-419a-a81b-b06a7ea6b2d0",
        "InterviewEndDate": "2023-05-20 10:52:41",
        "InterviewState": "Completed",
        "Flight": "EW 8002",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "56828deb-9005-4b08-845f-7b0a3b988b88",
        "InterviewEndDate": "2023-05-20 10:11:48",
        "InterviewState": "Completed",
        "Flight": "LH  181",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 21
    },
    {
        "InterviewId": "b9efe3ee-9e8a-45b9-beec-8c8f28390cbc",
        "InterviewEndDate": "2023-05-20 10:51:16",
        "InterviewState": "Completed",
        "Flight": "EW 8002",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 21
    },
    {
        "InterviewId": "bcf5300a-f824-438c-97fa-8cf9515ea619",
        "InterviewEndDate": "2023-05-20 11:35:59",
        "InterviewState": "Completed",
        "Flight": "I2 3677",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 21
    },
    {
        "InterviewId": "f181becf-40c4-45e7-bdd7-85976bb62d6c",
        "InterviewEndDate": "2023-05-20 11:31:05",
        "InterviewState": "Completed",
        "Flight": "I2 3677",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 20
    },
    {
        "InterviewId": "e9843d18-2234-4dd4-92a0-8452884dfee7",
        "InterviewEndDate": "2023-05-20 11:27:00",
        "InterviewState": "Completed",
        "Flight": "I2 3677",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 20
    },
    {
        "InterviewId": "3f62c0c3-3da9-4c59-a5dc-ad864f44c8cc",
        "InterviewEndDate": "2023-05-20 11:27:41",
        "InterviewState": "Completed",
        "Flight": "I2 3677",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 11
    },
    {
        "InterviewId": "06ae1282-bb89-4fd7-941f-997ed86e3449",
        "InterviewEndDate": "2023-05-20 11:27:40",
        "InterviewState": "Completed",
        "Flight": "I2 3677",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2d57d440-4923-4a05-a178-bd97e2e7d8c8",
        "InterviewEndDate": "2023-05-20 11:25:34",
        "InterviewState": "Completed",
        "Flight": "I2 3677",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 20
    },
    {
        "InterviewId": "ecfe5392-e9cf-4e96-ab15-ac896b018c2a",
        "InterviewEndDate": "2023-05-20 12:11:12",
        "InterviewState": "Completed",
        "Flight": "AF 1735",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 20
    },
    {
        "InterviewId": "5c3a5f8d-9ee9-48bc-8e4d-b819f5c99236",
        "InterviewEndDate": "2023-05-20 12:13:26",
        "InterviewState": "Completed",
        "Flight": "AF 1735",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 20
    },
    {
        "InterviewId": "c1972b84-b243-458a-81b7-a1290b6940a0",
        "InterviewEndDate": "2023-05-20 12:13:12",
        "InterviewState": "Completed",
        "Flight": "AF 1735",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ca99798d-e312-431e-b840-cbe77f704b22",
        "InterviewEndDate": "2023-05-20 12:08:43",
        "InterviewState": "Completed",
        "Flight": "AF 1735",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 20
    },
    {
        "InterviewId": "62778b6e-67ea-41ea-ac8c-b21bc41ef901",
        "InterviewEndDate": "2023-05-20 12:08:55",
        "InterviewState": "Completed",
        "Flight": "AF 1735",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 21
    },
    {
        "InterviewId": "518f38c2-06dc-4e24-b01f-c2e2b179fd79",
        "InterviewEndDate": "2023-05-20 12:15:08",
        "InterviewState": "Completed",
        "Flight": "AF 1735",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 21
    },
    {
        "InterviewId": "679b4c46-20fb-411d-a515-d0ee219ba6fa",
        "InterviewEndDate": "2023-05-20 12:16:45",
        "InterviewState": "Completed",
        "Flight": "AF 1735",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c90e7ed2-4139-4c52-904d-d6acab9ebb9e",
        "InterviewEndDate": "2023-05-20 12:18:17",
        "InterviewState": "Completed",
        "Flight": "AF 1735",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 11
    },
    {
        "InterviewId": "19fa61bd-527b-4b6c-8386-7d91a841ac66",
        "InterviewEndDate": "2023-05-20 12:10:15",
        "InterviewState": "Completed",
        "Flight": "AF 1735",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 21
    },
    {
        "InterviewId": "a7028756-aa9b-4b53-95e0-72aed5ff7b2b",
        "InterviewEndDate": "2023-05-20 13:26:34",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 20
    },
    {
        "InterviewId": "63b43410-bc1e-4df7-b773-d855a7e8b249",
        "InterviewEndDate": "2023-05-20 13:20:40",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "6457b009-4e6e-42af-8ce5-8506cf00128e",
        "InterviewEndDate": "2023-05-20 13:33:52",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "e43d7f68-3810-4d23-acf2-c6233f077c30",
        "InterviewEndDate": "2023-05-20 13:37:22",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 21
    },
    {
        "InterviewId": "c411fe44-7ef9-4a48-b1bf-d975106ec666",
        "InterviewEndDate": "2023-05-20 13:30:23",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 21
    },
    {
        "InterviewId": "7f586528-842c-4229-8c50-766152cc3806",
        "InterviewEndDate": "2023-05-20 13:21:19",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 20
    },
    {
        "InterviewId": "90cd732b-4530-4416-8d04-dbeae81569ad",
        "InterviewEndDate": "2023-05-20 14:20:22",
        "InterviewState": "Completed",
        "Flight": "EW  007",
        "Dest": "K\u00f6ln (CGN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "0b7e0a57-1f81-4e4d-aa89-c44fd51aab6b",
        "InterviewEndDate": "2023-05-20 13:44:22",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 20
    },
    {
        "InterviewId": "15c55376-d1a5-49f5-a09f-a89e7a2a1f8f",
        "InterviewEndDate": "2023-05-20 14:48:24",
        "InterviewState": "Completed",
        "Flight": "EJU5071",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 20
    },
    {
        "InterviewId": "b120bbec-d407-46cd-8e65-8ce874b9f2ca",
        "InterviewEndDate": "2023-05-20 14:17:31",
        "InterviewState": "Completed",
        "Flight": "EW  007",
        "Dest": "K\u00f6ln (CGN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "96650317-9413-4aa0-9521-8a216701fefb",
        "InterviewEndDate": "2023-05-20 14:42:11",
        "InterviewState": "Completed",
        "Flight": "EJU5071",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 20
    },
    {
        "InterviewId": "419e82d7-4f86-44b7-8d46-a401466d9227",
        "InterviewEndDate": "2023-05-20 14:33:11",
        "InterviewState": "Completed",
        "Flight": "EJU5071",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "e38a60e4-0e9a-49a7-864d-c4fba308bbfd",
        "InterviewEndDate": "2023-05-20 14:38:41",
        "InterviewState": "Completed",
        "Flight": "EJU5071",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "19f331c1-8c44-41ac-8b00-8b156771e40d",
        "InterviewEndDate": "2023-05-20 14:37:38",
        "InterviewState": "Completed",
        "Flight": "EJU5071",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "16678c71-b8cc-4593-82e8-be52ce2e4206",
        "InterviewEndDate": "2023-05-20 14:36:38",
        "InterviewState": "Completed",
        "Flight": "EJU5071",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 21
    },
    {
        "InterviewId": "042bf710-e6e1-459f-aa00-91beab7f1979",
        "InterviewEndDate": "2023-05-20 15:31:25",
        "InterviewState": "Completed",
        "Flight": "EW 8590",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 21
    },
    {
        "InterviewId": "0ff35328-b2a9-4dc4-a9b6-ba6a1951ee5a",
        "InterviewEndDate": "2023-05-20 15:20:47",
        "InterviewState": "Completed",
        "Flight": "EW 8590",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ed1f587b-d108-4595-b2d2-9f699c0d9518",
        "InterviewEndDate": "2023-05-20 15:27:18",
        "InterviewState": "Completed",
        "Flight": "EW 8590",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2fbc9bfe-6e4d-4a6a-b8d2-c8f7b9977f50",
        "InterviewEndDate": "2023-05-20 15:20:50",
        "InterviewState": "Completed",
        "Flight": "EW 8590",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 21
    },
    {
        "InterviewId": "66fcd1b3-e486-4995-96df-a3e305b49764",
        "InterviewEndDate": "2023-05-20 15:21:27",
        "InterviewState": "Completed",
        "Flight": "EW 8590",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 20
    },
    {
        "InterviewId": "47599198-31c4-416a-8364-be7839f5a0d3",
        "InterviewEndDate": "2023-05-20 16:00:40",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 20
    },
    {
        "InterviewId": "40677abc-8317-408a-b448-b76e016952f2",
        "InterviewEndDate": "2023-05-20 15:43:31",
        "InterviewState": "Completed",
        "Flight": "EW 8590",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 20
    },
    {
        "InterviewId": "f0f4cbe2-3558-4ceb-969f-cf15ea0fe9d0",
        "InterviewEndDate": "2023-05-20 15:35:28",
        "InterviewState": "Completed",
        "Flight": "EW 8590",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 20
    },
    {
        "InterviewId": "c4e93bf8-ce21-42b2-add7-9b32c68cea76",
        "InterviewEndDate": "2023-05-21 10:49:58",
        "InterviewState": "Completed",
        "Flight": "TK 1722",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "f6afe15e-a506-47ac-b33f-79d2aa4c3d99",
        "InterviewEndDate": "2023-05-20 16:07:29",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "54af64e0-efcb-4f58-a385-873bac25c932",
        "InterviewEndDate": "2023-05-20 16:03:50",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "79f0b20b-49c6-4ab6-9090-cc930c55fe78",
        "InterviewEndDate": "2023-05-21 09:44:52",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 16
    },
    {
        "InterviewId": "9072a25b-05d7-4b47-bdd0-b4ec43822fad",
        "InterviewEndDate": "2023-05-21 09:51:02",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 15
    },
    {
        "InterviewId": "3326a5e1-dc05-4ec7-9b51-b2cf54eea2cd",
        "InterviewEndDate": "2023-05-21 09:53:20",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 16
    },
    {
        "InterviewId": "2c6f2c24-010a-4542-b261-ad59f5152860",
        "InterviewEndDate": "2023-05-21 09:52:11",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 15
    },
    {
        "InterviewId": "41262ccc-7851-4a34-a300-8cec68887a00",
        "InterviewEndDate": "2023-05-21 10:03:22",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 15
    },
    {
        "InterviewId": "02f11156-cd06-494a-91a5-a609c7e4e707",
        "InterviewEndDate": "2023-05-21 10:30:35",
        "InterviewState": "Completed",
        "Flight": "EI  333",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 15
    },
    {
        "InterviewId": "9763216d-2fc8-469a-b522-d1ca634ca792",
        "InterviewEndDate": "2023-05-21 10:31:44",
        "InterviewState": "Completed",
        "Flight": "EI  333",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 15
    },
    {
        "InterviewId": "a5957944-9167-4a79-a842-9a438c692772",
        "InterviewEndDate": "2023-05-21 10:57:57",
        "InterviewState": "Completed",
        "Flight": "TK 1722",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 16
    },
    {
        "InterviewId": "e8135233-0afb-4306-b300-d7449e06c45a",
        "InterviewEndDate": "2023-05-21 10:54:15",
        "InterviewState": "Completed",
        "Flight": "TK 1722",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9f444f42-9851-4565-95b3-8958e08c438f",
        "InterviewEndDate": "2023-05-21 11:03:23",
        "InterviewState": "Completed",
        "Flight": "TK 1722",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 15
    },
    {
        "InterviewId": "52e023f4-3692-43ff-b1e0-86d339daa707",
        "InterviewEndDate": "2023-05-21 11:55:44",
        "InterviewState": "Completed",
        "Flight": "OS  226",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 15
    },
    {
        "InterviewId": "25d1324c-a428-4d40-a533-dae500af17e9",
        "InterviewEndDate": "2023-05-21 11:31:43",
        "InterviewState": "Completed",
        "Flight": "OS  226",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 15
    },
    {
        "InterviewId": "7bd521c0-afb1-4bfb-be93-7f89eeb868e5",
        "InterviewEndDate": "2023-05-21 11:39:55",
        "InterviewState": "Completed",
        "Flight": "OS  226",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 15
    },
    {
        "InterviewId": "df8281b2-edf5-4591-806b-af05311e50e0",
        "InterviewEndDate": "2023-05-21 11:36:42",
        "InterviewState": "Completed",
        "Flight": "OS  226",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "ba7795d8-6d14-455e-b19a-c9c962281ab1",
        "InterviewEndDate": "2023-05-21 11:45:26",
        "InterviewState": "Completed",
        "Flight": "OS  226",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 16
    },
    {
        "InterviewId": "ea4d0418-4f02-43e2-aec7-c54775ee95c8",
        "InterviewEndDate": "2023-05-21 11:41:35",
        "InterviewState": "Completed",
        "Flight": "OS  226",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 15
    },
    {
        "InterviewId": "023a2263-e64f-4649-94c5-769c13242c77",
        "InterviewEndDate": "2023-05-21 12:15:35",
        "InterviewState": "Completed",
        "Flight": "LH  185",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 16
    },
    {
        "InterviewId": "b3bec472-71d8-4340-806d-85bac75fc449",
        "InterviewEndDate": "2023-05-21 12:13:09",
        "InterviewState": "Completed",
        "Flight": "LH  185",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 16
    },
    {
        "InterviewId": "aca5e154-f373-4596-8dae-d53070fb21bb",
        "InterviewEndDate": "2023-05-21 12:19:48",
        "InterviewState": "Completed",
        "Flight": "LH  185",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 15
    },
    {
        "InterviewId": "385d2b84-8980-48df-95b9-d87075ba4305",
        "InterviewEndDate": "2023-05-21 12:59:58",
        "InterviewState": "Completed",
        "Flight": "SR 6472",
        "Dest": "Hurghada (HRG)",
        "AirlineCode": "SUNDAIR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "5a9235d7-a4f0-4ce8-8328-b5eab2c75be1",
        "InterviewEndDate": "2023-05-21 12:57:33",
        "InterviewState": "Completed",
        "Flight": "SR 6472",
        "Dest": "Hurghada (HRG)",
        "AirlineCode": "SUNDAIR",
        "InterviewerID": 16
    },
    {
        "InterviewId": "378563ac-da49-4031-b45d-c47304254d02",
        "InterviewEndDate": "2023-05-21 14:19:44",
        "InterviewState": "Completed",
        "Flight": "LH  189",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 1
    },
    {
        "InterviewId": "2d18d864-1884-4d8a-b75e-8dfb833b016c",
        "InterviewEndDate": "2023-05-21 12:56:37",
        "InterviewState": "Completed",
        "Flight": "SR 6472",
        "Dest": "Hurghada (HRG)",
        "AirlineCode": "SUNDAIR",
        "InterviewerID": 16
    },
    {
        "InterviewId": "c223ac88-ec44-4030-8dca-c15e0acfcbe0",
        "InterviewEndDate": "2023-05-21 13:02:25",
        "InterviewState": "Completed",
        "Flight": "SR 6472",
        "Dest": "Hurghada (HRG)",
        "AirlineCode": "SUNDAIR",
        "InterviewerID": 15
    },
    {
        "InterviewId": "15e9e37a-50cc-4e47-80b6-dae98230836d",
        "InterviewEndDate": "2023-05-21 12:59:05",
        "InterviewState": "Completed",
        "Flight": "SR 6472",
        "Dest": "Hurghada (HRG)",
        "AirlineCode": "SUNDAIR",
        "InterviewerID": 15
    },
    {
        "InterviewId": "08838462-1a23-4ab6-a9c5-73d7abd5dcc4",
        "InterviewEndDate": "2023-05-21 13:09:23",
        "InterviewState": "Completed",
        "Flight": "SR 6472",
        "Dest": "Hurghada (HRG)",
        "AirlineCode": "SUNDAIR",
        "InterviewerID": 16
    },
    {
        "InterviewId": "92ddc6e6-08be-464f-bc1b-8190a7289ad1",
        "InterviewEndDate": "2023-05-21 14:44:20",
        "InterviewState": "Completed",
        "Flight": "SR 4590",
        "Dest": "Heraklion (HER)",
        "AirlineCode": "SUNDAIR",
        "InterviewerID": 16
    },
    {
        "InterviewId": "20936ed8-e21a-4a36-b5c8-b35ae33d7fb9",
        "InterviewEndDate": "2023-05-21 14:19:13",
        "InterviewState": "Completed",
        "Flight": "LH  189",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 15
    },
    {
        "InterviewId": "a220d491-b08f-41f7-bdaf-9524bb40ec8a",
        "InterviewEndDate": "2023-05-21 14:19:46",
        "InterviewState": "Completed",
        "Flight": "LH  189",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 15
    },
    {
        "InterviewId": "6dc5c1f4-1a1d-4130-a477-af94ad5c292e",
        "InterviewEndDate": "2023-05-21 14:43:05",
        "InterviewState": "Completed",
        "Flight": "SR 4590",
        "Dest": "Heraklion (HER)",
        "AirlineCode": "SUNDAIR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b555a4de-ff1a-48b7-af05-abe9c1079934",
        "InterviewEndDate": "2023-05-21 14:38:05",
        "InterviewState": "Completed",
        "Flight": "SR 4590",
        "Dest": "Heraklion (HER)",
        "AirlineCode": "SUNDAIR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d1cdc2bf-b98f-4cf4-8c68-b833c9cd70e2",
        "InterviewEndDate": "2023-05-21 14:46:30",
        "InterviewState": "Completed",
        "Flight": "SR 4590",
        "Dest": "Heraklion (HER)",
        "AirlineCode": "SUNDAIR",
        "InterviewerID": 16
    },
    {
        "InterviewId": "b15f6a8a-d282-41f6-856d-ad88169d563e",
        "InterviewEndDate": "2023-05-21 15:04:43",
        "InterviewState": "Completed",
        "Flight": "LX  967",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 1
    },
    {
        "InterviewId": "49d8f38e-b5b8-40f3-9d02-a0aa00736c03",
        "InterviewEndDate": "2023-05-21 15:05:58",
        "InterviewState": "Completed",
        "Flight": "LX  967",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 1
    },
    {
        "InterviewId": "7ea4110e-97fa-44d9-b960-7edcb0bd660c",
        "InterviewEndDate": "2023-05-21 15:01:51",
        "InterviewState": "Completed",
        "Flight": "LX  967",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 1
    },
    {
        "InterviewId": "80e49797-3a89-459d-b9b5-8efdfde82f5f",
        "InterviewEndDate": "2023-05-21 15:03:38",
        "InterviewState": "Completed",
        "Flight": "LX  967",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 16
    },
    {
        "InterviewId": "9d7206c3-631f-40bb-ae18-c480484ab396",
        "InterviewEndDate": "2023-05-21 15:27:09",
        "InterviewState": "Completed",
        "Flight": "OS  230",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 16
    },
    {
        "InterviewId": "80c3ec9c-f478-43ee-abfd-d1518560d4be",
        "InterviewEndDate": "2023-05-21 15:06:15",
        "InterviewState": "Completed",
        "Flight": "LX  967",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 15
    },
    {
        "InterviewId": "41235707-7733-4f66-905f-a65ac1b10abf",
        "InterviewEndDate": "2023-05-23 16:01:20",
        "InterviewState": "Completed",
        "Flight": "AF 1235",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 12
    },
    {
        "InterviewId": "d1a9da6c-1635-4606-9a00-99d6a912b8c1",
        "InterviewEndDate": "2023-05-23 16:10:13",
        "InterviewState": "Completed",
        "Flight": "AF 1235",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 12
    },
    {
        "InterviewId": "8427ea35-433a-45fa-b34f-b41f6cf2f169",
        "InterviewEndDate": "2023-05-23 16:02:15",
        "InterviewState": "Completed",
        "Flight": "AF 1235",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 12
    },
    {
        "InterviewId": "a9b4e8f0-3901-48f9-a073-938d6eba296e",
        "InterviewEndDate": "2023-05-21 15:29:31",
        "InterviewState": "Completed",
        "Flight": "AF 1235",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 15
    },
    {
        "InterviewId": "d65e4820-c9ca-4ef6-8a4b-dced7ffb4dee",
        "InterviewEndDate": "2023-05-21 15:29:38",
        "InterviewState": "Completed",
        "Flight": "SK 2680",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "SAS-Scandinavian Airlines System",
        "InterviewerID": 16
    },
    {
        "InterviewId": "2f5d7d74-fe45-4fe0-b945-89dfe69f2742",
        "InterviewEndDate": "2023-05-21 15:32:45",
        "InterviewState": "Completed",
        "Flight": "EW 9043",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 16
    },
    {
        "InterviewId": "8d08b00d-ae6f-4a71-8899-a5dddc2e29ee",
        "InterviewEndDate": "2023-05-23 16:40:54",
        "InterviewState": "Completed",
        "Flight": "AF 1235",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 12
    },
    {
        "InterviewId": "94f4ed1e-d79b-4093-bac5-aeffc122ecfa",
        "InterviewEndDate": "2023-05-23 16:14:21",
        "InterviewState": "Completed",
        "Flight": "AF 1235",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 12
    },
    {
        "InterviewId": "3d55ce20-cb66-4600-b40b-8a693ab1e5d4",
        "InterviewEndDate": "2023-05-23 17:18:30",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "6620e4bc-9541-4a22-8d62-7dcca85e7d42",
        "InterviewEndDate": "2023-05-23 17:14:56",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 22
    },
    {
        "InterviewId": "5108d932-e500-4e58-a362-8ffe262ce267",
        "InterviewEndDate": "2023-05-23 17:16:10",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 22
    },
    {
        "InterviewId": "c94079c5-a0ff-44c7-a42f-caacf969a82f",
        "InterviewEndDate": "2023-05-23 17:09:31",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "a811aef8-51d0-410c-a029-e226af617eca",
        "InterviewEndDate": "2023-05-23 17:04:16",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "a1e74639-2da1-4e48-9481-dbd90f5163a2",
        "InterviewEndDate": "2023-05-23 17:20:20",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "da25e682-c44b-482b-98bb-9c096ac26a98",
        "InterviewEndDate": "2023-05-23 17:43:48",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "9711a97c-c869-4e6f-a445-a2162e16c6e2",
        "InterviewEndDate": "2023-05-23 17:28:38",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 22
    },
    {
        "InterviewId": "664d5eba-c31f-4140-81f7-bcd032c6fb80",
        "InterviewEndDate": "2023-05-23 17:52:13",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "192efe1d-30d9-49d2-8cd0-d6a0b9ea2637",
        "InterviewEndDate": "2023-05-23 17:33:58",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "3916a355-8e23-49c3-9fc9-d9807c33ae6c",
        "InterviewEndDate": "2023-05-23 18:41:18",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "8ccce4cc-609a-4a92-94b0-83578ea03b32",
        "InterviewEndDate": "2023-05-23 18:27:12",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 22
    },
    {
        "InterviewId": "646d512b-0e3b-46c0-9aa7-a4202f729291",
        "InterviewEndDate": "2023-05-23 18:29:30",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "5f6db367-7505-48df-bf72-b424be8400dc",
        "InterviewEndDate": "2023-05-23 19:05:07",
        "InterviewState": "Completed",
        "Flight": "EJU5153",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 22
    },
    {
        "InterviewId": "487312f7-b0ad-4de4-863f-975fe5ba48f3",
        "InterviewEndDate": "2023-05-23 19:02:21",
        "InterviewState": "Completed",
        "Flight": "EJU5153",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "ce735706-ecdd-4fe6-96f4-8717fc808a77",
        "InterviewEndDate": "2023-05-23 19:08:39",
        "InterviewState": "Completed",
        "Flight": "EJU5153",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "75fac057-a02f-41e4-80a6-bada73f9df4c",
        "InterviewEndDate": "2023-05-23 21:18:21",
        "InterviewState": "Completed",
        "Flight": "KL 1834",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 22
    },
    {
        "InterviewId": "69d988b1-d583-4969-b26c-ac78681f1b9b",
        "InterviewEndDate": "2023-05-23 20:12:58",
        "InterviewState": "Completed",
        "Flight": "I2 3671",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 22
    },
    {
        "InterviewId": "5fa2faaf-5d40-4138-bdfd-d217dd3ae966",
        "InterviewEndDate": "2023-05-23 19:50:12",
        "InterviewState": "Completed",
        "Flight": "AY 1436",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 22
    },
    {
        "InterviewId": "91f1bd88-1ec6-4740-b744-a08334e4517a",
        "InterviewEndDate": "2023-05-23 20:32:47",
        "InterviewState": "Completed",
        "Flight": "I2 3671",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 12
    },
    {
        "InterviewId": "d244b994-50f4-42ad-aa3c-db3086f4be69",
        "InterviewEndDate": "2023-05-23 19:59:59",
        "InterviewState": "Completed",
        "Flight": "AY 1436",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "48e9422e-bbb5-4311-b8c7-c31847e93962",
        "InterviewEndDate": "2023-05-23 20:25:42",
        "InterviewState": "Completed",
        "Flight": "I2 3671",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 22
    },
    {
        "InterviewId": "c1f09c69-2def-4dd4-8fd3-b097611fad9c",
        "InterviewEndDate": "2023-05-23 20:23:49",
        "InterviewState": "Completed",
        "Flight": "I2 3671",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 12
    },
    {
        "InterviewId": "6edb56bb-42a6-4c8f-b04c-8feab151cb45",
        "InterviewEndDate": "2023-05-23 21:15:40",
        "InterviewState": "Completed",
        "Flight": "KL 1834",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "1dc58e38-ca7f-45cc-b3fe-be8b0753de5f",
        "InterviewEndDate": "2023-05-23 20:43:33",
        "InterviewState": "Completed",
        "Flight": "I2 3671",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 12
    },
    {
        "InterviewId": "93fd64b3-716d-4cbc-88f8-982c867e739b",
        "InterviewEndDate": "2023-05-23 21:09:24",
        "InterviewState": "Completed",
        "Flight": "KL 1834",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "91211768-cbac-4149-a883-795dc49348fd",
        "InterviewEndDate": "2023-05-23 21:11:26",
        "InterviewState": "Completed",
        "Flight": "KL 1834",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 22
    },
    {
        "InterviewId": "90fb4d86-b8d6-408b-8b4d-daf9742a5fc1",
        "InterviewEndDate": "2023-05-23 21:11:25",
        "InterviewState": "Completed",
        "Flight": "KL 1834",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 22
    },
    {
        "InterviewId": "1a3c03ec-b7a2-4d68-b8bc-c932157cb2fa",
        "InterviewEndDate": "2023-05-23 21:23:30",
        "InterviewState": "Completed",
        "Flight": "KL 1834",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 22
    },
    {
        "InterviewId": "9e75ac40-8bc5-428b-b26e-9ca22bcb8186",
        "InterviewEndDate": "2023-05-24 08:37:23",
        "InterviewState": "Completed",
        "Flight": "EJU4632",
        "Dest": "Paris (CDG)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "7d639816-460b-4e9d-96a5-bd33be91231b",
        "InterviewEndDate": "2023-05-23 21:25:28",
        "InterviewState": "Completed",
        "Flight": "KL 1834",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "9b785653-e64c-42e8-82e9-95929b9fcb2a",
        "InterviewEndDate": "2023-05-23 21:35:30",
        "InterviewState": "Completed",
        "Flight": "KL 1834",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "fb497dde-a54b-4350-be00-aa962354a4cf",
        "InterviewEndDate": "2023-05-24 08:18:09",
        "InterviewState": "Completed",
        "Flight": "EW 4343",
        "Dest": "Salzburg (SZG)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 19
    },
    {
        "InterviewId": "600028b9-1306-4b2f-9c88-99824cb42e3a",
        "InterviewEndDate": "2023-05-24 07:52:32",
        "InterviewState": "Completed",
        "Flight": "EJU5009",
        "Dest": "Souda (CHQ)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b0b7238a-3ce4-4486-b25d-d89035ec48b4",
        "InterviewEndDate": "2023-05-24 08:17:55",
        "InterviewState": "Completed",
        "Flight": "EW 4343",
        "Dest": "Salzburg (SZG)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 19
    },
    {
        "InterviewId": "def3e9c5-2892-4ffc-861e-b6332a3c87d7",
        "InterviewEndDate": "2023-05-24 07:51:50",
        "InterviewState": "Completed",
        "Flight": "EJU5009",
        "Dest": "Souda (CHQ)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 19
    },
    {
        "InterviewId": "cfd07216-0669-471b-bf98-7df2801f95d8",
        "InterviewEndDate": "2023-05-24 08:25:51",
        "InterviewState": "Completed",
        "Flight": "EW 4343",
        "Dest": "Salzburg (SZG)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "186d65e6-911d-4a40-9e66-dc08902f395b",
        "InterviewEndDate": "2023-05-24 08:56:56",
        "InterviewState": "Completed",
        "Flight": "AY 1432",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "077864bf-b0e7-496f-9990-7b2977e05863",
        "InterviewEndDate": "2023-05-24 08:37:47",
        "InterviewState": "Completed",
        "Flight": "EJU4632",
        "Dest": "Paris (CDG)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 19
    },
    {
        "InterviewId": "721ed0bc-db94-4f78-a86c-ba956f3c3bc7",
        "InterviewEndDate": "2023-05-24 09:31:09",
        "InterviewState": "Completed",
        "Flight": "KL 1822",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "a232f115-69c4-4cee-a676-d8062db43202",
        "InterviewEndDate": "2023-05-24 09:21:02",
        "InterviewState": "Completed",
        "Flight": "KL 1822",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "be873aa0-e7f2-4192-b905-9612c1882374",
        "InterviewEndDate": "2023-05-24 09:01:39",
        "InterviewState": "Completed",
        "Flight": "AY 1432",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 19
    },
    {
        "InterviewId": "f52828f7-6091-4f0f-b9ca-b9f669faa898",
        "InterviewEndDate": "2023-05-24 09:37:27",
        "InterviewState": "Completed",
        "Flight": "KL 1822",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "688b9b09-a23c-4601-a6c3-c94f42bc3c22",
        "InterviewEndDate": "2023-05-24 09:02:04",
        "InterviewState": "Completed",
        "Flight": "AY 1432",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 19
    },
    {
        "InterviewId": "5d1dce50-3745-4727-b62f-e10a00acc010",
        "InterviewEndDate": "2023-05-24 09:24:25",
        "InterviewState": "Completed",
        "Flight": "KL 1822",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "1ebb90a9-75f5-4cd4-88d6-d5b35bb63132",
        "InterviewEndDate": "2023-05-24 10:17:58",
        "InterviewState": "Completed",
        "Flight": "EW 8002",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "670f58f0-cd0b-42c0-828b-cf3e7a3d5680",
        "InterviewEndDate": "2023-05-24 10:16:42",
        "InterviewState": "Completed",
        "Flight": "EW 8002",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "9382bccc-b7f8-4542-bc3e-93644e7818b5",
        "InterviewEndDate": "2023-05-24 09:39:38",
        "InterviewState": "Completed",
        "Flight": "KL 1822",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 19
    },
    {
        "InterviewId": "adaa2f19-1ce0-4e61-b0f9-d19be10620ff",
        "InterviewEndDate": "2023-05-24 10:13:19",
        "InterviewState": "Completed",
        "Flight": "EW 8002",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 19
    },
    {
        "InterviewId": "099d3ea6-04f1-4450-b022-93e0a26db834",
        "InterviewEndDate": "2023-05-24 10:11:08",
        "InterviewState": "Completed",
        "Flight": "EW 8002",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 19
    },
    {
        "InterviewId": "03ebeb9b-cbe2-421a-a81d-ac74c3bbde3c",
        "InterviewEndDate": "2023-05-24 10:16:57",
        "InterviewState": "Completed",
        "Flight": "EW 8002",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 19
    },
    {
        "InterviewId": "2310142e-4756-42fc-ae62-9c835f62d0f5",
        "InterviewEndDate": "2023-05-24 10:49:36",
        "InterviewState": "Completed",
        "Flight": "EJU7334",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "fc9ae577-40cc-4ef6-9d01-9b2f3c98ff2f",
        "InterviewEndDate": "2023-05-24 10:53:36",
        "InterviewState": "Completed",
        "Flight": "EJU7334",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "978eecbd-d637-43cf-b057-f09b372a5a0a",
        "InterviewEndDate": "2023-03-31 10:18:30",
        "InterviewState": "Completed",
        "Flight": "TK 1722",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "afe7b24d-2ea2-48fe-a8b2-e945d776cf10",
        "InterviewEndDate": "2023-03-31 10:33:59",
        "InterviewState": "Completed",
        "Flight": "TK 1722",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 14
    },
    {
        "InterviewId": "14e585bd-d736-456d-97d6-fc95a69b7308",
        "InterviewEndDate": "2023-03-31 10:29:09",
        "InterviewState": "Completed",
        "Flight": "TK 1722",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 14
    },
    {
        "InterviewId": "fd758560-a467-4836-bf33-ea7d6df00092",
        "InterviewEndDate": "2023-03-31 11:18:19",
        "InterviewState": "Completed",
        "Flight": "LX  977",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 14
    },
    {
        "InterviewId": "e6bef65b-2213-4f04-a99a-ebaeaa6f7d99",
        "InterviewEndDate": "2023-03-31 13:18:33",
        "InterviewState": "Completed",
        "Flight": "FI  529",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "Icelandair",
        "InterviewerID": 1
    },
    {
        "InterviewId": "de529a61-1e83-43b6-83e4-f580d083b246",
        "InterviewEndDate": "2023-03-31 13:22:37",
        "InterviewState": "Completed",
        "Flight": "LH 1937",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 14
    },
    {
        "InterviewId": "d96495a1-6cf3-4458-890d-f3c2b79117b0",
        "InterviewEndDate": "2023-03-31 13:57:11",
        "InterviewState": "Completed",
        "Flight": "LH 1939",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3d8e6b31-dc85-42ca-8243-ec39d2a47c2f",
        "InterviewEndDate": "2023-03-31 14:28:20",
        "InterviewState": "Completed",
        "Flight": "EZY3162",
        "Dest": "Glasgow (GLA)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "fc1b36f7-bbec-4cb7-a97e-fd84c10aa5cf",
        "InterviewEndDate": "2023-03-31 14:57:59",
        "InterviewState": "Completed",
        "Flight": "XQ  947",
        "Dest": "Izmir (ADB)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 1
    },
    {
        "InterviewId": "569dd7a1-eba9-465d-a17c-fd8ca190579c",
        "InterviewEndDate": "2023-03-31 15:35:50",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "0d0a103e-4e17-409c-aaf2-f33ce4d330e7",
        "InterviewEndDate": "2023-03-31 15:32:30",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "96e54e94-2699-4d8b-bb9c-e4fb34ef8022",
        "InterviewEndDate": "2023-04-01 16:08:00",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "56bf4e53-7ccb-481e-b69a-fe22d5a4fe44",
        "InterviewEndDate": "2023-04-01 16:07:17",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "44b2a9a9-192b-4ed2-8a29-f180034dd4ad",
        "InterviewEndDate": "2023-04-01 16:07:04",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "bd31b7c1-3e25-4ab1-aed0-ebda57f124d8",
        "InterviewEndDate": "2023-04-01 16:23:45",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "367fb756-c4c4-4165-8985-fba64db9f2d6",
        "InterviewEndDate": "2023-04-01 17:34:53",
        "InterviewState": "Completed",
        "Flight": "A3  823",
        "Dest": "Athen (ATH)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2620db2a-0310-4a28-a951-fdc8f4717bf6",
        "InterviewEndDate": "2023-04-01 19:06:23",
        "InterviewState": "Completed",
        "Flight": "SN 2588",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8d0b6075-22b9-489e-84b5-f0bfc8d95acf",
        "InterviewEndDate": "2023-04-01 19:08:48",
        "InterviewState": "Completed",
        "Flight": "SN 2588",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "3362078d-723b-4062-a291-e725683e9560",
        "InterviewEndDate": "2023-04-01 19:46:37",
        "InterviewState": "Completed",
        "Flight": "I2 3671",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 11
    },
    {
        "InterviewId": "6e1313eb-8f0b-41e7-9652-fa239d12203b",
        "InterviewEndDate": "2023-04-01 19:49:39",
        "InterviewState": "Completed",
        "Flight": "I2 3671",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 11
    },
    {
        "InterviewId": "6b17576c-cfa6-4983-a46c-faa33dfb61bd",
        "InterviewEndDate": "2023-04-04 08:39:13",
        "InterviewState": "Completed",
        "Flight": "EW 8342",
        "Dest": "Salzburg (SZG)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d9c714ed-d867-46f3-a4df-f2dbd9090cfb",
        "InterviewEndDate": "2023-04-04 09:23:37",
        "InterviewState": "Completed",
        "Flight": "KL 1822",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "10e9eede-6afd-4b59-96bb-f95392b3356a",
        "InterviewEndDate": "2023-04-04 10:23:35",
        "InterviewState": "Completed",
        "Flight": "AF 1435",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 11
    },
    {
        "InterviewId": "df6f78f2-b306-4610-a9a8-ef6a984be99e",
        "InterviewEndDate": "2023-04-04 10:31:23",
        "InterviewState": "Completed",
        "Flight": "AF 1435",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 11
    },
    {
        "InterviewId": "19384524-021d-4fd6-863f-fca0a19fd28a",
        "InterviewEndDate": "2023-04-04 12:52:11",
        "InterviewState": "Completed",
        "Flight": "EJU5263",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "0394b13f-63f8-4244-aa7c-f44a70c0ed55",
        "InterviewEndDate": "2023-04-05 08:00:25",
        "InterviewState": "Completed",
        "Flight": "EJU5247",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c662f927-22b7-47b5-b7fd-ea0a6b90f5ec",
        "InterviewEndDate": "2023-04-05 08:14:25",
        "InterviewState": "Completed",
        "Flight": "EJU5063",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "43dc606a-a2de-494a-b568-e8155381554e",
        "InterviewEndDate": "2023-04-05 09:39:55",
        "InterviewState": "Completed",
        "Flight": "EJU5261",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b1606337-aea1-450b-9ea6-f10d0d4adb25",
        "InterviewEndDate": "2023-04-05 10:34:02",
        "InterviewState": "Completed",
        "Flight": "EJU4898",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "a7e8f138-e0b7-4b78-a8bf-e507c7d3e177",
        "InterviewEndDate": "2023-04-05 12:23:21",
        "InterviewState": "Completed",
        "Flight": "FR 2599",
        "Dest": "Riga (RIX)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "e9d04781-0e1d-49bc-88d5-ec9a26fb6320",
        "InterviewEndDate": "2023-04-05 13:06:32",
        "InterviewState": "Completed",
        "Flight": "FR  134",
        "Dest": "Rom (FCO)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "7475b74d-22ff-4ed5-ac08-f7916de994d9",
        "InterviewEndDate": "2023-04-05 13:52:41",
        "InterviewState": "Completed",
        "Flight": "LH  189",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "66c24b48-8ede-46df-956b-f1fd2006eb20",
        "InterviewEndDate": "2023-04-05 14:02:00",
        "InterviewState": "Completed",
        "Flight": "LH  189",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "256a8a3a-0a7f-4164-9b4c-e74aab7fc8ef",
        "InterviewEndDate": "2023-04-05 17:09:46",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "6995ee8c-2225-4f94-b2f0-ec4fd4641554",
        "InterviewEndDate": "2023-04-05 17:56:29",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 1
    },
    {
        "InterviewId": "65036f5e-e56b-4ae8-a435-f3ae0452667d",
        "InterviewEndDate": "2023-04-05 18:06:32",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 1
    },
    {
        "InterviewId": "b53b8496-5ae2-4417-9818-e83495f2519c",
        "InterviewEndDate": "2023-04-05 18:09:59",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 1
    },
    {
        "InterviewId": "840752d7-01dc-427e-895a-e5c8cedd335a",
        "InterviewEndDate": "2023-04-05 19:04:15",
        "InterviewState": "Completed",
        "Flight": "N0  601",
        "Dest": "New York (JFK)",
        "AirlineCode": "Norse Atlantic Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "41dbaeba-f000-4b7f-8a09-f2a9dee85349",
        "InterviewEndDate": "2023-04-05 19:07:56",
        "InterviewState": "Completed",
        "Flight": "N0  601",
        "Dest": "New York (JFK)",
        "AirlineCode": "Norse Atlantic Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "9c613009-a25d-4802-9198-f89b6fcd1171",
        "InterviewEndDate": "2023-04-05 19:07:22",
        "InterviewState": "Completed",
        "Flight": "N0  601",
        "Dest": "New York (JFK)",
        "AirlineCode": "Norse Atlantic Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "3c728aa4-f5d8-4634-928a-f11a25bee0b7",
        "InterviewEndDate": "2023-04-07 15:22:59",
        "InterviewState": "Completed",
        "Flight": "FR 2599",
        "Dest": "Riga (RIX)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 998
    },
    {
        "InterviewId": "19b437fc-8221-4743-b114-f86cb6fd1e66",
        "InterviewEndDate": "2023-04-07 15:36:07",
        "InterviewState": "Completed",
        "Flight": "FR 2599",
        "Dest": "Riga (RIX)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 998
    },
    {
        "InterviewId": "3b7c2063-dc03-4754-b2e9-e232cde331c2",
        "InterviewEndDate": "2023-04-07 16:16:25",
        "InterviewState": "Completed",
        "Flight": "D8 4506",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Norwegian Air Sweden AOC",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4c77a533-5eb4-4923-a4bf-fbcb797d15a8",
        "InterviewEndDate": "2023-04-07 18:11:19",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "d8321b62-d074-451d-ac2e-e2895ec5c670",
        "InterviewEndDate": "2023-04-07 18:58:41",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "143cd458-edd3-46de-b2a3-f4d4bb113de2",
        "InterviewEndDate": "2023-04-10 07:33:20",
        "InterviewState": "Completed",
        "Flight": "EJU5147",
        "Dest": "Paris (CDG)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8daa065d-3c3a-4371-b725-f113ae21874f",
        "InterviewEndDate": "2023-04-10 08:19:40",
        "InterviewState": "Completed",
        "Flight": "EZS1186",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 11
    },
    {
        "InterviewId": "00d36f7d-e65b-44e2-9fb9-fae1cd38c71e",
        "InterviewEndDate": "2023-04-10 07:45:03",
        "InterviewState": "Completed",
        "Flight": "EJU5147",
        "Dest": "Paris (CDG)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "3adca64b-159f-4ce5-b85a-e8f95434e2cc",
        "InterviewEndDate": "2023-04-10 08:39:42",
        "InterviewState": "Completed",
        "Flight": "EW 4601",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "e299bd4d-852b-4eb9-9e42-ef128cf058fa",
        "InterviewEndDate": "2023-04-10 09:28:53",
        "InterviewState": "Completed",
        "Flight": "EJU5145",
        "Dest": "Nizza (NCE)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f2b2eb2c-6c11-4de8-8cd4-fcf010edfa94",
        "InterviewEndDate": "2023-04-10 08:35:52",
        "InterviewState": "Completed",
        "Flight": "EW 4601",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c4cc21a2-5779-4719-8fe8-edd521993092",
        "InterviewEndDate": "2023-04-10 09:27:33",
        "InterviewState": "Completed",
        "Flight": "EJU5145",
        "Dest": "Nizza (NCE)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "29f0f08c-ef52-4429-b778-f1fdf2c91f1f",
        "InterviewEndDate": "2023-04-10 10:20:53",
        "InterviewState": "Completed",
        "Flight": "EJU5103",
        "Dest": "Valencia (VLC)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "92589492-8ab5-469c-956a-f93dc850c493",
        "InterviewEndDate": "2023-04-10 13:23:24",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d5365ad8-a9a1-4795-8f8f-e9f6a8a60aad",
        "InterviewEndDate": "2023-04-10 13:12:23",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "82e6a4f0-1c92-4d91-babd-e9479fcffe1a",
        "InterviewEndDate": "2023-04-11 09:26:49",
        "InterviewState": "Completed",
        "Flight": "FR  110",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "aaff6c8a-cde3-4646-bbbd-ed9418bf8dbc",
        "InterviewEndDate": "2023-04-11 09:33:32",
        "InterviewState": "Completed",
        "Flight": "FR  110",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c6e39db9-c34f-4c67-a57c-eecba204e6c2",
        "InterviewEndDate": "2023-04-11 11:37:47",
        "InterviewState": "Completed",
        "Flight": "LH  183",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2921c2f1-303d-4b58-a4ce-e541e52d81f9",
        "InterviewEndDate": "2023-04-11 11:32:13",
        "InterviewState": "Completed",
        "Flight": "LH  185",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "a75e8a95-7bda-4fdb-bd9f-f8ceeb80f5be",
        "InterviewEndDate": "2023-04-11 11:52:48",
        "InterviewState": "Completed",
        "Flight": "LH  185",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ec41ce92-d579-49d7-a086-f847444b50a5",
        "InterviewEndDate": "2023-04-11 12:36:35",
        "InterviewState": "Completed",
        "Flight": "FR  134",
        "Dest": "Rom (FCO)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "99ab6b9e-6006-472b-9b35-fba3eebb53ae",
        "InterviewEndDate": "2023-04-11 12:39:44",
        "InterviewState": "Completed",
        "Flight": "FR  134",
        "Dest": "Rom (FCO)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "592721db-fd80-4ea9-84f7-e5ab6cf208ef",
        "InterviewEndDate": "2023-04-11 14:02:10",
        "InterviewState": "Completed",
        "Flight": "FR 1146",
        "Dest": "Thessaloniki (SKG)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "48d5530b-d3d3-465e-a603-edd0472cab5b",
        "InterviewEndDate": "2023-04-11 17:06:21",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "e6de2a4e-572a-4293-83f7-f020138c23ab",
        "InterviewEndDate": "2023-04-11 18:16:30",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "32b2be4c-5cea-4b3f-85b8-f85d77e23854",
        "InterviewEndDate": "2023-04-11 20:26:47",
        "InterviewState": "Completed",
        "Flight": "LX  983",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 12
    },
    {
        "InterviewId": "acb586b9-8e0c-420f-8231-f4ca6b75aa6d",
        "InterviewEndDate": "2023-04-11 20:23:05",
        "InterviewState": "Completed",
        "Flight": "LX  983",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 12
    },
    {
        "InterviewId": "9cc460ce-43fb-4697-9bc9-fc932a498623",
        "InterviewEndDate": "2023-04-11 20:34:46",
        "InterviewState": "Completed",
        "Flight": "LX  983",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 998
    },
    {
        "InterviewId": "adfb3cc3-5b30-4bc6-81da-f9e1b3dd78a3",
        "InterviewEndDate": "2023-04-11 21:41:49",
        "InterviewState": "Completed",
        "Flight": "BA  999",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 998
    },
    {
        "InterviewId": "7d775698-32b6-47ef-a8b3-e7ef4ed3d706",
        "InterviewEndDate": "2023-04-11 22:13:52",
        "InterviewState": "Completed",
        "Flight": "BA  999",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "d6220c72-d212-4d4b-b1da-f417fa0a1341",
        "InterviewEndDate": "2023-04-11 22:16:46",
        "InterviewState": "Completed",
        "Flight": "XM  211",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Zimex Aviation",
        "InterviewerID": 12
    },
    {
        "InterviewId": "8e521064-3da5-40ea-a3c2-e500061acfaa",
        "InterviewEndDate": "2023-04-11 22:21:25",
        "InterviewState": "Completed",
        "Flight": "EI  337",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 998
    },
    {
        "InterviewId": "bdbdfebb-cc6f-4cee-95db-fd7189a1c8da",
        "InterviewEndDate": "2023-04-11 22:34:35",
        "InterviewState": "Completed",
        "Flight": "EI  337",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 998
    },
    {
        "InterviewId": "92294685-19ba-4a2e-a3f9-ffddc81a4e08",
        "InterviewEndDate": "2023-04-14 15:55:16",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "4a05176b-adeb-4117-bb9a-f2b353caf71f",
        "InterviewEndDate": "2023-04-14 17:41:29",
        "InterviewState": "Completed",
        "Flight": "XQ  967",
        "Dest": "Izmir (ADB)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 12
    },
    {
        "InterviewId": "dc5ab135-91ea-47e1-8eee-f50f7a904934",
        "InterviewEndDate": "2023-04-14 16:13:47",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "c1df1196-68e5-49b4-a504-fd6c6d72b65e",
        "InterviewEndDate": "2023-04-14 17:26:53",
        "InterviewState": "Completed",
        "Flight": "XQ  661",
        "Dest": "Antalya (AYT)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 12
    },
    {
        "InterviewId": "b9f0f57c-8686-4034-a819-f8b086371070",
        "InterviewEndDate": "2023-04-14 22:11:43",
        "InterviewState": "Completed",
        "Flight": "LG 9474",
        "Dest": "Luxemburg (LUX)",
        "AirlineCode": "Luxair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "1a9cf2fd-a87e-4a6d-b849-f63e7efe24d4",
        "InterviewEndDate": "2023-04-14 21:49:07",
        "InterviewState": "Completed",
        "Flight": "LG 9474",
        "Dest": "Luxemburg (LUX)",
        "AirlineCode": "Luxair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "dbc1be6e-e6ae-4835-87ae-f9b255fbc75d",
        "InterviewEndDate": "2023-04-16 13:44:12",
        "InterviewState": "Completed",
        "Flight": "TP  533",
        "Dest": "Lissabon (LIS)",
        "AirlineCode": "TAP Air Portugal",
        "InterviewerID": 1
    },
    {
        "InterviewId": "6c37f151-ca28-47d7-92bf-e57d436670fc",
        "InterviewEndDate": "2023-04-16 13:55:22",
        "InterviewState": "Completed",
        "Flight": "EJU5055",
        "Dest": "Olbia (OLB)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 1
    },
    {
        "InterviewId": "10b3fd3b-2fe0-4adc-9516-efc8e8bf2cbf",
        "InterviewEndDate": "2023-04-16 16:19:59",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4221c8d4-f8d7-4863-85f7-f1c39ea5b073",
        "InterviewEndDate": "2023-04-16 16:23:43",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 1
    },
    {
        "InterviewId": "2125993a-b1c0-4173-abca-e559a95842eb",
        "InterviewEndDate": "2023-04-17 07:54:00",
        "InterviewState": "Completed",
        "Flight": "FR  216",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "54b56420-b630-4025-b815-f09a0c7434f2",
        "InterviewEndDate": "2023-04-17 09:06:41",
        "InterviewState": "Completed",
        "Flight": "FR 2377",
        "Dest": "Edinburgh (EDI)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "d9912639-8338-43ec-bde1-f4bbeac035a8",
        "InterviewEndDate": "2023-04-17 09:55:18",
        "InterviewState": "Completed",
        "Flight": "FR  144",
        "Dest": "London (STN)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "5f0e6300-d29d-49e5-8f59-f499380cc78c",
        "InterviewEndDate": "2023-04-17 09:35:14",
        "InterviewState": "Completed",
        "Flight": "FR  144",
        "Dest": "London (STN)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "51cbaddc-5519-402e-968b-f3be8e11c901",
        "InterviewEndDate": "2023-04-17 09:42:43",
        "InterviewState": "Completed",
        "Flight": "FR  144",
        "Dest": "London (STN)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f47ce11b-6a15-45c6-9098-ebbe255d735e",
        "InterviewEndDate": "2023-04-17 10:04:25",
        "InterviewState": "Completed",
        "Flight": "FR  144",
        "Dest": "London (STN)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "bea407d8-25c3-46c9-be8e-f5455d677760",
        "InterviewEndDate": "2023-04-17 11:11:50",
        "InterviewState": "Completed",
        "Flight": "OS  226",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f5088d22-56f4-4574-a0fb-f0be4aa6c522",
        "InterviewEndDate": "2023-04-17 13:23:25",
        "InterviewState": "Completed",
        "Flight": "AY 1434",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2c3da12e-7426-40e6-8526-fb625f89741e",
        "InterviewEndDate": "2023-04-17 14:12:23",
        "InterviewState": "Completed",
        "Flight": "EJU5071",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "60a4a2b2-7d63-46cd-8e83-fb029abb5edc",
        "InterviewEndDate": "2023-04-18 07:06:04",
        "InterviewState": "Completed",
        "Flight": "EJU5261",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "78ea513f-0761-4ccf-82ae-f74f392412c3",
        "InterviewEndDate": "2023-04-18 07:10:24",
        "InterviewState": "Completed",
        "Flight": "EJU5261",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f0a761de-3e81-4423-b693-f43b346f20bc",
        "InterviewEndDate": "2023-04-18 08:01:44",
        "InterviewState": "Completed",
        "Flight": "EJU5191",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "5efbaf29-69ce-4b5f-8d0e-f93184e4b0d3",
        "InterviewEndDate": "2023-04-18 09:01:31",
        "InterviewState": "Completed",
        "Flight": "KL 1822",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "584045c5-9cf1-41e0-b1fa-f5035526046c",
        "InterviewEndDate": "2023-04-18 09:00:08",
        "InterviewState": "Completed",
        "Flight": "KL 1822",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8e99d457-5e2e-43de-a0be-e7305353db48",
        "InterviewEndDate": "2023-04-18 09:00:41",
        "InterviewState": "Completed",
        "Flight": "KL 1822",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "41810811-f594-435e-a58b-e676027d511d",
        "InterviewEndDate": "2023-04-19 10:05:39",
        "InterviewState": "Completed",
        "Flight": "EJU4266",
        "Dest": "Neapel (NAP)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "0d4e6254-1048-4f75-aa46-fe1e8a3eadaf",
        "InterviewEndDate": "2023-04-19 12:13:50",
        "InterviewState": "Completed",
        "Flight": "EJU5283",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b922345a-0747-49e6-b89d-ef7fa9840a23",
        "InterviewEndDate": "2023-04-19 13:20:01",
        "InterviewState": "Completed",
        "Flight": "EW 9047",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c821b0d7-350d-47f2-88d6-eadeacbd4059",
        "InterviewEndDate": "2023-04-19 14:49:43",
        "InterviewState": "Completed",
        "Flight": "EW  051",
        "Dest": "K\u00f6ln (CGN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "acfde210-97f3-4467-8bd8-e5eb37a1db81",
        "InterviewEndDate": "2023-04-19 17:18:18",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "75614acb-6599-4f81-ad77-f4e9140321f5",
        "InterviewEndDate": "2023-04-19 18:47:11",
        "InterviewState": "Completed",
        "Flight": "LH 1947",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 12
    },
    {
        "InterviewId": "bce11193-7f61-461e-8f94-fcaed230dc15",
        "InterviewEndDate": "2023-04-19 19:40:18",
        "InterviewState": "Completed",
        "Flight": "N0  601",
        "Dest": "New York (JFK)",
        "AirlineCode": "Norse Atlantic Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "23cb1fee-7d28-49ed-ac2c-e9f353abe829",
        "InterviewEndDate": "2023-04-19 20:07:42",
        "InterviewState": "Completed",
        "Flight": "SN 2588",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "dacb70cc-6a0a-4924-9c40-e4c55897c4a8",
        "InterviewEndDate": "2023-04-19 22:06:11",
        "InterviewState": "Completed",
        "Flight": "BA  995",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "ddc42a84-21cf-4a19-b311-fb66acb389c5",
        "InterviewEndDate": "2023-04-19 22:27:40",
        "InterviewState": "Completed",
        "Flight": "BA  995",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "d79a21b2-2e49-44c0-93ba-ea41818ef00e",
        "InterviewEndDate": "2023-04-19 22:30:26",
        "InterviewState": "Completed",
        "Flight": "EI  337",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 12
    },
    {
        "InterviewId": "7295f3ba-bbc2-431f-babd-ebb6718613ea",
        "InterviewEndDate": "2023-04-21 15:23:10",
        "InterviewState": "Completed",
        "Flight": "LX  967",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 12
    },
    {
        "InterviewId": "e9cf4a70-1439-470d-b3f7-f162ad3f0d4c",
        "InterviewEndDate": "2023-04-21 15:29:21",
        "InterviewState": "Completed",
        "Flight": "LX  967",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 12
    },
    {
        "InterviewId": "5df89b72-e3fa-43e2-998b-f18ae2e913ea",
        "InterviewEndDate": "2023-04-21 17:06:05",
        "InterviewState": "Completed",
        "Flight": "EJU5121",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "6d31a0a1-fe5f-4486-9a12-f4bbc49778be",
        "InterviewEndDate": "2023-04-21 19:36:14",
        "InterviewState": "Completed",
        "Flight": "EW 2019",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "9c5f3e4d-1a58-4490-a619-ef46d2413587",
        "InterviewEndDate": "2023-04-21 21:11:57",
        "InterviewState": "Completed",
        "Flight": "EW 8046",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "81d1b2bd-edf6-47b5-a4f5-e81262ea2c36",
        "InterviewEndDate": "2023-04-21 21:32:03",
        "InterviewState": "Completed",
        "Flight": "EZS1190",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 12
    },
    {
        "InterviewId": "ce65bb5d-e9f0-4ae2-87d7-f20d45642574",
        "InterviewEndDate": "2023-04-21 21:55:37",
        "InterviewState": "Completed",
        "Flight": "EZS1190",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 12
    },
    {
        "InterviewId": "50c84ca1-902d-4ae8-8914-f5e68ccb75ad",
        "InterviewEndDate": "2023-04-25 14:56:44",
        "InterviewState": "Completed",
        "Flight": "LH  191",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "39f5b4cf-9274-4632-9ae5-f15d8bc531de",
        "InterviewEndDate": "2023-04-25 20:24:30",
        "InterviewState": "Completed",
        "Flight": "EW 2021",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "9aa0dc63-08de-4178-b94b-f331f85e1edc",
        "InterviewEndDate": "2023-04-26 16:23:03",
        "InterviewState": "Completed",
        "Flight": "TK 1726",
        "Dest": "Istanbul (IST)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "9b455c81-a07a-4d30-b5e4-e82ec8f63da5",
        "InterviewEndDate": "2023-04-26 17:07:04",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "c3ff9b09-a466-40b4-9e1f-eb2c3783a03c",
        "InterviewEndDate": "2023-04-26 17:02:54",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "24f9b1c7-02da-46d0-85d4-fe98fe3a14b9",
        "InterviewEndDate": "2023-04-26 18:00:41",
        "InterviewState": "Completed",
        "Flight": "BA  985",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "3e0b707c-d8b6-4b28-8688-eec9664d3998",
        "InterviewEndDate": "2023-04-26 19:38:44",
        "InterviewState": "Completed",
        "Flight": "EJU5153",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "a785d498-edc3-4534-9840-f66a22b58737",
        "InterviewEndDate": "2023-04-26 22:22:09",
        "InterviewState": "Completed",
        "Flight": "EJU4078",
        "Dest": "Venedig (VCE)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "3d0c50d3-9f38-434e-b50f-e808e99a00b7",
        "InterviewEndDate": "2023-04-26 22:40:53",
        "InterviewState": "Completed",
        "Flight": "EZY2202",
        "Dest": "Manchester (MAN)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 12
    },
    {
        "InterviewId": "1432f4c7-bc1f-40c0-ab59-ea2179732cd1",
        "InterviewEndDate": "2023-04-29 09:40:33",
        "InterviewState": "Completed",
        "Flight": "FR 1144",
        "Dest": "Manchester (MAN)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "35b407da-b9c1-4c9c-b655-fde7421937c6",
        "InterviewEndDate": "2023-04-29 09:36:22",
        "InterviewState": "Completed",
        "Flight": "FR 1144",
        "Dest": "Manchester (MAN)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "a2e205d7-f2a8-45f6-9709-e747288fd212",
        "InterviewEndDate": "2023-04-29 10:36:36",
        "InterviewState": "Completed",
        "Flight": "VY 1883",
        "Dest": "Barcelona (BCN)",
        "AirlineCode": "Vueling Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "4e59c53d-c441-479c-bdc7-ffe9ad0fedad",
        "InterviewEndDate": "2023-04-29 12:12:07",
        "InterviewState": "Completed",
        "Flight": "EW 8592",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 2
    },
    {
        "InterviewId": "492a5eac-259f-4d21-b411-ee9e05b0b7c1",
        "InterviewEndDate": "2023-04-29 13:40:52",
        "InterviewState": "Completed",
        "Flight": "LH  189",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "fc458a94-4fb2-4fff-b789-e6b89438a21a",
        "InterviewEndDate": "2023-04-29 12:15:23",
        "InterviewState": "Completed",
        "Flight": "EW 8592",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 2
    },
    {
        "InterviewId": "59a82cd7-def9-4410-802d-e749683f1f22",
        "InterviewEndDate": "2023-04-29 13:38:42",
        "InterviewState": "Completed",
        "Flight": "LH  189",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "25cc9d70-cb94-4cc6-88f2-e8313632752a",
        "InterviewEndDate": "2023-04-29 13:48:36",
        "InterviewState": "Completed",
        "Flight": "LH  189",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f72b6185-07da-431b-9077-e76a422dce02",
        "InterviewEndDate": "2023-04-29 14:13:35",
        "InterviewState": "Completed",
        "Flight": "SM 2961",
        "Dest": "Hurghada (HRG)",
        "AirlineCode": "Air Cairo",
        "InterviewerID": 2
    },
    {
        "InterviewId": "6da76c61-6f5c-4b10-84fc-e4c725b77cf3",
        "InterviewEndDate": "2023-04-29 13:53:41",
        "InterviewState": "Completed",
        "Flight": "LH  189",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "0b75765a-244c-4e77-87a6-fff0c7863dba",
        "InterviewEndDate": "2023-04-29 14:22:55",
        "InterviewState": "Completed",
        "Flight": "FR  208",
        "Dest": "Ibiza (IBZ)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "df23b493-1e59-43f6-9a73-ec74a8fa0190",
        "InterviewEndDate": "2023-04-29 14:36:40",
        "InterviewState": "Completed",
        "Flight": "FR  208",
        "Dest": "Ibiza (IBZ)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "44f6a017-36c7-45c3-be35-f1a6cfa36deb",
        "InterviewEndDate": "2023-04-29 14:26:38",
        "InterviewState": "Completed",
        "Flight": "SM 2961",
        "Dest": "Hurghada (HRG)",
        "AirlineCode": "Air Cairo",
        "InterviewerID": 2
    },
    {
        "InterviewId": "a4fee5df-6a71-4e87-885f-f8c44b242cb7",
        "InterviewEndDate": "2023-04-30 11:39:02",
        "InterviewState": "Completed",
        "Flight": "A3  821",
        "Dest": "Athen (ATH)",
        "AirlineCode": "Aegean Airlines",
        "InterviewerID": 2
    },
    {
        "InterviewId": "90274647-1469-4074-8399-ff87c6be1e66",
        "InterviewEndDate": "2023-04-29 15:22:41",
        "InterviewState": "Completed",
        "Flight": "EW 8678",
        "Dest": "Heraklion (HER)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 1
    },
    {
        "InterviewId": "2828a3b6-3aff-4e87-9d9a-e81a7909b5ce",
        "InterviewEndDate": "2023-04-29 15:56:15",
        "InterviewState": "Completed",
        "Flight": "AF 1235",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 2
    },
    {
        "InterviewId": "a000c06f-e2cd-43cd-973e-e50078896a2e",
        "InterviewEndDate": "2023-05-01 14:08:20",
        "InterviewState": "Completed",
        "Flight": "D8 4506",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Norwegian Air Sweden AOC",
        "InterviewerID": 11
    },
    {
        "InterviewId": "5fa694da-4ea1-4fe8-9a47-fd6dff814193",
        "InterviewEndDate": "2023-04-30 12:20:30",
        "InterviewState": "Completed",
        "Flight": "EZY8630",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 2
    },
    {
        "InterviewId": "57f25bb2-c882-41c3-b2ef-e2f7fc6b47a9",
        "InterviewEndDate": "2023-04-30 12:33:17",
        "InterviewState": "Completed",
        "Flight": "EZY8630",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 2
    },
    {
        "InterviewId": "47bf7c72-fde8-4749-bb75-fc854a198aea",
        "InterviewEndDate": "2023-04-30 12:39:19",
        "InterviewState": "Completed",
        "Flight": "EZY8630",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 2
    },
    {
        "InterviewId": "a7975746-f3c8-4e7d-ae26-ea0b54c61bed",
        "InterviewEndDate": "2023-04-30 13:49:37",
        "InterviewState": "Completed",
        "Flight": "PC  980",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 2
    },
    {
        "InterviewId": "50b3930c-45a2-4d47-bed9-ef9fb095957b",
        "InterviewEndDate": "2023-04-30 15:12:13",
        "InterviewState": "Completed",
        "Flight": "XQ  947",
        "Dest": "Izmir (ADB)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 2
    },
    {
        "InterviewId": "2e1b2a98-0ec3-4ada-83a7-ed85c751a375",
        "InterviewEndDate": "2023-04-30 15:09:18",
        "InterviewState": "Completed",
        "Flight": "XQ  947",
        "Dest": "Izmir (ADB)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 2
    },
    {
        "InterviewId": "1f205c8e-3952-4748-96ac-e99de93d4e8c",
        "InterviewEndDate": "2023-04-30 16:27:10",
        "InterviewState": "Completed",
        "Flight": "EJU5081",
        "Dest": "Rom (FCO)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 2
    },
    {
        "InterviewId": "30463b8e-79d3-4ddf-937f-ed71ee8598c5",
        "InterviewEndDate": "2023-05-01 14:46:22",
        "InterviewState": "Completed",
        "Flight": "W6 2316",
        "Dest": "Budapest (BUD)",
        "AirlineCode": "Wizz Air",
        "InterviewerID": 11
    },
    {
        "InterviewId": "e161a57d-eb22-4018-a459-e4e4d02d6090",
        "InterviewEndDate": "2023-05-01 14:59:46",
        "InterviewState": "Completed",
        "Flight": "W6 2316",
        "Dest": "Budapest (BUD)",
        "AirlineCode": "Wizz Air",
        "InterviewerID": 11
    },
    {
        "InterviewId": "aa4ae8ed-e754-4558-b5ec-f5ac058c468a",
        "InterviewEndDate": "2023-05-01 14:52:25",
        "InterviewState": "Completed",
        "Flight": "EW 8070",
        "Dest": "K\u00f6ln (CGN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 2
    },
    {
        "InterviewId": "c46ca22e-f97c-4dcd-a847-f56cba077120",
        "InterviewEndDate": "2023-05-01 15:53:57",
        "InterviewState": "Completed",
        "Flight": "W6 4516",
        "Dest": "Varna (VAR)",
        "AirlineCode": "Wizz Air",
        "InterviewerID": 11
    },
    {
        "InterviewId": "81ecf353-9618-4fe4-8cc5-ee98e4d868f2",
        "InterviewEndDate": "2023-05-01 15:28:37",
        "InterviewState": "Completed",
        "Flight": "EJU5331",
        "Dest": "Porto (OPO)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 2
    },
    {
        "InterviewId": "5c10efab-3d32-4476-bc51-fcbc8d0bec89",
        "InterviewEndDate": "2023-05-01 15:34:04",
        "InterviewState": "Completed",
        "Flight": "EJU5331",
        "Dest": "Porto (OPO)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 2
    },
    {
        "InterviewId": "924191fd-1bb1-4acc-8b00-e359f9d74d5f",
        "InterviewEndDate": "2023-05-01 16:11:56",
        "InterviewState": "Completed",
        "Flight": "EJU7173",
        "Dest": "Barcelona (BCN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 2
    },
    {
        "InterviewId": "ff7ab31e-470e-4e9b-b40b-f2e0aaa5b07c",
        "InterviewEndDate": "2023-05-01 16:10:12",
        "InterviewState": "Completed",
        "Flight": "EJU7173",
        "Dest": "Barcelona (BCN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 2
    },
    {
        "InterviewId": "da0d98bb-3cad-4232-8e8c-ef0a48fce366",
        "InterviewEndDate": "2023-05-01 16:12:23",
        "InterviewState": "Completed",
        "Flight": "FR 5419",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "dd53645a-dc50-4af6-b1a4-ea52fb50c36f",
        "InterviewEndDate": "2023-05-01 17:46:57",
        "InterviewState": "Completed",
        "Flight": "EW 8594",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 2
    },
    {
        "InterviewId": "3b51e949-e61e-4e88-8fe6-e3ac08cc7331",
        "InterviewEndDate": "2023-05-01 17:39:28",
        "InterviewState": "Completed",
        "Flight": "EW 8594",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 2
    },
    {
        "InterviewId": "8b24bdac-515a-4ee5-9b43-e4fef2b713d1",
        "InterviewEndDate": "2023-05-01 18:02:09",
        "InterviewState": "Completed",
        "Flight": "EJU5053",
        "Dest": "Neapel (NAP)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 2
    },
    {
        "InterviewId": "bbbbaca5-e3f7-49ed-bb60-fbca7b8c9e90",
        "InterviewEndDate": "2023-05-01 18:43:37",
        "InterviewState": "Completed",
        "Flight": "EW 8006",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 2
    },
    {
        "InterviewId": "f61bbbc3-fcc1-4257-a451-f9ea96437806",
        "InterviewEndDate": "2023-05-01 19:12:34",
        "InterviewState": "Completed",
        "Flight": "FR  177",
        "Dest": "London (STN)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "229b3dd9-48b6-4df8-8563-f604a03139c0",
        "InterviewEndDate": "2023-05-01 19:50:54",
        "InterviewState": "Completed",
        "Flight": "LX  983",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 11
    },
    {
        "InterviewId": "da2d82f2-7944-40a0-842b-f7646abc17cb",
        "InterviewEndDate": "2023-05-01 19:48:51",
        "InterviewState": "Completed",
        "Flight": "LX  983",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 11
    },
    {
        "InterviewId": "7342ef4c-5c86-4147-b0f5-eea34f3435b8",
        "InterviewEndDate": "2023-05-01 20:40:02",
        "InterviewState": "Completed",
        "Flight": "EW 8212",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 2
    },
    {
        "InterviewId": "4cc98069-3204-44e0-bbab-ead98e96ca84",
        "InterviewEndDate": "2023-05-02 15:46:04",
        "InterviewState": "Completed",
        "Flight": "EW 9043",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "9d19617a-11a2-4d93-9f0c-edb077d4516f",
        "InterviewEndDate": "2023-05-02 15:57:24",
        "InterviewState": "Completed",
        "Flight": "EW 9043",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "a22f99ed-2074-42c6-b43a-ea3e079cad77",
        "InterviewEndDate": "2023-05-02 18:10:10",
        "InterviewState": "Completed",
        "Flight": "EW 8054",
        "Dest": "K\u00f6ln (CGN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "7c1a2370-ae4c-4d4c-99a1-f8fc61e93771",
        "InterviewEndDate": "2023-05-02 18:17:30",
        "InterviewState": "Completed",
        "Flight": "EW 8054",
        "Dest": "K\u00f6ln (CGN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "41fe120e-3f6c-4abe-a15c-ed777ac20c48",
        "InterviewEndDate": "2023-05-02 19:19:23",
        "InterviewState": "Completed",
        "Flight": "EJU4632",
        "Dest": "Paris (CDG)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8956587d-d2cd-4459-8ae7-f30333fbd5dd",
        "InterviewEndDate": "2023-05-06 11:15:06",
        "InterviewState": "Completed",
        "Flight": "LH 1935",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 998
    },
    {
        "InterviewId": "896cf161-1fe6-496c-b4d0-ea257542480a",
        "InterviewEndDate": "2023-05-06 11:50:30",
        "InterviewState": "Completed",
        "Flight": "SN 2582",
        "Dest": "Br\u00fcssel (BRU)",
        "AirlineCode": "Brussels Airlines",
        "InterviewerID": 1
    },
    {
        "InterviewId": "d048d822-c006-4e01-b1f2-fc1b825aba37",
        "InterviewEndDate": "2023-05-06 12:28:56",
        "InterviewState": "Completed",
        "Flight": "TK 7729",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "78d891d3-18fa-4360-ac41-f837d231a9fe",
        "InterviewEndDate": "2023-05-06 12:34:50",
        "InterviewState": "Completed",
        "Flight": "TK 7729",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "db4d4b2d-92a0-4f7a-bb49-f97e83304d3e",
        "InterviewEndDate": "2023-05-12 15:40:28",
        "InterviewState": "Completed",
        "Flight": "XQ  967",
        "Dest": "Izmir (ADB)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 12
    },
    {
        "InterviewId": "3a677d46-dbf3-4c79-a7c0-e813250ab0c5",
        "InterviewEndDate": "2023-05-08 08:16:18",
        "InterviewState": "Completed",
        "Flight": "EW 2003",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "dc1e8c6d-4d64-469b-9652-f30015ee1051",
        "InterviewEndDate": "2023-05-08 08:23:28",
        "InterviewState": "Completed",
        "Flight": "EW 2003",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "e519087b-67b2-4969-920a-eac8621c4acb",
        "InterviewEndDate": "2023-05-08 09:27:06",
        "InterviewState": "Completed",
        "Flight": "EJU5145",
        "Dest": "Nizza (NCE)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "104da326-22d5-48fe-b699-f772f99186f1",
        "InterviewEndDate": "2023-05-08 12:08:38",
        "InterviewState": "Completed",
        "Flight": "OG  701",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "PLAY",
        "InterviewerID": 11
    },
    {
        "InterviewId": "a5afe2b8-985b-4c31-aa9b-ff8c4393e168",
        "InterviewEndDate": "2023-05-08 11:17:32",
        "InterviewState": "Completed",
        "Flight": "EJU7334",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "353f362a-8633-4a23-ac2e-ee6bd1e4bf22",
        "InterviewEndDate": "2023-05-08 12:11:53",
        "InterviewState": "Completed",
        "Flight": "OG  701",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "PLAY",
        "InterviewerID": 11
    },
    {
        "InterviewId": "e7bf64c1-469b-42f1-aa5d-fbb86b3d52c3",
        "InterviewEndDate": "2023-05-09 07:01:56",
        "InterviewState": "Completed",
        "Flight": "EJU5261",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "87302928-7d6f-41d4-b3f6-f13df66dd10b",
        "InterviewEndDate": "2023-05-09 08:02:51",
        "InterviewState": "Completed",
        "Flight": "EJU5005",
        "Dest": "Korfu (CFU)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "18d71cea-f1b4-44c3-9f61-fee6fc96f27d",
        "InterviewEndDate": "2023-05-09 09:16:50",
        "InterviewState": "Completed",
        "Flight": "KL 1822",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c9ccf935-8b2d-4b41-b19a-e2dc85979e21",
        "InterviewEndDate": "2023-05-09 11:25:12",
        "InterviewState": "Completed",
        "Flight": "I2 3677",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 11
    },
    {
        "InterviewId": "5482ecce-f532-412e-bd6a-ec934d469d50",
        "InterviewEndDate": "2023-05-09 11:29:45",
        "InterviewState": "Completed",
        "Flight": "I2 3677",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 11
    },
    {
        "InterviewId": "94fe3aac-5f89-424e-95db-ebe5bb9ad893",
        "InterviewEndDate": "2023-05-10 17:28:06",
        "InterviewState": "Completed",
        "Flight": "KL 1830",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "689327eb-40b8-402c-82e6-fc6eab867c63",
        "InterviewEndDate": "2023-05-10 17:29:51",
        "InterviewState": "Completed",
        "Flight": "KL 1830",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "dbd0e515-2cfc-410b-b518-f9f2d99aa5c3",
        "InterviewEndDate": "2023-05-10 17:35:51",
        "InterviewState": "Completed",
        "Flight": "KL 1830",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "62ba2922-2cdb-4932-a5c4-e40c3a4a8ae5",
        "InterviewEndDate": "2023-05-10 20:33:34",
        "InterviewState": "Completed",
        "Flight": "EW 8212",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "6f5593d7-570b-44b7-9f73-f5f730d4a13d",
        "InterviewEndDate": "2023-05-11 16:47:07",
        "InterviewState": "Completed",
        "Flight": "EZY3262",
        "Dest": "Edinburgh (EDI)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 2
    },
    {
        "InterviewId": "721babc7-3859-41cb-aa69-f1cd7d521dd3",
        "InterviewEndDate": "2023-05-11 16:58:52",
        "InterviewState": "Completed",
        "Flight": "EZY3262",
        "Dest": "Edinburgh (EDI)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 2
    },
    {
        "InterviewId": "704f4776-7fc7-426c-9449-e6df5968f2ec",
        "InterviewEndDate": "2023-05-11 18:39:13",
        "InterviewState": "Completed",
        "Flight": "AY 1438",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 2
    },
    {
        "InterviewId": "21e927da-1cf2-448d-972a-fd457b041c3f",
        "InterviewEndDate": "2023-05-11 18:39:58",
        "InterviewState": "Completed",
        "Flight": "AY 1438",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 2
    },
    {
        "InterviewId": "d3cb7528-8dd4-4dd9-81bd-e5bc57ba0153",
        "InterviewEndDate": "2023-05-11 19:22:27",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 2
    },
    {
        "InterviewId": "30f94498-5abd-4ec6-94bb-ee0835084177",
        "InterviewEndDate": "2023-05-11 19:30:04",
        "InterviewState": "Completed",
        "Flight": "KL 1832",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 2
    },
    {
        "InterviewId": "9eecd2e4-c0ba-415c-a90a-edd7aae9b439",
        "InterviewEndDate": "2023-05-11 19:57:38",
        "InterviewState": "Completed",
        "Flight": "EJU5267",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 2
    },
    {
        "InterviewId": "0b8424f7-33d5-4895-918a-fde0f0f35495",
        "InterviewEndDate": "2023-05-11 21:07:30",
        "InterviewState": "Completed",
        "Flight": "JU  355",
        "Dest": "Belgrad (BEG)",
        "AirlineCode": "Air Serbia",
        "InterviewerID": 2
    },
    {
        "InterviewId": "3bdbd803-dccc-4d54-88c5-fbdbebc1cb93",
        "InterviewEndDate": "2023-05-11 21:13:14",
        "InterviewState": "Completed",
        "Flight": "JU  355",
        "Dest": "Belgrad (BEG)",
        "AirlineCode": "Air Serbia",
        "InterviewerID": 2
    },
    {
        "InterviewId": "396246f9-d00c-47c4-9d11-fcebd9282f69",
        "InterviewEndDate": "2023-05-11 21:42:53",
        "InterviewState": "Completed",
        "Flight": "EI  337",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 2
    },
    {
        "InterviewId": "0dfe3324-7ed2-4f77-a0f5-eb79f37c9824",
        "InterviewEndDate": "2023-05-12 15:29:57",
        "InterviewState": "Completed",
        "Flight": "EJU5053",
        "Dest": "Neapel (NAP)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f1b0b947-32b0-4890-87ef-e907c3f5d0fd",
        "InterviewEndDate": "2023-05-12 15:39:53",
        "InterviewState": "Completed",
        "Flight": "EJU5053",
        "Dest": "Neapel (NAP)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "08578e70-9634-4048-85d3-efaa19d6c3c7",
        "InterviewEndDate": "2023-05-12 16:23:46",
        "InterviewState": "Completed",
        "Flight": "EW 8044",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "97ee72b3-71f1-4b7d-ae70-fd0062028a28",
        "InterviewEndDate": "2023-05-12 17:18:40",
        "InterviewState": "Completed",
        "Flight": "EJU5153",
        "Dest": "Paris (ORY)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "2b6ebbbd-d034-4e5f-a57a-f2b3ab96f287",
        "InterviewEndDate": "2023-05-12 17:39:24",
        "InterviewState": "Completed",
        "Flight": "QR  082",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "40f464b1-9b0e-4150-b420-f4150dcb6227",
        "InterviewEndDate": "2023-05-12 18:20:56",
        "InterviewState": "Completed",
        "Flight": "EZY3262",
        "Dest": "Edinburgh (EDI)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 12
    },
    {
        "InterviewId": "0604a5ee-69d6-40d9-92a6-f03f441da958",
        "InterviewEndDate": "2023-05-12 18:07:46",
        "InterviewState": "Completed",
        "Flight": "AY 1438",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "ade4c5ce-caca-4428-8ddf-eb9d261419f4",
        "InterviewEndDate": "2023-05-12 20:43:48",
        "InterviewState": "Completed",
        "Flight": "EW 2021",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "6311a4b8-d212-4e85-8413-ffee0184fd92",
        "InterviewEndDate": "2023-05-12 21:10:34",
        "InterviewState": "Completed",
        "Flight": "LH  201",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 12
    },
    {
        "InterviewId": "a447df50-d514-4b2d-a355-e4b113f8b84a",
        "InterviewEndDate": "2023-05-12 21:12:21",
        "InterviewState": "Completed",
        "Flight": "EZS1190",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b3cc1fe2-d8d9-43b9-9cd9-f468ec8ebd79",
        "InterviewEndDate": "2023-05-12 21:10:44",
        "InterviewState": "Completed",
        "Flight": "EZS1190",
        "Dest": "Basel (BSL)",
        "AirlineCode": "easyJet Switzerland",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c5940167-2348-46f4-88d3-ef0379990012",
        "InterviewEndDate": "2023-05-13 14:05:40",
        "InterviewState": "Completed",
        "Flight": "FI  529",
        "Dest": "Reykjavik (KEF)",
        "AirlineCode": "Icelandair",
        "InterviewerID": 998
    },
    {
        "InterviewId": "2e5bc6fd-3356-4744-b8bb-fa01c537edca",
        "InterviewEndDate": "2023-05-13 14:34:03",
        "InterviewState": "Completed",
        "Flight": "EW 8594",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "7bc026b4-8888-4c68-b16a-f1bdb18e4b0e",
        "InterviewEndDate": "2023-05-13 15:32:20",
        "InterviewState": "Completed",
        "Flight": "EJU5055",
        "Dest": "Olbia (OLB)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "bd42828d-e695-4f37-a93a-f5b03e77783d",
        "InterviewEndDate": "2023-05-13 15:42:27",
        "InterviewState": "Completed",
        "Flight": "EJU5055",
        "Dest": "Olbia (OLB)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "842333c5-cad8-43f3-8460-efdcea30c301",
        "InterviewEndDate": "2023-05-13 15:38:12",
        "InterviewState": "Completed",
        "Flight": "EJU5055",
        "Dest": "Olbia (OLB)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "218933d1-0867-44fe-9e6e-ec72f4decbc5",
        "InterviewEndDate": "2023-05-13 15:26:22",
        "InterviewState": "Completed",
        "Flight": "EJU5055",
        "Dest": "Olbia (OLB)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "9f764e63-3177-47c3-802c-f3622eee1b3f",
        "InterviewEndDate": "2023-05-13 16:37:58",
        "InterviewState": "Completed",
        "Flight": "LH  195",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "7b6343d6-ba33-4781-a176-fb763053aee6",
        "InterviewEndDate": "2023-05-13 16:43:05",
        "InterviewState": "Completed",
        "Flight": "LH  195",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 998
    },
    {
        "InterviewId": "04583995-28e3-421a-be10-f56719326c7a",
        "InterviewEndDate": "2023-05-13 16:49:08",
        "InterviewState": "Completed",
        "Flight": "LH  195",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "16ece8bd-50ef-402d-a3bf-f2bdbc4c46a5",
        "InterviewEndDate": "2023-05-13 18:04:52",
        "InterviewState": "Completed",
        "Flight": "LH 1947",
        "Dest": "M\u00fcnchen (MUC)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "a4c720ce-ecf4-406e-b7ac-ec7a3b91e5a7",
        "InterviewEndDate": "2023-05-13 18:37:52",
        "InterviewState": "Completed",
        "Flight": "LX  971",
        "Dest": "Z\u00fcrich (ZRH)",
        "AirlineCode": "Swiss",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c0a9bcba-b779-4561-be99-f55bbc78b864",
        "InterviewEndDate": "2023-05-13 18:43:57",
        "InterviewState": "Completed",
        "Flight": "LH  199",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 998
    },
    {
        "InterviewId": "723e6e73-3cd4-4810-ba1d-e614611eb8b0",
        "InterviewEndDate": "2023-05-13 18:50:12",
        "InterviewState": "Completed",
        "Flight": "LH  199",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c918ff62-b390-4cb6-bc6c-e5eb92b8b3bf",
        "InterviewEndDate": "2023-05-13 18:37:30",
        "InterviewState": "Completed",
        "Flight": "LH  199",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 998
    },
    {
        "InterviewId": "6e9d8bda-e500-4fef-8dba-ff23e683fc24",
        "InterviewEndDate": "2023-05-13 19:41:39",
        "InterviewState": "Completed",
        "Flight": "EJU5267",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 998
    },
    {
        "InterviewId": "25470417-e97c-4a15-9a4c-f821887b98ba",
        "InterviewEndDate": "2023-05-13 19:32:16",
        "InterviewState": "Completed",
        "Flight": "EJU5267",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "8ca2a214-a577-44f8-b54d-ee4d7dc37853",
        "InterviewEndDate": "2023-05-14 10:39:18",
        "InterviewState": "Completed",
        "Flight": "AF 1435",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 998
    },
    {
        "InterviewId": "34dfcd80-2bf4-4b80-9b43-e6fcf6f86c05",
        "InterviewEndDate": "2023-05-14 11:10:27",
        "InterviewState": "Completed",
        "Flight": "KL 1820",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "3792ab64-0d0f-4e47-9586-ed4189b8a70d",
        "InterviewEndDate": "2023-05-14 11:36:56",
        "InterviewState": "Completed",
        "Flight": "LH  183",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 998
    },
    {
        "InterviewId": "5a60487b-bd0d-46da-9a8b-f650fcfa831c",
        "InterviewEndDate": "2023-05-14 12:19:09",
        "InterviewState": "Completed",
        "Flight": "TK 7729",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Turkish Airlines",
        "InterviewerID": 998
    },
    {
        "InterviewId": "67dec472-7f86-4318-83ae-f63fb16ced99",
        "InterviewEndDate": "2023-05-16 16:16:28",
        "InterviewState": "Completed",
        "Flight": "EW 9043",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "cc78985b-f54b-4882-971c-fb907fbc1f6a",
        "InterviewEndDate": "2023-05-16 16:33:35",
        "InterviewState": "Completed",
        "Flight": "EW 9043",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 12
    },
    {
        "InterviewId": "c212cf73-8d0b-48f5-a1a2-f01605cffe3b",
        "InterviewEndDate": "2023-05-16 16:26:54",
        "InterviewState": "Completed",
        "Flight": "EW 9043",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 19
    },
    {
        "InterviewId": "a031c660-3a0f-45d9-8dce-e44bedca00fc",
        "InterviewEndDate": "2023-05-16 17:05:09",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 19
    },
    {
        "InterviewId": "b2dec4ac-6a95-45bf-a026-e239c5c0825f",
        "InterviewEndDate": "2023-05-16 17:18:06",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "5e877738-b2f9-42fb-b576-ed1c35f6733d",
        "InterviewEndDate": "2023-05-16 17:23:28",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 17
    },
    {
        "InterviewId": "79d15a7e-dc14-486f-9084-fc119e4feb3c",
        "InterviewEndDate": "2023-05-16 18:01:38",
        "InterviewState": "Completed",
        "Flight": "XQ  661",
        "Dest": "Antalya (AYT)",
        "AirlineCode": "Sun Express",
        "InterviewerID": 12
    },
    {
        "InterviewId": "66d8ccf6-9e26-4f8d-b1a2-f29b2b888b2a",
        "InterviewEndDate": "2023-05-16 18:34:46",
        "InterviewState": "Completed",
        "Flight": "BA  985",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "fd663ca9-db07-414a-8e27-fcdd06e5d68c",
        "InterviewEndDate": "2023-05-16 20:16:49",
        "InterviewState": "Completed",
        "Flight": "OS  236",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 12
    },
    {
        "InterviewId": "26b1bd29-0dc8-4752-a3da-f73617fa7f19",
        "InterviewEndDate": "2023-05-16 20:20:05",
        "InterviewState": "Completed",
        "Flight": "OS  236",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 17
    },
    {
        "InterviewId": "29328df4-a983-4ba7-b190-f79c3dcaff5f",
        "InterviewEndDate": "2023-05-16 21:26:18",
        "InterviewState": "Completed",
        "Flight": "BA  999",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 19
    },
    {
        "InterviewId": "317ed995-9afa-4e70-b8d2-f842eda68174",
        "InterviewEndDate": "2023-05-16 21:26:04",
        "InterviewState": "Completed",
        "Flight": "BA  999",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 19
    },
    {
        "InterviewId": "b5fc2b0d-6ad2-499b-80b0-ef3f5dfae723",
        "InterviewEndDate": "2023-05-16 21:25:41",
        "InterviewState": "Completed",
        "Flight": "BA  999",
        "Dest": "London (LHR)",
        "AirlineCode": "British Airways",
        "InterviewerID": 12
    },
    {
        "InterviewId": "6280895d-5891-4696-b55c-eb5bd536be2f",
        "InterviewEndDate": "2023-05-17 17:17:16",
        "InterviewState": "Completed",
        "Flight": "TP  535",
        "Dest": "Lissabon (LIS)",
        "AirlineCode": "TAP Air Portugal",
        "InterviewerID": 11
    },
    {
        "InterviewId": "52bfa9ce-44af-4165-87e2-e75eaab7b955",
        "InterviewEndDate": "2023-05-17 19:14:24",
        "InterviewState": "Completed",
        "Flight": "AY 1436",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "c9ed5ced-9e81-4c2a-aee9-f52c15cef54e",
        "InterviewEndDate": "2023-05-17 19:13:23",
        "InterviewState": "Completed",
        "Flight": "AY 1436",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 11
    },
    {
        "InterviewId": "a137a90c-377d-41a9-aaa8-eb345f7c7af2",
        "InterviewEndDate": "2023-05-17 20:33:47",
        "InterviewState": "Completed",
        "Flight": "AF 1535",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 11
    },
    {
        "InterviewId": "101e094d-c5b9-40fd-9ccc-f84620fb5ac8",
        "InterviewEndDate": "2023-05-17 20:35:13",
        "InterviewState": "Completed",
        "Flight": "AF 1535",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 11
    },
    {
        "InterviewId": "f444c465-5f83-45f2-b8cc-e7198ade06f6",
        "InterviewEndDate": "2023-05-17 21:27:31",
        "InterviewState": "Completed",
        "Flight": "EI  337",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 11
    },
    {
        "InterviewId": "298abeb7-ba79-4165-8fd3-f4a8b32232ee",
        "InterviewEndDate": "2023-05-17 21:21:13",
        "InterviewState": "Completed",
        "Flight": "EI  337",
        "Dest": "Dublin (DUB)",
        "AirlineCode": "Aer Lingus",
        "InterviewerID": 11
    },
    {
        "InterviewId": "1463eeff-b580-4b22-95e6-f685c21e41cd",
        "InterviewEndDate": "2023-05-18 10:40:57",
        "InterviewState": "Completed",
        "Flight": "EZY8630",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet UK",
        "InterviewerID": 1
    },
    {
        "InterviewId": "089a39d4-23b4-4546-b892-f751ef723d37",
        "InterviewEndDate": "2023-05-18 13:20:09",
        "InterviewState": "Completed",
        "Flight": "SK 2678",
        "Dest": "Stockholm (ARN)",
        "AirlineCode": "SAS-Scandinavian Airlines System",
        "InterviewerID": 1
    },
    {
        "InterviewId": "072bbe85-7294-4653-84e9-f183b8f33656",
        "InterviewEndDate": "2023-05-18 14:32:39",
        "InterviewState": "Completed",
        "Flight": "FR  234",
        "Dest": "Malaga (AGP)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "f503623e-4d6d-4d04-9244-ea7282f87fa8",
        "InterviewEndDate": "2023-05-18 15:27:35",
        "InterviewState": "Completed",
        "Flight": "FR 2527",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "ad69f28f-7ad9-4c02-8bf2-f3a05e3d094c",
        "InterviewEndDate": "2023-05-18 15:23:00",
        "InterviewState": "Completed",
        "Flight": "FR  234",
        "Dest": "Malaga (AGP)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "a2393b52-7e1d-4cc3-99c2-f506ab501055",
        "InterviewEndDate": "2023-05-18 16:35:36",
        "InterviewState": "Completed",
        "Flight": "FR 3388",
        "Dest": "Marseille (MRS)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "c749c015-500e-4369-85e4-f8985da21f48",
        "InterviewEndDate": "2023-05-18 17:26:54",
        "InterviewState": "Completed",
        "Flight": "FR  132",
        "Dest": "Barcelona (BCN)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "8538aa15-94b0-4bc1-b4ef-ea21c1f7eb73",
        "InterviewEndDate": "2023-05-18 17:55:16",
        "InterviewState": "Completed",
        "Flight": "FR  132",
        "Dest": "Barcelona (BCN)",
        "AirlineCode": "Ryanair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "2de41077-70cb-4da5-b9fc-ed6d95a43ac3",
        "InterviewEndDate": "2023-05-19 14:17:44",
        "InterviewState": "Completed",
        "Flight": "EJU5071",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "a09f8b53-f55c-4271-a98e-f6ae0a074ba8",
        "InterviewEndDate": "2023-05-19 14:39:34",
        "InterviewState": "Completed",
        "Flight": "EJU5265",
        "Dest": "Kopenhagen (CPH)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "82e5c5fe-379c-4c5f-b78c-e5371a90deff",
        "InterviewEndDate": "2023-05-19 15:30:08",
        "InterviewState": "Completed",
        "Flight": "EJU5053",
        "Dest": "Neapel (NAP)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "821a011f-5208-4967-ba7d-f7cd704f0489",
        "InterviewEndDate": "2023-05-19 15:26:48",
        "InterviewState": "Completed",
        "Flight": "EJU5053",
        "Dest": "Neapel (NAP)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "25f9011b-b2dd-4dad-9507-e4d772e130cd",
        "InterviewEndDate": "2023-05-19 16:42:38",
        "InterviewState": "Completed",
        "Flight": "EW 8044",
        "Dest": "D\u00fcsseldorf (DUS)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "43765282-42b2-4187-a19f-f5e7b7b561d1",
        "InterviewEndDate": "2023-05-19 17:21:21",
        "InterviewState": "Completed",
        "Flight": "KL 1830",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 11
    },
    {
        "InterviewId": "50320d34-4a23-4770-b897-eec6e5ef85e9",
        "InterviewEndDate": "2023-05-20 10:52:33",
        "InterviewState": "Completed",
        "Flight": "EW 8002",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "6dc5b1c8-f05f-4bed-9fb2-ef82b7ec749e",
        "InterviewEndDate": "2023-05-20 10:52:27",
        "InterviewState": "Completed",
        "Flight": "EW 8002",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "6522e02c-a15c-47c0-a531-eaeb5dfd93f0",
        "InterviewEndDate": "2023-05-20 10:45:22",
        "InterviewState": "Completed",
        "Flight": "EW 8002",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 20
    },
    {
        "InterviewId": "5fe90480-8f93-4b55-ba57-ec50096709d5",
        "InterviewEndDate": "2023-05-20 11:42:21",
        "InterviewState": "Completed",
        "Flight": "I2 3677",
        "Dest": "Madrid (MAD)",
        "AirlineCode": "IBERIA Express",
        "InterviewerID": 20
    },
    {
        "InterviewId": "885322d1-2d04-4c20-b995-ff245a43a5dd",
        "InterviewEndDate": "2023-05-20 12:07:18",
        "InterviewState": "Completed",
        "Flight": "AF 1735",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 21
    },
    {
        "InterviewId": "656be1cf-0ff4-4025-9447-f73ec54b5afc",
        "InterviewEndDate": "2023-05-20 12:17:41",
        "InterviewState": "Completed",
        "Flight": "AF 1735",
        "Dest": "Paris (CDG)",
        "AirlineCode": "Air France",
        "InterviewerID": 21
    },
    {
        "InterviewId": "a4a90c76-e753-4143-8ceb-ee89f0d15334",
        "InterviewEndDate": "2023-05-20 13:40:34",
        "InterviewState": "Completed",
        "Flight": "EJU5121",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 20
    },
    {
        "InterviewId": "cdb3046e-314a-4bb0-97d6-ea35b19a406b",
        "InterviewEndDate": "2023-05-20 14:13:06",
        "InterviewState": "Completed",
        "Flight": "EW  007",
        "Dest": "K\u00f6ln (CGN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 21
    },
    {
        "InterviewId": "991d96c0-49a7-419d-a691-e7ec171b8168",
        "InterviewEndDate": "2023-05-20 14:17:04",
        "InterviewState": "Completed",
        "Flight": "EW  007",
        "Dest": "K\u00f6ln (CGN)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "4e6c9d57-cde2-4fc0-b124-ea97584924af",
        "InterviewEndDate": "2023-05-20 14:35:20",
        "InterviewState": "Completed",
        "Flight": "EJU5071",
        "Dest": "Mailand (LIN)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "b19b450a-fec3-4dce-a54c-f34ea874b5fb",
        "InterviewEndDate": "2023-05-20 16:00:33",
        "InterviewState": "Completed",
        "Flight": "PC  978",
        "Dest": "Istanbul (SAW)",
        "AirlineCode": "Pegasus Airlines",
        "InterviewerID": 21
    },
    {
        "InterviewId": "1a008354-284b-4d64-8e4d-f33adb8e40b3",
        "InterviewEndDate": "2023-05-21 09:39:57",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 15
    },
    {
        "InterviewId": "7bc5c7ba-b796-46d2-b72c-fdb71a5d07c7",
        "InterviewEndDate": "2023-05-21 09:41:36",
        "InterviewState": "Completed",
        "Flight": "QR  080",
        "Dest": "Doha (DOH)",
        "AirlineCode": "Qatar Airways",
        "InterviewerID": 16
    },
    {
        "InterviewId": "ea6ff7e0-fd74-43cb-a654-e7f4c2bc2309",
        "InterviewEndDate": "2023-05-21 11:29:12",
        "InterviewState": "Completed",
        "Flight": "OS  226",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 16
    },
    {
        "InterviewId": "cfa07bad-d651-458b-b09d-f90ee08a0f0f",
        "InterviewEndDate": "2023-05-21 11:42:57",
        "InterviewState": "Completed",
        "Flight": "OS  226",
        "Dest": "Wien (VIE)",
        "AirlineCode": "Austrian Airlines",
        "InterviewerID": 16
    },
    {
        "InterviewId": "19cc4969-5963-4ba8-a2bf-fa44840baeb3",
        "InterviewEndDate": "2023-05-21 12:08:19",
        "InterviewState": "Completed",
        "Flight": "LH  185",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 1
    },
    {
        "InterviewId": "7323c530-57fc-4a50-bade-f0842b9f779e",
        "InterviewEndDate": "2023-05-21 12:59:21",
        "InterviewState": "Completed",
        "Flight": "SR 6472",
        "Dest": "Hurghada (HRG)",
        "AirlineCode": "SUNDAIR",
        "InterviewerID": 1
    },
    {
        "InterviewId": "4ce7fcf9-b2f1-45f7-a25b-f81c55874113",
        "InterviewEndDate": "2023-05-21 12:27:16",
        "InterviewState": "Completed",
        "Flight": "LH  185",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 16
    },
    {
        "InterviewId": "d313514f-b0fd-455e-addd-f3941aae82dc",
        "InterviewEndDate": "2023-05-21 14:16:39",
        "InterviewState": "Completed",
        "Flight": "LH  189",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 16
    },
    {
        "InterviewId": "bbe5e820-c96d-4a7f-a726-e8ebd9faab4b",
        "InterviewEndDate": "2023-05-21 14:16:21",
        "InterviewState": "Completed",
        "Flight": "LH  189",
        "Dest": "Frankfurt (FRA)",
        "AirlineCode": "Lufthansa",
        "InterviewerID": 15
    },
    {
        "InterviewId": "bfc00e5d-ad2c-4a84-805b-f8ed7c0f694e",
        "InterviewEndDate": "2023-05-23 17:03:48",
        "InterviewState": "Completed",
        "Flight": "BA 8494",
        "Dest": "London (LCY)",
        "AirlineCode": "British Airways",
        "InterviewerID": 22
    },
    {
        "InterviewId": "0270bbda-9124-49a7-a50d-ec4ed106c635",
        "InterviewEndDate": "2023-05-23 18:28:02",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 22
    },
    {
        "InterviewId": "429d3bf2-0bf4-471d-84f6-ee32bf35a0b6",
        "InterviewEndDate": "2023-05-23 18:22:43",
        "InterviewState": "Completed",
        "Flight": "EJU8626",
        "Dest": "London (LGW)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 12
    },
    {
        "InterviewId": "49001926-ab53-4467-81e0-fd7646542855",
        "InterviewEndDate": "2023-05-23 19:18:36",
        "InterviewState": "Completed",
        "Flight": "TO 3407",
        "Dest": "Paris (ORY)",
        "AirlineCode": "Transavia France",
        "InterviewerID": 12
    },
    {
        "InterviewId": "360d12ed-ef44-4a8a-a156-ec97c536f0d3",
        "InterviewEndDate": "2023-05-23 19:56:13",
        "InterviewState": "Completed",
        "Flight": "AY 1436",
        "Dest": "Helsinki (HEL)",
        "AirlineCode": "Finnair",
        "InterviewerID": 12
    },
    {
        "InterviewId": "28319002-b8d2-48f9-822c-f1979f2afbd7",
        "InterviewEndDate": "2023-05-23 21:12:52",
        "InterviewState": "Completed",
        "Flight": "KL 1834",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 22
    },
    {
        "InterviewId": "fee91365-fd3e-4114-a253-f2ce9f6ac1b2",
        "InterviewEndDate": "2023-05-24 08:39:34",
        "InterviewState": "Completed",
        "Flight": "EJU4632",
        "Dest": "Paris (CDG)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 19
    },
    {
        "InterviewId": "466ebca4-6af6-4511-a00b-ef58b4ee0fb3",
        "InterviewEndDate": "2023-05-24 08:25:42",
        "InterviewState": "Completed",
        "Flight": "EW 4343",
        "Dest": "Salzburg (SZG)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "bc847995-f30d-474b-b911-ff66479fd71e",
        "InterviewEndDate": "2023-05-24 08:36:02",
        "InterviewState": "Completed",
        "Flight": "EJU4632",
        "Dest": "Paris (CDG)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    },
    {
        "InterviewId": "afa19b35-6bf2-42ea-a676-e2f9982ff8d9",
        "InterviewEndDate": "2023-05-24 09:40:55",
        "InterviewState": "Completed",
        "Flight": "KL 1822",
        "Dest": "Amsterdam (AMS)",
        "AirlineCode": "KLM Royal Dutch Airlines",
        "InterviewerID": 19
    },
    {
        "InterviewId": "a7216a01-3c22-4b23-9596-fbdce314c2eb",
        "InterviewEndDate": "2023-05-24 10:22:57",
        "InterviewState": "Completed",
        "Flight": "EW 8002",
        "Dest": "Stuttgart (STR)",
        "AirlineCode": "Eurowings",
        "InterviewerID": 11
    },
    {
        "InterviewId": "938a1336-abdf-4742-b806-f7dd20ee7f9e",
        "InterviewEndDate": "2023-05-24 10:48:47",
        "InterviewState": "Completed",
        "Flight": "EJU7334",
        "Dest": "Palma de Mallorca (PMI)",
        "AirlineCode": "easyJet Europe",
        "InterviewerID": 11
    }
]    

 `;