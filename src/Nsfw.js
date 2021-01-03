const superagent = require("superagent");
// Test
  async anal() {
    const { body } = await superagent.get(
      "https://nekobot.xyz/api/image?type=anal"
    );
    return body.message;
  }

  async fourk() {
    if (!message.channel.nsfw) return;
    const { body } = await superagent.get(
      "https://nekobot.xyz/api/image?type=4k"
    );
    return body.message;
  }

  async ass() {
    const { body } = await superagent.get(
      "https://nekobot.xyz/api/image?type=ass"
    );
    return body.message;
  }

  async gonewild() {
    const { body } = await superagent.get(
      "https://nekobot.xyz/api/image?type=gonewild"
    );
    return body.message;
  }

  async pgif() {
    const { body } = await superagent.get(
      "https://nekobot.xyz/api/image?type=pgif"
    );
    return body.message;
  }

  async pussy() {
    const { body } = await superagent.get(
      "https://nekobot.xyz/api/image?type=pussy"
    );
    return body.message;
  }

  async thigh() {
    const { body } = await superagent.get(
      "https://nekobot.xyz/api/image?type=thigh"
    );
    return body.message;
  }

  async boobs() {
    const id = [Math.floor(Math.random() * 10930)];
    const res = await superagent.get(`http://api.oboobs.ru/boobs/${id}`);
    const preview = res.body[0]["PREVIEW".toLowerCase()];
    const image = `http://media.oboobs.ru/${preview}`;
    return image;
  }

  async hentaiass() {
    const { body } = await superagent.get(
      "https://nekobot.xyz/api/image?type=hass"
    );
    return body.message;
  }

  async hentai() {
    const { body } = await superagent.get(
      "https://nekobot.xyz/api/image?type=hentai"
    );
    return body.message;
  }

  async hentaithigh() {
    const { body } = await superagent.get(
      "https://nekobot.xyz/api/image?type=hthigh"
    );
    return body.message;
  }

  async nekofeet() {
    const { body } = await superagent.get("https://nekos.life/api/v2/img/feet");
    return body.url;
  }

  async nekopussy() {
    const { body } = await superagent.get(
      "https://nekos.life/api/v2/img/pussy_jpg"
    );
    return body.url;
  }

  async nekotits() {
    const { body } = await superagent.get("https://nekos.life/api/v2/img/tits");
    return body.url;
  }

  async solo() {
    const { body } = await superagent.get("https://nekos.life/api/v2/img/solo");
    return body.url;
  }

  async wallpaper() {
    const { body } = await superagent.get(
      "https://nekos.life/api/v2/img/wallpaper"
    );
    return body.url;
  }
}

module.exports = Nsfw;
