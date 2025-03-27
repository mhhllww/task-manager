import { HoveredLink } from '@/shared/ui';

const products = [
  'Features',
  'Pricing',
  'Integrations',
  'Changelog',
  'Roadmap',
];

export const ProductInfo = () => {
  return (
    <section>
      {products.map((product, index) => (
        <HoveredLink key={index} text={product[index]} />
      ))}
    </section>
  );
};
