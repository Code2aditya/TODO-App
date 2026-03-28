function App() {
  return (
  <center class="todo-container">
    <h1 style={{fontWeight: 'bold', color: '#333'}}>TODO App</h1>
    <br /><br />
    <div class="container text-center">
 <div class="row">
    <div class="col-sm">
      <input type="text" placeholder="Enter Todo Here" />
    </div>
    <div class="col-sm"><input type="date" />
    </div>
    <div class="col-sm"><button type="button" class="btn btn-success">Add</button></div>
  </div>
<br />



  <div class="row">
    <div class="col-sm">
      Buy Milk
    </div>
    <div class="col-sm">4/10/2023
    </div>
    <div class="col-sm"><button type="button" class="btn btn-danger">Delete</button></div>
  </div>
  <br />


<div class="row">
    <div class="col-sm">
      <p>Go to College</p>
    </div>
    <div class="col-sm">4/10/2023
    </div>
    <div class="col-sm"><button type="button" class="btn btn-danger">Delete</button></div>
  </div>
</div>
  </center>
  )
}

export default App;
