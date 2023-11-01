# ejercicioNodeJS1

Servidor que muestra de forma periódica por consola la siguiente información:
– Uso de CPU
– Uso de memoria
– Tiempo que el sistema lleva activo
– Tiempo que lleva ejecutándose node.js

Para configurar el servidor modifique el fichero configuracion.txt con los parámetros que desee que muestre el servidor y los segundos que formaran el intervalo.
El formato del fichero es primero los segundos, y luego los parámetros establecidos dentro del servidor, separado por comas todo.

Los parámetros utilizables son los siguientes:
  Arguments: An array of command-line arguments.,
  Architecture: The CPU architecture: "x64", for example,
  WorkingDirectory: Returns the current working directory,
  CPUUsage: Reports CPU usage.,
  EnvironmentVar:  An object of environment variables,
  ExecPath: The absolute filesystem path to the node executable.,
  MemoryUsage: Return an object with memory usage details,
  ProcessPID: The process id of the current process.,
  ProcessPlatform: The OS: "linux", "darwin", or "win32", for example,
  ResourceUsage:  Return an object with resource usage details.,
  NodeUptime:  Return Node's uptime in seconds,
  NodeVersion:  Node's version string,
  LibrariesVersions: Version strings for the libraries Node depends on,
  OSUptime: Returns the system uptime in seconds.
