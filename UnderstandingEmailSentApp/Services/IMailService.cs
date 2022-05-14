using UnderstandingEmailSentApp.Models;

namespace UnderstandingEmailSentApp.Services
{
    public interface IMailService
    {
        Task SendEmailAsync(MailRequest mailRequest);
    }
}
