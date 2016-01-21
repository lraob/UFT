Browser("Oracle FLEXCUBE UBS12.0.3.5.0L").Page("Oracle FLEXCUBE UBS12.0.3.5.0L").WebEdit("USERID").Set "sumanta01" @@ hightlight id_;_Browser("Oracle FLEXCUBE UBS12.0.3.5.0L").Page("Oracle FLEXCUBE UBS12.0.3.5.0L").WebEdit("USERID")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Oracle FLEXCUBE UBS12.0.3.5.0L").Page("Oracle FLEXCUBE UBS12.0.3.5.0L").WebEdit("user_pwd").Set "Sirma@123" @@ hightlight id_;_Browser("Oracle FLEXCUBE UBS12.0.3.5.0L").Page("Oracle FLEXCUBE UBS12.0.3.5.0L").WebEdit("user pwd")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Oracle FLEXCUBE UBS12.0.3.5.0L").Page("Oracle FLEXCUBE UBS12.0.3.5.0L").WebButton("Sign In").Click @@ hightlight id_;_Browser("Oracle FLEXCUBE UBS12.0.3.5.0L").Page("Oracle FLEXCUBE UBS12.0.3.5.0L").WebButton("Sign In")_;_script infofile_;_ZIP::ssf3.xml_;_
Browser("SUMANTA01 - 000 - Oracle").Page("SUMANTA01 - 000 - Oracle").Frame("Frame").WebButton("Ok").Click @@ hightlight id_;_Browser("SUMANTA01 - 000 - Oracle").Page("SUMANTA01 - 000 - Oracle").Frame("Frame").WebButton("Ok")_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("SUMANTA01 - 000 - Oracle").Page("SUMANTA01 - 000 - Oracle").WebEdit("fastpath").Set "CSDINSTR" @@ hightlight id_;_Browser("SUMANTA01 - 000 - Oracle").Page("SUMANTA01 - 000 - Oracle").WebEdit("fastpath")_;_script infofile_;_ZIP::ssf5.xml_;_
Browser("SUMANTA01 - 000 - Oracle").Page("SUMANTA01 - 000 - Oracle").WebButton("Go").Click @@ hightlight id_;_Browser("SUMANTA01 - 000 - Oracle").Page("SUMANTA01 - 000 - Oracle").WebButton("Go")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("SUMANTA01 - 000 - Oracle").Page("SUMANTA01 - 000 - Oracle").Frame("Frame_2").Link("New").Click @@ hightlight id_;_Browser("SUMANTA01 - 000 - Oracle").Page("SUMANTA01 - 000 - Oracle").Frame("Frame 2").Link("New")_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("SUMANTA01 - 000 - Oracle").Page("SUMANTA01 - 000 - Oracle").Frame("Frame_3").WebButton("List of Values").Click @@ hightlight id_;_Browser("SUMANTA01 - 000 - Oracle").Page("SUMANTA01 - 000 - Oracle").Frame("Frame 3").WebButton("List of Values")_;_script infofile_;_ZIP::ssf8.xml_;_

CustomerNumber=DataTable.Value("CustomerNumber",dtLocalSheet)
userMsg=DataTable.Value("userMsg",dtLocalSheet)
instructionDt=DataTable.Value("instructionDt",dtLocalSheet)
instructionExpDt=DataTable.Value("instructionExpDt",dtLocalSheet)
customerMsg=DataTable.Value("customerMsg",dtLocalSheet)


Browser("SUMANTA01 - 000 - Oracle").Page("SUMANTA01 - 000 - Oracle").Frame("Frame_4").WebEdit("1").Set CustomerNumber @@ hightlight id_;_Browser("SUMANTA01 - 000 - Oracle").Page("SUMANTA01 - 000 - Oracle").Frame("Frame 4").WebEdit("1")_;_script infofile_;_ZIP::ssf9.xml_;_
Browser("SUMANTA01 - 000 - Oracle").Page("SUMANTA01 - 000 - Oracle").Frame("Frame_4").WebButton("Fetch").Click @@ hightlight id_;_Browser("SUMANTA01 - 000 - Oracle").Page("SUMANTA01 - 000 - Oracle").Frame("Frame 4").WebButton("Fetch")_;_script infofile_;_ZIP::ssf10.xml_;_

