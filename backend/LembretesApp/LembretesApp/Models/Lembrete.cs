
namespace LembretesApp.Models

{
    public class Lembrete
    {
        public int Id { get; set; }
        public required string Nome { get; set; }
        public DateTime Data { get; set; }
    }
}
