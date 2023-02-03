import fetch from "node-fetch";
import readlineSync from "readline-sync";
import fs from "fs";
const login = async (email, password) => {
  try {
    const res = await fetch("https://discord.com/api/v9/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const resjson = await res.json();
    // console.log(resjson);
    const token = resjson.token;
    const restkn = `${token}\n`;

    fs.appendFile("outoken.txt", restkn, "utf8", (err) => {
      if (err) throw err;
      console.log("\ntoken telah tersimpan di outoken.txt!");
    });
    console.log(token);
  } catch (error) {
    throw error;
  }
};

console.log(
  ` 
GET TOKEN DISCORD
Masukan Email Dan Password
Author: M Khoirul Risqi
Github: https://github.com/risqikhoirul
`
);
const email = readlineSync.question("Email? ");
const pass = readlineSync.question("Password? ", { hideEchoBack: true });
login(email, pass);