Browser("SUMANTA01 - 000 - Oracle").Page("SUMANTA01 - 000 - Oracle").Frame("Frame_4").WebElement("First").Click @@ hightlight id_;_Browser("SUMANTA01 - 000 - Oracle").Page("SUMANTA01 - 000 - Oracle").Frame("Frame 4").Link("00008377")_;_script infofile_;_ZIP::ssf11.xml_;_
Browser("SUMANTA01 - 000 - Oracle").Page("SUMANTA01 - 000 - Oracle").Frame("Frame_3").WebButton("Add Row").Click @@ hightlight id_;_Browser("SUMANTA01 - 000 - Oracle").Page("SUMANTA01 - 000 - Oracle").Frame("Frame 3").WebButton("Add Row")_;_script infofile_;_ZIP::ssf12.xml_;_
Browser("SUMANTA01 - 000 - Oracle").Page("SUMANTA01 - 000 - Oracle").Frame("Frame_3").WebList("DISTYP").Click @@ hightlight id_;_Browser("SUMANTA01 - 000 - Oracle").Page("SUMANTA01 - 000 - Oracle").Frame("Frame 3").WebList("DISTYP")_;_script infofile_;_ZIP::ssf13.xml_;_
Browser("SUMANTA01 - 000 - Oracle").Page("SUMANTA01 - 000 - Oracle").Frame("Frame_3").WebEdit("USRMSG").Click @@ hightlight id_;_Browser("SUMANTA01 - 000 - Oracle").Page("SUMANTA01 - 000 - Oracle").Frame("Frame 3").WebEdit("USRMSG")_;_script infofile_;_ZIP::ssf14.xml_;_
Browser("SUMANTA01 - 000 - Oracle").Page("SUMANTA01 - 000 - Oracle").Frame("Frame_3").WebEdit("USRMSG").Set userMsg @@ hightlight id_;_Browser("SUMANTA01 - 000 - Oracle").Page("SUMANTA01 - 000 - Oracle").Frame("Frame 3").WebEdit("USRMSG")_;_script infofile_;_ZIP::ssf15.xml_;_



Browser("SUMANTA01 - 000 - Oracle").Page("SUMANTA01 - 000 - Oracle").Frame("Frame_3").WebEdit("INSTEDTI").Click @@ hightlight id_;_Browser("SUMANTA01 - 000 - Oracle").Page("SUMANTA01 - 000 - Oracle").Frame("Frame 3").WebEdit("INSTEDTI")_;_script infofile_;_ZIP::ssf26.xml_;_
Browser("SUMANTA01 - 000 - Oracle").Page("SUMANTA01 - 000 - Oracle").Frame("Frame_3").WebEdit("INSTEDTI").Set instructionExpDt @@ hightlight id_;_Browser("SUMANTA01 - 000 - Oracle").Page("SUMANTA01 - 000 - Oracle").Frame("Frame 3").WebEdit("INSTEDTI")_;_script infofile_;_ZIP::ssf27.xml_;_

Browser("SUMANTA01 - 000 - Oracle").Page("SUMANTA01 - 000 - Oracle").Frame("Frame_3").WebEdit("MSG").Click @@ hightlight id_;_Browser("SUMANTA01 - 000 - Oracle").Page("SUMANTA01 - 000 - Oracle").Frame("Frame 3").WebEdit("MSG")_;_script infofile_;_ZIP::ssf23.xml_;_
Browser("SUMANTA01 - 000 - Oracle").Page("SUMANTA01 - 000 - Oracle").Frame("Frame_3").WebEdit("MSG").Set customerMsg @@ hightlight id_;_Browser("SUMANTA01 - 000 - Oracle").Page("SUMANTA01 - 000 - Oracle").Frame("Frame 3").WebEdit("MSG")_;_script infofile_;_ZIP::ssf24.xml_;_


Browser("SUMANTA01 - 000 - Oracle").Page("SUMANTA01 - 000 - Oracle").Frame("Frame_3").Link("Save").Click @@ hightlight id_;_Browser("SUMANTA01 - 000 - Oracle").Page("SUMANTA01 - 000 - Oracle").Frame("Frame 3").Link("Save")_;_script infofile_;_ZIP::ssf28.xml_;_
Browser("SUMANTA01 - 000 - Oracle").Page("SUMANTA01 - 000 - Oracle").Frame("Frame_6").WebButton("Ok").Click @@ hightlight id_;_Browser("SUMANTA01 - 000 - Oracle").Page("SUMANTA01 - 000 - Oracle").Frame("Frame 6").WebButton("Ok")_;_script infofile_;_ZIP::ssf29.xml_;_
Browser("SUMANTA01 - 000 - Oracle").Page("SUMANTA01 - 000 - Oracle").Frame("Frame_3").WebButton("Exit").Click @@ hightlight id_;_Browser("SUMANTA01 - 000 - Oracle").Page("SUMANTA01 - 000 - Oracle").Frame("Frame 3").WebButton("Exit")_;_script infofile_;_ZIP::ssf30.xml_;_
