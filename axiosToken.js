import axios from "axios";
import readlineSync from "readline-sync";
import fs from "fs";
const login = async (email, password) => {
  try {
    const res = await axios.post(
      "https://discord.com/api/v9/auth/login",
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const token = await res.data.token;
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
