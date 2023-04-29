// @ts-expect-error not typed
import { createIconPack } from 'astro-icon/pack'

export default createIconPack({
	package: '@tabler/icons',
	dir: 'icons',
})
