import pluginPkg from '../../../package.json';

const pluginId =
  pluginPkg.strapi.name || pluginPkg.name.replace(/^(@jhoward1994\/strapi-)plugin-/i, '');

export default pluginId;
