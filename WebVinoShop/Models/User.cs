using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebVinoShop.Models
{
    public class User
    {
        [Key]
        public int IdUser { get; set; }
        public string Name { get; set;}
        public string Addres { get; set; }
        public string Phone { get; set; }
    }
}
