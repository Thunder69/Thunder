export default async function handler(req, res) {
  try {
    const { number } = req.query;

    if (!number) {
      res.status(400).send("Number parameter required");
      return;
    }

    const url = `http://api.subhxcosmo.in/api?key=VNIOX&type=mobile&term=${number}`;

    const r = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    });

    let data = await r.text();

    // Hide any https or http links (especially starting link)
    data = data.replace(/https?:\/\/\S+/gi, "");

    // Hide all @usernames
    data = data.replace(/@\w+/g, "");

    // Add your credit
    data = data + "\n@OsxSpace";

    res.status(200).send(data);

  } catch (err) {
    res.status(500).send("Error: " + err.toString());
  }
}
