import React from 'react';
import swal from 'sweetalert';


function DeleteOrder({match}) {

    function deleteOrder() {
        fetch(`/api/orders/${match.params.id}`, {
            "method": "DELETE"
        })
        .then(response => {
            console.log(response);
            swal("Deleted!");
        })
        .catch(err => {
            console.log(err);
        });
    }

    function handleOnclick() {
        deleteOrder();
    }

    return(
        <div>
            <button onClick={handleOnclick}>Xac nhan xoa</button>
        </div>
    );
}

export default DeleteOrder;