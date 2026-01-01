
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative bg-slate-900/50 border border-slate-800/80 p-4 rounded-2xl hover:bg-slate-900 transition-all duration-300">
      <div className="aspect-square overflow-hidden rounded-xl mb-5 bg-slate-950 relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <span className="bg-slate-950/80 backdrop-blur text-[9px] font-black text-white px-2 py-1 rounded border border-white/10 uppercase">
            {product.category}
          </span>
          {product.status && (
             <span className={`text-[8px] font-black px-2 py-0.5 rounded uppercase self-start shadow-sm ${
               product.status === 'Archived' ? 'bg-purple-600 text-white' :
               product.status === 'Sold Out' ? 'bg-red-600 text-white' :
               'bg-yellow-400 text-slate-900'
             }`}>
               {product.status}
             </span>
          )}
        </div>
      </div>
      
      <div className="space-y-3 px-1">
        <h3 className="font-black text-lg uppercase italic tracking-tighter group-hover:text-yellow-400 transition-colors leading-none">
          {product.name}
        </h3>
        <p className="text-slate-500 text-xs font-medium leading-relaxed">
          {product.description}
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {product.tags.map(tag => (
            <span key={tag} className="text-[9px] uppercase font-black text-slate-400 tracking-wider">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
