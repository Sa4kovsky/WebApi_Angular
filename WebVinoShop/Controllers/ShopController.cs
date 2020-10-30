using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebVinoShop.Models;
using WebVinoShop.Models.Contexts;

namespace WebVinoShop.Controllers
{

    [ApiController]
    [Route("api/shops")]
    public class ShopController : Controller
    {
        ApplicationContext db;

        public ShopController(ApplicationContext context)
        {
            db = context;
            if (!db.ShopVinos.Any())
            {
                db.ShopVinos.Add(new ShopVino { Title = "Verite Le Desir 2002", Picture = "https://hedonism.co.uk/sites/default/files/styles/product_large/public/vintner/vintner-images/HED86667.JPG?itok=ulTieseV", Cost = 262.00 });
                db.ShopVinos.Add(new ShopVino { Title = "Palmer 1800cl 2010", Picture = "https://hedonism.co.uk/sites/default/files/styles/product_large/public/vintner/vintner-images/HED86874.JPG?itok=wQ-PMGyf", Cost = 12.400 });
                db.ShopVinos.Add(new ShopVino { Title = "Douro Superior Quinta do Crasto 1200cl 2012", Picture = "https://hedonism.co.uk/themes/custom/hedonism/gfx/default_drink_wine_red_full.png", Cost = 871.00 });
                db.SaveChanges();
            }
        }

        // GET: api/Shop
        [HttpGet]
        public IEnumerable<ShopVino> Get()
        {
            return db.ShopVinos.ToList();
        }

        // GET: api/Shop/5
        [HttpGet("{id}")]
        public ShopVino Get(int id)
        {
            ShopVino shopVino = db.ShopVinos.FirstOrDefault(x => x.IdShopVino == id);
            return shopVino;
        }

        // POST: api/Shop
        [HttpPost]
        public IActionResult Post(ShopVino shopVino)
        {
            if (ModelState.IsValid)
            {
                db.ShopVinos.Add(shopVino);
                db.SaveChanges();
                return Ok(shopVino);
            }
            return BadRequest(ModelState);
        }

        [HttpPut]
        public IActionResult Put(ShopVino shopVino)
        {
            if (ModelState.IsValid)
            {
                db.Update(shopVino);
                db.SaveChanges();
                return Ok(shopVino);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            ShopVino product = db.ShopVinos.FirstOrDefault(x => x.IdShopVino == id);
            if (product != null)
            {
                db.ShopVinos.Remove(product);
                db.SaveChanges();
            }
            return Ok(product);
        } 
    }
}
