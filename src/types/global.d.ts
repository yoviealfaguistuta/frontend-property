
type CategoryTypes = {
    id: number
    nama_kategori: string
    gambar: string
    total_property: number
}

type PropertyListTypes = {
    id: number
    agent_id: number
    kategori_id: number
    title: string
    deskripsi: string
    alamat: string
    kabupaten_kota: string
    provinsi: string
    harga: string
    satuan_harga: string
    whatsapp: string
    tersedia: boolean
    tipe: string
    kamar_tidur: number
    kamar_mandi: number
    luas_tanah: number
    luas_bangunan: number
    sertifikat: string
    daya_listrik: number
    kamar_tidur_pembantu: number
    jumlah_lantai: number
    kondisi_perabotan: string
    hadap: string
    sumber_air: string
    hook: string
    foto_gallery: string[]
    created_at: string
    updated_at: string
}

type PropertyDetailTypes = {
    id: number
    agent_id: number
    kategori_id: number
    title: string
    deskripsi: string
    alamat: string
    kabupaten_kota: string
    provinsi: string
    harga: string
    satuan_harga: string
    whatsapp: string
    tersedia: boolean
    tipe: string
    kamar_tidur: number
    kamar_mandi: number
    luas_tanah: number
    luas_bangunan: number
    sertifikat: string
    daya_listrik: number
    kamar_tidur_pembantu: number
    jumlah_lantai: number
    kondisi_perabotan: string
    hadap: string
    sumber_air: string
    hook: string
    foto_gallery: string[]
    created_at: string
    updated_at: string
    kategori: PropertyDetailKategoriTypes
    agent: PropertyDetailAgentTypes
}

type PropertyDetailKategoriTypes = {
    id: number
    nama_kategori: string
    deskripsi: string
    gambar: string
    created_at: string
    updated_at: string
}

type PropertyDetailAgentTypes = {
    id: number
    user_id: number
    nama: string
    nib: string
    alamat: string
    foto_profile: string
    nama_perusahaan: string
    email: string
    telepon: string
    foto: string
    aktif: boolean
    created_at: string
    updated_at: string
}

type AgentListTypes = {
    id: number
    user_id: number
    nama: string
    nib: string
    alamat: string
    foto_profile: string
    nama_perusahaan: string
    email: string
    telepon: string
    foto: string
    aktif: boolean
    created_at: string
    updated_at: string
}

type CategoryPropertyTypes = {
    id: number
    nama_kategori: string
    deskripsi: string
    gambar: string
    created_at: string
    updated_at: string
    property: CategoryPropertyDetailTypes[]
}

type CategoryPropertyDetailTypes = {
    id: number
    agent_id: number
    kategori_id: number
    title: string
    deskripsi: string
    alamat: string
    kabupaten_kota: string
    provinsi: string
    harga: string
    satuan_harga: string
    whatsapp: string
    tersedia: boolean
    tipe: string
    kamar_tidur: number
    kamar_mandi: number
    luas_tanah: number
    luas_bangunan: number
    sertifikat?: string
    daya_listrik: number
    kamar_tidur_pembantu?: number
    jumlah_lantai: number
    kondisi_perabotan: string
    hadap: string
    sumber_air: string
    hook: string
    foto_gallery: string[]
    created_at: string
    updated_at: string
}

type AgentDetailTypes = {
    id: number
    user_id: number
    nama: string
    nib: string
    alamat: string
    foto_profile: string
    nama_perusahaan: string
    email: string
    telepon: string
    foto: string
    aktif: boolean
    created_at: string
    updated_at: string
    kategori: AgentDetailPropertyTypes[]
}

type AgentDetailPropertyTypes = {
    id: number
    nama_kategori: string
    deskripsi: string
    gambar: string
    created_at: string
    updated_at: string
    total_property: number
  }