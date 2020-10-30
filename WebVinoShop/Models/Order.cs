using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebVinoShop.Models
{
    public class Order
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey("ShopVino")]
        public int IdShopVino { get; set; }

        [ForeignKey("User")]
        public int IdUser { get; set; }

        public User User { get; set; }
        public ShopVino ShopVino { get; set; }

    }
}
