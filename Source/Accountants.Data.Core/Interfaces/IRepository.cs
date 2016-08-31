using System.Collections;
using System.Collections.Generic;

namespace Accountants.Data.Core.Interfaces
{

    public interface IRepository<TEntity> where TEntity : IEntity
    {
        IEnumerable<TEntity> List();
    }

}