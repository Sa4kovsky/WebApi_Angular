using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebVinoShop.Models
{
    public class ShopVino
    {
        [Key]
        public int IdShopVino { get; set; }
        public string Title { get; set; }
        public double Cost { get; set; }
        public string Picture { get; set; }
    }
}
