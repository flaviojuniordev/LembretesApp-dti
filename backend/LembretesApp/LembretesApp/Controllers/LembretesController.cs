using LembretesApp.Services;
using LembretesApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace LembretesApp.Controllers
{
    [ApiController]
    [Route("api/lembretes")]
    public class LembretesController : ControllerBase
    {
        private readonly LembreteService _service;

        public LembretesController(LembreteService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var lembretes = await _service.GetAllAsync();
            return Ok(lembretes);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] Lembrete lembrete)
        {
            if (lembrete.Data <= DateTime.Now)
                return BadRequest("A data deve estar no futuro.");

            await _service.AddAsync(lembrete);
            return CreatedAtAction(nameof(Get), new { id = lembrete.Id }, lembrete);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] Lembrete lembrete)
        {
            if (id != lembrete.Id)
            {
                return BadRequest("O ID fornecido na rota não coincide com o ID do corpo da requisição.");
            }

            var updated = await _service.UpdateAsync(lembrete);
            if (!updated)
            {
                return NotFound("Lembrete não encontrado.");
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var deleted = await _service.DeleteAsync(id);
            if (!deleted) return NotFound();
            return NoContent();
        }
    }
}
