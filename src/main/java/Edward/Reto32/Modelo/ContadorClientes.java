/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Edward.Reto32.Modelo;

/**
 *
 * @author Edward
 */
public class ContadorClientes {
    private long total;
     private Client client;

    public ContadorClientes(long total, Client client) {
        this.total = total;
        this.client = client;
        
    }

    public long getTotal() {
        return total;
    }

    public void setTotal(long total) {
        this.total = total;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }
}
    