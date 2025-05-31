<?php
class Mahasiswa_model extends CI_Model
{
    public function __construct()  
      public function getMahasiswa()
    {
        return $this->db->get('mahasiswa')->result_array();
    }
}