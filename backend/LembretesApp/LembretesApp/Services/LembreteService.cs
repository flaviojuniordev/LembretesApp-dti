using LembretesApp.Data;
using LembretesApp.Models;
using Microsoft.EntityFrameworkCore;

namespace LembretesApp.Services
{
    public class LembreteService
    {
        private readonly ApplicationDbContext _context;

        public LembreteService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<Lembrete>> GetAllAsync()
        {
            return await _context.Lembretes.OrderBy(l => l.Data).ToListAsync();
        }

        public async Task AddAsync(Lembrete lembrete)
        {
            _context.Lembretes.Add(lembrete);
            await _context.SaveChangesAsync();
        }

        public async Task<bool> UpdateAsync(Lembrete lembrete)
        {
            var existingLembrete = await _context.Lembretes.FindAsync(lembrete.Id);
            if (existingLembrete == null) return false;

            existingLembrete.Nome = lembrete.Nome;
            existingLembrete.Data = lembrete.Data;

            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<Dictionary<DateTime, List<Lembrete>>> GetGroupedByDateAsync()
        {         
            return await _context.Lembretes
                .OrderBy(l => l.Data)
                .GroupBy(l => l.Data.Date) 
                .ToDictionaryAsync(g => g.Key, g => g.ToList());
        }


        public async Task<bool> DeleteAsync(int id)
        {
            var lembrete = await _context.Lembretes.FindAsync(id);
            if (lembrete == null) return false;

            _context.Lembretes.Remove(lembrete);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
