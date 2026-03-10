export default async function handler(req, res) {
  try {
    const { number } = req.query;

    if (!number) {
      return res.status(400).json({ error: "Number is required" });
    }

    const api = `https://api.paanel.shop/numapi.php?action=api&key=lkjhsalaar&number=${number}`;

    const response = await fetch(api);
    let data = await response.text();

    // Hide unwanted usernames
    data = data.replace(/@UseSir/gi, "");
    data = data.replace(/@overshade/gi, "");

    // Ensure your usernames show
    data = data.replace(/@SxThunder/gi, "@SxThunder");

    res.setHeader("Content-Type", "application/json");
    res.status(200).send(data);

  } catch (err) {
    res.status(500).json({ error: "API Error", message: err.toString() });
  }
  }
