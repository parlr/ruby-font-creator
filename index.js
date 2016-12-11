import ruby from './src/ruby';
import svg from './src/svg';

const glyph = ruby.text('北京');
svg.save('./build/glyph.svg', glyph);

const annotation = ruby.annotation('běijīng');
svg.save('./build/annotation.svg', annotation);
